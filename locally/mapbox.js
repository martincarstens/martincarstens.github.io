// mapbox mappings
// must have the same public functions as google_maps.js
lcly.mapService = (function($,lcly,mapboxgl) {
  
    return {
        
      addCenterChangedListener: function(){
  
        /**
        * when map shifts laterally, wait one second and then set new coords in URL 
        * also reset the location search input
        */
        lcly.map.obj.on('moveend',function(e){
  
          /* if moveend was triggered by human event (e.g. panning map around), resetLocation()
             and clear out the search field.  it will get repopulated when reverse lookup occurs.
             otherwise if moveend was triggered by mapbox automatically recentering map (e.g. when 
             user selects something from the autocomplete dropdown), don't reset the search field 
             since it needs to stay populated with the user's selection. */
          if (typeof e.originalEvent !== 'undefined'){
            lcly.mapModule.resetLocation();
          }        
  
          window.setTimeout(function() {
            var center = lcly.map.obj.getCenter();
            lcly.mapModule.setCoordParams(center.lat, center.lng);
          }, 1000);
        });
      },
  
      addClustererClickListener: function(){
  
        // google maps only. 
        // keep method intact though.
      },
  
      addCurrentLocationIndicator: function(lat, lng){
  
        if (!lcly.map.currentLocationLoaded){
  
          var coords = lcly.mapService.coordsObject(lat, lng);
          var el = document.createElement('div');
          var elSub0 = document.createElement('div');
          var elSub1 = document.createElement('div');
  
          el.id = 'current-location-indicator';
          el.className = 'current-location-indicator ring-container';
          el.style.width = '15px';
          el.style.height = '15px';
          el.style.backgroundColor = '#007CBF';
          el.style.borderRadius = '50%';
          el.style.zIndex = 2;
          elSub0.className = 'ringring';
          elSub1.className = 'circle';
  
          el.appendChild(elSub0);
          el.appendChild(elSub1);
  
          lcly.map.currentLocationLoaded = true;
  
          return new mapboxgl.Marker(el).setLngLat(coords).addTo(lcly.map.obj);
        }
      },
  
      addIdleStateListener: function(){
  
        lcly.map.obj.on('idle',function(e){
            
            lcly.mapService.setBounds();
            lcly.mapModule.idle();
            lcly.mapService.auditCityMove();
  
            if (!lcly.map.langLoaded 
                && lcly.map.obj.isStyleLoaded() 
                && typeof USER_LANG != 'undefined' 
                && USER_LANG && USER_LANG != 'en-us'){
  
                  // check if avails
                  var lang = USER_LANG.substring(0,2);
                  var availableLangs = ["ar", "en", "es", "fr", "de", "ja", "ko", "mul", "pt", "ru", "zh"]; // may need to update over time
                  lcly.map.langLoaded = true;
  
                  if (availableLangs.includes(lang)){
  
                    lcly.map.obj.setLayoutProperty('country-label', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('state-label', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('place-city-label-major', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('place-city-label-minor', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('road-label', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('poi-label', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('place-neighborhood-suburb-label', 'text-field', ['get', 'name_' + lang]);
                    lcly.map.obj.setLayoutProperty('place-town-village-hamlet-label', 'text-field', ['get', 'name_' + lang]);
                  }
            }
        });
  
        // unlock populateLock and idleLock on idle
        // audit clusters on idle
        lcly.map.obj.once('idle', function(){
          lcly.map.populateLock = false;
          lcly.map.idleLock = false;            
          
          if (lcly.map.mapType != 'cities'){
  
            setInterval(function(){ lcly.mapService.auditClustering(); }, 2000);
          }
        });
      },
  
      addMarker: function(options){
  
        var el = document.createElement('div');
  
        el.id = 'marker-index-' + options.index;
        el.className = 'a-marker';
        el.style.backgroundImage = 'url(' + options.icon.url.replace(/ /g,"%20") + ')';
        el.style.width = options.icon.scaledSize[0] + 'px';
        el.style.height = options.icon.scaledSize[1] + 'px';
        el.style.backgroundSize = '100% 100%';
        el.style.cursor = 'pointer';
        el.style.zIndex = lcly.mapModule.zIndexForLatitude(options.position.lat);
  
        if (lcly.mapService.canCluster()) return el;
  
        return new mapboxgl.Marker(el).setLngLat(options.position).addTo(lcly.map.obj);
      },
  
      addMarkerClickListener: function(marker, mapType){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = marker.getElement();
  
        $(el).click(function(e) {
  
          e.stopPropagation();
          lcly.map.idleLock = true;
          setTimeout(function(){ lcly.map.idleLock = false; }, 2000);
          lcly.mapModule.markerClickHandler(marker, mapType);  
          return false;
        });
      },
  
      addMarkerHoverOverListener: function(marker, i){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = marker.getElement();
  
        $(el).hover(function() {
          
          return lcly.mapModule.markerHoverOverHandler(marker, i);
        });
      },
  
      addMarkerHoverOutListener: function(marker, i){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = marker.getElement();
  
        $(el).hover(function() {
          
          // ...
  
        }, function(){
  
          return lcly.mapModule.markerHoverOutHandler(marker, i);
        });
      },
  
      addZoomChangedListener: function(){
  
        lcly.map.obj.on('zoomend',function(e){
      
          if (lcly.map.mapType != 'cities') {
            var zoom = lcly.map.obj.getZoom();
            lcly.mapModule.setZoomParam(zoom);
          }
          var clusterCountLayer = lcly.map.obj.getLayer('cluster-count');
  
          if (typeof clusterCountLayer != 'undefined' && lcly.mapService.canCluster() && lcly.map.obj.isStyleLoaded()){
            lcly.map.obj.setLayoutProperty('cluster-count', 'visibility', 'visible');
  
            // if we zoomed to a clustered view, close the infobox          
            lcly.mapModule.closeCurrentInfoBox();
          }
        });
  
        lcly.map.obj.on('zoomstart',function(e){
    
          var clusterCountLayer = lcly.map.obj.getLayer('cluster-count');
  
          if (typeof clusterCountLayer != 'undefined' && lcly.mapService.canCluster() && lcly.map.obj.isStyleLoaded()){
            lcly.map.obj.setLayoutProperty('cluster-count', 'visibility', 'none');
          }
        });
      },
  
        addKML: function(){
  
        return false;
      },
  
      auditCityMove: function(){
  
        if (lcly.map.mapType == 'cities' && lcly.map.obj.isStyleLoaded()) {
  
          lcly.map.idleLock = true;
  
          lcly.mapService.removeAllMarkers();
  
          var clusterCountLayer = lcly.map.obj.getLayer('cluster-count');
  
          if (typeof clusterCountLayer != 'undefined' && lcly.mapService.canCluster()){
  
            // show the cluster layers
            lcly.map.obj.setLayoutProperty('clusters', 'visibility', 'visible');
            lcly.map.obj.setLayoutProperty('unclustered-point', 'visibility', 'visible');
            lcly.map.obj.setLayoutProperty('cluster-count', 'visibility', 'visible');
  
          } else {
  
            // hide the cluster layers 
            lcly.map.obj.setLayoutProperty('clusters', 'visibility', 'none');
            lcly.map.obj.setLayoutProperty('unclustered-point', 'visibility', 'none');
            lcly.map.obj.setLayoutProperty('cluster-count', 'visibility', 'none');
    
            var bounds = lcly.map.obj.getBounds();
            var inBoundsMarkers = [];
  
            $.each(lclyMapCities, function(i, point) {
              
              if (lcly.mapService.inBounds(point, bounds)){
  
                  inBoundsMarkers.push(point);
              }
            });
  
            if (inBoundsMarkers.length) {
  
              lcly.mapModule.populateCityMarkers(inBoundsMarkers);
            }
          }
  
          setTimeout(function(){ lcly.map.idleLock = false }, 3000);
        }
      },
  
      auditClustering: function(){
  
        var clusterCountLayer = lcly.map.obj.getLayer('cluster-count');
  
        if (typeof clusterCountLayer != 'undefined' && lcly.mapService.canCluster()) {
  
          if (lcly.mapService.canCluster() && lcly.map.obj.isStyleLoaded()){
          
            lcly.map.obj.setLayoutProperty('cluster-count', 'visibility', 'visible');
          }
  
        } else {
  
          lcly.mapService.clearClustering();
          lcly.map.populateLock = false;
        }
      },
  
      bounds: function(){
  
        return new mapboxgl.LngLatBounds();
      },
  
      canCluster: function(){
  
        return lcly.map.isClusterable
                && lcly.map.obj.getZoom() <= lcly.mapService.clusterZoomThreshold()
                && !lcly.mapModule.isForRetailerCompany()
                && !lcly.mapModule.isForGroup();
      },
  
      clearClustering: function(){
  
        if (lcly.map.obj.getLayer("clusters")){
  
            lcly.map.obj.removeLayer("clusters");
        }
  
        if (lcly.map.obj.getLayer("cluster-count")){
  
          lcly.map.obj.removeLayer("cluster-count");
        }
  
        if (lcly.map.obj.getLayer("unclustered-point")){
  
          lcly.map.obj.removeLayer("unclustered-point");
        }
  
        if (lcly.map.obj.getSource("markerPoints")){
  
          lcly.map.obj.removeSource("markerPoints");
        }
      },
  
      closeInfoWindow: function(){
  
        lcly.map.currInfoWindow.remove();
      },
  
      clusterZoomThreshold: function(){
  
        return lcly.map.mapType == 'cities' ? 6 : 8;
      },
  
      clusterer: function(obj, markers, options){
  
        if (lcly.mapService.canCluster()){
  
          if (obj.isStyleLoaded()){
  
            lcly.mapService.doCluster(obj, markers, options);
            
          } else {
  
            setTimeout(function(){
  
              lcly.mapService.clusterer(obj, markers, options);
  
            }, 300);
          }
        }
      },
  
      coordsObject: function(lat, lng){
  
        return new mapboxgl.LngLat(lng, lat); // note the order of the coords! reversed from function arguments (gmaps uses opposite)
      },
  
      defaultOptions: function(){
  
        return {
          zoom: lcly.map.coords[2],
          center: [lcly.map.coords[1], lcly.map.coords[0]],
          attributionControl: false
        };
      },
  
      defaultStyles: function(){
  
        if (typeof customMapTileUrl != 'undefined'){
  
          return customMapTileUrl;
  
        } else {
  
          return 'mapbox://styles/locally-tiles/cjtdpwbh22dlf1fjwzg52aebz'; // default "locally" style
        }
      },
  
      doCluster: function(obj, markers, options){
  
        lcly.map.idleLock = true;
  
  
        if (lcly.map.obj.getSource("markerPoints")){ // there is source data. update it!
  
          lcly.mapService.setGeoJSON(obj, markers);
  
        } else { // geoJSON source is not set, let's set it!
  
          lcly.mapService.clearClustering();
          lcly.mapService.setGeoJSON(obj, markers);
  
          obj.addLayer({
            id: "clusters",
            type: "circle",
            source: "markerPoints",
            filter: ["has", "point_count"],
            paint: {
              // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
              // with three steps to implement three types of circles:
              //   * 20px circles when point count is less than 100
              //   * 36px circles when point count is between 100 and 400
              //   * 48px circles when point count is greater than or equal to 400
              "circle-color": [
                "step",
                ["get", "point_count"],
                options.color,
                100,
                options.color,
                400,
                options.color
              ],
              "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                100,
                36,
                400,
                48
              ],
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff"
            }
          });
        
          obj.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "markerPoints",
            filter: ["has", "point_count"],
            layout: {
              "text-field": "{point_count_abbreviated}",
              "text-size": 14
            },
            paint: {
              "text-color": "#FFFFFF"
            }
          });
  
          obj.addLayer({
            id: "unclustered-point",
            type: "circle",
            source: "markerPoints",
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-color": options.color,
              "circle-radius": 8,
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff"
            }
          });
        
          obj.on('click', 'clusters', function (e) {
        
            var features = obj.queryRenderedFeatures(e.point, { layers: ['clusters'] });
            var clusterId = features[0].properties.cluster_id;
            var zoomAppend = lcly.map.mapType == 'cities' ? 2 : 1;
        
            obj.getSource('markerPoints').getClusterExpansionZoom(clusterId, function (err, zoom) {
              
              if (err){
        
                return;
              }
             
              obj.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom + zoomAppend
              });
            });
          });
  
          obj.on('click', 'unclustered-point', function (e) {
        
            var features = obj.queryRenderedFeatures(e.point, { layers: ['unclustered-point'] });
            var lat = features[0].properties.lat;
            var lng = features[0].properties.lng;
  
            obj.easeTo({
              center: lcly.mapService.coordsObject(parseFloat(lat), parseFloat(lng)),
              zoom: lcly.map.obj.getZoom() + 3
            });
          });
        
          obj.on('mouseenter', 'clusters', function () {
            obj.getCanvas().style.cursor = 'pointer';
          });
        
          obj.on('mouseleave', 'clusters', function () {
            obj.getCanvas().style.cursor = '';
          });
  
          obj.on('mouseenter', 'unclustered-point', function () {
            obj.getCanvas().style.cursor = 'pointer';
          });
        
          obj.on('mouseleave', 'unclustered-point', function () {
            obj.getCanvas().style.cursor = '';
          });
        }
  
        setTimeout(function(){ 
          lcly.map.idleLock = false;
          lcly.map.populateLock = true;
        }, 3000);
  
      },
  
      extendBounds: function(coords){
  
        lcly.map.mapBounds.extend(coords);
      },
  
      fireIdleEvent: function(marker){
  
        lcly.map.obj.fire('idle');
      },
  
      fireMarkerClickEvent: function(marker, data){
  
        // this bypasses normal marker click functionality 
        // useful for when in cluster mode 
  
        lcly.mapModule.markerUpdateSearchFieldHandler(marker);
  
        if (typeof marker.getElement != 'function') { // we have the store in the store list, but there is no marker 
  
          if (typeof data.id != 'undefined'){ // we have store ID, so let's just open the info panel 
  
            lcly.mapModule.markerClick(data.id, false, false);
  
          } else {
  
            return false;
          }
  
        } else { // we have the marker, do the normal thing 
  
          var el = marker.getElement();
          $(el).trigger('click');
        }
      },
  
      fireMarkerHoverOverEvent: function(marker){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = marker.getElement();
        $(el).trigger('mouseover');
      },
  
      fireMarkerHoverOutEvent: function(marker){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = marker.getElement();
        $(el).trigger('mouseout');
      },
  
      fireResizeEvent: function(){
  
        lcly.map.obj.fire('resize');
      },
  
      fitMapBounds: function(obj, bounds, maxZoom){
  
        //Set the map bounds based on marker data
        var options = {
          padding : lcly.map.boundsPadding, // padding parameter allows for nav obscuring map on landing pages
          maxZoom: maxZoom
        };
  
        obj.initialZoom = true;
        obj.fitBounds(bounds, options); 
      },
  
      inBounds: function(point, bounds) {
  
        var lng = (point.lng - bounds._ne.lng) * (point.lng - bounds._sw.lng) < 0;
        var lat = (point.lat - bounds._ne.lat) * (point.lat - bounds._sw.lat) < 0;
        return lng && lat;
      },
  
      infoWindow: function(options, marker){
  
        var coords = typeof marker.getLngLat == 'function' ? marker.getLngLat() : [marker.lng, marker.lat];
        return new mapboxgl.Popup(options).setLngLat(coords).setHTML(options.content);
      },
  
      infoWindowOptions: function(spec){
  
        var markerHeight = 25, markerRadius = 10, linearOffset = 25;
  
        var popupOffsets = {
  
         'top': [0, 0],
         'top-left': [0,0],
         'top-right': [0,0],
         'bottom': [0, -markerHeight],
         'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
         'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
         'left': [markerRadius, (markerHeight - markerRadius) * -1],
         'right': [-markerRadius, (markerHeight - markerRadius) * -1]
        };
  
        return {
  
          closeButton: false,
          offset: popupOffsets,
          className: 'infobox-wrapper'
        };
      },
  
      object: function(container, options, styles){
  
        mapboxgl.accessToken = 'pk.eyJ1IjoibG9jYWxseS10aWxlcyIsImEiOiJjanRkcGlzNHQxOXFpNDNwNHM0d3ZvcnZzIn0.xMoBu6I_S_D-Je0EUc0acQ';
  
        var allOptions = options;
        allOptions.container = container;
  
        if (styles && styles != '') allOptions.style = styles;
  
        var obj = new mapboxgl.Map(allOptions);
        obj.scrollZoom.disable();
  
        var nav = new mapboxgl.NavigationControl();
        var attributionCompact = typeof options.attributionCompact != 'undefined' ? options.attributionCompact : false;
        var attribution = new mapboxgl.AttributionControl({ compact: attributionCompact });
        var attributionLocation = typeof options.attributionLocation != 'undefined' ? options.attributionLocation : 'top-right';
  
        obj.addControl(attribution, attributionLocation);
        obj.addControl(nav, 'top-right');
        $('.mapboxgl-ctrl-top-right').css('z-index', 99999999);
  
        // only when there is a multi-category filter
        if (typeof lcly.hasMultiCategoryFiltering != 'undefined' && lcly.hasMultiCategoryFiltering){
  
          // this is hacky but is the only current solution to match 
          // google maps' `google.maps.ControlPosition.RIGHT_CENTER`
          //nav._container.parentNode.style.top = '38%';
          $('.mapboxgl-ctrl.mapboxgl-ctrl-group').css('margin-top', '50%');
        }
  
        return obj;
      }, 
  
      objectLat: function(){
  
        return lcly.map.obj.getCenter().lat;
      },
  
      objectLng: function(){
  
        return lcly.map.obj.getCenter().lng;
      },
  
      openInfoWindow: function(infoWindow, obj){
  
        infoWindow.addTo(lcly.map.obj);
        $('.infobox-wrapper').css('z-index', lcly.mapModule.zIndexMax());
      },
  
      panTo: function(coords, duration){
  
        lcly.map.obj.panTo(coords, { duration: duration });
      },
  
      point: function(x,y){
  
        return [x,y];
      },
  
      removeAllMarkers: function(){
  
        for (var i = 0; i < lcly.map.markers.length; i++) {
  
          lcly.map.markers[i].remove();
        }
      },
  
      setBounds: function(){
  
        var bounds = lcly.map.obj.getBounds();
      
        // set global map canvas spec data
        lcly.map.meta  = {
      
          'lat1'       : bounds.getNorthEast().lat,
          'lng1'       : bounds.getNorthEast().lng,
          'lat2'       : bounds.getSouthWest().lat,
          'lng2'       : bounds.getSouthWest().lng,
          'center_lat' : bounds.getCenter().lat,
          'center_lng' : bounds.getCenter().lng
        };
      },
  
      setCoordsFromGeocode: function(locationString){
  
        $.ajax({
          url: '/geo/lookup',
          type: 'GET',
          dataType: 'json',
          data: { 
            query: locationString,
            single: true
          },
        })
        .done(function(response) {
  
          if (typeof response.lat != 'undefined' && typeof response.lng != 'undefined'){
            
            lcly.mapModule.setCoords(String(response.lat), String(response.lng), 0);
          }
        });
        
      },
  
      setGeoJSON: function(obj, markers){
  
        var markersGeoJSON = { "type": "markerCollection", "features" : [] };
  
        $.each(markers, function(index, marker) {
              
          markersGeoJSON.features[index] = {
  
            "type": "Feature",
            "properties": {
              "id": marker.id,
              "type": "marker",
              "lat": marker.lat,
              "lng": marker.lng
            },
            "geometry": {
              "type": "Point",
              "coordinates": [marker.lng,marker.lat]
            }
          };
        });
  
        if (obj.getSource("markerPoints")){ // already have data
  
          obj.getSource("markerPoints").setData(markersGeoJSON);
  
        } else {
  
          obj.addSource("markerPoints", {
            type: "geojson",
            data: markersGeoJSON,
            cluster: true,
            clusterMaxZoom: 8, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
          });
        }
      },
  
      setMarkerIcon: function(marker, options){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = $(marker.getElement());
        el.css('background-image', 'url(' + options.url.replace(/ /g,"%20") + ')');
        el.css('width', options.scaledSize[0] + 'px');
        el.css('height', options.scaledSize[1] + 'px');
      },
  
      setMarkerZIndex: function(marker, zIndex){
  
        if (typeof marker.getElement != 'function') return false;
  
        var el = $(marker.getElement());
        el.css('z-index', zIndex);
      },
  
      size: function(w,h){
  
        return [w,h];
      },
  
      zoomValueFor: function(val){
  
        return val - 1; // our codebase considers this one level higher than google maps (standard)
      }
    }
  
  })(jQuery,lcly,mapboxgl);
  //# sourceMappingURL=mapbox.js.map