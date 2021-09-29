// controls map-related behaviors and UX
lcly.mapModule = (function($,lcly) {

  // map variables
  lcly.map                         = {};
  lcly.map.obj                     = null;
  lcly.map.mc                      = null;
  lcly.map.ib                      = null;
  lcly.map.currInfoWindow          = null;
  lcly.map.mapBounds               = null;
  lcly.map.markers                 = [];
  lcly.map.markersInBounds         = [];
  lcly.map.markerHovered           = null;
  lcly.map.customMarkers           = false;
  lcly.map.data                    = null;
  lcly.map.coords                  = [39.278446184657646, -93.90092359375001, 3];
  lcly.map.meta                    = [];
  lcly.map.populateLock            = false;
  lcly.map.hasForcedState          = false;
  lcly.map.explicitPlaceChange     = false;
  lcly.map.initialStoreId          = false;
  lcly.map.initialStoreIdPersisted = false;
  lcly.map.storeIsIsolated         = false;
  lcly.map.stockSuppression        = false;
  lcly.map.lastSearchTerm          = false;
  lcly.map.isPopulated             = false;
  lcly.map.isClusterable           = true;
  lcly.map.initialZoom             = 11; // default. this may be adapted 
  lcly.map.locationSwitchZoom      = 12; // default. this may be adapted
  lcly.map.minZoom                 = 13; // default. this may be adapted
  lcly.map.maxZoom                 = 9; // default. this may be adapted
  lcly.map.styles                  = null;
  lcly.map.storeMode               = ''; //use a storemode var to pass the class name to the store list. accepted values are '' or 'active'
  lcly.map.defaultMarkerSpec       = {width: 24, height: 24, anchor_x: 12, anchor_y: 12, info_x: -135, info_y: -45};
  lcly.map.activeMarkerSpec        = {width: 38, height: 53, anchor_x: 19, anchor_y: 40, info_x: -135, info_y: -45};
  lcly.map.hoverMarkerSpec         = {width: 28, height: 33, anchor_x: 14, anchor_y: 21, info_x: -135, info_y: -45};
  lcly.map.markerTypes             = [];
  lcly.map.activeMarkerTypes       = [];
  lcly.map.hoverMarkerTypes        = [];
  lcly.map.$                       = {};
  lcly.map.active_marker_id;
  lcly.map.activeCityMarkerId;
  lcly.map.activeMarkerIndex;
  lcly.map.activeMarkerId;
  lcly.map.originX                 = 0;
  lcly.map.originY                 = 0;
  lcly.map.boundsPadding           = 100;
  lcly.map.idleLock                = false;
  lcly.map.langLoaded              = false;
  lcly.map.currentLocationLoaded   = false; 
  lcly.map.mapType                 = 'standard';

  //reused jQuery objects
  var $locationAutocomplete = $('.location-autocomplete');

  function addMapListeners(){
  
    lcly.mapService.addCenterChangedListener();
    lcly.mapService.addZoomChangedListener();
    lcly.mapService.addIdleStateListener();
  }

  /**
   * resets the state of the map by reloading data and closing the active infowindow
   */
   function auditControls(){

    lcly.mapModule.closeCurrentInfoBox();
    retrieveDataAndPopulate(lcly.map.$.parent, false);
  }

  /**
   * part of the map initialization. 
   * checks to see if a specific location has been supplied via the `jump_to` parameter in the URL (such as a zip code)
   * many brands use this to allow jumping to specific regions from links throughout their sites
   * if a `jump_to` location has been supplied, we attempt to geocode it
   * if a geocoder match is found, we pan the map to it
   */
   function auditCoords(){

    var forcedLocation = lcly.conversionModule.getMetaParam('jump_to');

    if (typeof forcedLocation != 'undefined' && forcedLocation && forcedLocation != ''){

      lcly.mapService.setCoordsFromGeocode(forcedLocation);
    }
  }

  /**
   * called upon map initialization and whenever map has moved and becomes idle.
   * this determines the geopolitical information about the current map center location
   * this renders the current city, state and zip to the placeholder value of the search text input
   */
   function auditCurrentLocation(){

    var inputVal = $('.locally-search').val();
    var currentLat = lcly.mapService.objectLat();
    var currentLng = lcly.mapService.objectLng();
    var customId   = $locationAutocomplete.data('custom-id');

    if (validateCoords(currentLat, currentLng)){

      // if search input already has a value, don't do reverse lookup
      if (inputVal != ''){
        return;
      }
      // if we have a populateLock in place, don't do reverse lookup
      if (lcly.map.populateLock){
        return;
      }
      
      $.ajax({
        url: '/geo/reverse/lookup',
        type: 'GET',
        dataType: 'json',
        data: { 
          lat: currentLat, 
          lng: currentLng,
          custom_id: customId
        }
      })
      .done(function(response) {
        
        if (response.status){

          var firstSegment = response.data.city ? response.data.city + ', ' : '';
          var region       = response.data.region != response.data.city ? response.data.region : '';
          var val          = firstSegment + region + ' ' + response.data.country;

        } else {

          var val = '';
        }

        // update placeholder and orig-placeholder
        $locationAutocomplete.attr('data-orig-placeholder', val).attr('placeholder', val);

        // only overwrite search field value if it's not actively focused (e.g. don't overwrite value as user is typing)
        if ( $locationAutocomplete.val().length > 0 && !$locationAutocomplete.is(':focus') ){
          $locationAutocomplete.val(val);
        }        

      });
    }
  }

  function validateCoords(lat, lng){

    latPattern = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
    lngPattern = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

    var validLat = latPattern.test(lat);
    var validLng = lngPattern.test(lng);

    return validLat && validLng;
  }


  /**
   * called whenever store data has been re-drawn
   * this loops through every type of map marker status (authorized dealer, has brand stock, has specific item)
   * it then renders a marker "legend" at the bottom of the map to correspond with the markers in the list 
   * it avoids creating obsolete legend entries
   */
   function auditLegend(){

    if (lcly.isDealerLocator && (lcly.mapModule.isForRetailerCompany() || lcly.mapModule.isForGroup())) return false;

    $.each(lcly.map.markerTypes, function(index, val) {

      lcly.map.markerTypes[index].count = 0;

    });

    for (var i = 0; i < lcly.map.markers.length; i++) {

      lcly.map.markerTypes[lcly.map.markers[i].type].count++;
    }

    $('.map-legend').css('z-index', lcly.mapModule.zIndexMax()).html('');

    $.each(lcly.map.markerTypes, function(index, val) {

      if (lcly.map.markerTypes[index].count > 0 && lcly.map.markerTypes[index].title != ''){

        var plusIcon = lcly.map.markerTypes >= 1 ? ' + ' : '';
        var legendItem = '<div class="legend-item type-' + index + '">'
                        + '<img alt="Map Marker" src="' + lcly.map.markerTypes[index].url + '">' 
                        + '<span>' + plusIcon + lcly.map.markerTypes[index].title + '</span>'
                        + '</div>';

        $('.map-legend').prepend(legendItem);
      }
    });

    //If there are custom category markers, add those to the legend
    if (typeof customCategoryMarkers != 'undefined' && Object.keys(customCategoryMarkers).length){ // there is a custom category for this marker

     $.each(lcly.map.data.category_index, function(name, ids) {

       if (typeof customCategoryMarkers[name] != 'undefined'){

         var legendItem = '<div class="legend-item type-' + name + '">'
                        + '<img alt="Map Marker" src="' + customCategoryMarkers[name][0] + '">' 
                        + '<span>' + customCategoryMarkers[name][5] + '</span>' 
                        + '</div>';

         $('.map-legend').prepend(legendItem);
       }
     });
    }
  }

  function auditMarkerQty(){

    var $conversionLocations = $('#conversion-locations');
    var storeLength = $conversionLocations.find('.conv-section-store').length;

    if (!lcly.isDealerLocator && !lcly.map.data.stores_are_overpopulated){

      if (storeLength == 1){
        
        var storeId = $conversionLocations.find('.conv-section-store').data('id');
        lcly.mapModule.markerClick(storeId, false, false);
      }

      if (storeLength > 1){

        $conversionLocations.addClass('w-selection');
        lcly.conversionModule.hideActions();

      } else { // there is only one store in this view

        $conversionLocations.removeClass('w-selection');
        lcly.mapModule.openInfoBoxFor(lcly.map.markers[0], lcly.map.data.markers[0], 'default');
        lcly.mapService.setMarkerIcon(lcly.map.markers[0], lcly.map.activeMarkerTypes[lcly.map.markers[0].type]);
        lcly.map.activeMarkerId = lcly.map.data.markers[0].id;
      }
    }
  }

  /**
   * changes the link back to locally to use a server-supplied one (pointing to brand's subdomain)
   * TODO: need to have this power an element in the new markup
   */
  function auditOnboarding(){

    if (typeof lcly.map.data.companyOnboardingURL != 'undefined'){

      $('.map-ad a, .marker-list .cta a').attr('href', lcly.map.data.companyOnboardingURL);
    }
  }


  /**
   * removes all company (brand) related params from the current state 
   */
   function clearCompany(){

    lcly.conversionModule.setMetaParam('company_id', '');
    lcly.conversionModule.setMetaParam('company_name', '');
    $('input[name="company_name"]').val('');
  }

  /**
   * deletes all of the currently rendered map markers 
   * resets the global `markers` object to an empty array
   */
   function deleteMarkers(){

    lcly.mapService.removeAllMarkers();

    lcly.map.markers = [];
  }

  /**
   * calculates the geographic distance between 2 points 
   */
   function distanceBetween(lat1,lon1,lat2,lon2) {

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  /**
   * converts degrees to radians
   */
  function deg2rad(deg) {

    return deg * (Math.PI/180)
  }

  /**
   * returns the current zoom level
   */
  function getZoom(){

    return parseInt(lcly.conversionModule.getMetaParam('zoom'));
  }
  

  /**
   * sets up the initial coordinates of the map via a global `coords` object
   * if the controller loading the map has specified explicit lat+lng+zoom via the `force_map_state` global, it will initialize at that location + zoom 
   * otherwise it will load at the user's preferred or default location, via `user_geo` (also supplied by the controller)
   */
   function initCoords(){

    if (lcly.map.hasForcedState){

      lcly.map.coords = forceMapState;

    } else if (typeof forceMapState != 'undefined') {

      lcly.map.coords = forceMapState;

    } else if (typeof userGeo != 'undefined' && typeof userGeo.lat != 'undefined' && typeof userGeo.lng != 'undefined'){

      var zoomParam   = parseInt(lcly.conversionModule.getMetaParam('zoom'));
      var initialZoom = zoomParam ? zoomParam : lcly.map.initialZoom;
      lcly.map.coords = [userGeo.lat, userGeo.lng, initialZoom];
    }

    if (typeof lcly.map.coords[2] != 'undefined') {

      lcly.map.coords[2] = lcly.mapService.zoomValueFor(lcly.map.coords[2]);
    }

    // adapt this value upon initialization
    lcly.map.locationSwitchZoom = lcly.mapService.zoomValueFor(lcly.map.locationSwitchZoom);
  }

  /**
  * initializes the map instance
  * comments inline
  */
  function initConversionMapContainer() {

    var $mapContainer = document.getElementById("map-cont"); // need to use native JS accessor!
    
    initCoords(); // figure out where we need to draw the map 
    
    var mapOptions = lcly.mapService.defaultOptions(); 
    var mapStyles = lcly.mapService.defaultStyles();
 
    lcly.map.obj = lcly.mapService.object($mapContainer, mapOptions, mapStyles);

    lcly.mapService.addKML();
 
    addMapListeners();
    auditCoords();
    retrieveDataAndPopulate(lcly.map.$.parent, false);  
  } 

  function translateMapboxAttribution() {

    var improveThisMapTranslatedCopy = LANG_STRINGS.mapbox_improve_map   

    $('.mapbox-improve-map').html( improveThisMapTranslatedCopy );

  }

  function initLandingMapContainer() {

    var $mapContainer = document.getElementById("landing-map-cont"); // need to use native JS accessor!

    initCoords(); // figure out where we need to draw the map 
    lcly.map.isClusterable = false;
  
    var mapOptions = lcly.mapService.defaultOptions(); 
    var mapStyles = lcly.mapService.defaultStyles();

    lcly.map.mapBounds = lcly.mapService.bounds();
    lcly.map.obj = lcly.mapService.object($mapContainer, mapOptions, mapStyles);
  }

  function initCitiesMapContainer() {

    var $mapContainer = document.getElementById("cities-map-cont"); // need to use native JS accessor!

    initCoords(); // figure out where we need to draw the map 

    var mapOptions = lcly.mapService.defaultOptions(); 
    mapOptions.attributionLocation = 'bottom-right';

    var mapStyles = lcly.mapService.defaultStyles();
    
    lcly.map.boundsPadding = 0;
    lcly.map.mapBounds = lcly.mapService.bounds();
    lcly.map.obj = lcly.mapService.object($mapContainer, mapOptions, mapStyles);

    addMapListeners();
  }

  function initOrderMapContainer() {

    //...
  }

  function initCurrentLocationDetection(){

    $('#current-location-detector').click(function(event) {
      window.parent.postMessage({ geolocate : true }, "*");
      $locationAutocomplete.val('');
      return false;
    });

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    eventer(messageEvent, function(e) {

      if (typeof e.data.lat != 'undefined' && typeof e.data.lng != 'undefined'){

          $.ajax({ // fire this so we can retain chosen location 
            url: '/geo/point/' + e.data.lat + '/' + e.data.lng,
            type: 'GET',
            dataType: 'json',
            data: { switch_user_location: 1 },
          });

          lcly.mapModule.teleportTo(e.data.lat, e.data.lng, '');
          lcly.mapService.addCurrentLocationIndicator(e.data.lat, e.data.lng);
      }
    }, false);
  }

  function initLocationSearchForm(){

    $('.dealer-masthead-search').submit(function(e) {
      e.stopPropagation();
      return false;
    });
  }
 
  /**
  * accesses any supplied coordinates and/or zoom level from the URL
  * sets the initial global config for those
  */
  function initMapState(){
 
    var lat = lcly.conversionModule.getMetaParam('lat'); 
    var lng = lcly.conversionModule.getMetaParam('lng');
    var zoom = parseInt(lcly.conversionModule.getMetaParam('zoom'));
  
    if (lat && lng){
  
      lcly.mapModule.setCoords(lat, lng, 0);
    }
  
    if (zoom) {
  
      lcly.mapModule.setZoom(zoom);
    }
  }

  function initMapSizeRefresher(){

    $(window).load(function() {
      setInterval(function(){ if (lcly.map.obj) lcly.mapService.fireResizeEvent();  }, 2000);
    });
  }

  /**
   * this establishes the marker configuration objects
   * this is where brands' own icon/marker images and specifications are passed to gmaps for rendering
   * this needs to persist for DLs and does not need to persist for all other maps (conversions, PL, etc)
   */
  function initMarkers(){

    if (typeof customMarkers != 'undefined') {
      lcly.map.customMarkers = true;
    }

    var markerImgs    = typeof customMarkers != 'undefined' ? customMarkers : [false,false,false,false];
    var spec          = typeof customMarkerSpec != 'undefined' ? customMarkerSpec : false; 
    var width         = spec ? parseInt(spec.width) : lcly.map.defaultMarkerSpec.width;
    var height        = spec ? parseInt(spec.height) : lcly.map.defaultMarkerSpec.height;
    var anchorX       = spec ? parseInt(spec.x): lcly.map.defaultMarkerSpec.anchor_x;
    var anchorY       = spec ? parseInt(spec.y) : lcly.map.defaultMarkerSpec.anchor_y;
    var companyName   = lcly.conversionModule.getMetaParam('company_name');
    var infoX         = spec ? lcly.map.defaultMarkerSpec.info_x + parseInt(spec.info_x) : lcly.map.defaultMarkerSpec.info_x;
    var infoY         = spec ? lcly.map.defaultMarkerSpec.info_y + parseInt(spec.info_y) : lcly.map.defaultMarkerSpec.info_y;
    var activeWidth   = spec ? parseInt(spec.width) : lcly.map.activeMarkerSpec.width;
    var activeHeight  = spec ? parseInt(spec.height) : lcly.map.activeMarkerSpec.height;
    var activeAnchorX = spec ? parseInt(spec.x): lcly.map.activeMarkerSpec.anchor_x;
    var activeAnchorY = spec ? parseInt(spec.y) : lcly.map.activeMarkerSpec.anchor_y;
    var activeInfoX   = spec ? lcly.map.activeMarkerSpec.info_x + parseInt(spec.info_x) : lcly.map.activeMarkerSpec.info_x;
    var activeInfoY   = spec ? lcly.map.activeMarkerSpec.info_y + parseInt(spec.info_y) : lcly.map.activeMarkerSpec.info_y;
    var hoverWidth    = spec ? parseInt(spec.width) : lcly.map.hoverMarkerSpec.width;
    var hoverHeight   = spec ? parseInt(spec.height) : lcly.map.hoverMarkerSpec.height;
    var hoverAnchorX  = spec ? parseInt(spec.x): lcly.map.hoverMarkerSpec.anchor_x;
    var hoverAnchorY  = spec ? parseInt(spec.y) : lcly.map.hoverMarkerSpec.anchor_y;
    var hoverInfoX    = spec ? lcly.map.hoverMarkerSpec.info_x + parseInt(spec.info_x) : lcly.map.hoverMarkerSpec.info_x;
    var hoverInfoY    = spec ? lcly.map.hoverMarkerSpec.info_y + parseInt(spec.info_y) : lcly.map.hoverMarkerSpec.info_y;
    var originX       = lcly.map.originX;
    var originY       = lcly.map.originY;
    var titles        = [];

    if (typeof LANG_STRINGS == 'undefined') {
      var LANG_STRINGS = (typeof window.LANG_STRINGS != 'undefined') ? window.LANG_STRINGS : {'authorized' : 'Authorized', 'dealer' : 'Dealer', 'authorized_dealer': 'Authorized Dealer', 'see_whats_in_stock' : 'See what\'s in stock', 'item_is_in_stock': 'Item is in stock', 'more' : 'More', 'available': 'Available'};
    }

    if ($('.dealer-locator-wrapper').length){ // is dealer locator env 
      titles = [
        companyName ? LANG_STRINGS.authorized + ' ' + urlDecode(companyName) + ' ' + LANG_STRINGS.dealer : LANG_STRINGS.authorized + ' ' + LANG_STRINGS.dealer,
        LANG_STRINGS.see_whats_in_stock,
        '' //n/a
      ];
    } else {
      
      titles = [
        companyName ? LANG_STRINGS.authorized + ' ' + urlDecode(companyName) + ' ' + LANG_STRINGS.dealer : LANG_STRINGS.authorized + ' ' + LANG_STRINGS.dealer,
        companyName ? LANG_STRINGS.more + ' ' + urlDecode(companyName) + ' ' + LANG_STRINGS.available : LANG_STRINGS.see_whats_in_stock,
        LANG_STRINGS.item_is_in_stock
      ];
    }

    if (typeof LANG_STRINGS.auth_dealer_legend_label != 'undefined' && LANG_STRINGS.auth_dealer_legend_label != ''){
      titles[0] = LANG_STRINGS.auth_dealer_legend_label;
    }

    lcly.map.markerTypes = [
      {
        // authorized dealer
        title: titles[0],
        url: typeof markerImgs[0] != 'undefined' && markerImgs[0] ? markerImgs[0] : '/img/map-marker-dealer-sm.png',
        anchor: lcly.mapService.point(anchorX, anchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(width, height),
        pixelOffset: lcly.mapService.size(infoX, infoY),
        count: 0,
        optimized: false
      },
      {
        // has brand stock
        title: titles[1],
        url: typeof markerImgs[1] != 'undefined' && markerImgs[1] ? markerImgs[1] : '/img/map-marker-inventory-sm.png',
        anchor: lcly.mapService.point(anchorX, anchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(width, height),
        pixelOffset: lcly.mapService.size(infoX, infoY),
        count: 0,
        optimized: false
      },
      {
        // has item in stock
        title: titles[2],
        url: typeof markerImgs[2] != 'undefined' && markerImgs[2] ? markerImgs[2] : '/img/map-marker-purchase-sm.png',
        anchor: lcly.mapService.point(anchorX, anchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(width, height),
        pixelOffset: lcly.mapService.size(infoX, infoY),
        count: 0,
        optimized: false
      }
    ];

    lcly.map.activeMarkerTypes = [
      {
        // authorized dealer
        title: titles[0],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-dealer-lg.png',
        anchor: lcly.mapService.point(activeAnchorX, activeAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(activeWidth, activeHeight),
        optimized: false
      },
      {
        // has brand stock
        title: titles[1],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-inventory-lg.png',
        anchor: lcly.mapService.point(activeAnchorX, activeAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(activeWidth, activeHeight),
        optimized: false
      },
      {
        // has item in stock
        title: titles[2],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-purchase-lg.png',
        anchor: lcly.mapService.point(activeAnchorX, activeAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(activeWidth, activeHeight),
        optimized: false
      }
    ];

    lcly.map.hoverMarkerTypes = [
      {
        // authorized dealer
        title: titles[0],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-dealer-md.png',
        anchor: lcly.mapService.point(hoverAnchorX, hoverAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(hoverWidth, hoverHeight),
        optimized: false
      },
      {
        // has brand stock
        title: titles[1],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-inventory-md.png',
        anchor: lcly.mapService.point(hoverAnchorX, hoverAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(hoverWidth, hoverHeight),
        optimized: false
      },
      {
        // has item in stock
        title: titles[2],
        url: typeof markerImgs[3] != 'undefined' && markerImgs[3] ? markerImgs[3] : '/img/map-marker-purchase-md.png',
        anchor: lcly.mapService.point(hoverAnchorX, hoverAnchorY),
        origin: lcly.mapService.point(originX, originY),
        scaledSize: lcly.mapService.size(hoverWidth, hoverHeight),
        optimized: false
      }
    ];

  }


  function initCityMarkers() {

    lcly.map.defaultCityMarker = {
      url: '/img/map-marker-purchase-sm.png',
      anchor: lcly.mapService.point(lcly.map.defaultMarkerSpec.anchor_x, lcly.map.defaultMarkerSpec.anchor_y),
      origin: lcly.mapService.point(lcly.map.originX, lcly.map.originY),
      scaledSize: lcly.mapService.size(lcly.map.defaultMarkerSpec.width, lcly.map.defaultMarkerSpec.height),
      optimized: false
    };

    lcly.map.hoverCityMarker = {
      url: '/img/map-marker-purchase-md.png',
      anchor: lcly.mapService.point(lcly.map.hoverMarkerSpec.anchor_x, lcly.map.hoverMarkerSpec.anchor_y),
      origin: lcly.mapService.point(lcly.map.originX, lcly.map.originY),
      scaledSize: lcly.mapService.size(lcly.map.hoverMarkerSpec.width, lcly.map.hoverMarkerSpec.height),
      optimized: false
    };

    lcly.map.activeCityMarker = lcly.map.defaultCityMarker;
  }


  /**
   * initialize general state for app
   * comments inline
   */
  function initConversionMapState(){

    lcly.map.mapBounds      = lcly.mapService.bounds();
    lcly.map.companyName    = lcly.conversionModule.getMetaParam('company_name');
    lcly.map.hasForcedState = typeof forceMapState != 'undefined';
    lcly.map.$.container    = $('#map-cont');
    lcly.map.$.parent       = lcly.map.$.container.closest('#conversion-wrapper');

    var location = lcly.conversionModule.getMetaParam('location');
    $locationAutocomplete.attr('placeholder', location);

    lcly.map.storeIsIsolated         = lcly.conversionModule.getMetaParam('store_is_isolated');
    lcly.map.initialStoreId          = lcly.conversionModule.getMetaParam('initial_store_id');
    lcly.map.initialStoreIdPersisted = lcly.map.initialStoreId;

    var companyId = lcly.conversionModule.getMetaParam('company_id');
    if (companyId) $('.map-control-segment.for-brand').hide();

    // some brands do not want to offer the in-stock products grid within their DL
    lcly.map.stockSuppression = typeof customStockSuppression != 'undefined' ? customStockSuppression : false;

    // some brands have a custom zoom level, defined in our CMS via `custom_location_switch_zoom`
    lcly.map.locationSwitchZoom = typeof customLocationSwitchZoom != 'undefined' ? lcly.mapService.zoomValueFor(customLocationSwitchZoom) : lcly.map.locationSwitchZoom;

  }

  function infoWindowContent(marker, mapType){

    var ret = '';

    if (typeof LANG_STRINGS == 'undefined') { // translate map info strings to user locale

      var defaultStrings = {'brands' : 'Brands', 'from' : 'From', 'stores': 'Stores', 'go' : 'Go', 'select' : 'Select' };
      var LANG_STRINGS = (typeof window.LANG_STRINGS != 'undefined') ? window.LANG_STRINGS : defaultStrings;
    }

    var markerDistance   = typeof marker.user_distance != 'undefined' ? marker.user_distance : marker.distance;
    var countryUsesMiles = marker.country == 'US' || marker.country == 'GB';
    var distanceRate     = countryUsesMiles ? 1 : 1.609344;
    var distValue        = parseFloat(markerDistance * distanceRate).toFixed(1);
    var distUnit         = countryUsesMiles ? 'mi' : 'km';

    if (mapType == "cities") {

      var stateDisplay = marker.state.length > 0 ? ', ' + marker.state : '';

      ret  +=  '<div class="infobox-outer">';
      ret  += '<div class="infobox-content">';
      ret  += '<span class="section-title">' + marker.city + stateDisplay + '</span>';
      ret  += '<span class="section-subtitle">' 
              + marker.brandCount + ' ' + LANG_STRINGS.brands + ' ' + LANG_STRINGS.from + ' ' + marker.storeCount + ' ' + LANG_STRINGS.stores 
              + '</span>';
      ret  += '</div>';
      ret  += '<div class="infobox-location">';
      ret  += '<a class="infobox-link cities-infobox-link" href="/in/' + marker.city + '-' + marker.state +'">' 
            + LANG_STRINGS.go 
            + '</a>';
      ret  += '</div></div>';
      ret  += '</div>'; 
    
    } else if (mapType == "landing") {

      ret  +=  '<div class="infobox-outer">';
      ret  += '<div class="infobox-content">';
      ret  += '<span class="section-title">' + marker.name + '</span>';
      ret  += '<span class="section-subtitle status-message">' + marker.city + ', ' + marker.state + '</span>';
      ret  += '</div>';
      ret  += '<div class="infobox-location">';
      ret  += '<a class="infobox-link landing-infobox-link" href="/store/' + marker.id + '">' + LANG_STRINGS.go + '</a>';
      ret  += '</div></div>';
      ret  += '</div>'; 
    
    } else {

      ret  += '<div class="infobox-outer">';
      ret  += '<div class="infobox-content">';
      ret  += '<span class="section-title dl-store-name-infobox">' + marker.name + '</span>';
      ret  += '<span class="section-subtitle status-message dl-infobox-store-status ' + marker.stock_class + '">' + marker.disclaimer + '</span>';
      ret  += '<span class="infobox-distance-mobile mobile-only">';
      ret  += '<span class="infobox-marker icon-location2"></span>';
      ret  += '<span class="infobox-distance">' + distValue + ' ' + distUnit + '</span>';
      ret  += '</span></div>';
      ret  += '<div class="infobox-location desktop-only">';
      ret  += '<span class="infobox-marker icon-location2"></span>';
      ret  += '<span class="infobox-distance">' + distValue + ' ' + distUnit + '</span>';
      ret  += '</div>';
      ret  += '<a class="infobox-link conversion-infobox-link mobile-only" onclick="lcly.mapModule.markerClick(' + marker.id + ', false, true);">' 
           + LANG_STRINGS.select 
           + '</a>';
      ret  += '</div>';
    }
    
    ret  += '<a class="infobox-closer" onclick="lcly.mapModule.closeCurrentInfoBox();" href="javascript:;"><i class="icon-close"></i></a>';

    return ret;
  }

  /**
  * handler for the maps marker object 
  * returns the standard, custom marker set for a brand 
  * except it also handles CUSTOM category markers, for when brands have a set of markers specific to each marker category 
  */
  function markerObject(id, type, status){

    var ret = null;

    if (typeof customCategoryMarkers != 'undefined' && Object.keys(customCategoryMarkers).length){ // there is a custom category for this marker

     var categoryIndex = typeof lclyMapCategoryIndex != 'undefined' ? lclyMapCategoryIndex : [];
     categoryIndex = lcly.map.data && typeof lcly.map.data.category_index != 'undefined' ? lcly.map.data.category_index : categoryIndex;

     $.each(categoryIndex, function(name, ids) {

       if ($.inArray(id, ids) > -1 && typeof customCategoryMarkers[name] != 'undefined'){

         var spec        = customCategoryMarkers[name][4]; 
         ret             = Object.create(lcly.map.markerTypes[type]);
         ret.anchor      = lcly.mapService.point(parseInt(spec.x), parseInt(spec.y));
         ret.origin      = lcly.mapService.point(0, 0);
         ret.scaledSize  = lcly.mapService.size(parseInt(spec.width), parseInt(spec.height));
         ret.pixelOffset = lcly.mapService.size(lcly.map.defaultMarkerSpec.info_x + parseInt(spec.info_x), lcly.map.defaultMarkerSpec.info_y + parseInt(spec.info_y));
         ret.catMarker   = true;
         ret.optimized   = false;

         if (status == 'default') {
            ret.url = customCategoryMarkers[name][type];
         }
         else if (status == 'hover') {
            ret.url = customCategoryMarkers[name][3];
         }
         else if (status == 'active') {
            ret.url = customCategoryMarkers[name][3];
         }

         return true;
       }
     });
    }

    if (!ret){
      if (status == 'default') {
        ret = lcly.map.markerTypes[type];
      }
      else if (status == 'hover') {
        ret = lcly.map.hoverMarkerTypes[type];
      }
      else if (status == 'active') {
        ret = lcly.map.activeMarkerTypes[type];
      }
    }

    return ret;
  }


  /**
   * this deals with transposing all of the marker data that was fetched from the server into gmap markers 
   */
  function populate(){

    var $conversionLocations = $('#conversion-locations');

    $conversionLocations.html(lcly.map.data.stores_html);
    $('#conversion-product').html(lcly.map.data.variant_html);

    lcly.$.convWrapper.find('.conversion-column-inner').removeClass('loading');

    $('#conv-edit-accordion-store').addClass(lcly.map.storeMode);

    //reset
    lcly.map.storeMode = '';
    lcly.mapModule.populateMarkers(lcly.map.data.markers);

    if (lcly.isDealerLocator 
        && !lcly.map.isPopulated 
        && ((lcly.mapModule.isForRetailerCompany() && typeof lcly.map.data.fit_markers_in_map != 'undefined' && lcly.map.data.fit_markers_in_map) 
          || lcly.mapModule.isForGroup())) {
      
          lcly.mapModule.fitMapBounds(lcly.map.obj, lcly.map.mapBounds, 9); // fit the map to the contained markers
    }

    lcly.map.isPopulated = true;

    // when we detect an event on the click event for a cluster switch stores to list mode
    lcly.mapService.addClustererClickListener();    

    auditMarkerQty();
  }

  /**
   * this is the interface for the location / store data store globally in `lcly.map.data`
   * data is reloaded every time the map state changes (lateral movement, zoom level change, etc)
   * this drives an AJAX call and handles the response data, delgates other methods to handle data
   */
  function retrieveDataAndPopulate($parent, noVariants){

    lcly.conversionModule.setMetaParam('no_variants', noVariants);
    lcly.conversionModule.getAndSetData($parent);

    translateMapboxAttribution();
  }
  

  /**
   * convenience function to decode a URL. ex: converts `%20` to ` ` and `+` to ` `
   */
   function urlDecode(str){

    str = str.replace(/\+/gi, ' ');
    return decodeURIComponent(str);
  }

  /**
   * publicly available methods
   */
  return {

    initConversionMap: function() {
      initConversionMapState();
      initMarkers();
      initConversionMapContainer();
      initMapState();
      initMapSizeRefresher();
      initLocationSearchForm();
      initCurrentLocationDetection();
    },

    initLandingMap: function() {
      initMarkers();
      initLandingMapContainer();
      
      // don't try to fit bounds when there are no markers or you'll end up in the middle of the ocean!
      if (lclyMapStores.length > 0) {

        lcly.mapModule.populateMarkers(lclyMapStores, 'landing');

        if (typeof forceMapState == 'undefined' || (typeof forceMapState == 'object' && typeof forceMapState[3] != 'undefined' && forceMapState[3])){
          lcly.mapModule.fitMapBounds(lcly.map.obj, lcly.map.mapBounds, 15);
        }
      }
    },

    initDirectoryMap: function(mapData) {
      lcly.map.mapType = 'cities';
      initCityMarkers();
      initCitiesMapContainer();
      lcly.mapModule.populateCityMarkers(mapData);
      lcly.mapModule.fitMapBounds(lcly.map.obj, lcly.map.mapBounds, 9); 
    },

    initOrderMap: function(mapData) {
      initMarkers();
      initOrderMapContainer();
      lcly.mapModule.populateMarkers(mapData, 'order');
      lcly.mapModule.fitMapBounds(lcly.map.obj, lcly.map.mapBounds, 14); 
    },

    doIdle: function(){

      // called when map enters idle state

      // find slightly more than half of the diagonal length of the map canvas (this is essentially canvas "radius")
      lcly.map.meta.distanceDiag = .65 * distanceBetween(lcly.map.meta.lat1, lcly.map.meta.lng1, lcly.map.meta.lat2, lcly.map.meta.lng2);

      // populate the stores / locations ONLY IF the lock is not set 
      // (we lock in order to avoid excessive server polling)
      if (!lcly.map.populateLock && lcly.map.mapType != 'cities') retrieveDataAndPopulate(lcly.map.$.parent, false);
     
      // refresh the ACTUAL geo-political information about the current place
      if (lcly.map.mapType != 'cities') auditCurrentLocation(); 
    },

    idle: function(){

      $.debounce(2000, true, lcly.mapModule.doIdle());
    },

    isForGroup: function(){

      return lcly.map.data 
             && typeof lcly.map.data 
             && typeof lcly.map.data.uses_group_stock != 'undefined' 
             && lcly.map.data.uses_group_stock;
    },

    isForRetailerCompany: function(){

      return lcly.map.data 
             && typeof lcly.map.data != 'undefined' 
             && typeof lcly.map.data.is_pure_retailer != 'undefined' 
             && lcly.map.data.is_pure_retailer;
    },

    populateMarkers: function(markerData, mapType) {

      lcly.map.markers   = [];
      var markersToCluster = [];

      // set up marker clustering options 
      // this is for when the map is zoomed way out and markers need to strategically cluster
      var clusterColor = typeof customAccentColor != 'undefined' ? customAccentColor : '#EB5429';
      var clusterOptions = {

        color: clusterColor,
        gridSize : 35,
        maxZoom : 7,
        minimumClusterSize: 2,
        styles : [
          {
            textColor: 'white',
            url: 'data:image/svg+xml,' + encodeURIComponent('<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" fill-opacity="0.5" fill="' + clusterColor + '" cx="12" cy="12" r="12"></circle><circle id="Oval" fill="' + clusterColor + '" cx="12" cy="12" r="8"></circle></g></svg>'),
            height: 24,
            width: 24
          },
          {
            textColor: 'white',
            url: 'data:image/svg+xml,' + encodeURIComponent('<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" fill-opacity="0.5" fill="' + clusterColor + '" cx="20" cy="20" r="20"></circle><circle id="Oval" fill="' + clusterColor + '" cx="20" cy="20" r="14"></circle></g></svg>'),
            height: 40,
            width: 40
          },
          {
            textColor: 'white',
            url: 'data:image/svg+xml,' + encodeURIComponent('<svg width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" fill-opacity="0.5" fill="' + clusterColor + '" cx="25" cy="25" r="25"></circle><circle id="Oval" fill="' + clusterColor + '" cx="25" cy="25" r="18"></circle></g></svg>'),
            height: 50,
            width: 50
          }
        ]
      };

      // loop through all of the fetched location/store data and set up markers on the map canvas! 
      if (markerData && !lcly.map.populateLock){

        for (var i = 0; i < markerData.length; i++) {

          var m      = markerData[i];
          var coords = lcly.mapService.coordsObject(m.lat, m.lng);

          // establish the basic marker `type` (authorized, has brand stock, or has product)
          var type   = mapType == 'landing' ? 2 : 0;
          type = mapType == 'order' ? i : type;

          var stockStatus = typeof m.stock_status != 'undefined' ? parseInt(m.stock_status) : false;
          type = stockStatus > 1 ? 2 : type;
          type = stockStatus === 1 ? 1 : type;
          type = lcly.map.stockSuppression == 2 ? 0 : type;

          var stackIndex = typeof m.z_index != 'undefined' ? parseInt(m.z_index) : false;
          
          // set up a custom marker object 
          var markerObj = markerObject(m.id, type, 'default'); 

          var markerParams = { 
            index: i,
            position: coords, 
            icon: markerObj, 
            map: lcly.map.obj, 
            optimized: false
          };

          if (stackIndex !== false) markerParams.zIndex = stackIndex;

          var marker = lcly.mapService.addMarker(markerParams);

          lcly.mapService.extendBounds(coords);

          // set up the attributes 
          marker.index       = i;
          marker.id          = m.id;
          marker.lat         = m.lat;
          marker.lng         = m.lng;
          marker.name        = m.name;
          marker.city        = m.city;
          marker.state       = m.state;
          marker.country     = m.country;
          marker.type        = type;
          marker.isDealer    = typeof m.store_id != 'undefined';
          marker.disclaimer  = m.disclaimer == null | m.disclaimer == undefined ? '' : m.disclaimer;
          marker.stockStatus = m.stockStatus;
          marker.distance    = m.distance;
          marker.statusClass = m.statusClass;
          marker.status      = m.statusLabel;

          if (marker.id == lcly.map.activeMarkerId){

            markerObj  = markerObject(m.id, type, 'active'); 
            lcly.mapService.setMarkerIcon(marker, markerObj);

          } else { // marker is not active 

            //only include non-active markers in the markersToCluster array
            markersToCluster.push(marker);
          }

          // add the marker
          lcly.map.markers.push(marker);

          // add an event listener for the marker 
          if (mapType != 'order') lcly.mapService.addMarkerClickListener(lcly.map.markers[i], mapType);

          // add an event listener for hover in
          lcly.mapService.addMarkerHoverOverListener(lcly.map.markers[i], i);

          // add an event listener for hover out
          lcly.mapService.addMarkerHoverOutListener(lcly.map.markers[i], i);

          // Final check if marker is already active from a sibling event, fire a click
          if (mapType != 'order' && lcly.map.markers[i].id == lcly.map.activeMarkerId && lcly.siblingClickEvent){

            lcly.mapModule.markerClick(lcly.map.markers[i].id, false, false);
            lcly.siblingClickEvent = null;
          }
        }
      }

      // instantiate clusterer 
      lcly.map.mc = lcly.mapService.clusterer(lcly.map.obj, markersToCluster, clusterOptions);
    },

    populateCityMarkers: function(markerData) {

      lcly.map.markers   = [];
      var markersToCluster = [];

      // set up marker clustering options 
      // this is for when the map is zoomed way out and markers need to strategically cluster
      var clusterOptions = {

        color: '#E95533',
        gridSize : 35,
        maxZoom : 7,
        minimumClusterSize: 2,
        styles : [
          {
            textColor: 'white',
            url: '/img/map-cluster-sm.png',
            height: 26,
            width: 26
          },
          {
            textColor: 'white',
            url: '/img/map-cluster-md.png',
            height: 40,
            width: 40
          },
          {
            textColor: 'white',
            url: '/img/map-cluster-lg.png',
            height: 50,
            width: 50
          }
        ]
      };

      // loop through all of the fetched location/store data and set up markers on the map canvas! 
      if (markerData){

        for (var i = 0; i < markerData.length; i++) {

          var m      = markerData[i];
          var coords = lcly.mapService.coordsObject(m.lat, m.lng);

          var markerParams = { 
            index: i,
            position: coords, 
            icon: lcly.map.defaultCityMarker, 
            map: lcly.map.obj, 
            optimized: false
          };
          
          var marker = lcly.mapService.addMarker(markerParams);

          lcly.mapService.extendBounds(coords);

          // set up the attributes 
          marker.index       = i;
          marker.lat         = m.lat;
          marker.lng         = m.lng;
          marker.city        = m.city;
          marker.country     = m.country;
          marker.state       = m.state;
          marker.brandCount  = m.n_brands;
          marker.storeCount  = m.n_stores;
          marker.id          = marker.city + marker.country;

          // add the marker
          lcly.map.markers.push(marker);
          lcly.mapService.addMarkerClickListener(lcly.map.markers[i], 'cities');
          lcly.mapService.addMarkerHoverOverListener(lcly.map.markers[i], i);
          lcly.mapService.addMarkerHoverOutListener(lcly.map.markers[i], i);

        }//End For Loop
      }

      // instantiate clusterer 
      lcly.map.mc = lcly.mapService.clusterer(lcly.map.obj, lcly.map.markers, clusterOptions);
    },

    fitMapBounds: function (map, bounds, maxZoom) {
      
      lcly.mapService.fitMapBounds(map, bounds, maxZoom);
    },

    closeCurrentInfoBox: function () {

      if (lcly.map.currInfoWindow) lcly.mapService.closeInfoWindow();
      $('.a-store-result.in-focus').removeClass('in-focus');
      $('.a-store-result .store-full').remove();
      $('.in-focus-closer').remove();

      if ( lcly.map.$.parent.hasClass('conv-info-active') ){
        $('#conv-store-info-back').trigger('click');
      }
    },

    markerClick: function(id, active, returnHome) {

      lcly.map.populateLock = true;
      setTimeout(function(){ lcly.map.populateLock = false; }, 3000);

      if (lcly.isConversionTool) {
        lcly.updateSelectedStoreHTML(id, active);

        if (!lcly.isDealerLocator) {
          lcly.conversionModule.scrollToTop();
        }

        //Go back to main screen if mobile and mobileBack is explicitly set to true
        if (returnHome && lcly.mobile) {
          //show the conversion column again. the lcly.$.convSidebar is set in converstion-section.js 
          lcly.$.convSidebar.removeClass('map-active');
        }
      }
    },

    markerClickHandler: function(marker, mapType){

      lcly.mapModule.markerUpdateSearchFieldHandler(marker);

      // marker is not already active
      if (lcly.map.activeMarkerId != marker.id){

        //Set large marker icon
        if (mapType == 'cities') {

          var markerObj = lcly.map.activeCityMarker;

        } else {
  
          var markerObj = markerObject(marker.id, marker.type, 'active');
        }

        lcly.mapService.setMarkerIcon(marker, markerObj);

        lcly.mapModule.resetActiveMarker();
        lcly.mapModule.openInfoBoxFor(marker, marker, mapType);

        // handles all other click functionality (updating sidebar, etc)
        lcly.mapModule.markerClick(marker.id, false, false);

        lcly.map.activeMarkerId = marker.id;

        if (mapType == 'cities') {
          
          lcly.mapModule.resetActiveCityMarker();
          lcly.map.activeCityMarkerId = marker.city + marker.country; 
        }

      } else if (mapType != 'cities') { //marker is already active, but need to update sidebar view

        lcly.mapModule.markerClick(marker.id, true, false);
      }
    },

    markerUpdateSearchFieldHandler: function(marker){

      if (typeof $locationAutocomplete != 'undefined'){
        
        var locationString = '';
        
        // if we don't have a valid marker populate the search field with its placeholder value
        // this can happen if we have a store in the list but no corresponding marker in the map data
        if (typeof marker.getElement != 'function') {
          locationString = $('.location-autocomplete').attr('placeholder');
        }
        // otherwise, update the search field with city, state, country
        else {
          if (typeof marker.city != 'undefined' && marker.city.length > 0){
            locationString += marker.city + ', ';
          }
          if (typeof marker.state != 'undefined' && marker.state.length > 0){
            locationString += marker.state + ' ';
          }
          if (typeof marker.country != 'undefined' && marker.country.length > 0){
            locationString += marker.country; 
          }
        }
        
        $locationAutocomplete.val(locationString);
      }

    },

    markerHoverOverHandler: function(marker, i){

      //if this is not an active marker
      if (marker.id != lcly.map.activeMarkerId){

        if (lcly.map.mapType == 'cities') {

          var markerObj = lcly.map.hoverCityMarker;

        } else {
  
          var markerObj = markerObject(marker.id, marker.type, 'hover');
        }

        lcly.mapService.setMarkerIcon(marker, markerObj);
      
        //if the conversion column exists
        if (lcly.$.convWrapper.length){

          lcly.$.convWrapper.find('.conv-section-store').eq(i).addClass('active');
        }
      }
    },

    markerHoverOutHandler: function(marker, i){

      //close the current hover infobox
      lcly.map.populateLock = false;

      //if this is not an active marker
      if (marker.id != lcly.map.activeMarkerId){
        
        if (lcly.map.mapType == 'cities') {

          var markerObj = lcly.map.defaultCityMarker;

        } else {
  
          var markerObj = markerObject(marker.id, marker.type, 'default');
        }

        lcly.mapService.setMarkerIcon(marker, markerObj);
      
        //if the conversion column exists
        if (lcly.$.convWrapper.length){

          lcly.$.convWrapper.find('.conv-section-store').eq(i).removeClass('active');
        }
      }
    },
      
    triggerRedraw: function(){
      
      lcly.mapService.fireIdleEvent();
    },

    openInfoBoxFor: function(obj, marker, mapType){      

      // map doesn't auto-pan to marker, so let's pan to it instead
      lcly.mapModule.resetLocation();
      lcly.mapModule.setCoords(marker.lat, marker.lng, 200);
      setTimeout(function(){ auditCurrentLocation(); }, 1500);

      //kill current infobox
      lcly.mapModule.closeCurrentInfoBox();

      var spec = markerObject(obj.id, obj.type, 'default');
      var infoWindowOptions = lcly.mapService.infoWindowOptions(spec);
      infoWindowOptions.content = infoWindowContent(marker, mapType);

      var infoWindow = lcly.mapService.infoWindow(infoWindowOptions, marker);
      lcly.mapService.openInfoWindow(infoWindow, obj);
      lcly.map.currInfoWindow = infoWindow;
    },

    refresh: function(data){

      lcly.map.data = data; // overwrite global `lcly.map.data`
      deleteMarkers(); // remove old markers 

      if (!lcly.map.data.markers.length && lcly.isDealerLocator) { // we don't have any markers so we may need to zoom out a bit

        // zoom out until we hit a min level
        // trying to continually zoom out beyond that level could be server-taxing and bad UI.
        var currentZoom = lcly.map.obj.getZoom();
        if (currentZoom > lcly.mapService.zoomValueFor(3)) lcly.mapModule.setZoom(currentZoom - 2);

      } else { // we have markers, or it's not a SL so just process as normal
        
        if (lcly.map.mapType != 'cities') populate();

        auditOnboarding(); // write the brand-specific back-link to ____.locally.com
        auditLegend(); // re-write the legend
        // some brands utilize this broadcasted event to capture the current region being displayed in the map (for their SL)
        window.parent.postMessage({ broadcast : { name : 'region_update', data : data.region } }, "*");
      }
    },

    resetActiveMarker: function(){

      //If there is an active marker
      if(lcly.map.activeMarkerId >= 0){

        //Find the active marker
        for (j=0; j < lcly.map.markers.length; j++){
          if (lcly.map.markers[j].id == lcly.map.activeMarkerId){
            var oldMarker = lcly.map.markers[j];
            break;
          }
        }

        //if it exists in set of newly drawn markers set the default icon url
        if(oldMarker) {
          var markerObj = markerObject(oldMarker.id, oldMarker.type, 'default');
          lcly.mapService.setMarkerIcon(oldMarker, markerObj);
        }

        lcly.map.activeMarkerId = null;                
      }
    },

    resetActiveCityMarker: function(){
      //If there is an active marker
      if(lcly.map.activeCityMarkerId != undefined){

        //Find the active marker
        for (j=0; j < lcly.map.markers.length; j++){
          if (lcly.map.markers[j].id == lcly.map.activeCityMarkerId){
            var oldMarker = lcly.map.markers[j];
            break;
          }
        }

        if (oldMarker) { // if it exists in set of newly drawn markers set the default icon url

          lcly.mapService.setMarkerIcon(oldMarker, lcly.map.defaultCityMarker);
        }                 
      }
    },

    resetLocation: function(){

      if (!lcly.mobile) $locationAutocomplete.val('');
    },

    setCompany: function (id, name){

      lcly.conversionModule.setMetaParam('company_id', id);
      lcly.conversionModule.setMetaParam('company_name', name.replace(/ /gi, '+'));
      auditControls();
    },

    setCoords: function (lat, lng, duration){

      var coordsObject = lcly.mapService.coordsObject(parseFloat(lat), parseFloat(lng)); 
      lcly.mapService.panTo(coordsObject, duration);  
      lcly.mapModule.setCoordParams(lat, lng);
    },

    setCoordParams: function (lat, lng){

      if (lcly.map.mapType != 'cities') {
        lcly.conversionModule.setMetaParam('lat', lat);
        lcly.conversionModule.setMetaParam('lng', lng);
      }
    },

    setZoomParam: function (zoom){

      lcly.conversionModule.setMetaParam('zoom', zoom);
    },

    setLocation: function(location){

      lcly.conversionModule.setMetaParam('location', location.replace(/ /gi, '+'));
    },

    setZoom: function (zoom){

      lcly.map.obj.setZoom(zoom);
      lcly.mapModule.setZoomParam(zoom);
    },

    teleportTo: function(lat, lng, location){

      var zoom = !lcly.isDealerLocator && lcly.mobile ? lcly.mapService.zoomValueFor(8) : lcly.map.locationSwitchZoom;

      lcly.map.populateLock = false;
      lcly.mapModule.setCoords(lat, lng, 0);
      lcly.mapModule.setZoom(zoom);
      lcly.mapModule.setLocation(location);
      lcly.map.initialStoreIdPersisted = false;

      if (lcly.isDealerLocator) {
        //reset any necessary variables
        lcly.dealerStockLoaded = false;
        lcly.currentStore.inventoryLoaded = false;
        
        if ((lcly.forceCategoryTab && lcly.firstCatSelected) || !lcly.forceCategoryTab) {
          //close any open stock drawers
          if ( lcly.$.convWrapper.find('.pdp-active').length ) {
            lcly.$.convWrapper.find('.pdp-active').removeClass('pdp-active');
          }
          lcly.$.convWrapper.removeClass('dealer-inventory-active');
          
          //set to retailer tab
          lcly.$.convWrapper.find('.dealer-tab-retailers').trigger('click');
        }
      }
    },

    zIndexForLatitude: function(lat){

      // lat ranges from 90 (N) to -90 (S)
      var abs = parseFloat(lat) + 90; // makes sure the value is > 0
      return lcly.mapModule.zIndexMax() - Math.ceil(abs * 10000);
    },

    zIndexMax: function(){

      return 10000000;
    }
  };

})(jQuery,lcly);

;
(function($,lcly) {

  //DOM Ready
  $(function(){

    lcly.$.landingPageWrapper = lcly.$.body.find('.landing-page-wrapper'),
    lcly.$.landingPageMapContainer = $('#landing-map-cont');

    initLandingPageNav();
    initDepartmentSubcatToggle();
    
    //If this landing page has a map container, init that map
    if (lcly.$.landingPageMapContainer.length) {
      lcly.mapModule.initLandingMap();
    }

    lcly.$.landingPageWrapper.on('click', '.n-reviews', function(e){
      e.stopPropagation();
      $('html, body').animate({
          scrollTop: $("#landing-page-reviews").offset().top
      }, 500);
    });

    setTimeout(function(){ $('.js-item-ratings').fadeIn('500') }, 200);
  });

  function initLandingPageNav() {

    lcly.$.landingPageNavLink = lcly.$.landingPageWrapper.find('.js-landing-page-nav-link');
    lcly.$.landingPageNavSection = lcly.$.landingPageWrapper.find('.js-landing-page-section');

    //Sticky nav init
    if (window.location.pathname.indexOf('/shop/') > -1) {
      $('#landing-page-nav').stick_in_parent({
        parent: '.landing-page-wrapper',
        offset_top: -70
      }).on("sticky_kit:stick", function(e) {
        e.target.parentNode.style.height = $(e.target).outerHeight() + 'px';
      }).on("sticky_kit:unstick", function(e) {
        e.target.parentNode.style.height = 'auto';
      })
    }
    else {
      $('#landing-page-nav').stick_in_parent({
        parent: '.landing-page-wrapper',
        offset_top: -70
      })
    }

    //Landing page nav scroll to id init
    lcly.$.landingPageNavLink.scrollToID({
      speed: 500,
      offset: 70
    });



    //Build the waypoints for each nav section to highlight nav
    var navDownWaypoints = [],
        navUpWaypoints = [];

    lcly.$.landingPageNavSection.each(function(index){
      var navSection = $(this),
          sectionID = navSection.data('nav-section'),
          upOffset = navSection.height()*-.75;

      navDownWaypoints[index] = new Waypoint({
        element: navSection,
        handler: function(direction) {
          if (direction == 'down') {
            $('#' + sectionID + '-nav-link').addClass('active').siblings().removeClass('active');
          }
        },
        offset: 140
      })

      navUpWaypoints[index] = new Waypoint({
        element: navSection,
        handler: function(direction) {
          if (direction == 'up') {
            $('#' + sectionID + '-nav-link').addClass('active').siblings().removeClass('active');
          }
        },
        offset: upOffset
      })

    });


    //Mobile map init
    lcly.$.landingPageWrapper.on('click', '.js-landing-header-map-link', function(){
      lcly.$.body.addClass('landing-map-active');
    });
    lcly.$.landingPageWrapper.on('click', '.js-landing-map-back-link', function(){
      lcly.$.body.removeClass('landing-map-active');
    });

    //Retailer hours init
    lcly.$.landingPageWrapper.on('click', '.js-landing-header-hours-link', function(){
      lcly.$.body.addClass('hours-active'); 
      $('.js-hours-block').hide();
      $('#hours-block-' + $(this).data('id')).show();
    });
    lcly.$.landingPageWrapper.on('click', '.js-landing-header-hours-close', function(){
      lcly.$.body.removeClass('hours-active');
    });

  }

  function initDepartmentSubcatToggle() {
    //Department Toggle
    lcly.$.landingPageWrapper.on('mouseenter', '.js-department-subcat-toggle', function(e){
      e.preventDefault();
      e.stopPropagation();

      $(this).closest('.department-container').addClass('subcat-active');
    }).on('mouseleave', '.js-department-subcat-toggle', function(e){
      e.preventDefault();
      e.stopPropagation();

      $(this).closest('.department-container').removeClass('subcat-active');
    }).on('click', '.department-subcat-container .ellipse-toggle', function(e){
      e.preventDefault();
      e.stopPropagation();

      $(this).closest('.department-container').toggleClass('subcat-active');
    });
  }


})(jQuery,lcly);
//# sourceMappingURL=landing.js.map