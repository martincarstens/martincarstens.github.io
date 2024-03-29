/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxsizing-cookies-cssanimations-csscalc-cssgradients-csspositionsticky-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-flexboxtweener-geolocation-hiddenscroll-inlinesvg-lastchild-localstorage-mediaqueries-multiplebgs-nthchild-opacity-overflowscrolling-picture-placeholder-rgba-scrollsnappoints-sessionstorage-srcset-svg-touchevents-mq-setclasses !*/
 !function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),x.push((i?"":"no-")+a.join("-"))}}function o(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?b.className.baseVal=t:b.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return e-1===t||e===t||e+1===t}function d(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,i){var o,a,l,c,u="modernizr",f=s("div"),p=d();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=i?i[r]:u+(r+1),f.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=c,b.offsetHeight):f.parentNode.removeChild(f),!!a}function c(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?f(i,n||t):i);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(h(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+h(t[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,i,o){function a(){l&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var d=m(e,i);if(!r(d,"undefined"))return d}for(var l,f,p,h,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)l=!0,j.modElem=s(v.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=j.style[h],c(h,"-")&&(h=u(h)),j.style[h]!==n){if(o||r(i,"undefined"))return a(),"pfx"==t?h:!0;try{j.style[h]=i}catch(y){}if(j.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function v(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,i,o):(a=(e+" "+E.join(s+" ")+s).split(" "),p(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var x=[],T=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var b=t.documentElement,S="svg"===b.nodeName.toLowerCase(),C=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=C,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+C.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=C.length-1;o>i;i++)e=0===i?"to ":"",r+=t+C[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=s("a"),r=n.style;return r.cssText=e+C.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea")),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;Modernizr.addTest("supports",z||k),Modernizr.addTest("srcset","srcset"in s("img"));var _=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=_,Modernizr.addTest("mediaqueries",_("only all"));var N=w.testStyles=l;Modernizr.addTest("hiddenscroll",function(){return N("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(r,function(e){n=9===e.offsetTop})}return n}),N("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),N("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),N("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),N("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],i=t.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=i.clientWidth/100,d=i.clientHeight/100,l=parseInt(50*Math.max(s,d),10),c=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",a(l,c)||a(l,c-o))},3),N("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],i=t.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=i.clientWidth/100,d=i.clientHeight/100,l=parseInt(50*Math.min(s,d),10),c=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",a(l,c)||a(l,c-o))},3),N("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var I="Moz O ms Webkit",P=w._config.usePrefixes?I.split(" "):[];w._cssomPrefixes=P;var E=w._config.usePrefixes?I.toLowerCase().split(" "):[];w._domPrefixes=E;var W={elem:s("modernizr")};Modernizr._q.push(function(){delete W.elem});var j={style:W.elem.style};Modernizr._q.unshift(function(){delete j.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("scrollsnappoints",y("scrollSnapType")),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),i(),o(x),delete w.addTest,delete w.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);;
 /*!
  * jQuery throttle / debounce - v1.1 - 3/7/2010
  * http://benalman.com/projects/jquery-throttle-debounce-plugin/
  * 
  * Copyright (c) 2010 "Cowboy" Ben Alman
  * Dual licensed under the MIT and GPL licenses.
  * http://benalman.com/about/license/
  */
 
 // Script: jQuery throttle / debounce: Sometimes, less is more!
 //
 // *Version: 1.1, Last updated: 3/7/2010*
 // 
 // Project Home - http://benalman.com/projects/jquery-throttle-debounce-plugin/
 // GitHub       - http://github.com/cowboy/jquery-throttle-debounce/
 // Source       - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.js
 // (Minified)   - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.min.js (0.7kb)
 // 
 // About: License
 // 
 // Copyright (c) 2010 "Cowboy" Ben Alman,
 // Dual licensed under the MIT and GPL licenses.
 // http://benalman.com/about/license/
 // 
 // About: Examples
 // 
 // These working examples, complete with fully commented code, illustrate a few
 // ways in which this plugin can be used.
 // 
 // Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
 // Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
 // 
 // About: Support and Testing
 // 
 // Information about what version or versions of jQuery this plugin has been
 // tested with, what browsers it has been tested in, and where the unit tests
 // reside (so you can test it yourself).
 // 
 // jQuery Versions - none, 1.3.2, 1.4.2
 // Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
 // Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
 // 
 // About: Release History
 // 
 // 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
 //       executed later than they should. Reworked a fair amount of internal
 //       logic as well.
 // 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
 //       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
 //       no_trailing throttle parameter and debounce functionality.
 // 
 // Topic: Note for non-jQuery users
 // 
 // jQuery isn't actually required for this plugin, because nothing internal
 // uses any jQuery methods or properties. jQuery is just used as a namespace
 // under which these methods can exist.
 // 
 // Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
 // when this plugin is loaded, the method described below will be created in
 // the `Cowboy` namespace. Usage will be exactly the same, but instead of
 // $.method() or jQuery.method(), you'll need to use Cowboy.method().
 
 (function(window,undefined){
   '$:nomunge'; // Used by YUI compressor.
   
   // Since jQuery really isn't required for this plugin, use `jQuery` as the
   // namespace only if it already exists, otherwise use the `Cowboy` namespace,
   // creating it if necessary.
   var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} ),
     
     // Internal method reference.
     jq_throttle;
   
   // Method: jQuery.throttle
   // 
   // Throttle execution of a function. Especially useful for rate limiting
   // execution of handlers on events like resize and scroll. If you want to
   // rate-limit execution of a function to a single time, see the
   // <jQuery.debounce> method.
   // 
   // In this visualization, | is a throttled-function call and X is the actual
   // callback execution:
   // 
   // > Throttled with `no_trailing` specified as false or unspecified:
   // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
   // > X    X    X    X    X    X        X    X    X    X    X    X
   // > 
   // > Throttled with `no_trailing` specified as true:
   // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
   // > X    X    X    X    X             X    X    X    X    X
   // 
   // Usage:
   // 
   // > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
   // > 
   // > jQuery('selector').bind( 'someevent', throttled );
   // > jQuery('selector').unbind( 'someevent', throttled );
   // 
   // This also works in jQuery 1.4+:
   // 
   // > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
   // > jQuery('selector').unbind( 'someevent', callback );
   // 
   // Arguments:
   // 
   //  delay - (Number) A zero-or-greater delay in milliseconds. For event
   //    callbacks, values around 100 or 250 (or even higher) are most useful.
   //  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
   //    true, callback will only execute every `delay` milliseconds while the
   //    throttled-function is being called. If no_trailing is false or
   //    unspecified, callback will be executed one final time after the last
   //    throttled-function call. (After the throttled-function has not been
   //    called for `delay` milliseconds, the internal counter is reset)
   //  callback - (Function) A function to be executed after delay milliseconds.
   //    The `this` context and all arguments are passed through, as-is, to
   //    `callback` when the throttled-function is executed.
   // 
   // Returns:
   // 
   //  (Function) A new, throttled, function.
   
   $.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
     // After wrapper has stopped being called, this timeout ensures that
     // `callback` is executed at the proper times in `throttle` and `end`
     // debounce modes.
     var timeout_id,
       
       // Keep track of the last time `callback` was executed.
       last_exec = 0;
     
     // `no_trailing` defaults to falsy.
     if ( typeof no_trailing !== 'boolean' ) {
       debounce_mode = callback;
       callback = no_trailing;
       no_trailing = undefined;
     }
     
     // The `wrapper` function encapsulates all of the throttling / debouncing
     // functionality and when executed will limit the rate at which `callback`
     // is executed.
     function wrapper() {
       var that = this,
         elapsed = +new Date() - last_exec,
         args = arguments;
       
       // Execute `callback` and update the `last_exec` timestamp.
       function exec() {
         last_exec = +new Date();
         callback.apply( that, args );
       };
       
       // If `debounce_mode` is true (at_begin) this is used to clear the flag
       // to allow future `callback` executions.
       function clear() {
         timeout_id = undefined;
       };
       
       if ( debounce_mode && !timeout_id ) {
         // Since `wrapper` is being called for the first time and
         // `debounce_mode` is true (at_begin), execute `callback`.
         exec();
       }
       
       // Clear any existing timeout.
       timeout_id && clearTimeout( timeout_id );
       
       if ( debounce_mode === undefined && elapsed > delay ) {
         // In throttle mode, if `delay` time has been exceeded, execute
         // `callback`.
         exec();
         
       } else if ( no_trailing !== true ) {
         // In trailing throttle mode, since `delay` time has not been
         // exceeded, schedule `callback` to execute `delay` ms after most
         // recent execution.
         // 
         // If `debounce_mode` is true (at_begin), schedule `clear` to execute
         // after `delay` ms.
         // 
         // If `debounce_mode` is false (at end), schedule `callback` to
         // execute after `delay` ms.
         timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
       }
     };
     
     // Set the guid of `wrapper` function to the same of original callback, so
     // it can be removed in jQuery 1.4+ .unbind or .die by using the original
     // callback as a reference.
     if ( $.guid ) {
       wrapper.guid = callback.guid = callback.guid || $.guid++;
     }
     
     // Return the wrapper function.
     return wrapper;
   };
   
   // Method: jQuery.debounce
   // 
   // Debounce execution of a function. Debouncing, unlike throttling,
   // guarantees that a function is only executed a single time, either at the
   // very beginning of a series of calls, or at the very end. If you want to
   // simply rate-limit execution of a function, see the <jQuery.throttle>
   // method.
   // 
   // In this visualization, | is a debounced-function call and X is the actual
   // callback execution:
   // 
   // > Debounced with `at_begin` specified as false or unspecified:
   // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
   // >                          X                                 X
   // > 
   // > Debounced with `at_begin` specified as true:
   // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
   // > X                                 X
   // 
   // Usage:
   // 
   // > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
   // > 
   // > jQuery('selector').bind( 'someevent', debounced );
   // > jQuery('selector').unbind( 'someevent', debounced );
   // 
   // This also works in jQuery 1.4+:
   // 
   // > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
   // > jQuery('selector').unbind( 'someevent', callback );
   // 
   // Arguments:
   // 
   //  delay - (Number) A zero-or-greater delay in milliseconds. For event
   //    callbacks, values around 100 or 250 (or even higher) are most useful.
   //  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
   //    unspecified, callback will only be executed `delay` milliseconds after
   //    the last debounced-function call. If at_begin is true, callback will be
   //    executed only at the first debounced-function call. (After the
   //    throttled-function has not been called for `delay` milliseconds, the
   //    internal counter is reset)
   //  callback - (Function) A function to be executed after delay milliseconds.
   //    The `this` context and all arguments are passed through, as-is, to
   //    `callback` when the debounced-function is executed.
   // 
   // Returns:
   // 
   //  (Function) A new, debounced, function.
   
   $.debounce = function( delay, at_begin, callback ) {
     return callback === undefined
       ? jq_throttle( delay, at_begin, false )
       : jq_throttle( delay, callback, at_begin !== false );
   };
   
 })(this);
 ;
 (function ($) {
   $.fn.scrupulous = function (args) {
 
     //future homes for options as needed
     var options = {
       beforeSubmit:          null, // pre validation processing
       valid:                 null,  //Pass a valid function through args
       invalid:               null, //Pass an invalid function through args
       namespace :            'scrupulous',
       errorClassName:        'error-message', //class name of the error label
       parentClassName:       'form-group', //class name of the parent element where the error label is appended
       defaultErrorMessage:   'This field has an error', //default error message if no title is provided
       setErrorMessage:       null  // used to set custom HTML5 validationMessage
     };
 
     $.extend( options, args );
 
     var $forms        = this,
         $inputs       = $forms.find('select, input, textarea'),
         emailPattern  = "[^@]+@[^@]+\.[a-zA-Z]{2,6}",
         browser       = {},
         $el,$form,$formGroup,elId,validity,errorMessage;
 
 
     //stop everything if checkValidity does not exist, and I'm talking to you <= IE9.
     if(typeof document.createElement( 'input' ).checkValidity != 'function') {
       $forms.on('submit.' + options.namespace, function(e){
         if(options.valid !== null) {
           //e.preventDefault();
           return options.valid.call(this);
         } 
         else {
           return true;
         }
 
       });
       return false;
       //stop everything else
     }
 
     //prevent calling scrupulous again.
     if(this.hasClass('scrupulous')) {
       return false;
     }
 
 
     $forms.addClass('scrupulous');
     $forms.find('input[type="email"]').attr('pattern',emailPattern);
 
     $forms.attr('novalidate',true); //set all forms to novalidate to avoid default browser validation
 
     /*----------------------------------------------
       equalTo(el);
      function that checks if a value is equal to another value
      based on the id value contained in data-equal-to attribue. 
      ----------------------------------------------*/
     var equalTo = function(el,parent){
       var equalToParentId;
       if ( typeof parent !== 'undefined'){
         equalToParentId = parent;
       }
       else {
         equalToParentId = $(el).attr('data-equal-to');
       }
       if($('#' + equalToParentId).length >= 0) {
         // Compare to another input's value
         if (el.value != $('#' + equalToParentId).val()) {
           return false;
         } else {
           return true;
         }
       } else {
         // Plain Object / Primitive evaluation
         if (window.console){
           console.log('No data-equal-to element defined.');
         }
         return (el.value == equalToParentId);
       }
     };
 
 
     /*----------------------------------------------
       luhnCheck(el)
       Returns if an inputs value passes the standard 
       luhn check alg
     ----------------------------------------------*/
     var luhnCheck = function(el){
 
       var number = el.value;
       var
         arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
         len = number.length,
         bit = 1,
         sum = 0,
         val;
       
       /** no way to validate a masked card, will have to let the backend handle it **/
       if ( number.match(/^[xX*-]+\d{4}$/g) ){
         return true;
       }
       
       while (len) {
         val = parseInt(number.charAt(--len), 10);
         sum += (bit ^= 1) ? arr[val] : val;
       }
 
       return sum && sum % 10 === 0;
 
     };
 
 
     /*----------------------------------------------
       checkboxValidity(el)
       function to check if any checkboxes/radios 
       are checked then validate that section of 
       the form 
     ----------------------------------------------*/
 
     var checkboxValidity = function(el){
       var inputName = el.name,
           isChecked = false;
       $('input[name="' + inputName + '"]').each(function(){
         if(this.checked === true){
           isChecked = true;
         }
       });
 
       if(!isChecked && el.required === true){
         return false;
       }
       else {
         return true;
       }
     };
 
     /** for browsers that don't support input type = number **/
     var numberTypeValidity = function($el){
       var min,max,step,val=Number($el.val());
 
       if(!$.isNumeric( $el.val())){
         return false;
       }
 
       if (typeof $el.attr("max") !== 'undefined') {
         max = Number($el.attr("max"));
         if ( max < val ){
           return false;
         }
       }
       if (typeof $el.attr("min") !== 'undefined') {
         min = Number($el.attr("min"));
         if ( min > val ){
           return false;
         }
       }
       if ( typeof $el.attr("step") !== 'undefined' ){
         step = Number($el.attr("step"));
         if ( val % step !== 0 ){
           return false;
         }
       }
       return true;
     };
 
     var isNumberField = function($el){
       return $el.is("input") && $el.attr("type") !== 'undefined' && $el.attr("type").toLowerCase() == "number";
     };
 
     /*----------------------------------------------
       setValid($el)
       function that removes all invalid classes and 
       error labels. 
     ----------------------------------------------*/
 
     var setValid = function($el) {
       //dont validate on hidden inputs
       if(!$el.is(':hidden')) {
         $el.addClass('valid');
         $el.removeClass('invalid');
         $formGroup = $el.parents('.' + options.parentClassName);
         //let Developer know that form-group does not exist
         if($formGroup.length === 0) {
           //no form group, check and see if we have an input group
           $formGroup =  $el.parents('.input-group');
           if($formGroup.length === 0) {
             /*
             Don't think we need this on valid anymore.
             if(window.console){
               console.log('Warning: Scrupulous needs a .form-group, .input-group or parentClassName element to append errors. id: ' + $el.attr('id'));  
             }*/
             return false;
           }
         }
         $formGroup.addClass('has-success');
         $formGroup.removeClass('has-error');
         $formGroup.find('.' + options.errorClassName).remove();
       }
     };
 
     /*----------------------------------------------
       setInvalid($el)
       function that addes invalid classes and appends
       error message labels to the parent div. 
     ----------------------------------------------*/
     var setInvalid = function($el) {
       //dont validate on hidden inputs
       if(!$el.is(':hidden')) {
         $el.addClass('invalid');
         $el.removeClass('valid');
         $formGroup =  $el.parents('.' + options.parentClassName);
         //let Developer know that form-group does not exist
         if($formGroup.length === 0) {
           //no form group, check and see if we have an input group
           $formGroup =  $el.parents('.input-group');
           if($formGroup.length === 0) {
             if(window.console){
               console.log('Warning: Scrupulous needs a .form-group, .input-group or parentClassName element to append errors. id: ' + $el.attr('id'));  
             }
             return false;
           }
         }
         $formGroup.addClass('has-error');
         $formGroup.removeClass('has-success');
         
         var originalValidationMessage = $el[0].validationMessage;
         
         if(options.setErrorMessage !== null){
           options.setErrorMessage.apply(this, $el);
         }
         
         errorMessage = $el[0].validationMessage;
         
         if (typeof errorMessage === 'undefined' || errorMessage.length === 0 || errorMessage === originalValidationMessage){
           errorMessage = $el.attr('title');  
         }
         
         if(errorMessage === undefined) {
           errorMessage = options.defaultErrorMessage;
         }
 
         $el[0].setCustomValidity("");
 
         //only append if there isn't one. helpful with radios and checkboxes
         if($formGroup.find('.' + options.errorClassName).length === 0) {
           $formGroup.append('<label class="' + options.errorClassName + ' inactive" for="' + $el.attr('id') + '">' + errorMessage + '</label>');
          
         }
         var t = setTimeout(function(){
           $('.' + options.errorClassName).removeClass('inactive');
         },10);
       }
     };
 
     var validityChecker = function(el){
       var elValidity = el.checkValidity();
           $el = $(el);
 
       //if it is an equal-to check status
       if($(el).attr('data-equal-to') !== undefined){
         elValidity = equalTo(el);
       }
 
       if($(el).attr('data-not-equal-to') !== undefined){
         elValidity = !equalTo(el);
       }
 
       if($(el).attr('data-not-equal-to-with-base') !== undefined){
         elValidity = elValidity && !equalTo(el,$(el).attr('data-not-equal-to-with-base'));
       }
 
       if($el.is(':checkbox') || $el.is(':radio')){
         elValidity = checkboxValidity(el);
       }
 
       if ( ! browser.inputtype.number && isNumberField($(el)) ){
         /** browser doesn't support number type **/
         elValidity = numberTypeValidity($el);
       }
 
       if($(el).attr('data-creditcard') !== undefined){
         if ( elValidity ) {
           /** first see if html pattern matches, if so, do luhn check. otherwise return false **/
           elValidity = luhnCheck( el );
         }
       }
 
       if(elValidity === true){
         setValid($el);
       }
       else {
         setInvalid($el);
       }
     };
     
     /**
      * Load browser support for HTML5 elements.
      */
     var loadInputTypeSupport = function(){
       var types = "search,number,range,color,tel,url,email,date,month,week,time,datetime,datetime-local";
       var typeArray = types.split(",");
       var input = document.createElement( 'input' );
       browser.inputtype = {};
       for ( var a = 0; a < typeArray.length; a++ ){
         input.setAttribute("type","text");
         input.setAttribute("type",typeArray[a]);
         if ( input.type !== 'text' ){
           browser.inputtype[typeArray[a]] = true;
         }
         else {
           browser.inputtype[typeArray[a]] = false;
         }
       }
     };
 
     loadInputTypeSupport();
 
 
       $inputs.each(function(){
 
 
         // bind Check Validity on blur for all inputs
         $(this).on('blur.' + options.namespace, function(){
 
           var $this = $(this);
 
           // trim the value and save back to form input before continuing.
           $this.val($.trim($this.val()));
 
           if($this.attr('type') === 'number' && isNaN($this.val())){
             //exist because letters in a number field register as a blank value
             $this.val('');
           }
           if($this.val() !== '') {
             validityChecker(this);
           }
           else {
             //if the form is blank AND required we need to rip out the valid classes
             if($this.is(':required')) {
               $this.removeClass('valid').parentsUntil('form-group').removeClass('has-success');
             }
 
           }
 
         });
 
 
         if ( ! $(this).is("select") ) {
           // if the input isn't a select, bind change keyup and mouseup
           $( this ).on( 'change.' + options.namespace + ' keyup.' + options.namespace + ' mouseup.' + options.namespace, function(){validityEventCheck(this);} );
 
         }
         else {
           // If we are a select, only bind change and input.. not the others, some browsers are cranky
           $( this ).on( 'change.' + options.namespace + ' input.' + options.namespace, function(){validityEventCheck(this);} );
         }
 
       });
 
       var validityEventCheck = function(el){
 
         var elValidity = el.checkValidity();
         $el        = $( el );
 
         if ( $el.is( ':disabled' ) !== true ) {
 
           if ( $el.hasClass( 'fn-equal-to' ) ) {
             elValidity = equalTo( this );
           }
 
           if ( $el.hasClass( 'fn-notequal-to' ) ) {
             elValidity = ! equalTo( this );
           }
 
           if ( $el.is( ':checkbox' ) || $el.is( ':radio' ) ) {
             elValidity = checkboxValidity( this );
           }
 
           if ( elValidity === true ) {
             setValid( $el );
           }
 
         }
       };
 
 
       //Check Validity for all elements on submit
       $forms.on('submit.' + options.namespace,function(e){
         $form = $(this);
 
         if(typeof options.beforeSubmit === "function") {
           options.beforeSubmit.call(this);
         }
 
         $form.find('select, input, textarea').not(':disabled').each(function(){
           validityChecker(this);
         });
         if($form.find('.has-error').length > 0){
            //unsuccessful validation
           var errorScrollTop = $form.find('.has-error:first').offset().top - 100;
           if(errorScrollTop < $(window).scrollTop()) {
             $("html, body").animate({ scrollTop: errorScrollTop }, 300);
           }
           $form.find('.has-error .invalid:first').focus();
          
            //call the invalid callback, rely on that to return true or false to submit the form
           if(options.invalid !== null) {
             return options.invalid.call(this);
           }
 
           //prevent the form from submitting no matter what
           e.preventDefault();
         }
         else {
           //successful validation
           
           //call the invalid callback, rely on that to return true or false to submit the form
           if(options.valid !== null) {
             return options.valid.call(this);
           } 
           else {
             return true;
           }
         }
         return false;
       });
   };
 })( jQuery );
 ;
 (function ($) {
   $.fn.inlineSVG = function (args) {
     var options = {
 
     };
 
     var selector = this.selector,
         ajaxRequests = [];
 
     $.extend( options, args );
 
     //function to inline SVGs as part of the jquery plugin or part of the MutationObserver event.
     var makeSVGInline = function($el){
       if($el[0].nodeName === 'IMG' && !$el.hasClass('loaded')) {
         var svgUrl      = $el.attr('src');
 
         //if an ajax request has not already been sent for this url
         if(ajaxRequests.indexOf(svgUrl) == -1) {
           //If there are multiple instances of the same image, load them all with a single ajax call
           var $imgInstances = $(selector).filter('[src="' + svgUrl + '"]');
 
           //this works better than $.ajax();
           var ajax = new XMLHttpRequest();
           ajax.open("GET", svgUrl, true);
           ajax.send();
           ajaxRequests.push(svgUrl);
 
           ajax.onload = function(e) {
              //if the status is not 404 do the replacement otherwise do nothing.
              if(ajax.status !== 404) {
 
               $imgInstances.each(function() {
                 var $this = $(this),
                     classNames = $this.attr('class'),
                     $svg = $(ajax.responseText);
 
                 if (!$this.hasClass('loaded')){
                   $svg.attr('class', classNames + ' loaded');
                   $this.replaceWith($svg);
                 }
 
                 $this.css('background-color', 'red'); 
               });  
               
             } 
             else {
               $imgInstances.addClass('not-loaded');
             }
           }
         }
       }
     };
 
     //loop on inline SVGs loaded with the plugin
     this.each(function(){
       //if($this) {
         makeSVGInline($(this));
       //}
     });
     ajaxRequests = [];
 
     $(window).load(function(){
 
       var nodesAdded = false;
       //observe the DOM for mutations, if anything changes on the page scan it for new img selector
       var observer = new MutationObserver(function(mutations) {
 
 
         mutations.forEach(function(mutation) {
           if (mutation.type === 'childList' && mutation.addedNodes.length) {
             nodesAdded = true;
           } else {
             nodesAdded = false;
           }
         }); 
         if(nodesAdded) {
           var $newInlineSVGs = $(selector).not('.loaded');
 
           $newInlineSVGs.each(function(){
             makeSVGInline($(this)); 
           });
           ajaxRequests = [];
         }
       });
 
       observer.observe(document.body, {
         attributes: true, 
         childList: true,
         subtree: true
       });
     });
   };
 }( jQuery ));
 
 ;
 /*
  * International Telephone Input v17.0.13
  * https://github.com/jackocnr/intl-tel-input.git
  * Licensed under the MIT license
  */
 
 // wrap in UMD
 (function(factory) {
     if (typeof module === "object" && module.exports) module.exports = factory(); else window.intlTelInput = factory();
 })(function(undefined) {
     "use strict";
     return function() {
         // Array of country objects for the flag dropdown.
         // Here is the criteria for the plugin to support a given country/territory
         // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
         // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
         // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
         // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
         // Each country array has the following information:
         // [
         //    Country name,
         //    iso2 code,
         //    International dial code,
         //    Order (if >1 country with same dial code),
         //    Area codes
         // ]
         var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
         // loop over all of the countries above, restructuring the data to be objects with named keys
         for (var i = 0; i < allCountries.length; i++) {
             var c = allCountries[i];
             allCountries[i] = {
                 name: c[0],
                 iso2: c[1],
                 dialCode: c[2],
                 priority: c[3] || 0,
                 areaCodes: c[4] || null
             };
         }
         "use strict";
         function _classCallCheck(instance, Constructor) {
             if (!(instance instanceof Constructor)) {
                 throw new TypeError("Cannot call a class as a function");
             }
         }
         function _defineProperties(target, props) {
             for (var i = 0; i < props.length; i++) {
                 var descriptor = props[i];
                 descriptor.enumerable = descriptor.enumerable || false;
                 descriptor.configurable = true;
                 if ("value" in descriptor) descriptor.writable = true;
                 Object.defineProperty(target, descriptor.key, descriptor);
             }
         }
         function _createClass(Constructor, protoProps, staticProps) {
             if (protoProps) _defineProperties(Constructor.prototype, protoProps);
             if (staticProps) _defineProperties(Constructor, staticProps);
             return Constructor;
         }
         var intlTelInputGlobals = {
             getInstance: function getInstance(input) {
                 var id = input.getAttribute("data-intl-tel-input-id");
                 return window.intlTelInputGlobals.instances[id];
             },
             instances: {},
             // using a global like this allows us to mock it in the tests
             documentReady: function documentReady() {
                 return document.readyState === "complete";
             }
         };
         if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
         // these vars persist through all instances of the plugin
         var id = 0;
         var defaults = {
             // whether or not to allow the dropdown
             allowDropdown: true,
             // if there is just a dial code in the input: remove it on blur
             autoHideDialCode: true,
             // add a placeholder in the input with an example number for the selected country
             autoPlaceholder: "polite",
             // modify the parentClass
             customContainer: "",
             // modify the auto placeholder
             customPlaceholder: null,
             // append menu to specified element
             dropdownContainer: null,
             // don't display these countries
             excludeCountries: [],
             // format the input value during initialisation and on setNumber
             formatOnDisplay: true,
             // geoIp lookup function
             geoIpLookup: null,
             // inject a hidden input with this name, and on submit, populate it with the result of getNumber
             hiddenInput: "",
             // initial country
             initialCountry: "",
             // localized country names e.g. { 'de': 'Deutschland' }
             localizedCountries: null,
             // don't insert international dial codes
             nationalMode: true,
             // display only these countries
             onlyCountries: [],
             // number type to use for placeholders
             placeholderNumberType: "MOBILE",
             // the countries at the top of the list. defaults to united states and united kingdom
             preferredCountries: [ "us", "gb" ],
             // display the country dial code next to the selected flag so it's not part of the typed number
             separateDialCode: false,
             // specify the path to the libphonenumber script to enable validation/formatting
             utilsScript: ""
         };
         // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
         var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
         // utility function to iterate over an object. can't use Object.entries or native forEach because
         // of IE11
         var forEachProp = function forEachProp(obj, callback) {
             var keys = Object.keys(obj);
             for (var i = 0; i < keys.length; i++) {
                 callback(keys[i], obj[keys[i]]);
             }
         };
         // run a method on each instance of the plugin
         var forEachInstance = function forEachInstance(method) {
             forEachProp(window.intlTelInputGlobals.instances, function(key) {
                 window.intlTelInputGlobals.instances[key][method]();
             });
         };
         // this is our plugin class that we will create an instance of
         // eslint-disable-next-line no-unused-vars
         var Iti = /*#__PURE__*/
         function() {
             function Iti(input, options) {
                 var _this = this;
                 _classCallCheck(this, Iti);
                 this.id = id++;
                 this.telInput = input;
                 this.activeItem = null;
                 this.highlightedItem = null;
                 // process specified options / defaults
                 // alternative to Object.assign, which isn't supported by IE11
                 var customOptions = options || {};
                 this.options = {};
                 forEachProp(defaults, function(key, value) {
                     _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                 });
                 this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
             }
             _createClass(Iti, [ {
                 key: "_init",
                 value: function _init() {
                     var _this2 = this;
                     // if in nationalMode, disable options relating to dial codes
                     if (this.options.nationalMode) this.options.autoHideDialCode = false;
                     // if separateDialCode then doesn't make sense to A) insert dial code into input
                     // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                     // dial code next to them)
                     if (this.options.separateDialCode) {
                         this.options.autoHideDialCode = this.options.nationalMode = false;
                     }
                     // we cannot just test screen size as some smartphones/website meta tags will report desktop
                     // resolutions
                     // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                     // rest of these declarations
                     // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                     this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                     if (this.isMobile) {
                         // trigger the mobile dropdown css
                         document.body.classList.add("iti-mobile");
                         // on mobile, we want a full screen dropdown, so we must append it to the body
                         if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                     }
                     // these promises get resolved when their individual requests complete
                     // this way the dev can do something like iti.promise.then(...) to know when all requests are
                     // complete
                     if (typeof Promise !== "undefined") {
                         var autoCountryPromise = new Promise(function(resolve, reject) {
                             _this2.resolveAutoCountryPromise = resolve;
                             _this2.rejectAutoCountryPromise = reject;
                         });
                         var utilsScriptPromise = new Promise(function(resolve, reject) {
                             _this2.resolveUtilsScriptPromise = resolve;
                             _this2.rejectUtilsScriptPromise = reject;
                         });
                         this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                     } else {
                         // prevent errors when Promise doesn't exist
                         this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                         this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                     }
                     // in various situations there could be no country selected initially, but we need to be able
                     // to assume this variable exists
                     this.selectedCountryData = {};
                     // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                     this._processCountryData();
                     // generate the markup
                     this._generateMarkup();
                     // set the initial state of the input value and the selected flag
                     this._setInitialState();
                     // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                     this._initListeners();
                     // utils script, and auto country
                     this._initRequests();
                 }
             }, {
                 key: "_processCountryData",
                 value: function _processCountryData() {
                     // process onlyCountries or excludeCountries array if present
                     this._processAllCountries();
                     // process the countryCodes map
                     this._processCountryCodes();
                     // process the preferredCountries
                     this._processPreferredCountries();
                     // translate countries according to localizedCountries option
                     if (this.options.localizedCountries) this._translateCountriesByLocale();
                     // sort countries by name
                     if (this.options.onlyCountries.length || this.options.localizedCountries) {
                         this.countries.sort(this._countryNameSort);
                     }
                 }
             }, {
                 key: "_addCountryCode",
                 value: function _addCountryCode(iso2, countryCode, priority) {
                     if (countryCode.length > this.countryCodeMaxLen) {
                         this.countryCodeMaxLen = countryCode.length;
                     }
                     if (!this.countryCodes.hasOwnProperty(countryCode)) {
                         this.countryCodes[countryCode] = [];
                     }
                     // bail if we already have this country for this countryCode
                     for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
                         if (this.countryCodes[countryCode][i] === iso2) return;
                     }
                     // check for undefined as 0 is falsy
                     var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                     this.countryCodes[countryCode][index] = iso2;
                 }
             }, {
                 key: "_processAllCountries",
                 value: function _processAllCountries() {
                     if (this.options.onlyCountries.length) {
                         var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                             return country.toLowerCase();
                         });
                         this.countries = allCountries.filter(function(country) {
                             return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                         });
                     } else if (this.options.excludeCountries.length) {
                         var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                             return country.toLowerCase();
                         });
                         this.countries = allCountries.filter(function(country) {
                             return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                         });
                     } else {
                         this.countries = allCountries;
                     }
                 }
             }, {
                 key: "_translateCountriesByLocale",
                 value: function _translateCountriesByLocale() {
                     for (var i = 0; i < this.countries.length; i++) {
                         var iso = this.countries[i].iso2.toLowerCase();
                         if (this.options.localizedCountries.hasOwnProperty(iso)) {
                             this.countries[i].name = this.options.localizedCountries[iso];
                         }
                     }
                 }
             }, {
                 key: "_countryNameSort",
                 value: function _countryNameSort(a, b) {
                     return a.name.localeCompare(b.name);
                 }
             }, {
                 key: "_processCountryCodes",
                 value: function _processCountryCodes() {
                     this.countryCodeMaxLen = 0;
                     // here we store just dial codes
                     this.dialCodes = {};
                     // here we store "country codes" (both dial codes and their area codes)
                     this.countryCodes = {};
                     // first: add dial codes
                     for (var i = 0; i < this.countries.length; i++) {
                         var c = this.countries[i];
                         if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                         this._addCountryCode(c.iso2, c.dialCode, c.priority);
                     }
                     // next: add area codes
                     // this is a second loop over countries, to make sure we have all of the "root" countries
                     // already in the map, so that we can access them, as each time we add an area code substring
                     // to the map, we also need to include the "root" country's code, as that also matches
                     for (var _i = 0; _i < this.countries.length; _i++) {
                         var _c = this.countries[_i];
                         // area codes
                         if (_c.areaCodes) {
                             var rootCountryCode = this.countryCodes[_c.dialCode][0];
                             // for each area code
                             for (var j = 0; j < _c.areaCodes.length; j++) {
                                 var areaCode = _c.areaCodes[j];
                                 // for each digit in the area code to add all partial matches as well
                                 for (var k = 1; k < areaCode.length; k++) {
                                     var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                     // start with the root country, as that also matches this dial code
                                     this._addCountryCode(rootCountryCode, partialDialCode);
                                     this._addCountryCode(_c.iso2, partialDialCode);
                                 }
                                 // add the full area code
                                 this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                             }
                         }
                     }
                 }
             }, {
                 key: "_processPreferredCountries",
                 value: function _processPreferredCountries() {
                     this.preferredCountries = [];
                     for (var i = 0; i < this.options.preferredCountries.length; i++) {
                         var countryCode = this.options.preferredCountries[i].toLowerCase();
                         var countryData = this._getCountryData(countryCode, false, true);
                         if (countryData) this.preferredCountries.push(countryData);
                     }
                 }
             }, {
                 key: "_createEl",
                 value: function _createEl(name, attrs, container) {
                     var el = document.createElement(name);
                     if (attrs) forEachProp(attrs, function(key, value) {
                         return el.setAttribute(key, value);
                     });
                     if (container) container.appendChild(el);
                     return el;
                 }
             }, {
                 key: "_generateMarkup",
                 value: function _generateMarkup() {
                     // if autocomplete does not exist on the element and its form, then
                     // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                     // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                     // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                     if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                         this.telInput.setAttribute("autocomplete", "off");
                     }
                     // containers (mostly for positioning)
                     var parentClass = "iti";
                     if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                     if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                     if (this.options.customContainer) {
                         parentClass += " ";
                         parentClass += this.options.customContainer;
                     }
                     var wrapper = this._createEl("div", {
                         "class": parentClass
                     });
                     this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                     this.flagsContainer = this._createEl("div", {
                         "class": "iti__flag-container"
                     }, wrapper);
                     wrapper.appendChild(this.telInput);
                     // selected flag (displayed to left of input)
                     this.selectedFlag = this._createEl("div", {
                         "class": "iti__selected-flag",
                         role: "combobox",
                         "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                         "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                         "aria-expanded": "false"
                     }, this.flagsContainer);
                     this.selectedFlagInner = this._createEl("div", {
                         "class": "iti__flag"
                     }, this.selectedFlag);
                     if (this.options.separateDialCode) {
                         this.selectedDialCode = this._createEl("div", {
                             "class": "iti__selected-dial-code"
                         }, this.selectedFlag);
                     }
                     if (this.options.allowDropdown) {
                         // make element focusable and tab navigable
                         this.selectedFlag.setAttribute("tabindex", "0");
                         this.dropdownArrow = this._createEl("div", {
                             "class": "iti__arrow"
                         }, this.selectedFlag);
                         // country dropdown: preferred countries, then divider, then all countries
                         this.countryList = this._createEl("ul", {
                             "class": "iti__country-list iti__hide",
                             id: "iti-".concat(this.id, "__country-listbox"),
                             role: "listbox",
                             "aria-label": "List of countries"
                         });
                         if (this.preferredCountries.length) {
                             this._appendListItems(this.preferredCountries, "iti__preferred", true);
                             this._createEl("li", {
                                 "class": "iti__divider",
                                 role: "separator",
                                 "aria-disabled": "true"
                             }, this.countryList);
                         }
                         this._appendListItems(this.countries, "iti__standard");
                         // create dropdownContainer markup
                         if (this.options.dropdownContainer) {
                             this.dropdown = this._createEl("div", {
                                 "class": "iti iti--container"
                             });
                             this.dropdown.appendChild(this.countryList);
                         } else {
                             this.flagsContainer.appendChild(this.countryList);
                         }
                     }
                     if (this.options.hiddenInput) {
                         var hiddenInputName = this.options.hiddenInput;
                         var name = this.telInput.getAttribute("name");
                         if (name) {
                             var i = name.lastIndexOf("[");
                             // if input name contains square brackets, then give the hidden input the same name,
                             // replacing the contents of the last set of brackets with the given hiddenInput name
                             if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                         }
                         this.hiddenInput = this._createEl("input", {
                             type: "hidden",
                             name: hiddenInputName
                         });
                         wrapper.appendChild(this.hiddenInput);
                     }
                 }
             }, {
                 key: "_appendListItems",
                 value: function _appendListItems(countries, className, preferred) {
                     // we create so many DOM elements, it is faster to build a temp string
                     // and then add everything to the DOM in one go at the end
                     var tmp = "";
                     // for each country
                     for (var i = 0; i < countries.length; i++) {
                         var c = countries[i];
                         var idSuffix = preferred ? "-preferred" : "";
                         // open the list item
                         tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                         // add the flag
                         tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                         // and the country name and dial code
                         tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                         tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                         // close the list item
                         tmp += "</li>";
                     }
                     this.countryList.insertAdjacentHTML("beforeend", tmp);
                 }
             }, {
                 key: "_setInitialState",
                 value: function _setInitialState() {
                     // fix firefox bug: when first load page (with input with value set to number with intl dial
                     // code) and initialising plugin removes the dial code from the input, then refresh page,
                     // and we try to init plugin again but this time on number without dial code so get grey flag
                     var attributeValue = this.telInput.getAttribute("value");
                     var inputValue = this.telInput.value;
                     var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                     var val = useAttribute ? attributeValue : inputValue;
                     var dialCode = this._getDialCode(val);
                     var isRegionlessNanp = this._isRegionlessNanp(val);
                     var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                     // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                     // flag, else fall back to the default country
                     if (dialCode && !isRegionlessNanp) {
                         this._updateFlagFromNumber(val);
                     } else if (initialCountry !== "auto") {
                         // see if we should select a flag
                         if (initialCountry) {
                             this._setFlag(initialCountry.toLowerCase());
                         } else {
                             if (dialCode && isRegionlessNanp) {
                                 // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                 this._setFlag("us");
                             } else {
                                 // no dial code and no initialCountry, so default to first in list
                                 this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                 if (!val) {
                                     this._setFlag(this.defaultCountry);
                                 }
                             }
                         }
                         // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                         if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                             this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                         }
                     }
                     // NOTE: if initialCountry is set to auto, that will be handled separately
                     // format - note this wont be run after _updateDialCode as that's only called if no val
                     if (val) this._updateValFromNumber(val);
                 }
             }, {
                 key: "_initListeners",
                 value: function _initListeners() {
                     this._initKeyListeners();
                     if (this.options.autoHideDialCode) this._initBlurListeners();
                     if (this.options.allowDropdown) this._initDropdownListeners();
                     if (this.hiddenInput) this._initHiddenInputListener();
                 }
             }, {
                 key: "_initHiddenInputListener",
                 value: function _initHiddenInputListener() {
                     var _this3 = this;
                     this._handleHiddenInputSubmit = function() {
                         _this3.hiddenInput.value = _this3.getNumber();
                     };
                     if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                 }
             }, {
                 key: "_getClosestLabel",
                 value: function _getClosestLabel() {
                     var el = this.telInput;
                     while (el && el.tagName !== "LABEL") {
                         el = el.parentNode;
                     }
                     return el;
                 }
             }, {
                 key: "_initDropdownListeners",
                 value: function _initDropdownListeners() {
                     var _this4 = this;
                     // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                     // open the dropdown would then automatically trigger a 2nd click on the input which would
                     // close it again
                     this._handleLabelClick = function(e) {
                         // if the dropdown is closed, then focus the input, else ignore the click
                         if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus(); else e.preventDefault();
                     };
                     var label = this._getClosestLabel();
                     if (label) label.addEventListener("click", this._handleLabelClick);
                     // toggle country dropdown on click
                     this._handleClickSelectedFlag = function() {
                         // only intercept this event if we're opening the dropdown
                         // else let it bubble up to the top ("click-off-to-close" listener)
                         // we cannot just stopPropagation as it may be needed to close another instance
                         if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                             _this4._showDropdown();
                         }
                     };
                     this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                     // open dropdown list if currently focused
                     this._handleFlagsContainerKeydown = function(e) {
                         var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                         if (isDropdownHidden && [ "ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter" ].indexOf(e.key) !== -1) {
                             // prevent form from being submitted if "ENTER" was pressed
                             e.preventDefault();
                             // prevent event from being handled again by document
                             e.stopPropagation();
                             _this4._showDropdown();
                         }
                         // allow navigation from dropdown to input on TAB
                         if (e.key === "Tab") _this4._closeDropdown();
                     };
                     this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                 }
             }, {
                 key: "_initRequests",
                 value: function _initRequests() {
                     var _this5 = this;
                     // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                     if (this.options.utilsScript && !window.intlTelInputUtils) {
                         // if the plugin is being initialised after the window.load event has already been fired
                         if (window.intlTelInputGlobals.documentReady()) {
                             window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                         } else {
                             // wait until the load event so we don't block any other requests e.g. the flags image
                             window.addEventListener("load", function() {
                                 window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                             });
                         }
                     } else this.resolveUtilsScriptPromise();
                     if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                 }
             }, {
                 key: "_loadAutoCountry",
                 value: function _loadAutoCountry() {
                     // 3 options:
                     // 1) already loaded (we're done)
                     // 2) not already started loading (start)
                     // 3) already started loading (do nothing - just wait for loading callback to fire)
                     if (window.intlTelInputGlobals.autoCountry) {
                         this.handleAutoCountry();
                     } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                         // don't do this twice!
                         window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                         if (typeof this.options.geoIpLookup === "function") {
                             this.options.geoIpLookup(function(countryCode) {
                                 window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                 // tell all instances the auto country is ready
                                 // TODO: this should just be the current instances
                                 // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                 // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                 // setTimeout means that the current thread of execution will finish before executing
                                 // this, which allows the plugin to finish initialising.
                                 setTimeout(function() {
                                     return forEachInstance("handleAutoCountry");
                                 });
                             }, function() {
                                 return forEachInstance("rejectAutoCountryPromise");
                             });
                         }
                     }
                 }
             }, {
                 key: "_initKeyListeners",
                 value: function _initKeyListeners() {
                     var _this6 = this;
                     // update flag on keyup
                     this._handleKeyupEvent = function() {
                         if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                             _this6._triggerCountryChange();
                         }
                     };
                     this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                     // update flag on cut/paste events (now supported in all major browsers)
                     this._handleClipboardEvent = function() {
                         // hack because "paste" event is fired before input is updated
                         setTimeout(_this6._handleKeyupEvent);
                     };
                     this.telInput.addEventListener("cut", this._handleClipboardEvent);
                     this.telInput.addEventListener("paste", this._handleClipboardEvent);
                 }
             }, {
                 key: "_cap",
                 value: function _cap(number) {
                     var max = this.telInput.getAttribute("maxlength");
                     return max && number.length > max ? number.substr(0, max) : number;
                 }
             }, {
                 key: "_initBlurListeners",
                 value: function _initBlurListeners() {
                     var _this7 = this;
                     // on blur or form submit: if just a dial code then remove it
                     this._handleSubmitOrBlurEvent = function() {
                         _this7._removeEmptyDialCode();
                     };
                     if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                     this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                 }
             }, {
                 key: "_removeEmptyDialCode",
                 value: function _removeEmptyDialCode() {
                     if (this.telInput.value.charAt(0) === "+") {
                         var numeric = this._getNumeric(this.telInput.value);
                         // if just a plus, or if just a dial code
                         if (!numeric || this.selectedCountryData.dialCode === numeric) {
                             this.telInput.value = "";
                         }
                     }
                 }
             }, {
                 key: "_getNumeric",
                 value: function _getNumeric(s) {
                     return s.replace(/\D/g, "");
                 }
             }, {
                 key: "_trigger",
                 value: function _trigger(name) {
                     // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                     var e = document.createEvent("Event");
                     e.initEvent(name, true, true);
                     // can bubble, and is cancellable
                     this.telInput.dispatchEvent(e);
                 }
             }, {
                 key: "_showDropdown",
                 value: function _showDropdown() {
                     this.countryList.classList.remove("iti__hide");
                     this.selectedFlag.setAttribute("aria-expanded", "true");
                     this._setDropdownPosition();
                     // update highlighting and scroll to active list item
                     if (this.activeItem) {
                         this._highlightListItem(this.activeItem, false);
                         this._scrollTo(this.activeItem, true);
                     }
                     // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                     this._bindDropdownListeners();
                     // update the arrow
                     this.dropdownArrow.classList.add("iti__arrow--up");
                     this._trigger("open:countrydropdown");
                 }
             }, {
                 key: "_toggleClass",
                 value: function _toggleClass(el, className, shouldHaveClass) {
                     if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                 }
             }, {
                 key: "_setDropdownPosition",
                 value: function _setDropdownPosition() {
                     var _this8 = this;
                     if (this.options.dropdownContainer) {
                         this.options.dropdownContainer.appendChild(this.dropdown);
                     }
                     if (!this.isMobile) {
                         var pos = this.telInput.getBoundingClientRect();
                         // windowTop from https://stackoverflow.com/a/14384091/217866
                         var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                         var inputTop = pos.top + windowTop;
                         var dropdownHeight = this.countryList.offsetHeight;
                         // dropdownFitsBelow = (dropdownBottom < windowBottom)
                         var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                         var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                         // by default, the dropdown will be below the input. If we want to position it above the
                         // input, we add the dropup class.
                         this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                         // if dropdownContainer is enabled, calculate postion
                         if (this.options.dropdownContainer) {
                             // by default the dropdown will be directly over the input because it's not in the flow.
                             // If we want to position it below, we need to add some extra top value.
                             var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                             // calculate placement
                             this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                             this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                             // close menu on window scroll
                             this._handleWindowScroll = function() {
                                 return _this8._closeDropdown();
                             };
                             window.addEventListener("scroll", this._handleWindowScroll);
                         }
                     }
                 }
             }, {
                 key: "_getClosestListItem",
                 value: function _getClosestListItem(target) {
                     var el = target;
                     while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
                         el = el.parentNode;
                     }
                     // if we reached the countryList element, then return null
                     return el === this.countryList ? null : el;
                 }
             }, {
                 key: "_bindDropdownListeners",
                 value: function _bindDropdownListeners() {
                     var _this9 = this;
                     // when mouse over a list item, just highlight that one
                     // we add the class "highlight", so if they hit "enter" we know which one to select
                     this._handleMouseoverCountryList = function(e) {
                         // handle event delegation, as we're listening for this event on the countryList
                         var listItem = _this9._getClosestListItem(e.target);
                         if (listItem) _this9._highlightListItem(listItem, false);
                     };
                     this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                     // listen for country selection
                     this._handleClickCountryList = function(e) {
                         var listItem = _this9._getClosestListItem(e.target);
                         if (listItem) _this9._selectListItem(listItem);
                     };
                     this.countryList.addEventListener("click", this._handleClickCountryList);
                     // click off to close
                     // (except when this initial opening click is bubbling up)
                     // we cannot just stopPropagation as it may be needed to close another instance
                     var isOpening = true;
                     this._handleClickOffToClose = function() {
                         if (!isOpening) _this9._closeDropdown();
                         isOpening = false;
                     };
                     document.documentElement.addEventListener("click", this._handleClickOffToClose);
                     // listen for up/down scrolling, enter to select, or letters to jump to country name.
                     // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                     // just hit down and hold it to scroll down (no keyup event).
                     // listen on the document because that's where key events are triggered if no input has focus
                     var query = "";
                     var queryTimer = null;
                     this._handleKeydownOnDropdown = function(e) {
                         // prevent down key from scrolling the whole page,
                         // and enter key from submitting a form etc
                         e.preventDefault();
                         // up and down to navigate
                         if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                             // jump to countries that start with the query string
                             if (queryTimer) clearTimeout(queryTimer);
                             query += e.key.toLowerCase();
                             _this9._searchForCountry(query);
                             // if the timer hits 1 second, reset the query
                             queryTimer = setTimeout(function() {
                                 query = "";
                             }, 1e3);
                         }
                     };
                     document.addEventListener("keydown", this._handleKeydownOnDropdown);
                 }
             }, {
                 key: "_handleUpDownKey",
                 value: function _handleUpDownKey(key) {
                     var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                     if (next) {
                         // skip the divider
                         if (next.classList.contains("iti__divider")) {
                             next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                         }
                         this._highlightListItem(next, true);
                     }
                 }
             }, {
                 key: "_handleEnterKey",
                 value: function _handleEnterKey() {
                     if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                 }
             }, {
                 key: "_searchForCountry",
                 value: function _searchForCountry(query) {
                     for (var i = 0; i < this.countries.length; i++) {
                         if (this._startsWith(this.countries[i].name, query)) {
                             var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                             // update highlighting and scroll
                             this._highlightListItem(listItem, false);
                             this._scrollTo(listItem, true);
                             break;
                         }
                     }
                 }
             }, {
                 key: "_startsWith",
                 value: function _startsWith(a, b) {
                     return a.substr(0, b.length).toLowerCase() === b;
                 }
             }, {
                 key: "_updateValFromNumber",
                 value: function _updateValFromNumber(originalNumber) {
                     var number = originalNumber;
                     if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                         var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                         var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                         var format = useNational ? NATIONAL : INTERNATIONAL;
                         number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                     }
                     number = this._beforeSetNumber(number);
                     this.telInput.value = number;
                 }
             }, {
                 key: "_updateFlagFromNumber",
                 value: function _updateFlagFromNumber(originalNumber) {
                     // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                     // with a +1 so _getDialCode will be able to extract the area code
                     // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                     // from the number), that means we're initialising the plugin with a number that already has a
                     // dial code, so fine to ignore this bit
                     var number = originalNumber;
                     var selectedDialCode = this.selectedCountryData.dialCode;
                     var isNanp = selectedDialCode === "1";
                     if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                         if (number.charAt(0) !== "1") number = "1".concat(number);
                         number = "+".concat(number);
                     }
                     // update flag if user types area code for another country
                     if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
                         number = "+".concat(selectedDialCode).concat(number);
                     }
                     // try and extract valid dial code from input
                     var dialCode = this._getDialCode(number, true);
                     var numeric = this._getNumeric(number);
                     var countryCode = null;
                     if (dialCode) {
                         var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                         // check if the right country is already selected. this should be false if the number is
                         // longer than the matched dial code because in this case we need to make sure that if
                         // there are multiple country matches, that the first one is selected (note: we could
                         // just check that here, but it requires the same loop that we already have later)
                         var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                         var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                         // only update the flag if:
                         // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                         // AND
                         // B) the right country is not already selected
                         if (!isRegionlessNanpNumber && !alreadySelected) {
                             // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                             // non-empty index
                             for (var j = 0; j < countryCodes.length; j++) {
                                 if (countryCodes[j]) {
                                     countryCode = countryCodes[j];
                                     break;
                                 }
                             }
                         }
                     } else if (number.charAt(0) === "+" && numeric.length) {
                         // invalid dial code, so empty
                         // Note: use getNumeric here because the number has not been formatted yet, so could contain
                         // bad chars
                         countryCode = "";
                     } else if (!number || number === "+") {
                         // empty, or just a plus, so default
                         countryCode = this.defaultCountry;
                     }
                     if (countryCode !== null) {
                         return this._setFlag(countryCode);
                     }
                     return false;
                 }
             }, {
                 key: "_isRegionlessNanp",
                 value: function _isRegionlessNanp(number) {
                     var numeric = this._getNumeric(number);
                     if (numeric.charAt(0) === "1") {
                         var areaCode = numeric.substr(1, 3);
                         return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                     }
                     return false;
                 }
             }, {
                 key: "_highlightListItem",
                 value: function _highlightListItem(listItem, shouldFocus) {
                     var prevItem = this.highlightedItem;
                     if (prevItem) prevItem.classList.remove("iti__highlight");
                     this.highlightedItem = listItem;
                     this.highlightedItem.classList.add("iti__highlight");
                     if (shouldFocus) this.highlightedItem.focus();
                 }
             }, {
                 key: "_getCountryData",
                 value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                     var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                     for (var i = 0; i < countryList.length; i++) {
                         if (countryList[i].iso2 === countryCode) {
                             return countryList[i];
                         }
                     }
                     if (allowFail) {
                         return null;
                     }
                     throw new Error("No country data for '".concat(countryCode, "'"));
                 }
             }, {
                 key: "_setFlag",
                 value: function _setFlag(countryCode) {
                     var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                     // do this first as it will throw an error and stop if countryCode is invalid
                     this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                     // update the defaultCountry - we only need the iso2 from now on, so just store that
                     if (this.selectedCountryData.iso2) {
                         this.defaultCountry = this.selectedCountryData.iso2;
                     }
                     this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                     // update the selected country's title attribute
                     var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                     this.selectedFlag.setAttribute("title", title);
                     if (this.options.separateDialCode) {
                         var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                         this.selectedDialCode.innerHTML = dialCode;
                         // offsetWidth is zero if input is in a hidden container during initialisation
                         var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                         // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                         this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                     }
                     // and the input's placeholder
                     this._updatePlaceholder();
                     // update the active list item
                     if (this.options.allowDropdown) {
                         var prevItem = this.activeItem;
                         if (prevItem) {
                             prevItem.classList.remove("iti__active");
                             prevItem.setAttribute("aria-selected", "false");
                         }
                         if (countryCode) {
                             // check if there is a preferred item first, else fall back to standard
                             var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                             nextItem.setAttribute("aria-selected", "true");
                             nextItem.classList.add("iti__active");
                             this.activeItem = nextItem;
                             this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                         }
                     }
                     // return if the flag has changed or not
                     return prevCountry.iso2 !== countryCode;
                 }
             }, {
                 key: "_getHiddenSelectedFlagWidth",
                 value: function _getHiddenSelectedFlagWidth() {
                     // to get the right styling to apply, all we need is a shallow clone of the container,
                     // and then to inject a deep clone of the selectedFlag element
                     var containerClone = this.telInput.parentNode.cloneNode();
                     containerClone.style.visibility = "hidden";
                     document.body.appendChild(containerClone);
                     var flagsContainerClone = this.flagsContainer.cloneNode();
                     containerClone.appendChild(flagsContainerClone);
                     var selectedFlagClone = this.selectedFlag.cloneNode(true);
                     flagsContainerClone.appendChild(selectedFlagClone);
                     var width = selectedFlagClone.offsetWidth;
                     containerClone.parentNode.removeChild(containerClone);
                     return width;
                 }
             }, {
                 key: "_updatePlaceholder",
                 value: function _updatePlaceholder() {
                     var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                     if (window.intlTelInputUtils && shouldSetPlaceholder) {
                         var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                         var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                         placeholder = this._beforeSetNumber(placeholder);
                         if (typeof this.options.customPlaceholder === "function") {
                             placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                         }
                         this.telInput.setAttribute("placeholder", placeholder);
                     }
                 }
             }, {
                 key: "_selectListItem",
                 value: function _selectListItem(listItem) {
                     // update selected flag and active list item
                     var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                     this._closeDropdown();
                     this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                     // focus the input
                     this.telInput.focus();
                     // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                     // inserting dial code), who try to put the cursor at the beginning the first time
                     var len = this.telInput.value.length;
                     this.telInput.setSelectionRange(len, len);
                     if (flagChanged) {
                         this._triggerCountryChange();
                     }
                 }
             }, {
                 key: "_closeDropdown",
                 value: function _closeDropdown() {
                     this.countryList.classList.add("iti__hide");
                     this.selectedFlag.setAttribute("aria-expanded", "false");
                     // update the arrow
                     this.dropdownArrow.classList.remove("iti__arrow--up");
                     // unbind key events
                     document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                     document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                     this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                     this.countryList.removeEventListener("click", this._handleClickCountryList);
                     // remove menu from container
                     if (this.options.dropdownContainer) {
                         if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                         if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                     }
                     this._trigger("close:countrydropdown");
                 }
             }, {
                 key: "_scrollTo",
                 value: function _scrollTo(element, middle) {
                     var container = this.countryList;
                     // windowTop from https://stackoverflow.com/a/14384091/217866
                     var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                     var containerHeight = container.offsetHeight;
                     var containerTop = container.getBoundingClientRect().top + windowTop;
                     var containerBottom = containerTop + containerHeight;
                     var elementHeight = element.offsetHeight;
                     var elementTop = element.getBoundingClientRect().top + windowTop;
                     var elementBottom = elementTop + elementHeight;
                     var newScrollTop = elementTop - containerTop + container.scrollTop;
                     var middleOffset = containerHeight / 2 - elementHeight / 2;
                     if (elementTop < containerTop) {
                         // scroll up
                         if (middle) newScrollTop -= middleOffset;
                         container.scrollTop = newScrollTop;
                     } else if (elementBottom > containerBottom) {
                         // scroll down
                         if (middle) newScrollTop += middleOffset;
                         var heightDifference = containerHeight - elementHeight;
                         container.scrollTop = newScrollTop - heightDifference;
                     }
                 }
             }, {
                 key: "_updateDialCode",
                 value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                     var inputVal = this.telInput.value;
                     // save having to pass this every time
                     var newDialCode = "+".concat(newDialCodeBare);
                     var newNumber;
                     if (inputVal.charAt(0) === "+") {
                         // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                         var prevDialCode = this._getDialCode(inputVal);
                         if (prevDialCode) {
                             // current number contains a valid dial code, so replace it
                             newNumber = inputVal.replace(prevDialCode, newDialCode);
                         } else {
                             // current number contains an invalid dial code, so ditch it
                             // (no way to determine where the invalid dial code ends and the rest of the number begins)
                             newNumber = newDialCode;
                         }
                     } else if (this.options.nationalMode || this.options.separateDialCode) {
                         // don't do anything
                         return;
                     } else {
                         // nationalMode is disabled
                         if (inputVal) {
                             // there is an existing value with no dial code: prefix the new dial code
                             newNumber = newDialCode + inputVal;
                         } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                             // no existing value and either they've just selected a list item, or autoHideDialCode is
                             // disabled: insert new dial code
                             newNumber = newDialCode;
                         } else {
                             return;
                         }
                     }
                     this.telInput.value = newNumber;
                 }
             }, {
                 key: "_getDialCode",
                 value: function _getDialCode(number, includeAreaCode) {
                     var dialCode = "";
                     // only interested in international numbers (starting with a plus)
                     if (number.charAt(0) === "+") {
                         var numericChars = "";
                         // iterate over chars
                         for (var i = 0; i < number.length; i++) {
                             var c = number.charAt(i);
                             // if char is number (https://stackoverflow.com/a/8935649/217866)
                             if (!isNaN(parseInt(c, 10))) {
                                 numericChars += c;
                                 // if current numericChars make a valid dial code
                                 if (includeAreaCode) {
                                     if (this.countryCodes[numericChars]) {
                                         // store the actual raw string (useful for matching later)
                                         dialCode = number.substr(0, i + 1);
                                     }
                                 } else {
                                     if (this.dialCodes[numericChars]) {
                                         dialCode = number.substr(0, i + 1);
                                         // if we're just looking for a dial code, we can break as soon as we find one
                                         break;
                                     }
                                 }
                                 // stop searching as soon as we can - in this case when we hit max len
                                 if (numericChars.length === this.countryCodeMaxLen) {
                                     break;
                                 }
                             }
                         }
                     }
                     return dialCode;
                 }
             }, {
                 key: "_getFullNumber",
                 value: function _getFullNumber() {
                     var val = this.telInput.value.trim();
                     var dialCode = this.selectedCountryData.dialCode;
                     var prefix;
                     var numericVal = this._getNumeric(val);
                     if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
                         // when using separateDialCode, it is visible so is effectively part of the typed number
                         prefix = "+".concat(dialCode);
                     } else {
                         prefix = "";
                     }
                     return prefix + val;
                 }
             }, {
                 key: "_beforeSetNumber",
                 value: function _beforeSetNumber(originalNumber) {
                     var number = originalNumber;
                     if (this.options.separateDialCode) {
                         var dialCode = this._getDialCode(number);
                         // if there is a valid dial code
                         if (dialCode) {
                             // in case _getDialCode returned an area code as well
                             dialCode = "+".concat(this.selectedCountryData.dialCode);
                             // a lot of numbers will have a space separating the dial code and the main number, and
                             // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                             // rid of it
                             // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                             var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                             number = number.substr(start);
                         }
                     }
                     return this._cap(number);
                 }
             }, {
                 key: "_triggerCountryChange",
                 value: function _triggerCountryChange() {
                     this._trigger("countrychange");
                 }
             }, {
                 key: "handleAutoCountry",
                 value: function handleAutoCountry() {
                     if (this.options.initialCountry === "auto") {
                         // we must set this even if there is an initial val in the input: in case the initial val is
                         // invalid and they delete it - they should see their auto country
                         this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                         // if there's no initial value in the input, then update the flag
                         if (!this.telInput.value) {
                             this.setCountry(this.defaultCountry);
                         }
                         this.resolveAutoCountryPromise();
                     }
                 }
             }, {
                 key: "handleUtils",
                 value: function handleUtils() {
                     // if the request was successful
                     if (window.intlTelInputUtils) {
                         // if there's an initial value in the input, then format it
                         if (this.telInput.value) {
                             this._updateValFromNumber(this.telInput.value);
                         }
                         this._updatePlaceholder();
                     }
                     this.resolveUtilsScriptPromise();
                 }
             }, {
                 key: "destroy",
                 value: function destroy() {
                     var form = this.telInput.form;
                     if (this.options.allowDropdown) {
                         // make sure the dropdown is closed (and unbind listeners)
                         this._closeDropdown();
                         this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                         this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                         // label click hack
                         var label = this._getClosestLabel();
                         if (label) label.removeEventListener("click", this._handleLabelClick);
                     }
                     // unbind hiddenInput listeners
                     if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                     // unbind autoHideDialCode listeners
                     if (this.options.autoHideDialCode) {
                         if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                         this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                     }
                     // unbind key events, and cut/paste events
                     this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                     this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                     this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                     // remove attribute of id instance: data-intl-tel-input-id
                     this.telInput.removeAttribute("data-intl-tel-input-id");
                     // remove markup (but leave the original input)
                     var wrapper = this.telInput.parentNode;
                     wrapper.parentNode.insertBefore(this.telInput, wrapper);
                     wrapper.parentNode.removeChild(wrapper);
                     delete window.intlTelInputGlobals.instances[this.id];
                 }
             }, {
                 key: "getExtension",
                 value: function getExtension() {
                     if (window.intlTelInputUtils) {
                         return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                     }
                     return "";
                 }
             }, {
                 key: "getNumber",
                 value: function getNumber(format) {
                     if (window.intlTelInputUtils) {
                         var iso2 = this.selectedCountryData.iso2;
                         return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                     }
                     return "";
                 }
             }, {
                 key: "getNumberType",
                 value: function getNumberType() {
                     if (window.intlTelInputUtils) {
                         return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                     }
                     return -99;
                 }
             }, {
                 key: "getSelectedCountryData",
                 value: function getSelectedCountryData() {
                     return this.selectedCountryData;
                 }
             }, {
                 key: "getValidationError",
                 value: function getValidationError() {
                     if (window.intlTelInputUtils) {
                         var iso2 = this.selectedCountryData.iso2;
                         return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                     }
                     return -99;
                 }
             }, {
                 key: "isValidNumber",
                 value: function isValidNumber() {
                     var val = this._getFullNumber().trim();
                     var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                     return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                 }
             }, {
                 key: "setCountry",
                 value: function setCountry(originalCountryCode) {
                     var countryCode = originalCountryCode.toLowerCase();
                     // check if already selected
                     if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                         this._setFlag(countryCode);
                         this._updateDialCode(this.selectedCountryData.dialCode, false);
                         this._triggerCountryChange();
                     }
                 }
             }, {
                 key: "setNumber",
                 value: function setNumber(number) {
                     // we must update the flag first, which updates this.selectedCountryData, which is used for
                     // formatting the number before displaying it
                     var flagChanged = this._updateFlagFromNumber(number);
                     this._updateValFromNumber(number);
                     if (flagChanged) {
                         this._triggerCountryChange();
                     }
                 }
             }, {
                 key: "setPlaceholderNumberType",
                 value: function setPlaceholderNumberType(type) {
                     this.options.placeholderNumberType = type;
                     this._updatePlaceholder();
                 }
             } ]);
             return Iti;
         }();
         /********************
  *  STATIC METHODS
  ********************/
         // get the country data object
         intlTelInputGlobals.getCountryData = function() {
             return allCountries;
         };
         // inject a <script> element to load utils.js
         var injectScript = function injectScript(path, handleSuccess, handleFailure) {
             // inject a new script element into the page
             var script = document.createElement("script");
             script.onload = function() {
                 forEachInstance("handleUtils");
                 if (handleSuccess) handleSuccess();
             };
             script.onerror = function() {
                 forEachInstance("rejectUtilsScriptPromise");
                 if (handleFailure) handleFailure();
             };
             script.className = "iti-load-utils";
             script.async = true;
             script.src = path;
             document.body.appendChild(script);
         };
         // load the utils script
         intlTelInputGlobals.loadUtils = function(path) {
             // 2 options:
             // 1) not already started loading (start)
             // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
             // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
             if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                 // only do this once
                 window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                 // if we have promises, then return a promise
                 if (typeof Promise !== "undefined") {
                     return new Promise(function(resolve, reject) {
                         return injectScript(path, resolve, reject);
                     });
                 }
                 injectScript(path);
             }
             return null;
         };
         // default options
         intlTelInputGlobals.defaults = defaults;
         // version
         intlTelInputGlobals.version = "17.0.13";
         // convenience wrapper
         return function(input, options) {
             var iti = new Iti(input, options);
             iti._init();
             input.setAttribute("data-intl-tel-input-id", iti.id);
             window.intlTelInputGlobals.instances[iti.id] = iti;
             return iti;
         };
     }();
 });;
 (function(){/*
 
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
 */
 var aa=this||self;function k(a,b){a=a.split(".");var c=aa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function m(a,b){function c(){}c.prototype=b.prototype;a.$=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fa=function(d,e,g){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[e].apply(d,f)}};function n(a,b){null!=a&&this.g.apply(this,arguments)}n.prototype.i="";n.prototype.set=function(a){this.i=""+a};n.prototype.g=function(a,b,c){this.i+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.i+=arguments[d];return this};n.prototype.toString=function(){return this.i};function ba(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function q(a,b){a.sort(b||ca)}function ca(a,b){return a>b?1:a<b?-1:0};function da(a,b){this.i=a;this.g={};for(a=0;a<b.length;a++){var c=b[a];this.g[c.g]=c}}function ea(a){a=ba(a.g);q(a,function(b,c){return b.g-c.g});return a};function fa(a,b){this.g=a;this.m=!!b.o;this.i=b.h;this.v=b.type;this.u=!1;switch(this.i){case ha:case ia:case ja:case ka:case la:case ma:case na:this.u=!0}this.l=b.defaultValue}var na=1,ma=2,ha=3,ia=4,ja=6,ka=16,la=18;function r(){this.g={};this.l=this.j().g;this.i=this.m=null}r.prototype.has=function(a){return null!=this.g[a.g]};r.prototype.get=function(a,b){return t(this,a.g,b)};r.prototype.set=function(a,b){u(this,a.g,b)};r.prototype.add=function(a,b){v(this,a.g,b)};
 function oa(a,b){for(var c=ea(a.j()),d=0;d<c.length;d++){var e=c[d],g=e.g;if(null!=b.g[g]){a.i&&delete a.i[e.g];var f=11==e.i||10==e.i;if(e.m){e=w(b,g);for(var h=0;h<e.length;h++)v(a,g,f?e[h].clone():e[h])}else e=x(b,g),f?(f=x(a,g))?oa(f,e):u(a,g,e.clone()):u(a,g,e)}}}r.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.g={},a.i&&(a.i={}),oa(a,this));return a};
 function x(a,b){var c=a.g[b];if(null==c)return null;if(a.m){if(!(b in a.i)){var d=a.m,e=a.l[b];if(null!=c)if(e.m){for(var g=[],f=0;f<c.length;f++)g[f]=d.i(e,c[f]);c=g}else c=d.i(e,c);return a.i[b]=c}return a.i[b]}return c}function t(a,b,c){var d=x(a,b);return a.l[b].m?d[c||0]:d}function y(a,b){if(null!=a.g[b])a=t(a,b,void 0);else a:{a=a.l[b];if(void 0===a.l)if(b=a.v,b===Boolean)a.l=!1;else if(b===Number)a.l=0;else if(b===String)a.l=a.u?"0":"";else{a=new b;break a}a=a.l}return a}
 function w(a,b){return x(a,b)||[]}function A(a,b){return a.l[b].m?null!=a.g[b]?a.g[b].length:0:null!=a.g[b]?1:0}function u(a,b,c){a.g[b]=c;a.i&&(a.i[b]=c)}function v(a,b,c){a.g[b]||(a.g[b]=[]);a.g[b].push(c);a.i&&delete a.i[b]}function B(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new da(a,c)};/*
 
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
  http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */
 function C(){r.call(this)}m(C,r);var pa=null;function D(){r.call(this)}m(D,r);var qa=null;function E(){r.call(this)}m(E,r);var ra=null;
 C.prototype.j=function(){var a=pa;a||(pa=a=B(C,{0:{name:"NumberFormat",s:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,h:9,type:String},2:{name:"format",required:!0,h:9,type:String},3:{name:"leading_digits_pattern",o:!0,h:9,type:String},4:{name:"national_prefix_formatting_rule",h:9,type:String},6:{name:"national_prefix_optional_when_formatting",h:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",h:9,type:String}}));return a};C.j=C.prototype.j;
 D.prototype.j=function(){var a=qa;a||(qa=a=B(D,{0:{name:"PhoneNumberDesc",s:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",h:9,type:String},9:{name:"possible_length",o:!0,h:5,type:Number},10:{name:"possible_length_local_only",o:!0,h:5,type:Number},6:{name:"example_number",h:9,type:String}}));return a};D.j=D.prototype.j;
 E.prototype.j=function(){var a=ra;a||(ra=a=B(E,{0:{name:"PhoneMetadata",s:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",h:11,type:D},2:{name:"fixed_line",h:11,type:D},3:{name:"mobile",h:11,type:D},4:{name:"toll_free",h:11,type:D},5:{name:"premium_rate",h:11,type:D},6:{name:"shared_cost",h:11,type:D},7:{name:"personal_number",h:11,type:D},8:{name:"voip",h:11,type:D},21:{name:"pager",h:11,type:D},25:{name:"uan",h:11,type:D},27:{name:"emergency",h:11,type:D},28:{name:"voicemail",h:11,type:D},
 29:{name:"short_code",h:11,type:D},30:{name:"standard_rate",h:11,type:D},31:{name:"carrier_specific",h:11,type:D},33:{name:"sms_services",h:11,type:D},24:{name:"no_international_dialling",h:11,type:D},9:{name:"id",required:!0,h:9,type:String},10:{name:"country_code",h:5,type:Number},11:{name:"international_prefix",h:9,type:String},17:{name:"preferred_international_prefix",h:9,type:String},12:{name:"national_prefix",h:9,type:String},13:{name:"preferred_extn_prefix",h:9,type:String},15:{name:"national_prefix_for_parsing",
 h:9,type:String},16:{name:"national_prefix_transform_rule",h:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",h:8,defaultValue:!1,type:Boolean},19:{name:"number_format",o:!0,h:11,type:C},20:{name:"intl_number_format",o:!0,h:11,type:C},22:{name:"main_country_for_code",h:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",h:9,type:String},26:{name:"leading_zero_possible",h:8,defaultValue:!1,type:Boolean}}));return a};E.j=E.prototype.j;/*
 
  Copyright (C) 2010 The Libphonenumber Authors
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
  http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */
 var F={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
 86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
 253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],
 386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
 691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},sa={AC:[,[,,"(?:[01589]\\d|[46])\\d{4}",
 ,,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:0[1-9]|[1589]\\d)\\d{4}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"(?:1|6\\d)\\d{7}|[135-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"690\\d{6}|[356]\\d{5}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",,,[6]],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],[,"(\\d{4})(\\d{4})","$1 $2",["1"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],
 [,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],[,"(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",
 ,,,"234567890",,,,[7]],[,,"7\\d{8}",,,,"701234567",,,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[1-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"(?:268|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,,"2684601234",
 ,,,[7]],[,,"268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],
 "AG",1,"011","1",,,"1|([457]\\d{6})$","268$1",,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"(?:264|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"264(?:292|4(?:6[12]|9[78]))\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"1|([2457]\\d{6})$","264$1",,,,,[,,"264724\\d{4}",,,,"2647241234",,,,[7]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",,,,,,,[6,7,8,9],[5]],[,,"4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}",,,,"22345678",,,[8],[5,6,7]],[,,"6(?:[78][2-9]|9\\d)\\d{6}",,,,"672123456",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900[1-9]\\d\\d",
 ,,,"900123",,,[6]],[,,"808[1-9]\\d\\d",,,,"808123",,,[6]],[,,"700[2-9]\\d{4}",,,,"70021234",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"(?:[1-489]\\d|55|60|77)\\d{6}",
 ,,,,,,[8],[5,6]],[,,"(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],[,"(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],
 "(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,,"222123456"],[,,"9[1-49]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
 ,,[,,,,,,,,,[-1]]],AR:[,[,,"(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",,,,,,,[10,11],[6,7,8]],[,,"3888[013-9]\\d{5}|(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
 ,,,"1123456789",,,[10],[6,7,8]],[,,"93888[013-9]\\d{5}|9(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
 ,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7,8}",,,,"8001234567"],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
 "9$1",,,[[,"(\\d{3})","$1",["0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911"]],[,"(\\d{2})(\\d{4})","$1-$2",["[1-9]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[1-8]"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
 "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
 "0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
 "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
 "0$1"],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1"]],[[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
 "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
 "0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
 "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]],
 [,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3-$4",["91"]],[,"(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9"]]],[,,,,,,,,,[-1]],,,[,,"810\\d{7}",,,,,,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"(?:[58]\\d\\d|684|900)\\d{7}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
 ,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",,,"1|([267]\\d{6})$","684$1",,,,,[,,,,,,,,,[-1]],,"684",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
 ,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}",,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",
 ,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10|2[018])\\d{6,10}|828\\d{5}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,,"780123456",,,[5,6,7,8,9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(\\d{6})","$1",["1"]],[,"(\\d{3})(\\d{3,10})",
 "$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})",
 "$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AU:[,[,,"1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",,,,,,,[5,6,7,8,9,10]],[,,"(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
 ,,,"212345678",,,[9],[8]],[,,"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"AU",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|(183[12])",,"0011",,
 [[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["13"]],[,"(\\d{3})(\\d{3})","$1 $2",["19"]],[,"(\\d{3})(\\d{4})","$1 $2",["180","1802"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["19"]],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,
 "(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[,,"163\\d{2,6}",,,,"1631234",,,[5,6,7,8,9]],1,,[,,"1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}",,,,,,,[6,7,8,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"(?:[25-79]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",
 ,,,"5601234"],[,,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:28\\d|501)\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"18[1-8]\\d{3,6}",,,,"181234567",,,[6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",,,,"412345678",,,[6,
 7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,"18",[,,,,,,,,,[-1]],[,,"20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,,"10112345"],,,[,,,,,,,,,[-1]]],AZ:[,[,,"365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",,,,,,,[9],
 [7]],[,,"(?:222[0-79]\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}|(?:(?:1[28]|46)\\d|2(?:[045]2|1[24]|2[34]|33|6[23]))\\d{6}",,,,"123123456",,,,[7]],[,,"(?:36554|99[2-9]\\d\\d)\\d{4}|(?:[16]0|4[04]|5[015]|7[07])\\d{7}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[1-9]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365|46","1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365|46","1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,
 [-1]]],BA:[,[,,"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",,,,"30212345",,,[8],[6]],[,,"6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})",
 "$1-$2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}",,,,"70341234",
 ,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"(?:246|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:2(?:[3568]\\d|4[0-57-9])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"(?:246976|900[2-9]\\d\\d)\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"1|([2-9]\\d{6})$","246$1",,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",,,,,,,[6,7,8,9,10]],[,,"(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",
 ,,,"27111234"],[,,"(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
 "0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],[,"(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"4\\d{8}|[1-9]\\d{7}",,,,,,,[8,9]],[,,"80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}",,,,"12345678",,,[8]],[,,"4[5-9]\\d{7}",,,,"470123456",,,[9]],[,,"800[1-9]\\d{4}",,,,"80012345",,,[8]],[,,"(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",
 ,,,"90012345",,,[8]],[,,"7879\\d{4}",,,,"78791234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78(?:0[57]|1[0458]|2[25]|3[15-8]|48|[56]0|7[078])\\d{4}",,,,"78102345",,,[8]],,
 ,[,,,,,,,,,[-1]]],BF:[,[,,"[025-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:0[127]|5[1-8]|[67]\\d)\\d{6}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
 ,,,,,,[6,7,8,9],[4,5]],[,,"2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",,,,"2123456",,,[6,7,8],[4,5]],[,,"43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["1"]],[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})",
 "$1 $2",["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",
 ["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",
 ,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",,,,"17001234"],[,,"(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,
 ,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"(?:[267]\\d|31)\\d{6}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|31|6[1289]|7[125-9])\\d{6}",,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[25689]\\d{7}",,,,,,,[8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234"],[,,"(?:5[1-35-8]|6\\d|9[013-9])\\d{6}",
 ,,,"90011234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234"],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[25689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456"],,,[,,,,,,,,,[-1]]],BL:[,[,,"(?:590|(?:69|80)\\d|976)\\d{6}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,
 ,,,,[-1]],[,,,,,,,,,[-1]],[,,"976[01]\\d{5}",,,,"976012345"],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"(?:441|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}",,,,"4414123456",,,,[7]],[,,"441(?:[2378]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"BM",1,"011","1",,,"1|([2-8]\\d{6})$","441$1",,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}",,,,"2345678"],[,,"(?:22[89]|[78]\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[34]\\d{5}",,,,"5345678"],"BN",673,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
 [,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"(?:[2-467]\\d\\d|8001)\\d{5}",,,,,,,[8,9],[7]],[,,"(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,[8],[7]],[,,"[67]\\d{7}",,,,"71234567",,,[8]],[,,"8001[07]\\d{4}",,,,"800171234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BO",591,"00(?:1\\d)?","0",
 ,,"0(1\\d)?",,,,[[,"(\\d)(\\d{7})","$1 $2",["[23]|4[46]"],,"0$CC $1"],[,"(\\d{8})","$1",["[67]"],,"0$CC $1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,"8001[07]\\d{4}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"(?:[34]1|7\\d)\\d{5}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
 ,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"[347]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",,,,"11961234567",,,[10,11],[8,9]],[,,"800\\d{6,7}",,,,"800123456",,
 ,[9,10]],[,,"300\\d{6}|[59]00\\d{6,7}",,,,"300123456",,,[9,10]],[,,"300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}",,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{3,6})","$1",["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]],[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],[,"(\\d{4})(\\d{4})","$1-$2",["[2-57]",
 "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{5})(\\d{4})","$1-$2",["9"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})",
 "$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"4020\\d{4}|[34]00\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,,"(?:242|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",
 ,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"1|([3-8]\\d{6})$","242$1",,,,,[,,,,,,,,,[-1]],,"242",[,,,,
 ,,,,,[-1]],[,,"242225\\d{4}",,,,"2422250123"],,,[,,,,,,,,,[-1]]],BT:[,[,,"[17]\\d{7}|[2-8]\\d{6}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",975,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],
 [[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BW:[,[,,"(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",,,,,,,[7,8,10]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"77200\\d{3}|(?:321|7(?:[1-6]\\d|7[013-9]|8[01]))\\d{5}",
 ,,,"71123456",,,[8]],[,,"(?:0800|800\\d)\\d{6}",,,,"0800012345",,,[10]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["90"]],[,"(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,
 [-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",,,,"294911911",,,[9]],[,,"800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",
 ,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"0|80?",,"8~10",,[[,"(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],[,"(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"(?:0800\\d|[2-8])\\d{6}",,,,,,,[7,11]],[,,"(?:236|732)\\d{4}|[2-578][02]\\d{5}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,,,,,,,,[-1]],[,,,,,,
 ,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CA:[,[,,"(?:[2-8]\\d|90)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"5062345678",,,,[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50|74)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
 ,,,"5062345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,,"5002345678"],[,,"600[2-9]\\d{6}",,,,"6002012345"],"CA",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,
 ,,,,[-1]],,,[,,,,,,,,,[-1]]],CC:[,[,,"1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",,,,"891621234",,,[9],[8]],[,,"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,
 ,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"CC",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[189]\\d{8}|[1-68]\\d{6}",,,,,,,[7,9]],[,,"12\\d{7}|[1-6]\\d{6}",,,,"1234567"],[,,"88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}",,,,"991234567"],[,,,,,,,,,[-1]],[,,,,
 ,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,"(?:[27]\\d{3}|8776)\\d{4}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],[,,"8776\\d{4}",
 ,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"222\\d{6}|(?:0\\d|80)\\d{7}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}",,,,"061234567"],[,,,,,,,,,[-1]],[,,"80(?:0\\d\\d|11[0-4])\\d{4}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,
 ,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CH:[,[,,"8\\d{11}|[2-9]\\d{8}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"7[35-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],
 [,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02]\\d{9}|[02-9]\\d{7}",
 ,,,,,,[8,10]],[,,"(?:2(?:0[023]|[15]\\d{3}|7(?:2(?:0[23]|1[2357]|[23][45]|4[3-5])|3(?:06|1[69]|[2-6]7)))|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}|2(?:1[02357]|[23][045]|4[03-5])\\d{5}",,,,"21234567"],[,,"(?:(?:0(?:[15]\\d\\d|7(?:[04-8][7-9]|9[78]))|[457]\\d|6[014-9]|8[4-9]|9[4-8])\\d\\d|2[0-3]80)\\d{4}|0[1-9]\\d{6}",,,,"01234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[03-9]|2(?:[02-4]|1[023578])",
 "[03-9]|2(?:[02-4]|1(?:[02357]|80))"]],[,"(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-578]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[578]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,
 ,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",,,,,,,[9,10,11]],[,,"2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[034]\\d|1[0-35-9]|2[1-9]|5[0-2])|600))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,,"221234567",,,[9]],
 [,,"2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[034]\\d|1[0-35-9]|2[1-9]|5[0-2])|600))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,,"221234567",,,[9]],[,,"(?:123|8)00\\d{6}",,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,
 ,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",,,,,,,1,[[,"(\\d{4})","$1",["1(?:[03-589]|21)|[29]0|78"]],[,"(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-3]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})",
 "$1 $2 $3",["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[[,"(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-3]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})",
 "$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,,,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"[26]\\d{8}|88\\d{6,7}",,,,,,,[8,9]],[,,"2(?:22|33)\\d{6}",,,,"222123456",,,[9]],[,,"(?:24[23]|6[5-9]\\d)\\d{6}",,,,"671234567",,,[9]],[,,"88\\d{6,7}",,,,"88012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4 $5",["[26]|88"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",
 ,,,"1012345678",,,[7,8,9,10,11],[5,6]],[,,"1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[0135-9])\\d{8}",,,,"13123456789",,,[11]],[,,"(?:(?:10|21)8|8)00\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
 ,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"00|1(?:[12]\\d|79)\\d\\d00","0",,,"0|(1(?:[12]\\d|79)\\d\\d)",,"00",,[[,"(\\d{5,6})","$1",["96"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{4})","$1 $2",["[1-9]","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],[,"(\\d{4})(\\d{4})",
 "$1 $2",["16[08]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
 "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],
 "0$1","$CC $1"],[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])","26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
 "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
 [,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})",
 "$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
 "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
 "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],
 "0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})","$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],
 [,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}",,,,,,,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|3(?:24[2-6]|3(?:00|3[0-24-9]))\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",
 ,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:[14]4|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["[14][2-9]|[25-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["[14][2-9]|[25-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
 [,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",,,,,,,[8,10]],[,,"210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",,,,"22123456",,,[8]],[,,"(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[0-2468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})",
 "$1 $2",["[2-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",,,,,,,[6,7,8,10],[4,5]],[,,"(?:3[23]|48)\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,"807\\d{7}",,,,"8071234567",,,[10]],[,,,,,,,
 ,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1"],[,"(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"(?:[2-59]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,,"9911234"],[,,"800\\d{4}",,,,"8001234"],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CW:[,[,,"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,,[7,8]],[,,"9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,,"94351234"],[,,"953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}",,,,"95181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",
 ,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[3467]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,"[69]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"1(?:[0-79]\\d|8[0-24-9])\\d{7}|[148]\\d{8}|1\\d{5,7}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
 ,,,"891641234",,,[9],[8]],[,,"4(?:83[0-38]|93[0-4])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"CX",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1",
 "0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"(?:[279]\\d|[58]0)\\d{6}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
 ,,,,,,[9,10,11,12]],[,,"(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],
 [,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[2-4])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:[12]\\d|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|31|[46][1-8])\\d{1,9}",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[2,3]],[,,"32\\d{9,11}|49[3-6]\\d{10}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",
 ,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[2,3,4]],[,,"15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,,"9001234567",,,[10,11]],[,,"180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],[,"(\\d{3})(\\d{3,12})",
 "$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
 "0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],[,"(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],[,"(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],[,"(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],
 [,"(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],[,"(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",
 ,,,"177991234567",,,[12,13]]],DJ:[,[,,"(?:2\\d|77)\\d{6}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",
 ,,,"32123456"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"(?:[58]\\d\\d|767|900)\\d{7}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}",,,,"7672251234",,,,[7]],
 [,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"1|([2-7]\\d{6})$","767$1",,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
 DO:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}",
 ,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8001|8[024]9",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,,[8,9]],[,
 ,"9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}",,,,"12345678"],[,,"(?:5(?:4[0-29]|5\\d|6[01])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}",,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],
 [,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EC:[,[,,"1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}",,,,"991234567",,,[9]],[,,"1800\\d{7}|1[78]00\\d{6}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,
 "0",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-7]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,[,,"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",,,,,,,[7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",
 ,,,"3212345",,,[7]],[,,"5(?:[0-35-9]\\d{6}|4(?:[0-57-9]\\d{5}|6(?:[0-24-9]\\d{4}|3(?:[0-35-9]\\d{3}|4000))))|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[24-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9]|8[2-4])\\d|7(?:[679]\\d|8[13-9]))\\d)|[349]\\d{4})\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",,,,"51234567",,,[7,8]],[,,"800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",,,,"80012345"],[,,"(?:40\\d\\d|900)\\d{4}",,,,"9001234",,,[7,8]],[,
 ,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,"800[2-9]\\d{3}",,,,,,,[7]],[,,,,,,,,,[-1]],,,[,
 ,,,,,,,,[-1]]],EG:[,[,,"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}",,,,"234567890",,,[8,9],[6,7]],[,,"1[0-25]\\d{8}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],
 "0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0\\d|10|6[1267]|7[0-57]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"592(?:4[0-2]|93)\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,
 ,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,,"8370362",,,,[6]],[,,"(?:17[1-3]|7\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",
 ,,,"810123456"],[,,"(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}",,,,"612345678"],[,,"[89]00\\d{6}",,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"(\\d{4})","$1",["905"]],[,"(\\d{6})","$1",["[79]9"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],
 [,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],ET:[,[,,"(?:11|[2-59]\\d)\\d{7}",,,,,,,[9],[7]],[,,"11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
 ,,,"111112345",,,,[7]],[,,"9\\d{8}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}",,,,"131234567",,,[5,6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",
 ,,,"412345678",,,[6,7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{5})","$1",["75[12]"],"0$1"],[,"(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{6})","$1",["11"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],[,
 "(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],[[,"(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],[,"(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],[,,,,,,,,,[-1]],1,"1[03-79]|[2-9]",[,,"20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"],[,,"20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",
 ,,,"10112345"],,,[,,,,,,,,,[-1]]],FJ:[,[,,"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",,,,,,,[7,11]],[,,"603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,,"3212345",,,[7]],[,,"(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,
 [-1]],,,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"(?:[39]\\d\\d|820)\\d{4}",,,,,,,[7]],[,,"31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}",,,,"3201234"],[,,"31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}",
 ,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[389]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FO:[,[,,"[2-9]\\d{5}",,,,,,,[6]],[,,"(?:20|[34]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d|91)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,
 ,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",["[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],[,,"(?:[1-35]\\d|4[1-9])\\d{7}",,,,"123456789"],[,,"(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7(?:00|[3-9]\\d))\\d{6}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}",,,,"891123456"],[,,"8(?:1[01]|2[0156]|84)\\d{6}",
 ,,,"884012345"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["10"]],[,"(\\d{3})(\\d{3})","$1 $2",["1"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],
 ,,[,,,,,,,,,[-1]]],GA:[,[,,"(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",,,,,,,[7,8]],[,,"[01]1\\d{6}",,,,"01441234",,,[8]],[,,"(?:0[2-7]|6[256]|7[47])\\d{6}|[2-7]\\d{6}",,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,"0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})","$1",,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
 ["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GB:[,[,,"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,,[7,9,10],[4,5,6,8]],[,,"(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|4(?:[0-5]\\d\\d|69[7-9]|70[059])|(?:5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[02]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
 ,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",,,,"7400123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",
 ,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])",
 "[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],,[,,"76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GD:[,[,,"(?:473|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
 ,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GD",
 1,"011","1",,,"1|([2-9]\\d{6})$","473$1",,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"(?:[3-57]\\d\\d|800)\\d{6}",,,,,,,[9],[6,7]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6,7]],[,,"5(?:0(?:0(?:0\\d|50)\\d|555[5-9])|(?:111\\d|8(?:58[89]|888))\\d|(?:2222|3333)[0-4]|52(?:00\\d|22[0-4])|75(?:00\\d|7(?:7[7-9]|8[01])))\\d{3}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,,"555123456"],
 [,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70[67]\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"70[67]\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"(?:[56]94|80\\d|976)\\d{6}",,
 ,,,,,[9]],[,,"594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[0-249]\\d|3[0-48])\\d{4}",,,,"694201234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"976\\d{6}",,,,"976012345"],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GG:[,[,,"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
 ,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:(?:781|839)\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0",,,"0|([25-9]\\d{5})$","1481$1",,,,,[,,"76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",
 ,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"(?:[235]\\d{3}|800)\\d{5}",,,,,,,[8,9],[7]],[,,"3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,,"302345678",,,[9],[7]],[,,"(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]|9[1-6]))\\d{6}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[237]|8[0-2]"]],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"(?:[25]\\d\\d|606)\\d{5}",,,,,,,[8]],[,,"21(?:6[24-7]\\d|90[0-2])\\d{3}|2(?:00|2[25])\\d{5}",
 ,,,"20012345"],[,,"(?:5[146-8]\\d|606)\\d{5}",,,,"57123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"(?:19|[2-689]\\d)\\d{4}",,,,,,,[6]],[,,"(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"[245]\\d{5}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",,,,
 "381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"(?:[23679]\\d|5[0-389])\\d{5}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",
 ["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"722\\d{6}|(?:3|6\\d)\\d{7}",,,,,,,[8,9]],[,,"3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}",,,,"30241234",,,[8]],[,,"6[0-356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
 ["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"(?:590|(?:69|80)\\d|976)\\d{6}",,,,,,,[9]],[,,"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"976[01]\\d{5}",,,,"976012345"],"GP",590,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
 ["[569]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GQ:[,[,,"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",,,,,,,[9]],[,,"33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}",,,,"333091234"],[,,"(?:222|55\\d)\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",
 ["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"5005000\\d{3}|8\\d{9,10}|(?:[269]\\d|70)\\d{8}",,,,,,,[10,11]],[,,"2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",
 ,,,"2123456789",,,[10]],[,,"68[57-9]\\d{7}|(?:69|94)\\d{8}",,,,"6912345678",,,[10]],[,,"800\\d{7,8}",,,,"8001234567"],[,,"90[19]\\d{7}",,,,"9091234567",,,[10]],[,,"8(?:0[16]|12|[27]5|50)\\d{7}",,,,"8011234567",,,[10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],[,"(\\d{3})(\\d{3})(\\d{5})",
 "$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"5005000\\d{3}",,,,"5005000123",,,[10]],,,[,,,,,,,,,[-1]]],GT:[,[,,"(?:1\\d{3}|[2-7])\\d{7}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,"[3-5]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],
 ,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"(?:[58]\\d\\d|671|900)\\d{7}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
 ,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"1|([3-9]\\d{6})$","671$1",,1,,,[,,,,,,,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,,,,
 ,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"[49]\\d{8}|4\\d{6}",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5\\d|6[569]|77)\\d{6}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["40"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,[,,"(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",,,,,,,[7]],
 [,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",,,,,,,[5,
 6,7,8,9,11]],[,,"(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-6]|5[0-5]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}",,,,"21234567",,,[8]],[,,"(?:46(?:0[0-7]|1[0-6]|4[0-57-9]|5[0-8]|6[0-4])|5730|6(?:26[013-7]|66[0-3])|70(?:7[1-5]|8[0-4])|848[015-9]|929[03-9])\\d{4}|(?:46[23]|5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|849|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],
 [,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",,,[5,6,7,8,11]],[,,,,,,,,,[-1]],[,,"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:30|5[09]|[126-9]?)",,,,,,"00",,[[,"(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
 ,,,"71123456",,,[8]],,,[,,,,,,,,,[-1]],[,,"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,,"30161234",,,[8]],,,[,,,,,,,,,[-1]]],HN:[,[,,"8\\d{10}|[237-9]\\d{7}",,,,,,,[8,11]],[,,"2(?:2(?:0[0-39]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[78]|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:0[7-9]|16|4[03-5]|5\\d|6[014-6]|74|80)|6(?:[056]\\d|17|2[07]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,,"22123456",,,[8]],[,,"[37-9]\\d{7}",
 ,,,"91234567",,,[8]],[,,"8002\\d{7}",,,,"80021234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["8"]]],[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]],[,,,,,,,,,[-1]],,,[,,"8002\\d{7}",,,,,,,[11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
 ,,,"12345678",,,[8,9],[6,7]],[,,"9(?:751\\d{5}|8\\d{6,7})|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"6[01459]\\d{6}|6[01]\\d{4,5}",,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})",
 "$1 $2 $3",["[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"62\\d{6,7}|72\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",
 ,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HU:[,[,,"[235-7]\\d{8}|[1-9]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6,7]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"(?:[48]0\\d|6802)\\d{5}",,,,"80123456"],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",
 ,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],,[,,,,,,,,,[-1]],,,[,,"(?:[48]0\\d|6802)\\d{5}"],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,,[7,8,9,10,11,12,13],[5,6]],[,
 ,"2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,,"218350123",,,[7,8,9,10,11],[5,6]],[,,"8[1-35-9]\\d{7,10}",
 ,,,"812345678",,,[9,10,11,12]],[,,"00[17]803\\d{7}|(?:177\\d|800)\\d{5,7}|001803\\d{6}",,,,"8001234567",,,[8,9,10,11,12,13]],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"00[89]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",
 ["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["001"]],[,"(\\d{2})(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],
 [,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"001803\\d{6,7}|(?:007803\\d|8071)\\d{6}",,,,,,,[10,12,13]],[,,"(?:1500|8071\\d{3})\\d{3}",,,,"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
 ,,,,,,[7,8,9,10],[5,6]],[,,"(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",,,,"2212345",,,,[5,6]],[,,"8(?:22|[35-9]\\d)\\d{6}",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,"00",
 "0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{4})",
 "$1 $2 $3",["4"],"(0$1)"],[,"(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,,,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}",,,,"8551234567",,,[10]]],IL:[,[,,"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,"153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-9]|3[0-3]|4[34]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",
 ,,,"502345678",,,[9]],[,,"1(?:255|80[019]\\d{3})\\d{3}",,,,"1800123456",,,[7,10]],[,,"1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}",,,,"1919123456",,,[8,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"7(?:380|8(?:33|55|77|81))\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}",,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"(\\d{4})(\\d{3})","$1-$2",["125"]],[,"(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],
 [,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],[,"(\\d{4})(\\d{6})","$1-$2",["159"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],[,"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}",,,,,,,[10]],[,,"1599\\d{6}",,,,"1599123456",,,[10]],,,[,,"151\\d{8,9}",,,,"15112340000",,,[11,12]]],IM:[,[,,"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1624(?:230|[5-8]\\d\\d)\\d{3}",,,,"1624756789",
 ,,,[6]],[,,"76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,,"7924123456"],[,,"808162\\d{4}",,,,"8081624567"],[,,"8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}",,,,"9016247890"],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,"00","0",,,"0|([25-8]\\d{5})$","1624$1",,,,,[,,,,,,,,,[-1]],,"74576|(?:16|7[56])24",[,,,,,,,,,[-1]],[,,"3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],
 IN:[,[,,"(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",
 ,,,"7410410123",,,[10],[6,7,8]],[,,"(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",
 ,,,"8123456789",,,[10]],[,,"000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{7})","$1",["575"]],[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
 ["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
 "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],
 "0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
 "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{4})",
 "$1 $2 $3 $4",["0"]],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],,,1]],[[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
 "0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
 "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],
 "0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
 "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
 "$1 $2 $3 $4",["18"],,,1]],[,,,,,,,,,[-1]],,,[,,"1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"],[,,"140\\d{7}",,,,"1409305260",,,[10]],,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
 ,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,
 [,,"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,,[4,5,6,7,10],[8]],[,,"(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}",,,,"2123456789",,,[6,7,10],[4,5,8]],[,,"99(?:5[15]0|888|9(?:0[013]|21|77|88))\\d{5}|9(?:0(?:[1-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d|9(?:[0-2]\\d|3[01]|4[0145]|81|9[19]))\\d{6}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,
 [-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"993[2-9]\\d{6}",,,,"9932123456",,,[10]],"IR",98,"00","0",,,"0",,,,[[,"(\\d{4,5})","$1",["96"],"0$1"],[,"(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,,[4,5,10]],[,
 ,"96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",,,,"9601",,,[4,5]],,,[,,,,,,,,,[-1]]],IS:[,[,,"(?:38\\d|[4-9])\\d{6}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}",,,,"4101234",,,[7]],[,,"(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[28]))\\d{4}",,,,"6111234"],[,
 ,"80[08]\\d{4}",,,,"8001234",,,[7]],[,,"90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49[0-24-79]\\d{4}",,,,"4921234",,,[7]],"IS",354,"00|1(?:0(?:01|[12]0)|100)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:689|8(?:7[18]|80)|95[48])\\d{4}",,,,"6891234",,,[7]]],IT:[,[,,"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
 ,,,,,,[6,7,8,9,10,11,12]],[,,"0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",,,,"0212345678",,,[6,7,8,9,10,11]],[,,"3[1-9]\\d{8}|3[2-9]\\d{7}",
 ,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",,,,"800123456",,,[6,9]],[,,"(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{4,5})","$1",["1(?:0|9[246])","1(?:0|9(?:2[2-9]|[46]))"]],[,"(\\d{6})","$1",["1(?:1|92)"]],[,"(\\d{2})(\\d{4,6})","$1 $2",
 ["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",
 ["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],
 [,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],JE:[,[,,"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
 ,,,"9018105678"],[,,,,,,,,,[-1]],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0",,,"0|([0-24-8]\\d{5})$","1534$1",,,,,[,,"76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|81|9[139])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"(?:[58]\\d\\d|658|900)\\d{7}",,,,,,,[10],[7]],[,,"8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",
 ,,,"8765230123",,,,[7]],[,,"(?:658295|876(?:2(?:[14-9]\\d|2[013-9]|3[7-9])|[348]\\d\\d|5(?:0[13-9]|1[579]|[2-57-9]\\d|6[0-24-9])|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"658|876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JO:[,[,,"(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",,,,,,,[8,9]],[,,"87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",
 ,,,"62001234",,,[8]],[,,"7(?:[78][0-25-9]|9\\d)\\d{6}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"9\\d{7}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,"74(?:66|77)\\d{5}",,,,"746612345",
 ,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",
 ,,,"9012345678",,,[10]],[,,"00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{4})(\\d{4})","$1-$2",["007","0077","00777","00777[01]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
 "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],
 "0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
 "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
 "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
 "0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["007"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["0"]]],
 [[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],
 "0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
 "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
 "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
 "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
 "0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"],[,,"570\\d{6}",,,,"570123456",,,[9]],,,[,,,,,,,,,[-1]]],KE:[,[,,"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",,,,,,,[7,8,9,10]],[,,"(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",
 ,,,"202012345",,,[7,8,9]],[,,"(?:1(?:0[0-6]|1[0-5]|2[014])|7\\d\\d)\\d{6}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"8\\d{9}|(?:[235-8]\\d|99)\\d{7}",
 ,,,,,,[9,10],[5,6]],[,,"312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|880|99[05-9])\\d{6}",,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,
 ,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"1\\d{9}|[1-9]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
 ,,,"23756789",,,[8,9],[6,7]],[,,"(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],
 ,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,,"31234"],[,,"(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}",,,,"72001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",,,,"30010000",,,[8]],
 "KI",686,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7],[4]],[,,"7[4-7]\\d{5}",,,,"7712345",,,,[4]],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"8\\d{6}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}",
 ,,,"8692361234",,,,[7]],[,,"869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"1|([2-7]\\d{6})$",
 "869$1",,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"85\\d{6}|(?:19\\d|[2-7])\\d{7}",,,,,,,[8,10],[6,7]],[,,"(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}",,,,"21234567",,,,[6,7]],[,,"19[1-3]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})",
 "$1 $2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",,,,,,,[5,6,8,9,10,11,12,13,14],[3,4,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,,"22123456",,,[5,6,8,9,10],[3,4,7]],[,,"1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}",
 ,,,"1020000000",,,[9,10]],[,,"00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}",,,,"801234567",,,[9,11,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8,9}",,,,"5012345678",,,[10,11]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","0",,,"0(8(?:[1-46-8]|5\\d\\d))?",,,,[[,"(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,
 "(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3})(\\d{3})","$1 $2 $3",["003","0030"]],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})",
 "$1 $2 $3 $4",["0"]]],[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",
 ,,[9,10]],,,[,,"00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})",,,,,,,[11,12,13,14]],[,,"1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],,,[,,,,,,,,,[-1]]],KW:[,[,,"(?:18|[2569]\\d\\d)\\d{5}",,,,,,,[7,8]],[,,"2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",,,,"22345678",,,[8]],[,,"(?:5(?:2(?:22|5[25])|88[58])|6(?:222|333|444|70[013-9]|888|93[039])|9(?:11[01]|3(?:00|33)|500))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|[4679]\\d|55|8[057-9]))\\d{5}",
 ,,,"50012345",,,[8]],[,,"18\\d{5}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],[,"(\\d{3})(\\d{5})","$1 $2",["[25]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"(?:345|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,
 ,"3452221234",,,,[7]],[,,"345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}",,,,"3453231234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"(?:345976|900[2-9]\\d\\d)\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"1|([2-9]\\d{6})$","345$1",,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"33622\\d{5}|(?:7\\d|80)\\d{8}",,,,,,,[10],[5,6,7]],[,,"(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
 ,,,"7123456789",,,,[5,6,7]],[,,"7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,"33|7",[,,"751\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8],[6]],[,,"(?:20(?:[239]\\d|5[24-9]|7[6-8])|302\\d)\\d{6}",
 ,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"30[013-9]\\d{6}",,,,"301234567",,,[9]],,,[,,,,,,,,,[-1]]],LB:[,[,,"[27-9]\\d{7}|[13-9]\\d{6}",,,,,,,[7,8]],[,,"7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}",
 ,,,"1123456"],[,,"793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,[,,"(?:[58]\\d\\d|758|900)\\d{7}",
 ,,,,,,[10],[7]],[,,"758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"1|([2-8]\\d{6})$","758$1",,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LI:[,[,,"90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"(?:6(?:4(?:79|[89]\\d)|5[0-4]\\d|6(?:0\\d|10|2[0-26-9]|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}",,,,"660234567"],[,,"80(?:02[28]|9\\d\\d)\\d\\d",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",
 ,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"0|(1001)",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d\\d",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",
 ,,,"112345678",,,,[7]],[,,"7(?:[0-25-8]\\d|4[01])\\d{6}",,,,"712345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"1973\\d{5}",,,,"197312345"],,,[,,,,,,,,,[-1]]],LR:[,[,,"(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",,,,,,,[7,8,9]],[,,"(?:2\\d{3}|33333)\\d{4}",,,,"21234567",,,[8,9]],[,,"(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}",
 ,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"332(?:02|[34]\\d)\\d{4}",,,,"332021234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LR",231,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"(?:[256]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],
 [,,"800[256]\\d{4}",,,,"80021234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2568]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"80[02]\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"70[05]\\d{5}",,,,"70012345"],[,
 ,"[89]01\\d{5}",,,,"80123456"],"LT",370,"00","8",,,"[08]",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",,1],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1],[,"(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",,1],[,"(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",,,,,,,[4,5,6,7,8,9,10,11]],[,
 ,"(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",,,,"27123456"],[,,"6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,,,,,,,,[-1]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
 ,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
 "$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"(?:[268]\\d|90)\\d{6}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})",
 "$1 $2 $3",["[269]|8[01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LY:[,[,,"[2-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,
 "00","0",,,"0",,,,[[,"(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",,,,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0\\d|10|6[1267]|7[0-57]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,
 ,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"592(?:4[0-2]|93)\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]","5(?:29|38)[89]0"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],[,"(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],[,"(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],[,"(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],
 [,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"(?:[3489]|6\\d)\\d{7}",,,,,,,[8,9]],[,,"(?:870|9[2-47-9]\\d)\\d{5}",,,,"99123456",,,[8]],[,,"4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",,,,"612345678"],[,,"(?:800|90\\d)\\d{5}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["87"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4 $5",["6"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"8[07]0\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"(?:[235-7]\\d|[89]0)\\d{6}",,,,,,,[8]],[,,"(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",,,,"22212345"],[,,"562\\d{5}|(?:6\\d|7[16-9])\\d{6}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,
 ,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,[,,"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",,,,,,,[8,9],[6]],[,,"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}",
 ,,,"30234567",,,[8],[6]],[,,"6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}",,,,"67622901",,,[8]],[,,"80(?:[0-2578]|9\\d)\\d{5}",,,,"80080002"],[,,"9(?:4[1568]|5[178])\\d{5}",,,,"94515151",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780",,,[8]],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012",,,[8]],,,[,,,,,,,,,[-1]]],MF:[,[,,"(?:590|(?:69|80)\\d|976)\\d{6}",,,,,,,[9]],[,,"590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}",
 ,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"976[01]\\d{5}",,,,"976012345"],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}",,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
 ,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0|([24-9]\\d{6})$","20$1",,,[[,"(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"329\\d{4}|(?:[256]\\d|45)\\d{5}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:(?:23|54)5|329|45[56])\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",
 ,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,,"22012345",,,,[6,7]],[,,"7(?:3555|4(?:60\\d|747)|94(?:[01]\\d|2[0-4]))\\d{3}|7(?:[0-25-8]\\d|3[2-4]|42|9[23])\\d{5}",,,,"72345678"],[,,"800\\d{5}",,,,"80012345"],[,,"5[02-9]\\d{6}",,,,"50012345"],[,
 ,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"[24-9]\\d{7}",,,,,,,[8]],[,,"2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",,,,"20212345"],[,,"2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[239])\\d{6}",
 ,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{4})","$1",["67[057-9]|74[045]","67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,[,,"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",,,,,,,[6,7,
 8,9,10],[5]],[,,"(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",
 ,,,"1234567",,,[6,7,8,9],[5]],[,,"(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}",,,,"92123456",,,[7,8,9,10]],[,,"80080(?:[01][1-9]|2\\d)\\d{3}",,,,"8008001234",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1333\\d{4}|[12]468\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})",
 "$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],[,"(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],[,"(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],,[,,,
 ,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{7,9}|[57-9]\\d{7}",,,,,,,[8,9,10],[4,5,6]],[,,"[12]2[1-3]\\d{5,6}|7(?:0[0-5]\\d|128)\\d{4}|(?:[12](?:1|27)|5[368])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}",,,,"53123456",,,,[4,5,6]],[,,"(?:83[01]|920)\\d{5}|(?:5[05]|8[05689]|9[013-9])\\d{6}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"712[0-79]\\d{4}|7(?:1[013-9]|[5-8]\\d)\\d{5}",,,,"75123456",,,[8]],"MN",976,"001",
 "0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"(?:28|[68]\\d)\\d{6}",,,,,,,[8]],[,,"(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}",,,,"28212345"],
 [,,"6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[268]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"[58]\\d{9}|(?:67|90)0\\d{7}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,
 ,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"1|([2-9]\\d{6})$","670$1",,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"(?:69|80)\\d{7}|(?:59|97)6\\d{6}",,,,,,,[9]],[,,"596(?:0[0-8]|10|2[7-9]|3[04-9]|[4-7]\\d|8[09]|9[4-9])\\d{4}",,,,"596301234"],[,,"69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}",,,,"696201234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"976(?:6\\d|7[0-367])\\d{4}",,,,"976612345"],"MQ",596,"00","0",
 ,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"(?:[2-4]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"(?:25[08]|35\\d|45[1-7])\\d{5}",,,,"35123456"],[,,"[2-4][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["[2-48]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"(?:[58]\\d\\d|664|900)\\d{7}",,,,,,,[10],[7]],[,,"6644(?:1[0-3]|91)\\d{4}",,,,"6644912345",,,,[7]],[,,"664(?:3(?:49|9[1-6])|49[2-6])\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011","1",,,"1|([34]\\d{6})$","664$1",,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],[,,
 ,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"(?:[2-468]|5\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-7])|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,,"54480123"],[,,"5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[5-9]|4[3-589]|[57]\\d|8[0-689]|9[0-8])\\d{5}",,,,"52512345",
 ,,[8]],[,,"80[0-2]\\d{4}",,,,"8001234",,,[7]],[,,"30\\d{5}",,,,"3012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[24-7]0|3[03])",,,,,,"020",,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],[,"(\\d{4})(\\d{4})","$1 $2",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",,,,"6701234",
 ,,[7]],[,,"46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}",,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9[13-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d\\d)\\d{5}",
 ,,,"1234567"],[,,"111\\d{6}|(?:31|77|88|99)\\d{7}",,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,[,,"(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",,,,,,,
 [10,11],[7,8]],[,,"(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,,"2001234567",,,[10],[7,8]],[,,"(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
 ,,,"12221234567",,,,[7,8]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,,,,,,,,[-1]],"MX",52,"0[09]","01",,,"0(?:[12]|4[45])|1",,"00",,[[,"(\\d{5})","$1",["53"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],,,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],,,1],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})",
 "$2 $3 $4",["1"],,,1]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],,,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],,,1],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],,,1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MY:[,[,,"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",
 ,,,"323856789",,,[8,9],[6,7]],[,,"1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0134]\\d|2[1-9]|5[0-6]))|(?:(?:[269]|59)\\d|[37][1-9]|4[235-9])\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}",
 ,,,"1546012345",,,[10]],"MY",60,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9])|8"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"(?:2|8\\d)\\d{7}",
 ,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,,"21123456",,,[8]],[,,"8[2-79]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}",
 ,,,"61221234"],[,,"(?:60|8[1245])\\d{7}",,,,"811234567",,,[9]],[,,"80\\d{7}",,,,"800123456",,,[9]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d\\d|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,
 [-1]],,,[,,,,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,,,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{3})","$1",["5[6-8]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NE:[,[,,"[027-9]\\d{7}",
 ,,,,,,[8]],[,,"2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,,"20201234"],[,,"(?:23|7[04]|[89]\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NF:[,[,
 ,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"(?:14|3[58])\\d{4}",,,,"381234",,,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,"([0-258]\\d{4})$","3$1",,,[[,"(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],[,"(\\d)(\\d{5})","$1 $2",["[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",,,,,,,[7,8,10,11,12,13,14],[5,6]],
 [,,"(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}",,,,"18040123",,,[7,8],[5,6]],[,,"(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|9(?:0[1-9]|1[235]))\\d{7}",,,,"8021234567",,,[10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})",
 "$1 $2 $3",["78"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],[,"(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"(?:1800|[25-8]\\d{3})\\d{4}",,,,,,,[8]],[,,"2\\d{7}",
 ,,,"21234567"],[,,"(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
 ,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:85|91)\\d{7}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["1[238]|[34]"]],[,"(\\d{2})(\\d{3,4})","$1 $2",["14"]],[,"(\\d{6})","$1",["1"]],[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})",
 "$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],[[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d",
 ,,,,,,[5,6]],[,,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d",,,,"14020",,,[5,6,9]],,,[,,,,,,,,,[-1]]],NO:[,[,,"(?:0|[2-9]\\d{3})\\d{4}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|59|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",
 ,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],,[,,,,,,,,,[-1]],1,"[02-689]|7[0-8]",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"(?:1\\d|9)\\d{9}|[1-9]\\d{7}",,,,,,,[8,10,11],[6,7]],[,,"(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}",
 ,,,"14567890",,,[8],[6,7]],[,,"9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,,"9841234567",,,[10]],[,,"1(?:66001|800\\d\\d)\\d{5}",,,,"16600101234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-579]|6[2-6])"],"0$1"],[,"(\\d{3})(\\d{7})","$1-$2",["9"]],[,"(\\d{4})(\\d{2})(\\d{5})","$1-$2-$3",["1"]]],[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})",
 "$1-$2",["1[01]|[2-8]|9(?:[1-579]|6[2-6])"],"0$1"],[,"(\\d{3})(\\d{7})","$1-$2",["9"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"(?:444|(?:55|8\\d)\\d|666)\\d{4}",,,,,,,[7]],[,,"444\\d{4}",,,,"4441234"],[,,"(?:55[3-9]|666|8\\d\\d)\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
 NU:[,[,,"(?:[47]|888\\d)\\d{3}",,,,,,,[4,7]],[,,"[47]\\d{3}",,,,"7012",,,[4]],[,,"888[4-9]\\d{3}",,,,"8884012",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",,,,,,,[5,6,7,8,9,10]],[,,"24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}",
 ,,,"32345678",,,[8],[7]],[,,"2[0-27-9]\\d{7,8}|21\\d{6}",,,,"211234567",,,[8,9,10]],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456",,,[8,9,10]],[,,"(?:11\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}",,,,"900123456",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})",
 "$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,,,,,,,,[-1]],[,,"8(?:1[6-9]|22|3\\d|4[045]|5[459]|7[0-3579]|90)\\d{2,7}",,,,"83012378"],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",
 ,,,"23123456",,,[8]],[,,"(?:1505|90[1-9]\\d)\\d{4}|(?:7[1289]|9[1-9])\\d{6}",,,,"92123456",,,[8]],[,,"8007\\d{4,5}|(?:500|800[05])\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],[,"(\\d{2})(\\d{6})","$1 $2",["2"]],[,"(\\d{4})(\\d{4})","$1 $2",["[179]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"8\\d{9}|[68]\\d{7}|[1-57-9]\\d{6}",,,,,,,[7,8,
 10]],[,,"(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[58]|7[0167]|8[258]|9[139])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-5]|33|4[0-79]|55|6[068]|7[03-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[056]|7[0-24-9]|8[6-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-7])\\d|8(?:1[01]|7[23]))\\d{4}",
 ,,,"61234567",,,[7,8]],[,,"800\\d{4}(?:\\d(?:\\d{2})?)?",,,,"8001234"],[,,"(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[68]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"(?:[14-8]|9\\d)\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}",
 ,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,
 ,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"4\\d{5}(?:\\d{2})?|8\\d{7,8}",,,,,,,[6,8,9]],[,,"4(?:0[4-689]|9[4-68])\\d{5}",,,,"40412345",,,[8]],[,,"8[7-9]\\d{6}",,,,"87123456",,,[8]],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"499\\d{5}",,,,"49901234",,,[8]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,
 ,,,,,,[-1]],,,[,,"44\\d{4}",,,,,,,[6]],[,,"44\\d{4}",,,,"440123",,,[6]],,,[,,,,,,,,,[-1]]],PG:[,[,,"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",,,,,,,[7,8]],[,,"(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}",,,,"3123456"],[,,"77(?:3[1-9]|[5-9]\\d)\\d{4}|(?:7[0-689]|8[18])\\d{6}",,,,"70123456",,,[8]],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"2(?:0[0-47]|7[568])\\d{4}",,,,"2751234",,,[7]],"PG",675,"00|140[1-3]",,,,
 ,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],[,"(\\d{4})(\\d{4})","$1 $2",["[78]"]]],,[,,"27[01]\\d{4}",,,,"2700123",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PH:[,[,,"1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",,,,,,,[6,8,9,10,11,12,13],[4,5,7]],[,,"(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|2\\d{5}(?:\\d{2})?|8[2-8]\\d{7}",,,,"21234567",,,[6,8,9,10],[4,5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-35-8]|7[1-9]|8[189]|9[4-9]))\\d{7}",
 ,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,"00","0",,,"0",,,,[[,"(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})",
 "$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
 ,,,,,,[8,9,10,11,12],[5,6,7]],[,,"(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}",,,,"2123456789",,,[9,10],[5,6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}(?:\\d{3})?",,,,"80012345",,,[8,11]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],
 [,,"122\\d{6}",,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["1"]],[,"(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
 "(0$1)"],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
 ,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",,,,,,,[6,7,8,9,10]],[,,"47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))",,,,"123456789",,,[7,9]],[,,"(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"70[01346-8]\\d{6}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,,,,,,,,[-1]],
 [,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{5})","$1",["19"]],[,"(\\d{3})(\\d{3})","$1 $2",["11|64"]],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]],,[,,"64\\d{4,7}",,,,"641234567",,,[6,7,8,9]],,,[,,,,,,,,,[-1]],[,,"804\\d{6}",,,,"804123456",,,[9]],,,[,,,,,,,,,[-1]]],PM:[,[,,"(?:[45]|80\\d\\d)\\d{5}",,,,,,,[6,9]],[,,"(?:4[1-3]|50)\\d{4}",,,,"430123",,,[6]],[,,"(?:4[02-4]|5[05])\\d{4}",,,,"551234",,,[6]],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2 $3",["[45]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"(?:[589]\\d\\d|787)\\d{7}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",,,,,,,[8,9,10],[7]],[,,"(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}",,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,,,,,,,,[-1]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",
 ["[2489]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"(?:[26-9]\\d|30)\\d{7}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"6[356]9230\\d{3}|(?:6[036]93|9(?:[1-36]\\d\\d|480))\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",
 ,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:7\\d|8[17])\\d{5}",,,,"707123456"],,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"(?:[24-8]\\d\\d|345|900)\\d{4}",,,,,,,[7]],[,,"(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",
 ,,,"2771234"],[,,"(?:46[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}",,,,"6201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",
 ,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,"9800\\d{5,7}",,,,"98000123456",,,[9,10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})",
 "$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],[,"(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567",,,[6,7,8,9]],,,[,,,,,,,,,[-1]]],QA:[,[,,"[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",,,,,,,[7,8]],[,,"(?:23|4[04])\\d{6}",,,,"44123456",,,[8]],[,,"(?:28|[35-7]\\d)\\d{6}",
 ,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",974,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"9769\\d{5}|(?:26|[68]\\d)\\d{7}",,,,,,,[9]],[,,"26(?:2\\d\\d|30[0-5])\\d{4}",,,,"262161234"],[,,"(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-36]|7[0-27]|8[0-8]|9[0-479]))|9769\\d)\\d{4}",
 ,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RE",262,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],,[,,,,,,,,,[-1]],1,"26[23]|69|[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",,,,,,,[6,9]],[,,"[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",,,,"211234567"],[,,"7[01]20\\d{5}|7(?:0[013-9]|1[01]|[2-7]\\d|8[03-8]|9[09])\\d{6}",
 ,,,"712034567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[0136]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:37\\d|80[578])\\d{6}",,,,"372123456",
 ,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",,,,,,,[6,7,8,9,10,11,12],[4,5]],[,,"(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}",,,,"10234567",,,[7,8,9,10,11,12],[4,5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:78\\d|90[0169])\\d{3,7}",,,,"90012345",,,[6,7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
 ,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],[,"(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"[347-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,,"3011234567",,,,[7]],[,,"9\\d{9}",,,,"9123456789"],
 [,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[0-79]"]],[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
 "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],
 "8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[,,,
 ,,,,,,[-1]],1,"3[04-689]|[489]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,,[8,9]],[,,"(?:06|2[23568]\\d)\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})",
 "$1 $2 $3",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SA:[,[,,"92\\d{7}|(?:[15]|8\\d)\\d{8}",,,,,,,[9,10],[7]],[,,"1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[9],[7]],[,,"579[01]\\d{5}|5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,,"512345678",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"925\\d{6}",,,,"925012345",,,[9]],[,,"920\\d{6}",,,,"920012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})",
 "$1 $2",["9"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"811\\d{7}",,,,"8110123456",,,[10]],,,[,,,,,,,,,[-1]]],SB:[,[,,"(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}",
 ,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"8000\\d{3}|(?:[249]\\d|64)\\d{5}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"971\\d{4}|(?:64|95)\\d{5}",
 ,,,"6412345"],"SC",248,"010|0[0-2]",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:5\\d|8[35-7])\\d{6}",,,,"153123456"],[,,"(?:1[0-2]|9[0-3569])\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,
 ,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SE:[,[,,"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,,[6,7,8,9,10,12]],[,,"(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
 ,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77[0-7]\\d{6}",,,,"771234567",,,[9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1"],
 [,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1"],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})",
 "$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1"]],[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(\\d{3})(\\d{4})","$1 $2",["9(?:00|39|44)"]],[,"(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1 $2 $3",["9(?:00|39|44)"]],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["10|7"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"10[1-8]\\d{6}",,,,"102345678",,,[9]],,,[,,"(?:25[245]|67[3-68])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",,,,,,,[8,10,11]],[,,"662[0-24-9]\\d{4}|6(?:[1-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",
 ,,,"61234567",,,[8]],[,,"8(?:02[013-9]|95[0-2])\\d{4}|(?:8(?:0[13]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}",,,,"81234567",,,[8]],[,,"(?:18|8)00\\d{7}",,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:3[12]\\d|666)\\d{5}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"(\\d{4,5})","$1",["1[013-9]|77","1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]],[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-3]|[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],
 [,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-3]|[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"(?:[256]\\d|8)\\d{3}",,,,,,,[4,5]],[,,"2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",
 ,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d\\d",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,"[256]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",,,,,,,[5,6,7,8]],[,,"(?:[1-357][2-8]|4[24-8])\\d{6}",,,,"12345678",,,[8],[7]],[,,"65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",,,,"31234567",,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"89[1-3]\\d{2,5}|90\\d{4,6}",,,,"90123456"],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-489])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}",,,,"59012345",,,[8]],"SI",386,"00|10(?:22|66|88|99)","0",,,"0",,"00",,[[,"(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
 SJ:[,[,,"0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|59|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"79",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,
 "81212345",,,[8]]],SK:[,[,,"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,,[6,7,9]],[,,"(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,,,"221234567"],[,,"909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:00|[78]\\d)\\d{6}",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],
 "SK",421,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d{4})(\\d{3})","$1 $2",["909","9090"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1",
 "[3-5][1-8]1[67]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}",,,,,,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"(?:[2378]\\d|66|99)\\d{6}",,,,,,,[8],[6]],[,,"22[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:25|3[0-5]|66|7[3-9]|8[08]|99)\\d{6}",
 ,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"(?:0549|[5-7]\\d)\\d{6}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",
 ,,,"58001110",,,[8]],"SM",378,"00",,,,"([89]\\d{5})$","0549$1",,,[[,"(\\d{6})","$1",["[89]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SN:[,[,,"(?:[378]\\d{4}|93330)\\d{4}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|5[4-7]|90)\\d{6}",
 ,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"93330\\d{4}|3(?:392|9[01]\\d)\\d{5}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",,,,,,,[6,7,8,9]],[,,"(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",
 ,,,"4012345",,,[6,7]],[,,"28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0\\d|[2-9]))\\d{6}",,,,"71123456",,,[7,8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],[,"(\\d{2})(\\d{5,7})",
 "$1 $2",["1|28|6[1-35-9]|9[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"(?:[2-5]|68|[78]\\d)\\d{5}",,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[124-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],[,"(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],[,"(\\d{3})(\\d{4})","$1-$2",
 ["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1[89]\\d{7}",,,,"181234567"],[,,"(?:12|9[1257-9])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ST:[,[,,"(?:22|9\\d)\\d{5}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}",
 ,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2(?:[1-6]\\d{3}|[79]90[034]|890[0245])\\d{3}",,,,"21234567",,,[8]],[,,"66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],
 [,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",
 ,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"SX",1,"011","1",,,"1|(5\\d{6})$","721$1",,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
 SY:[,[,,"[1-39]\\d{8}|[1-5]\\d{7}",,,,,,,[8,9],[6,7]],[,,"21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[02-9])\\d{6}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,
 [,,,,,,,,,[-1]]],SZ:[,[,,"0800\\d{4}|(?:[237]\\d|900)\\d{6}",,,,,,,[8,9]],[,,"[23][2-5]\\d{6}",,,,"22171234",,,[8]],[,,"7[6-9]\\d{6}",,,,"76123456",,,[8]],[,,"0800\\d{4}",,,,"08001234",,,[8]],[,,"900\\d{6}",,,,"900012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{6}",,,,"70012345",,,[8]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[0237]"]],[,"(\\d{5})(\\d{4})","$1 $2",["9"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,
 [4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"(?:[58]\\d\\d|649|900)\\d{7}",,,,,,,[10],[7]],[,,"649(?:266|712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}",,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,
 "9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"649(?:71[01]|966)\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1|([2-479]\\d{6})$","649$1",,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TD:[,[,,"(?:22|[69]\\d|77)\\d{6}",,,,,,,[8]],
 [,,"22(?:[37-9]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:6[023568]|77|9\\d)\\d{6}",,,,"63012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[279]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,,"22212345"],[,,"(?:7[09]|9[0-36-9])\\d{6}",,,,"90112345"],[,,,,,,,,,[-1]],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"1\\d{9}|[1689]\\d{8}|[1-57]\\d{7}",,,,,,,[8,9,10]],[,,"(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"671[0-3]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],
 [,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",66,"00[1-9]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"(?:[02]0|11|[3-57-9]\\d)\\d{7}",,,,,,,[9],[3,5,6,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,6,7]],[,,"41[18]\\d{6}|(?:[02-4]0|11|5[05]|7[07]|8[08]|9\\d)\\d{7}",
 ,,,"917123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"],,,1],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],,,1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"],,,1],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02-57-9]|11"],,,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",
 ,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[2-8]\\d{6}",,,,"77212345",,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,,,,,,,,[-1]],"TL",
 670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"6\\d{7}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
 "$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}",,,,"30010123"],[,,"3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-7])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,,,,
 ,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",,,,,,,[5,7]],[,,"(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}",,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,"55[04]\\d{4}",,,,"5501234",,,[7]],[,,,,,,,,,[-1]],[,
 ,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]],[,"(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TR:[,[,,"4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",,,,,,,[7,10,12,13]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,,"2123456789",,,[10]],
 [,,"56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",,,,"5012345678",,,[10]],[,,"8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})",,,,"8001234567",,,[10,12,13]],[,,"(?:8[89]8|900)\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,"592(?:21[12]|461)\\d{4}",,,,"5922121234",,,[10]],[,,"850\\d{7}",,,,"8500123456",,,[10]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d)(\\d{3})","$1 $2 $3",["444"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
 "$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{6,7})",
 "$1 $2 $3",["80"],"0$1",,1]],[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"(?:444|811\\d{3})\\d{4}",,,,,,,[7,10]],[,,"444\\d{4}",,,,"4441444",,,[7]],,,[,,,,,,,,,[-1]]],TT:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"868(?:2(?:0[13]|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
 ,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"1|([2-46-8]\\d{6})$","868$1",,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"(?:2|7\\d\\d|90)\\d{4}",
 ,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:7[01]\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2"]],[,"(\\d{2})(\\d{4})","$1 $2",["90"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",,,,,,,[7,8,9,10,11]],[,,"(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",
 ,,,"221234567",,,[8,9]],[,,"(?:40001[0-2]|9[0-8]\\d{4})\\d{3}",,,,"912345678",,,[9]],[,,"80[0-79]\\d{6}|800\\d{5}",,,,"800123456",,,[8,9]],[,,"20(?:[013-9]\\d\\d|2)\\d{4}",,,,"203123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"99\\d{7}",,,,"990123456",,,[9]],[,,"7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}",,,,"7012345678",,,[10,11]],"TW",886,"0(?:0[25-79]|19)","0","#",,"0",,,,[[,"(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],[,"(\\d)(\\d{3,4})(\\d{4})",
 "$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"50[0-46-9]\\d{6}",,,,"500123456",,,[9]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"(?:[26-8]\\d|41|90)\\d{7}",,,,,,,[9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"77[2-9]\\d{6}|(?:6[1-9]|7[1-689])\\d{7}",,,,"621234567"],[,,"80[08]\\d{6}",,,,"800123456"],[,,"90\\d{7}",
 ,,,"900123456"],[,,"8(?:40|6[01])\\d{6}",,,,"840123456"],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[89]\\d{9}|[3-9]\\d{8}",,,,,,,[9,10],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,
 ,"311234567",,,[9],[5,6,7]],[,,"(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,,"501234567",,,[9]],[,,"800[1-8]\\d{5,6}",,,,"800123456"],[,,"900[239]\\d{5,6}",,,,"900212345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89[1-579]\\d{6}",,,,"891234567",,,[9]],"UA",380,"00","0",,,"0",,"0~0",,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",
 ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]","4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["[3-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",,,,,,,[9],[5,6,7]],[,,"20(?:(?:(?:24|81)0|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[0147]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",
 ,,,"312345678",,,,[5,6,7]],[,,"7260\\d{5}|7(?:[0157-9]\\d|20|36|4[0-4])\\d{6}",,,,"712345678"],[,,"800[1-3]\\d{5}",,,,"800123456"],[,,"90[1-3]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,
 ,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[02357]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
 ,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[02357]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01579]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
 ,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",
 ["[2-9]"],,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[2-9]"]]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UY:[,[,,"4\\d{9}|[249]\\d{7}|(?:[49]\\d|80)\\d{5}",,,,,,,[7,8,10]],[,,"(?:2\\d|4[2-7])\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"(?:4\\d{5}|80[05])\\d{4}|405\\d{4}",,,,"8001234",,,[7,10]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:0|1[3-9]\\d)","0"," int. ",,"0",,"00",,[[,
 "(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UZ:[,[,,"55501\\d{4}|(?:33|[679]\\d|88)\\d{7}",,,,,,,[9]],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|8\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",
 ,,,"669050123"],[,,"(?:(?:33|88|9[0-57-9])\\d{3}|55501|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}",
 ,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,,[6,7,8,9,10,11,12]],[,,"06698\\d{1,6}",,,,"0669812345",,,[6,7,8,9,10,11]],[,,"3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",
 ,,,"800123456",,,[6,9]],[,,"(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"06698",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],VC:[,[,,"(?:[58]\\d\\d|784|900)\\d{7}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",
 ,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VC",
 1,"011","1",,,"1|([2-7]\\d{6})$","784$1",,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}",,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[01]\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",["[24-689]"],
 "0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"501\\d{7}",,,,"5010123456",,,,[7]],,,[,,,,,,,,,[-1]]],VG:[,[,,"(?:284|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}",,,,"2842291234",,,,[7]],[,,"284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}",,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],
 [,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"1|([2-578]\\d{6})$","284$1",,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"[58]\\d{9}|(?:34|90)0\\d{7}",,,,,,,[10],[7]],[,,"340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",
 ,,,"3406421234",,,,[7]],[,,"340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
 ,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"1|([2-9]\\d{6})$","340$1",,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VN:[,[,,"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",,,,,,,[7,8,9,10]],[,,"2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}",,,,"2101234567",,,[10]],[,,"(?:5(?:2[238]|59)|89[689]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}",,,,"912345678",,,[9]],[,,"1800\\d{4,6}|12(?:0[13]|28)\\d{4}",
 ,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"672\\d{6}",,,,"672012345",,,[9]],"VN",84,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{3})(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})",
 "$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",,,,,,,[7,8]],[,,"(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",
 ,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"[48]8\\d{3}|(?:[23]|[579]\\d\\d)\\d{4}",,,,,,,[5,7]],[,,"(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",,,,"22123",,,[5]],[,,"(?:5\\d|7[013-7])\\d{5}",,,,"5912345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:0[1-9]|1[01])\\d{4}",,,,"9010123",,,[7]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:3[03]|900\\d)\\d{3}",,,,"30123"],,,[,,,,,,,,,[-1]]],WF:[,
 [,,"(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",,,,,,,[6,9]],[,,"72\\d{4}",,,,"721234",,,[6]],[,,"(?:72|8[23])\\d{4}",,,,"821234",,,[6]],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234",,,[6]]],WS:[,[,,"(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
 ,,,,,,[5,6,7,10]],[,,"6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}",,,,"22123",,,[5,6]],[,,"(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,,"7212345",,,[7,10]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(\\d{5})","$1",["[2-5]|6[1-9]"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],XK:[,[,,"[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",,,,,,,[8,
 9]],[,,"(?:2[89]|39)0\\d{6}|[23][89]\\d{6}",,,,"28012345"],[,,"4[3-9]\\d{6}",,,,"43201234",,,[8]],[,,"800\\d{5}",,,,"80001234",,,[8]],[,,"900\\d{5}",,,,"90001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"XK",383,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
 ,,,,,,[7,8,9],[6]],[,,"78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}",,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"80\\d{7}|(?:26|63)9\\d{6}",
 ,,,,,,[9]],[,,"269(?:0[67]|5[0-3]|6\\d|[78]0)\\d{4}",,,,"269601234"],[,,"639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",,,,"639012345"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"269|63",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZA:[,[,,"[1-79]\\d{8}|8\\d{4,9}",,,,,,,[5,6,7,8,9,10]],[,,"(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",
 ,,[9]],[,,"(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",,,,"711234567",,,[5,6,7,8,9]],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"(?:86[2-9]|9[0-2]\\d)\\d{6}",,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",
 ,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6,7}",,,,"861123456",,,[9,10]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",,,,,,,[9],[6]],[,,"21[1-8]\\d{6}",
 ,,,"211234567",,,,[6]],[,,"(?:7[679]|9[5-8])\\d{7}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"630\\d{6}",,,,"630012345"],"ZM",260,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[1-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
 ,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
 ,,,"1312345",,,,[3,4]],[,,"7(?:[17]\\d|[38][1-9])\\d{6}",,,,"712345678",,,[9]],[,,"80(?:[01]\\d|20|8[0-8])\\d{3}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|22|30|44|55|77|8[368])\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],
 [,"(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
 "0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],[,"(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"[1-9]\\d{7}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[1-9]\\d{7}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
 808:[,[,,"[1-9]\\d{7}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[1-9]\\d{7}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],870:[,[,,"7\\d{11}|[35-7]\\d{8}",,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,"(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",870,
 ,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"10\\d{10}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"[0-36-9]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"[0-36-9]\\d{8}",
 ,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],882:[,[,,"[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}",,,,"3421234",,,[7,8,9,10,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}",
 ,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{6})","$1 $2",["4"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[19]"]],[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-3]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",
 ,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"51[013]0\\d{8}|5100\\d{5}",,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,
 [-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],,,[,,,,,,,,,[-1]]],979:[,[,,"[1359]\\d{8}",,,,,,,[9],[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[1359]\\d{8}",,,,"123456789",,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],,[,,,,,,,,,[-1]],,,[,,
 ,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]]};function G(){r.call(this)}m(G,r);var ta=null,ua={ea:0,da:1,ca:5,ba:10,aa:20};
 G.prototype.j=function(){var a=ta;a||(ta=a=B(G,{0:{name:"PhoneNumber",s:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,h:5,type:Number},2:{name:"national_number",required:!0,h:4,type:Number},3:{name:"extension",h:9,type:String},4:{name:"italian_leading_zero",h:8,type:Boolean},8:{name:"number_of_leading_zeros",h:5,defaultValue:1,type:Number},5:{name:"raw_input",h:9,type:String},6:{name:"country_code_source",h:14,defaultValue:0,type:ua},7:{name:"preferred_domestic_carrier_code",
 h:9,type:String}}));return a};G.ctor=G;G.ctor.j=G.prototype.j;function H(){}H.prototype.g=function(a){new a.i;throw Error("Unimplemented");};H.prototype.i=function(a,b){if(11==a.i||10==a.i)return b instanceof r?b:this.g(a.v.prototype.j(),b);if(14==a.i)return"string"===typeof b&&va.test(b)&&(a=Number(b),0<a)?a:b;if(!a.u)return b;a=a.v;if(a===String){if("number"===typeof b)return String(b)}else if(a===Number&&"string"===typeof b&&("Infinity"===b||"-Infinity"===b||"NaN"===b||va.test(b)))return Number(b);return b};var va=/^-?[0-9]+$/;function I(){}m(I,H);I.prototype.g=function(a,b){a=new a.i;a.m=this;a.g=b;a.i={};return a};function J(){}m(J,I);J.prototype.i=function(a,b){return 8==a.i?!!b:H.prototype.i.apply(this,arguments)};J.prototype.g=function(a,b){return J.$.g.call(this,a,b)};/*
 
  Copyright (C) 2010 The Libphonenumber Authors.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
  http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */
 function K(){this.g={}}K.i=void 0;K.g=function(){return K.i?K.i:K.i=new K};
 var xa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},ya={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
 7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
 Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},L=/^[+\uff0b]+/,za=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Aa=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ba=/[\\\/] *x/,Ca=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Da=/(?:.*?[A-Za-z]){3}.*/;function N(a){return"([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,"+a+"})"}
 function Ea(){return";ext="+N("20")+"|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|anexo)[:\\.\uff0e]?[ \u00a0\\t,-]*"+(N("20")+"#?|[ \u00a0\\t,]*(?:[x\uff58#\uff03~\uff5e]|int|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*")+(N("9")+"#?|[- ]+")+(N("6")+"#|[ \u00a0\\t]*(?:,{2}|;)[:\\.\uff0e]?[ \u00a0\\t,-]*")+(N("15")+"#?|[ \u00a0\\t]*(?:,)+[:\\.\uff0e]?[ \u00a0\\t,-]*")+(N("9")+"#?")}
 var Fa=new RegExp("(?:"+Ea()+")$","i"),Ga=new RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:"+Ea()+")?$","i"),Ha=/(\$\d)/;
 function Ia(a){return 2>a.length?!1:O(Ga,a)}function Ja(a){return O(Da,a)?P(a,ya):P(a,xa)}function Ka(a){var b=Ja(a.toString());a.i="";a.g(b)}function La(a){return null!=a&&(1!=A(a,9)||-1!=w(a,9)[0])}function P(a,b){for(var c=new n,d,e=a.length,g=0;g<e;++g)d=a.charAt(g),d=b[d.toUpperCase()],null!=d&&c.g(d);return c.toString()}function Q(a){return null!=a&&isNaN(a)&&a.toUpperCase()in sa}
 function Ma(a,b,c){if(0==t(b,2)&&null!=b.g[5]){var d=y(b,5);if(0<d.length)return d}d=y(b,1);var e=R(b);if(0==c)return Na(d,0,e,"");if(!(d in F))return e;a=S(a,d,T(d));b=null!=b.g[3]&&0!=t(b,3).length?3==c?";ext="+t(b,3):null!=a.g[13]?t(a,13)+y(b,3):" ext. "+y(b,3):"";a:{a=0==w(a,20).length||2==c?w(a,19):w(a,20);for(var g,f=a.length,h=0;h<f;++h){g=a[h];var l=A(g,3);if(0==l||0==e.search(t(g,3,l-1)))if(l=new RegExp(t(g,1)),O(l,e)){a=g;break a}}a=null}null!=a&&(f=a,a=y(f,2),g=new RegExp(t(f,1)),y(f,5),
 f=y(f,4),e=2==c&&null!=f&&0<f.length?e.replace(g,a.replace(Ha,f)):e.replace(g,a),3==c&&(e=e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),e=e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,"-")));return Na(d,c,e,b)}function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}
 function R(a){if(null==a.g[2])return"";var b=""+t(a,2);return null!=a.g[4]&&t(a,4)&&0<y(a,8)?Array(y(a,8)+1).join("0")+b:b}function Na(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}
 function V(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}function W(a,b){return X(a,t(b,1))?X(a,t(b,5))?4:X(a,t(b,4))?3:X(a,t(b,6))?5:X(a,t(b,8))?6:X(a,t(b,7))?7:X(a,t(b,21))?8:X(a,t(b,25))?9:X(a,t(b,28))?10:X(a,t(b,2))?t(b,18)||X(a,t(b,3))?2:0:!t(b,18)&&X(a,t(b,3))?1:-1:-1}
 function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.g[b];if(null==c){c=sa[b];if(null==c)return null;c=(new J).g(E.j(),c);a.g[b]=c}return c}function X(a,b){var c=a.length;return 0<A(b,9)&&-1==p(w(b,9),c)?!1:O(y(b,2),a)}
 function Oa(a,b){if(null==b)return null;var c=y(b,1);c=F[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=R(b);for(var d,e=c.length,g=0;g<e;g++){d=c[g];var f=U(a,d);if(null!=f.g[23]){if(0==b.search(t(f,23))){a=d;break a}}else if(-1!=W(b,f)){a=d;break a}}a=null}return a}function T(a){a=F[a];return null==a?"ZZ":a[0]}
 function Y(a,b,c,d){var e=V(c,d),g=0==A(e,9)?w(t(c,1),9):w(e,9);e=w(e,10);if(2==d)if(La(V(c,0)))a=V(c,1),La(a)&&(g=g.concat(0==A(a,9)?w(t(c,1),9):w(a,9)),q(g),0==e.length?e=w(a,10):(e=e.concat(w(a,10)),q(e)));else return Y(a,b,c,1);if(-1==g[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=g[0];return c==b?0:c>b?2:g[g.length-1]<b?3:-1<p(g,b,1)?0:5}function Pa(a,b){var c=R(b);b=y(b,1);if(!(b in F))return 1;b=S(a,b,T(b));return Y(a,c,b,-1)}
 function Qa(a,b,c,d,e,g){if(0==b.length)return 0;b=new n(b);var f;null!=c&&(f=t(c,11));null==f&&(f="NonMatch");var h=b.toString();if(0==h.length)f=20;else if(L.test(h))h=h.replace(L,""),b.i="",b.g(Ja(h)),f=1;else{h=new RegExp(f);Ka(b);f=b.toString();if(0==f.search(h)){h=f.match(h)[0].length;var l=f.substring(h).match(za);l&&null!=l[1]&&0<l[1].length&&"0"==P(l[1],xa)?f=!1:(b.i="",b.g(f.substring(h)),f=!0)}else f=!1;f=f?5:20}e&&u(g,6,f);if(20!=f){if(2>=b.i.length)throw Error("Phone number too short after IDD");
 a:{a=b.toString();if(0!=a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in F){d.g(a.substring(b));d=c;break a}d=0}if(0!=d)return u(g,1,d),d;throw Error("Invalid country calling code");}if(null!=c&&(f=y(c,10),h=""+f,l=b.toString(),0==l.lastIndexOf(h,0)&&(h=new n(l.substring(h.length)),l=t(c,1),l=new RegExp(y(l,2)),Ra(h,c,null),h=h.toString(),!O(l,b.toString())&&O(l,h)||3==Y(a,b.toString(),c,-1))))return d.g(h),e&&u(g,6,10),u(g,1,f),f;u(g,1,0);return 0}
 function Ra(a,b,c){var d=a.toString(),e=d.length,g=t(b,15);if(0!=e&&null!=g&&0!=g.length){var f=new RegExp("^(?:"+g+")");if(e=f.exec(d)){g=new RegExp(y(t(b,1),2));var h=O(g,d),l=e.length-1;b=t(b,16);if(null==b||0==b.length||null==e[l]||0==e[l].length){if(!h||O(g,d.substring(e[0].length)))null!=c&&0<l&&null!=e[l]&&c.g(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(f,b),!h||O(g,d))null!=c&&0<l&&c.g(e[1]),a.set(d)}}}
 function Z(a,b,c){if(!Q(c)&&0<b.length&&"+"!=b.charAt(0))throw Error("Invalid country calling code");return Sa(a,b,c,!0)}
 function Sa(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new n,g=b.indexOf(";phone-context=");if(0<=g){var f=g+15;if("+"==b.charAt(f)){var h=b.indexOf(";",f);0<h?e.g(b.substring(f,h)):e.g(b.substring(f))}f=b.indexOf("tel:");e.g(b.substring(0<=f?f+4:0,g))}else g=e.g,f=b.search(Aa),0<=f?(f=b.substring(f),f=f.replace(Ca,""),h=f.search(Ba),0<=h&&(f=f.substring(0,h))):f=
 "",g.call(e,f);g=e.toString();f=g.indexOf(";isub=");0<f&&(e.i="",e.g(g.substring(0,f)));if(!Ia(e.toString()))throw Error("The string supplied did not seem to be a phone number");g=e.toString();if(!(Q(c)||null!=g&&0<g.length&&L.test(g)))throw Error("Invalid country calling code");g=new G;d&&u(g,5,b);a:{b=e.toString();f=b.search(Fa);if(0<=f&&Ia(b.substring(0,f))){h=b.match(Fa);for(var l=h.length,z=1;z<l;++z)if(null!=h[z]&&0<h[z].length){e.i="";e.g(b.substring(0,f));b=h[z];break a}}b=""}0<b.length&&
 u(g,3,b);f=U(a,c);b=new n;h=0;l=e.toString();try{h=Qa(a,l,f,b,d,g)}catch(M){if("Invalid country calling code"==M.message&&L.test(l)){if(l=l.replace(L,""),h=Qa(a,l,f,b,d,g),0==h)throw M;}else throw M;}0!=h?(e=T(h),e!=c&&(f=S(a,h,e))):(Ka(e),b.g(e.toString()),null!=c?(h=y(f,10),u(g,1,h)):d&&(delete g.g[6],g.i&&delete g.i[6]));if(2>b.i.length)throw Error("The string supplied is too short to be a phone number");null!=f&&(c=new n,e=new n(b.toString()),Ra(e,f,c),a=Y(a,e.toString(),f,-1),2!=a&&4!=a&&5!=
 a&&(b=e,d&&0<c.toString().length&&u(g,7,c.toString())));d=b.toString();a=d.length;if(2>a)throw Error("The string supplied is too short to be a phone number");if(17<a)throw Error("The string supplied is too long to be a phone number");if(1<d.length&&"0"==d.charAt(0)){u(g,4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&u(g,8,a)}u(g,2,parseInt(d,10));return g}function O(a,b){return(a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1};k("intlTelInputUtils",{});k("intlTelInputUtils.formatNumber",function(a,b,c){try{var d=K.g(),e=Z(d,a,b),g=Pa(d,e);return 0==g||4==g?Ma(d,e,"undefined"==typeof c?0:c):a}catch(f){return a}});k("intlTelInputUtils.getExampleNumber",function(a,b,c){try{var d=K.g();a:{if(Q(a)){var e=V(U(d,a),c);try{if(null!=e.g[6]){var g=t(e,6);var f=Sa(d,g,a,!1);break a}}catch(h){}}f=null}return Ma(d,f,b?2:1)}catch(h){return""}});k("intlTelInputUtils.getExtension",function(a,b){try{return t(Z(K.g(),a,b),3)}catch(c){return""}});
 k("intlTelInputUtils.getNumberType",function(a,b){try{var c=K.g();var d=Z(c,a,b),e=Oa(c,d),g=S(c,y(d,1),e);if(null==g)var f=-1;else{var h=R(d);f=W(h,g)}return f}catch(l){return-99}});
 k("intlTelInputUtils.getValidationError",function(a,b){try{var c=K.g(),d=Z(c,a,b);return Pa(c,d)}catch(e){return"Invalid country calling code"==e.message?1:"Phone number too short after IDD"==e.message||"The string supplied is too short to be a phone number"==e.message?2:"The string supplied is too long to be a phone number"==e.message?3:-99}});
 k("intlTelInputUtils.isValidNumber",function(a,b){try{var c=K.g(),d=Z(c,a,b);var e=Oa(c,d),g=y(d,1),f=S(c,g,e),h;if(!(h=null==f)){var l;if(l="001"!=e){var z=U(c,e);if(null==z)throw Error("Invalid region code: "+e);var M=y(z,10);l=g!=M}h=l}if(h)var wa=!1;else{var Ta=R(d);wa=-1!=W(Ta,f)}return wa}catch(Ua){return!1}});k("intlTelInputUtils.numberFormat",{E164:0,INTERNATIONAL:1,NATIONAL:2,RFC3966:3});
 k("intlTelInputUtils.numberType",{FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10,UNKNOWN:-1});k("intlTelInputUtils.validationError",{IS_POSSIBLE:0,INVALID_COUNTRY_CODE:1,TOO_SHORT:2,TOO_LONG:3,IS_POSSIBLE_LOCAL_ONLY:4,INVALID_LENGTH:5});})();
 ;
 //basic form JS that is used throughout the site. 
 
 (function($,lcly) {
 
 
   $(function(){
     initFormReveal();
   });
 
 
 
   //simple plugin to reveal form fields with a link by id
   function initFormReveal(){
     $('body').on('click','.js-form-group-reveal',function(e){
      var id      = $(this).data('id')
      $el          = $('#' + id);
      //console.log('id: ' + id);
      //console.log($el);
      e.preventDefault();
      $el.removeClass('hide').find('input').focus();
      $(this).addClass('hide');
    });
 
   }
 
 })(jQuery,lcly);
 
 
 
 ;
 /*
 $.fancyForms();
 */
 
 (function ($) {
   $.fn.fancyForms = function (args) {
     var options = {
       
     };
 
     var $body = $('body');
    
     $.extend( options, args );
     
     this.each(function(){
       var $parent = $(this);
       $(this).find('input,textarea,select').on('focus.fancyForms',function(){
         $parent.addClass('fancy-focused');
       }).on('blur.fancyForms',function(){
         if(this.value === '') {
           $parent.removeClass('fancy-focused');
         }
       });
     });
   };
 }( jQuery ));
 ;
 var lcly = window.lcly || {};
 
 //Media queries as properties should match the SASS vars.
 lcly.mq = {
   xs: 480,
   sm: 680,
   md: 1025,
   lg: 1400
 };
 
 
 //A place to store jQuery objects
 lcly.$ = {};
 
 //property to hold whether or not site is mobile. 
 lcly.mobile = false;
 
 //property to hold whether or not site is in desktop nav layout. 
 lcly.desktopNav = false;
 
 //property to hold whether or not site device is touch
 lcly.touch = false;
 
 //property to hold type of mobile operating system
 lcly.mobileOS = 'unknown';
 
 //property to control whether iOS Body Lockdown solution is used or not
 lcly.useIosBodyLockdown = false;
 
 //base speed for javascript animations
 lcly.animationSpeed = 300;
 lcly.cssBaseAnimationSpeed = 250;
 
 //placeholder for page scroll top tracking
 lcly.pageScrollTop = 0;
 
 //Init active dash tab variable
 lcly.activeDashTab = '';
 
 lcly.getMobileOperatingSystem = function() {
     var userAgent = navigator.userAgent || navigator.vendor || window.opera;
     // Windows Phone must come first because its UA also contains "Android"
     if (/windows phone/i.test(userAgent)) {
         return 'windows';
     }
     if (/android/i.test(userAgent)) {
         return 'android';
     }
     // iOS detection from: http://stackoverflow.com/a/9039885/177710
     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
         return 'ios';
     }
     return 'unknown';
 };
 
 lcly.iosBodyLockdownActivate = function() {
     if (lcly.mobileOS === 'ios' && lcly.useIosBodyLockdown) {
       lcly.pageScrollTop = window.pageYOffset;
       setTimeout( function() {
           lcly.$.body.addClass('body-lockdown');
           window.scrollTo(0, 0);
       }, 300);
     }
 };
 
 lcly.iosBodyLockdownDeactivate = function () {
     if (lcly.mobileOS === 'ios' && lcly.useIosBodyLockdown) {
         lcly.$.body.removeClass('body-lockdown');
         window.scrollTo(0, lcly.pageScrollTop);
     }
 };
 
 
 
 //Load the following when the DOM is ready
 $(function(){
 
   //set up some core jquery objects
   lcly.$.window = $(window); 
   lcly.$.body = $('body'); 
 
   //leverage Modernizr.mq to check if mobile
   lcly.mobile = Modernizr.mq('(max-width: ' + (lcly.mq.sm  - 1) + 'px)');
 
   //leverage Modernizr.mq to check if in desktop layout
   lcly.desktopNav = Modernizr.mq('(min-width: ' + lcly.mq.md + 'px)');
 
   //leverage Modernizr.mq to check if site device has touch support
   lcly.touch = Modernizr.touchevents;
 
   lcly.mobileOS = lcly.getMobileOperatingSystem();
   
   //debounced window resize (happens when done resizing) to check on mobile and desktop nav
   lcly.$.window.resize($.debounce( 200, function(){ 
     lcly.mobile = Modernizr.mq('(max-width: ' + (lcly.mq.sm - 1) + 'px)');
     lcly.desktopNav = Modernizr.mq('(min-width: ' + lcly.mq.md + 'px)');
     lcly.touch = Modernizr.touchevents;
   }));
 
   $('.tooltip').tooltip();
   $('.form-group.fancy').fancyForms();
   $('img.inline-svg').inlineSVG();
 
   //anytime you need client side validation use the .js-validate-form on the <form> element
   $('.js-validate-form').scrupulous();
 
 });;
 
 (function($,lcly) {
 
   //DOM Ready
   $(function(){
     lcly.initAccordions();
   });
 
 
   /*
   Bind a click Event to the .js-edit-accordion link
   then toggle accordion visibility of the items below inside .conv-edit-section.  
   */
   lcly.initAccordions = function() {
     lcly.$.body.on('click.accordion keyup', '.js-accordion-header',function(e){
 
     if (window.event.type == 'keyup' && window.event.which != 13) {
       e.preventDefault();
       return false;
     }
 
       var $this             = $(this),
           mobileAccordion   = $this.hasClass('mobile-accordion-header'),
           customAction      = $this.hasClass('js-category-accordion'),
           $body             = $this.next('.js-accordion-body'),
           isSingleAccordion = $this.parent().hasClass('js-accordion-group'),
           speed             = 300;
 
           if (!customAction) {
               e.preventDefault();
           }
 
           if ( (mobileAccordion && lcly.mobile) || !mobileAccordion ) {
 
             if (isSingleAccordion) {
               $this.siblings().each(function(){
 
                 var $siblingAccordion = $(this);
 
                 if( $siblingAccordion.hasClass('active') && $siblingAccordion.hasClass('js-accordion-header') ){
                   $siblingAccordion.removeClass('active');
                   $siblingAccordion.next('.js-accordion-body').slideToggle(speed,function(){ 
                     $(this).removeClass('active');
                   });
                 }
               });
             }
 
             $this.toggleClass('active');
             $body.slideToggle(speed,function(){ 
               $(this).toggleClass('active');
             });
           } 
     });
   }
   
 })(jQuery,lcly);
 ;
 /*
 $.tooltip();
 */
 
 (function ($) {
   $.fn.tooltip = function (args) {
     var options = {
       direction: 'bottom'
     };
 
     if(!Modernizr.touchevents) {
       $.extend( options, args );
 
       this.each(function(){
         var txt = $(this).data('tooltip');
         if($(this).find('.tooltip-inner').length === 0) {
           if(!txt) {
             txt = $(this).attr('title');
           }
           $(this).append('<span class="tooltip-inner">' + txt + '</span>');
         }
 
       });
     }
   };
 }( jQuery ));
 ;
 /**
 *  Ajax Autocomplete for jQuery, version 1.3.0
 *  (c) 2017 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 */
 
 /*jslint  browser: true, white: true, single: true, this: true, multivar: true */
 /*global define, window, document, jQuery, exports, require */
 
 // Expose plugin as an AMD module if AMD loader is present:
 (function (factory) {
     "use strict";
     if (typeof define === 'function' && define.amd) {
         // AMD. Register as an anonymous module.
         define(['jquery'], factory);
     } else if (typeof exports === 'object' && typeof require === 'function') {
         // Browserify
         factory(require('jquery'));
     } else {
         // Browser globals
         factory(jQuery);
     }
 }(function ($) {
     'use strict';
 
     var
         utils = (function () {
             return {
                 escapeRegExChars: function (value) {
                     return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
                 },
                 createNode: function (containerClass) {
                     var div = document.createElement('div');
                     div.className = containerClass;
                     div.style.position = 'absolute';
                     div.style.display = 'none';
                     return div;
                 }
             };
         }()),
 
         keys = {
             ESC: 27,
             TAB: 9,
             RETURN: 13,
             LEFT: 37,
             UP: 38,
             RIGHT: 39,
             DOWN: 40
         };
 
     function Autocomplete(el, options) {
         var noop = $.noop,
             that = this,
             defaults = {
                 ajaxSettings: {},
                 autoSelectFirst: false,
                 appendTo: document.body,
                 serviceUrl: null,
                 lookup: null,
                 onSelect: null,
                 width: 'auto',
                 minChars: 1,
                 maxHeight: 300,
                 deferRequestBy: 0,
                 params: {},
                 formatResult: Autocomplete.formatResult,
                 formatGroup: Autocomplete.formatGroup,
                 delimiter: null,
                 zIndex: 9999,
                 type: 'GET',
                 noCache: false,
                 onSearchStart: noop,
                 onSearchComplete: noop,
                 onSearchError: noop,
                 preserveInput: false,
                 containerClass: 'autocomplete-suggestions',
                 tabDisabled: false,
                 dataType: 'text',
                 currentRequest: null,
                 triggerSelectOnValidInput: true,
                 preventBadQueries: true,
                 lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                     return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                 },
                 paramName: 'query',
                 transformResult: function (response) {
                     return typeof response === 'string' ? $.parseJSON(response) : response;
                 },
                 showNoSuggestionNotice: false,
                 noSuggestionNotice: 'No results',
                 orientation: 'bottom',
                 forceFixPosition: false
             };
 
         // Shared variables:
         that.element = el;
         that.el = $(el);
         that.suggestions = [];
         that.badQueries = [];
         that.selectedIndex = -1;
         that.currentValue = that.element.value;
         that.intervalId = 0;
         that.cachedResponse = {};
         that.onChangeInterval = null;
         that.onChange = null;
         that.isLocal = false;
         that.suggestionsContainer = null;
         that.noSuggestionsContainer = null;
         that.options = $.extend({}, defaults, options);
         that.classes = {
             selected: 'autocomplete-selected',
             suggestion: 'autocomplete-suggestion'
         };
         that.hint = null;
         that.hintValue = '';
         that.selection = null;
 
         // Initialize and set options:
         that.initialize();
         that.setOptions(options);
     }
 
     Autocomplete.utils = utils;
 
     $.Autocomplete = Autocomplete;
 
     Autocomplete.formatResult = function (suggestion, currentValue) {
         // Do not replace anything if there current value is empty
         if (!currentValue) {
             return suggestion.value;
         }
         
         var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';
 
         return suggestion.value
             .replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
             .replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/&lt;(\/?strong)&gt;/g, '<$1>');
     };
 
     Autocomplete.formatGroup = function (suggestion, category) {
         return '<div class="autocomplete-group"><strong>' + category + '</strong></div>';
     };
 
     Autocomplete.prototype = {
 
         killerFn: null,
 
         initialize: function () {
             var that = this,
                 suggestionSelector = '.' + that.classes.suggestion,
                 selected = that.classes.selected,
                 options = that.options,
                 container;
 
             // Remove autocomplete attribute to prevent native suggestions:
             that.element.setAttribute('autocomplete', 'off');
 
             that.killerFn = function (e) {
                 if (!$(e.target).closest('.' + that.options.containerClass).length) {
                     that.killSuggestions();
                     that.disableKillerFn();
                 }
             };
 
             // html() deals with many types: htmlString or Element or Array or jQuery
             that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>')
                                           .html(this.options.noSuggestionNotice).get(0);
 
             that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);
 
             container = $(that.suggestionsContainer);
 
             container.appendTo(options.appendTo);
 
             // Only set width if it was provided:
             if (options.width !== 'auto') {
                 container.css('width', options.width);
             }
 
             // Listen for mouse over event on suggestions list:
             container.on('mouseover.autocomplete', suggestionSelector, function () {
                 that.activate($(this).data('index'));
             });
 
             // Deselect active element when mouse leaves suggestions container:
             container.on('mouseout.autocomplete', function () {
                 that.selectedIndex = -1;
                 container.children('.' + selected).removeClass(selected);
             });
 
             // Listen for click event on suggestions list:
             container.on('click.autocomplete', suggestionSelector, function () {
                 that.select($(this).data('index'));
                 return false;
             });
 
             that.fixPositionCapture = function () {
                 if (that.visible) {
                     that.fixPosition();
                 }
             };
 
             $(window).on('resize.autocomplete', that.fixPositionCapture);
 
             that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
             that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
             that.el.on('blur.autocomplete', function () { that.onBlur(); });
             that.el.on('focus.autocomplete', function () { that.onFocus(); });
             that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
             that.el.on('input.autocomplete', function (e) { that.onKeyUp(e); });
         },
 
         onFocus: function () {
             var that = this;
 
             that.fixPosition();
 
             if (that.el.val().length >= that.options.minChars) {
                 that.onValueChange();
             }
         },
 
         onBlur: function () {
             this.enableKillerFn();
         },
         
         abortAjax: function () {
             var that = this;
             if (that.currentRequest) {
                 that.currentRequest.abort();
                 that.currentRequest = null;
             }
         },
 
         setOptions: function (suppliedOptions) {
             var that = this,
                 options = that.options;
 
             $.extend(options, suppliedOptions);
 
             that.isLocal = $.isArray(options.lookup);
 
             if (that.isLocal) {
                 options.lookup = that.verifySuggestionsFormat(options.lookup);
             }
 
             options.orientation = that.validateOrientation(options.orientation, 'bottom');
 
             // Adjust height, width and z-index:
             $(that.suggestionsContainer).css({
                 'max-height': options.maxHeight + 'px',
                 'width': options.width + 'px',
                 'z-index': options.zIndex
             });
         },
 
 
         clearCache: function () {
             this.cachedResponse = {};
             this.badQueries = [];
         },
 
         clear: function () {
             this.clearCache();
             this.currentValue = '';
             this.suggestions = [];
         },
 
         disable: function () {
             var that = this;
             that.disabled = true;
             clearInterval(that.onChangeInterval);
             that.abortAjax();
         },
 
         enable: function () {
             this.disabled = false;
         },
 
         fixPosition: function () {
             // Use only when container has already its content
 
             var that = this,
                 $container = $(that.suggestionsContainer),
                 containerParent = $container.parent().get(0);
             // Fix position automatically when appended to body.
             // In other cases force parameter must be given.
             if (containerParent !== document.body && !that.options.forceFixPosition) {
                 return;
             }
 
             // Choose orientation
             var orientation = that.options.orientation,
                 containerHeight = $container.outerHeight(),
                 height = that.el.outerHeight(),
                 offset = that.el.offset(),
                 styles = { 'top': offset.top, 'left': offset.left };
 
             if (orientation === 'auto') {
                 var viewPortHeight = $(window).height(),
                     scrollTop = $(window).scrollTop(),
                     topOverflow = -scrollTop + offset.top - containerHeight,
                     bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);
 
                 orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow) ? 'top' : 'bottom';
             }
 
             if (orientation === 'top') {
                 styles.top += -containerHeight;
             } else {
                 styles.top += height;
             }
 
             // If container is not positioned to body,
             // correct its position using offset parent offset
             if(containerParent !== document.body) {
                 var opacity = $container.css('opacity'),
                     parentOffsetDiff;
 
                     if (!that.visible){
                         $container.css('opacity', 0).show();
                     }
 
                 parentOffsetDiff = $container.offsetParent().offset();
                 styles.top -= parentOffsetDiff.top;
                 styles.left -= parentOffsetDiff.left;
 
                 if (!that.visible){
                     $container.css('opacity', opacity).hide();
                 }
             }
 
             if (that.options.width === 'auto') {
                 styles.width = that.el.outerWidth() + 'px';
             }
 
             $container.css(styles);
         },
 
         enableKillerFn: function () {
             var that = this;
             $(document).on('click.autocomplete', that.killerFn);
         },
 
         disableKillerFn: function () {
             var that = this;
             $(document).off('click.autocomplete', that.killerFn);
         },
 
         killSuggestions: function () {
             var that = this;
             that.stopKillSuggestions();
             that.intervalId = window.setInterval(function () {
                 if (that.visible) {
                     // No need to restore value when 
                     // preserveInput === true, 
                     // because we did not change it
                     if (!that.options.preserveInput) {
                         that.el.val(that.currentValue);
                     }
 
                     that.hide();
                 }
                 
                 that.stopKillSuggestions();
             }, 50);
         },
 
         stopKillSuggestions: function () {
             window.clearInterval(this.intervalId);
         },
 
         isCursorAtEnd: function () {
             var that = this,
                 valLength = that.el.val().length,
                 selectionStart = that.element.selectionStart,
                 range;
 
             if (typeof selectionStart === 'number') {
                 return selectionStart === valLength;
             }
             if (document.selection) {
                 range = document.selection.createRange();
                 range.moveStart('character', -valLength);
                 return valLength === range.text.length;
             }
             return true;
         },
 
         onKeyPress: function (e) {
             var that = this;
 
             // If suggestions are hidden and user presses arrow down, display suggestions:
             if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
                 that.suggest();
                 return;
             }
 
             if (that.disabled || !that.visible) {
                 return;
             }
 
             switch (e.which) {
                 case keys.ESC:
                     that.el.val(that.currentValue);
                     that.hide();
                     break;
                 case keys.RIGHT:
                     if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                         that.selectHint();
                         break;
                     }
                     return;
                 case keys.TAB:
                     if (that.hint && that.options.onHint) {
                         that.selectHint();
                         return;
                     }
                     if (that.selectedIndex === -1) {
                         that.hide();
                         return;
                     }
                     that.select(that.selectedIndex);
                     if (that.options.tabDisabled === false) {
                         return;
                     }
                     break;
                 case keys.RETURN:
                     if (that.selectedIndex === -1) {
                         that.hide();
                         return;
                     }
                     that.select(that.selectedIndex);
                     break;
                 case keys.UP:
                     that.moveUp();
                     break;
                 case keys.DOWN:
                     that.moveDown();
                     break;
                 default:
                     return;
             }
 
             // Cancel event if function did not return:
             e.stopImmediatePropagation();
             e.preventDefault();
         },
 
         onKeyUp: function (e) {
             var that = this;
 
             if (that.disabled) {
                 return;
             }
 
             switch (e.which) {
                 case keys.UP:
                 case keys.DOWN:
                     return;
             }
 
             clearInterval(that.onChangeInterval);
 
             if (that.currentValue !== that.el.val()) {
                 that.findBestHint();
                 if (that.options.deferRequestBy > 0) {
                     // Defer lookup in case when value changes very quickly:
                     that.onChangeInterval = setInterval(function () {
                         that.onValueChange();
                     }, that.options.deferRequestBy);
                 } else {
                     that.onValueChange();
                 }
             }
         },
 
         onValueChange: function () {
             var that = this,
                 options = that.options,
                 value = that.el.val(),
                 query = that.getQuery(value);
 
             if (that.selection && that.currentValue !== query) {
                 that.selection = null;
                 (options.onInvalidateSelection || $.noop).call(that.element);
             }
 
             clearInterval(that.onChangeInterval);
             that.currentValue = value;
             that.selectedIndex = -1;
 
             // Check existing suggestion for the match before proceeding:
             if (options.triggerSelectOnValidInput && that.isExactMatch(query)) {
                 that.select(0);
                 return;
             }
 
             if (query.length < options.minChars) {
                 that.hide();
             } else {
                 that.getSuggestions(query);
             }
         },
 
         isExactMatch: function (query) {
             var suggestions = this.suggestions;
 
             return (suggestions.length === 1 && suggestions[0].value.toLowerCase() === query.toLowerCase());
         },
 
         getQuery: function (value) {
             var delimiter = this.options.delimiter,
                 parts;
 
             if (!delimiter) {
                 return value;
             }
             parts = value.split(delimiter);
             return $.trim(parts[parts.length - 1]);
         },
 
         getSuggestionsLocal: function (query) {
             var that = this,
                 options = that.options,
                 queryLowerCase = query.toLowerCase(),
                 filter = options.lookupFilter,
                 limit = parseInt(options.lookupLimit, 10),
                 data;
 
             data = {
                 suggestions: $.grep(options.lookup, function (suggestion) {
                     return filter(suggestion, query, queryLowerCase);
                 })
             };
 
             if (limit && data.suggestions.length > limit) {
                 data.suggestions = data.suggestions.slice(0, limit);
             }
 
             return data;
         },
 
         getSuggestions: function (q) {
             var response,
                 that = this,
                 options = that.options,
                 serviceUrl = options.serviceUrl,
                 params,
                 cacheKey,
                 ajaxSettings;
 
             options.params[options.paramName] = q;
             params = options.ignoreParams ? null : options.params;
 
             if (options.onSearchStart.call(that.element, options.params) === false) {
                 return;
             }
 
             if ($.isFunction(options.lookup)){
                 options.lookup(q, function (data) {
                     that.suggestions = data.suggestions;
                     that.suggest();
                     options.onSearchComplete.call(that.element, q, data.suggestions);
                 });
                 return;
             }
 
             if (that.isLocal) {
                 response = that.getSuggestionsLocal(q);
             } else {
                 if ($.isFunction(serviceUrl)) {
                     serviceUrl = serviceUrl.call(that.element, q);
                 }
                 cacheKey = serviceUrl + '?' + $.param(params || {});
                 response = that.cachedResponse[cacheKey];
             }
 
             if (response && $.isArray(response.suggestions)) {
                 that.suggestions = response.suggestions;
                 that.suggest();
                 options.onSearchComplete.call(that.element, q, response.suggestions);
             } else if (!that.isBadQuery(q)) {
                 that.abortAjax();
 
                 ajaxSettings = {
                     url: serviceUrl,
                     data: params,
                     type: options.type,
                     dataType: options.dataType
                 };
 
                 $.extend(ajaxSettings, options.ajaxSettings);
 
                 that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
                     var result;
                     that.currentRequest = null;
                     result = options.transformResult(data, q);
                     that.processResponse(result, q, cacheKey);
                     options.onSearchComplete.call(that.element, q, result.suggestions);
                 }).fail(function (jqXHR, textStatus, errorThrown) {
                     options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
                 });
             } else {
                 options.onSearchComplete.call(that.element, q, []);
             }
         },
 
         isBadQuery: function (q) {
             if (!this.options.preventBadQueries){
                 return false;
             }
 
             var badQueries = this.badQueries,
                 i = badQueries.length;
 
             while (i--) {
                 if (q.indexOf(badQueries[i]) === 0) {
                     return true;
                 }
             }
 
             return false;
         },
 
         hide: function () {
             var that = this,
                 container = $(that.suggestionsContainer);
 
             if ($.isFunction(that.options.onHide) && that.visible) {
                 that.options.onHide.call(that.element, container);
             }
 
             that.visible = false;
             that.selectedIndex = -1;
             clearInterval(that.onChangeInterval);
             $(that.suggestionsContainer).hide();
             that.signalHint(null);
         },
 
         suggest: function () {
             if (!this.suggestions.length) {
                 if (this.options.showNoSuggestionNotice) {
                     this.noSuggestions();
                 } else {
                     this.hide();
                 }
                 return;
             }
 
             var that = this,
                 options = that.options,
                 groupBy = options.groupBy,
                 formatResult = options.formatResult,
                 value = that.getQuery(that.currentValue),
                 className = that.classes.suggestion,
                 classSelected = that.classes.selected,
                 container = $(that.suggestionsContainer),
                 noSuggestionsContainer = $(that.noSuggestionsContainer),
                 beforeRender = options.beforeRender,
                 html = '',
                 category,
                 formatGroup = function (suggestion, index) {
                         var currentCategory = suggestion.data[groupBy];
 
                         if (category === currentCategory){
                             return '';
                         }
 
                         category = currentCategory;
 
                         return options.formatGroup(suggestion, category);
                     };
 
             if (options.triggerSelectOnValidInput && that.isExactMatch(value)) {
                 that.select(0);
                 return;
             }
 
             // Build suggestions inner HTML:
             $.each(that.suggestions, function (i, suggestion) {
                 if (groupBy){
                     html += formatGroup(suggestion, value, i);
                 }
 
                 html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value, i) + '</div>';
             });
 
             this.adjustContainerWidth();
 
             noSuggestionsContainer.detach();
             container.html(html);
 
             if ($.isFunction(beforeRender)) {
                 beforeRender.call(that.element, container, that.suggestions);
             }
 
             that.fixPosition();
             container.show();
 
             // Select first value by default:
             if (options.autoSelectFirst) {
                 that.selectedIndex = 0;
                 container.scrollTop(0);
                 container.children('.' + className).first().addClass(classSelected);
             }
 
             that.visible = true;
             that.findBestHint();
         },
 
         noSuggestions: function() {
              var that = this,
                  container = $(that.suggestionsContainer),
                  noSuggestionsContainer = $(that.noSuggestionsContainer);
 
             this.adjustContainerWidth();
 
             // Some explicit steps. Be careful here as it easy to get
             // noSuggestionsContainer removed from DOM if not detached properly.
             noSuggestionsContainer.detach();
             container.empty(); // clean suggestions if any
             container.append(noSuggestionsContainer);
 
             that.fixPosition();
 
             container.show();
             that.visible = true;
         },
 
         adjustContainerWidth: function() {
             var that = this,
                 options = that.options,
                 width,
                 container = $(that.suggestionsContainer);
 
             // If width is auto, adjust width before displaying suggestions,
             // because if instance was created before input had width, it will be zero.
             // Also it adjusts if input width has changed.
             if (options.width === 'auto') {
                 width = that.el.outerWidth();
                 container.css('width', width > 0 ? width : 300);
             } else if(options.width === 'flex') {
                 // Trust the source! Unset the width property so it will be the max length
                 // the containing elements.
                 container.css('width', '');
             }
         },
 
         findBestHint: function () {
             var that = this,
                 value = that.el.val().toLowerCase(),
                 bestMatch = null;
 
             if (!value) {
                 return;
             }
 
             $.each(that.suggestions, function (i, suggestion) {
                 var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                 if (foundMatch) {
                     bestMatch = suggestion;
                 }
                 return !foundMatch;
             });
 
             that.signalHint(bestMatch);
         },
 
         signalHint: function (suggestion) {
             var hintValue = '',
                 that = this;
             if (suggestion) {
                 hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
             }
             if (that.hintValue !== hintValue) {
                 that.hintValue = hintValue;
                 that.hint = suggestion;
                 (this.options.onHint || $.noop)(hintValue);
             }
         },
 
         verifySuggestionsFormat: function (suggestions) {
             // If suggestions is string array, convert them to supported format:
             if (suggestions.length && typeof suggestions[0] === 'string') {
                 return $.map(suggestions, function (value) {
                     return { value: value, data: null };
                 });
             }
 
             return suggestions;
         },
 
         validateOrientation: function(orientation, fallback) {
             orientation = $.trim(orientation || '').toLowerCase();
 
             if($.inArray(orientation, ['auto', 'bottom', 'top']) === -1){
                 orientation = fallback;
             }
 
             return orientation;
         },
 
         processResponse: function (result, originalQuery, cacheKey) {
             var that = this,
                 options = that.options;
 
             result.suggestions = that.verifySuggestionsFormat(result.suggestions);
 
             // Cache results if cache is not disabled:
             if (!options.noCache) {
                 that.cachedResponse[cacheKey] = result;
                 if (options.preventBadQueries && !result.suggestions.length) {
                     that.badQueries.push(originalQuery);
                 }
             }
 
             // Return if originalQuery is not matching current query:
             if (originalQuery !== that.getQuery(that.currentValue)) {
                 return;
             }
 
             that.suggestions = result.suggestions;
             that.suggest();
         },
 
         activate: function (index) {
             var that = this,
                 activeItem,
                 selected = that.classes.selected,
                 container = $(that.suggestionsContainer),
                 children = container.find('.' + that.classes.suggestion);
 
             container.find('.' + selected).removeClass(selected);
 
             that.selectedIndex = index;
 
             if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                 activeItem = children.get(that.selectedIndex);
                 $(activeItem).addClass(selected);
                 return activeItem;
             }
 
             return null;
         },
 
         selectHint: function () {
             var that = this,
                 i = $.inArray(that.hint, that.suggestions);
 
             that.select(i);
         },
 
         select: function (i) {
             var that = this;
             that.hide();
             that.onSelect(i);
             that.disableKillerFn();
         },
 
         moveUp: function () {
             var that = this;
 
             if (that.selectedIndex === -1) {
                 return;
             }
 
             if (that.selectedIndex === 0) {
                 $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                 that.selectedIndex = -1;
                 that.el.val(that.currentValue);
                 that.findBestHint();
                 return;
             }
 
             that.adjustScroll(that.selectedIndex - 1);
         },
 
         moveDown: function () {
             var that = this;
 
             if (that.selectedIndex === (that.suggestions.length - 1)) {
                 return;
             }
 
             that.adjustScroll(that.selectedIndex + 1);
         },
 
         adjustScroll: function (index) {
             var that = this,
                 activeItem = that.activate(index);
 
             if (!activeItem) {
                 return;
             }
 
             var offsetTop,
                 upperBound,
                 lowerBound,
                 heightDelta = $(activeItem).outerHeight();
 
             offsetTop = activeItem.offsetTop;
             upperBound = $(that.suggestionsContainer).scrollTop();
             lowerBound = upperBound + that.options.maxHeight - heightDelta;
 
             if (offsetTop < upperBound) {
                 $(that.suggestionsContainer).scrollTop(offsetTop);
             } else if (offsetTop > lowerBound) {
                 $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
             }
 
             if (!that.options.preserveInput) {
                 that.el.val(that.getValue(that.suggestions[index].value));
             }
             that.signalHint(null);
         },
 
         onSelect: function (index) {
             var that = this,
                 onSelectCallback = that.options.onSelect,
                 suggestion = that.suggestions[index];
 
             that.currentValue = that.getValue(suggestion.value);
 
             if (that.currentValue !== that.el.val() && !that.options.preserveInput) {
                 that.el.val(that.currentValue);
             }
 
             that.signalHint(null);
             that.suggestions = [];
             that.selection = suggestion;
 
             if ($.isFunction(onSelectCallback)) {
                 onSelectCallback.call(that.element, suggestion);
             }
         },
 
         getValue: function (value) {
             var that = this,
                 delimiter = that.options.delimiter,
                 currentValue,
                 parts;
 
             if (!delimiter) {
                 return value;
             }
 
             currentValue = that.currentValue;
             parts = currentValue.split(delimiter);
 
             if (parts.length === 1) {
                 return value;
             }
 
             return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
         },
 
         dispose: function () {
             var that = this;
             that.el.off('.autocomplete').removeData('autocomplete');
             that.disableKillerFn();
             $(window).off('resize.autocomplete', that.fixPositionCapture);
             $(that.suggestionsContainer).remove();
         }
     };
 
     // Create chainable jQuery plugin:
     $.fn.autocomplete = $.fn.devbridgeAutocomplete = function (options, args) {
         var dataKey = 'autocomplete';
         // If function invoked without argument return
         // instance of the first matched element:
         if (!arguments.length) {
             return this.first().data(dataKey);
         }
 
         return this.each(function () {
             var inputElement = $(this),
                 instance = inputElement.data(dataKey);
 
             if (typeof options === 'string') {
                 if (instance && typeof instance[options] === 'function') {
                     instance[options](args);
                 }
             } else {
                 // If instance already exists, destroy it:
                 if (instance && instance.dispose) {
                     instance.dispose();
                 }
                 instance = new Autocomplete(this, options);
                 inputElement.data(dataKey, instance);
             }
         });
     };
 }));
 ;
 /*! jQuery Address v${version} | (c) 2009, 2013 Rostislav Hristov | jquery.org/license */
 (function ($) {
 
     $.address = (function () {
 
         var _trigger = function(name) {
                var e = $.extend($.Event(name), (function() {
                     var parameters = {},
                         parameterNames = $.address.parameterNames();
                     for (var i = 0, l = parameterNames.length; i < l; i++) {
                         parameters[parameterNames[i]] = $.address.parameter(parameterNames[i]);
                     }
                     return {
                         value: $.address.value(),
                         path: $.address.path(),
                         pathNames: $.address.pathNames(),
                         parameterNames: parameterNames,
                         parameters: parameters,
                         queryString: $.address.queryString()
                     };
                 }).call($.address));
                 $($.address).trigger(e);
                 return e;
             },
             _array = function(obj) {
                 return Array.prototype.slice.call(obj);
             },
             _bind = function(value, data, fn) {
                 $().bind.apply($($.address), Array.prototype.slice.call(arguments));
                 return $.address;
             },
             _unbind = function(value,  fn) {
                 $().unbind.apply($($.address), Array.prototype.slice.call(arguments));
                 return $.address;
             },
             _supportsState = function() {
                 return (_h.pushState && _opts.state !== UNDEFINED);
             },
             _hrefState = function() {
                 return ('/' + _l.pathname.replace(new RegExp(_opts.state), '') + 
                     _l.search + (_hrefHash() ? '#' + _hrefHash() : '')).replace(_re, '/');
             },
             _hrefHash = function() {
                 var index = _l.href.indexOf('#');
                 return index != -1 ? _l.href.substr(index + 1) : '';
             },
             _href = function() {
                 return _supportsState() ? _hrefState() : _hrefHash();
             },
             _window = function() {
                 try {
                     return top.document !== UNDEFINED && top.document.title !== UNDEFINED && top.jQuery !== UNDEFINED && 
                         top.jQuery.address !== UNDEFINED && top.jQuery.address.frames() !== false ? top : window;
                 } catch (e) { 
                     return window;
                 }
             },
             _js = function() {
                 return 'javascript';
             },
             _strict = function(value) {
                 value = value.toString();
                 return (_opts.strict && value.substr(0, 1) != '/' ? '/' : '') + value;
             },
             _cssint = function(el, value) {
                 return parseInt(el.css(value), 10);
             },
             _listen = function() {
                 if (!_silent) {
                     var hash = _href(),
                         diff = decodeURI(_value) != decodeURI(hash);
                     if (diff) {
                         if (_msie && _version < 7) {
                             _l.reload();
                         } else {
                             if (_msie && !_hashchange && _opts.history) {
                                 _st(_html, 50);
                             }
                             _value = hash;
                             _update(FALSE);
                         }
                     }
                 }
             },
             _update = function(internal) {
                 _st(_track, 10);
                 return _trigger(CHANGE).isDefaultPrevented() || 
                     _trigger(internal ? INTERNAL_CHANGE : EXTERNAL_CHANGE).isDefaultPrevented();
             },
             _track = function() {
                 if (_opts.tracker !== 'null' && _opts.tracker !== NULL) {
                     var fn = $.isFunction(_opts.tracker) ? _opts.tracker : _t[_opts.tracker],
                         value = (_l.pathname + _l.search + 
                                 ($.address && !_supportsState() ? $.address.value() : ''))
                                 .replace(/\/\//, '/').replace(/^\/$/, '');
                     if ($.isFunction(fn)) {
                         fn(value);
                     } else {
                       if ($.isFunction(_t.urchinTracker)) {
                         _t.urchinTracker(value);
                       }
                       if (_t.pageTracker !== UNDEFINED && $.isFunction(_t.pageTracker._trackPageview)) {
                           _t.pageTracker._trackPageview(value);
                       }
                       if (_t._gaq !== UNDEFINED && $.isFunction(_t._gaq.push)) {
                           _t._gaq.push(['_trackPageview', decodeURI(value)]);
                       }
                       if ($.isFunction(_t.ga)) {
                           _t.ga('send', 'pageview', value);
                       }
                     }
                 }
             },
             _html = function() {
                 var src = _js() + ':' + FALSE + ';document.open();document.writeln(\'<html><head><title>' + 
                     _d.title.replace(/\'/g, '\\\'') + '</title><script>var ' + ID + ' = "' + encodeURIComponent(_href()).replace(/\'/g, '\\\'') + 
                     (_d.domain != _l.hostname ? '";document.domain="' + _d.domain : '') + 
                     '";</' + 'script></head></html>\');document.close();';
                 if (_version < 7) {
                     _frame.src = src;
                 } else {
                     _frame.contentWindow.location.replace(src);
                 }
             },
             _options = function() {
                 if (_url && _qi != -1) {
                     var i, param, params = _url.substr(_qi + 1).split('&');
                     for (i = 0; i < params.length; i++) {
                         param = params[i].split('=');
                         if (/^(autoUpdate|history|strict|wrap)$/.test(param[0])) {
                             _opts[param[0]] = (isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : (parseInt(param[1], 10) !== 0));
                         }
                         if (/^(state|tracker)$/.test(param[0])) {
                             _opts[param[0]] = param[1];
                         }
                     }
                     _url = NULL;
                 }
                 _value = _href();
             },
             _load = function() {
                 if (!_loaded) {
                     _loaded = TRUE;
                     _options();
                     $('a[rel*="address:"]').address();
                     if (_opts.wrap) {
                         var body = $('body'),
                             wrap = $('body > *')
                                 .wrapAll('<div style="padding:' + 
                                     (_cssint(body, 'marginTop') + _cssint(body, 'paddingTop')) + 'px ' + 
                                     (_cssint(body, 'marginRight') + _cssint(body, 'paddingRight')) + 'px ' + 
                                     (_cssint(body, 'marginBottom') + _cssint(body, 'paddingBottom')) + 'px ' + 
                                     (_cssint(body, 'marginLeft') + _cssint(body, 'paddingLeft')) + 'px;" />')
                                 .parent()
                                 .wrap('<div id="' + ID + '" style="height:100%;overflow:auto;position:relative;' + 
                                     (_webkit && !window.statusbar.visible ? 'resize:both;' : '') + '" />');
                         $('html, body')
                             .css({
                                 height: '100%',
                                 margin: 0,
                                 padding: 0,
                                 overflow: 'hidden'
                             });
                         if (_webkit) {
                             $('<style type="text/css" />')
                                 .appendTo('head')
                                 .text('#' + ID + '::-webkit-resizer { background-color: #fff; }');
                         }
                     }
                     if (_msie && !_hashchange) {
                         var frameset = _d.getElementsByTagName('frameset')[0];
                         _frame = _d.createElement((frameset ? '' : 'i') + 'frame');
                         _frame.src = _js() + ':' + FALSE;
                         if (frameset) {
                             frameset.insertAdjacentElement('beforeEnd', _frame);
                             frameset[frameset.cols ? 'cols' : 'rows'] += ',0';
                             _frame.noResize = TRUE;
                             _frame.frameBorder = _frame.frameSpacing = 0;
                         } else {
                             _frame.style.display = 'none';
                             _frame.style.width = _frame.style.height = 0;
                             _frame.tabIndex = -1;
                             _d.body.insertAdjacentElement('afterBegin', _frame);
                         }
                         _st(function() {
                             $(_frame).bind('load', function() {
                                 var win = _frame.contentWindow;
                                 _value = win[ID] !== UNDEFINED ? win[ID] : '';
                                 if (_value != _href()) {
                                     _update(FALSE);
                                     _l.hash = _value;
                                 }
                             });
                             if (_frame.contentWindow[ID] === UNDEFINED) {
                                 _html();
                             }
                         }, 50);
                     }
                     _st(function() {
                         _trigger('init');
                         _update(FALSE);
                     }, 1);
                     if (!_supportsState()) {
                         if ((_msie && _version > 7) || (!_msie && _hashchange)) {
                             if (_t.addEventListener) {
                                 _t.addEventListener(HASH_CHANGE, _listen, FALSE);
                             } else if (_t.attachEvent) {
                                 _t.attachEvent('on' + HASH_CHANGE, _listen);
                             }
                         } else {
                             _si(_listen, 50);
                         }
                     }
                     if ('state' in window.history) {
                         $(window).trigger('popstate');
                     }
                 }
             },
             _popstate = function() {
                 if (decodeURI(_value) != decodeURI(_href())) {
                     _value = _href();
                     _update(FALSE);
                 }
             },
             _unload = function() {
                 if (_t.removeEventListener) {
                     _t.removeEventListener(HASH_CHANGE, _listen, FALSE);
                 } else if (_t.detachEvent) {
                     _t.detachEvent('on' + HASH_CHANGE, _listen);
                 }
             },
             _uaMatch = function(ua) {
                 ua = ua.toLowerCase();
                 var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                     /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                     /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                     /(msie) ([\w.]+)/.exec( ua ) ||
                     ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                     [];
                 return {
                     browser: match[ 1 ] || '',
                     version: match[ 2 ] || '0'
                 };
             },
             _detectBrowser = function() {
                 var browser = {},
                     matched = _uaMatch(navigator.userAgent);
                 if (matched.browser) {
                     browser[matched.browser] = true;
                     browser.version = matched.version;
                 }
                 if (browser.chrome) {
                     browser.webkit = true;
                 } else if (browser.webkit) {
                     browser.safari = true;
                 }
                 return browser;
             },
             UNDEFINED,
             NULL = null,
             ID = 'jQueryAddress',
             STRING = 'string',
             HASH_CHANGE = 'hashchange',
             INIT = 'init',
             CHANGE = 'change',
             INTERNAL_CHANGE = 'internalChange',
             EXTERNAL_CHANGE = 'externalChange',
             TRUE = true,
             FALSE = false,
             _opts = {
                 autoUpdate: TRUE, 
                 history: TRUE, 
                 strict: TRUE,
                 frames: TRUE,
                 wrap: FALSE
             },
             _browser = _detectBrowser(),
             _version = parseFloat(_browser.version),
             _webkit = _browser.webkit || _browser.safari,
             _msie = _browser.msie,
             _t = _window(),
             _d = _t.document,
             _h = _t.history, 
             _l = _t.location,
             _si = setInterval,
             _st = setTimeout,
             _re = /\/{2,9}/g,
             _agent = navigator.userAgent,
             _hashchange = 'on' + HASH_CHANGE in _t,
             _frame,
             _form,
             _url = $('script:last').attr('src'),
             _qi = _url ? _url.indexOf('?') : -1,
             _title = _d.title, 
             _silent = FALSE,
             _loaded = FALSE,
             _juststart = TRUE,
             _updating = FALSE,
             _listeners = {}, 
             _value = _href();
             
         if (_msie) {
             _version = parseFloat(_agent.substr(_agent.indexOf('MSIE') + 4));
             if (_d.documentMode && _d.documentMode != _version) {
                 _version = _d.documentMode != 8 ? 7 : 8;
             }
             var pc = _d.onpropertychange;
             _d.onpropertychange = function() {
                 if (pc) {
                     pc.call(_d);
                 }
                 if (_d.title != _title && _d.title.indexOf('#' + _href()) != -1) {
                     _d.title = _title;
                 }
             };
         }
         
         if (_h.navigationMode) {
             _h.navigationMode = 'compatible';
         }
         if (document.readyState == 'complete') {
             var interval = setInterval(function() {
                 if ($.address) {
                     _load();
                     clearInterval(interval);
                 }
             }, 50);
         } else {
             _options();
             $(_load);
         }
         $(window).bind('popstate', _popstate).bind('unload', _unload);
 
         return {
             bind: function(type, data, fn) {
                 return _bind.apply(this, _array(arguments));
             },
             unbind: function(type, fn) {
                 return _unbind.apply(this, _array(arguments));
             },
             init: function(data, fn) {
                 return _bind.apply(this, [INIT].concat(_array(arguments)));
             },
             change: function(data, fn) {
                 return _bind.apply(this, [CHANGE].concat(_array(arguments)));
             },
             internalChange: function(data, fn) {
                 return _bind.apply(this, [INTERNAL_CHANGE].concat(_array(arguments)));
             },
             externalChange: function(data, fn) {
                 return _bind.apply(this, [EXTERNAL_CHANGE].concat(_array(arguments)));
             },
             baseURL: function() {
                 var url = _l.href;
                 if (url.indexOf('#') != -1) {
                     url = url.substr(0, url.indexOf('#'));
                 }
                 if (/\/$/.test(url)) {
                     url = url.substr(0, url.length - 1);
                 }
                 return url;
             },
             autoUpdate: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.autoUpdate = value;
                     return this;
                 }
                 return _opts.autoUpdate;
             },
             history: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.history = value;
                     return this;
                 }
                 return _opts.history;
             },
             state: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.state = value;
                     var hrefState = _hrefState();
                     if (_opts.state !== UNDEFINED) {
                         if (_h.pushState) {
                             if (hrefState.substr(0, 3) == '/#/') {
                                 _l.replace(_opts.state.replace(/^\/$/, '') + hrefState.substr(2));
                             }
                         } else if (hrefState != '/' && hrefState.replace(/^\/#/, '') != _hrefHash()) {
                             _st(function() {
                                 _l.replace(_opts.state.replace(/^\/$/, '') + '/#' + hrefState);
                             }, 1);
                         }
                     }
                     return this;
                 }
                 return _opts.state;
             },
             frames: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.frames = value;
                     _t = _window();
                     return this;
                 }
                 return _opts.frames;
             },            
             strict: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.strict = value;
                     return this;
                 }
                 return _opts.strict;
             },
             tracker: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.tracker = value;
                     return this;
                 }
                 return _opts.tracker;
             },
             wrap: function(value) {
                 if (value !== UNDEFINED) {
                     _opts.wrap = value;
                     return this;
                 }
                 return _opts.wrap;
             },
             update: function() {
                 _updating = TRUE;
                 this.value(_value);
                 _updating = FALSE;
                 return this;
             },
             title: function(value) {
                 if (value !== UNDEFINED) {
                     _st(function() {
                         _title = _d.title = value;
                         if (_juststart && _frame && _frame.contentWindow && _frame.contentWindow.document) {
                             _frame.contentWindow.document.title = value;
                             _juststart = FALSE;
                         }
                     }, 50);
                     return this;
                 }
                 return _d.title;
             },
             value: function(value) {
                 if (value !== UNDEFINED) {
                     value = _strict(value);
                     if (value == '/') {
                         value = '';
                     }
                     if (_value == value && !_updating) {
                         return;
                     }
                     _value = value;
                     if (_opts.autoUpdate || _updating) {
                         if (_update(TRUE)) {
                             return this;
                         }
                         if (_supportsState()) {
                             _h[_opts.history ? 'pushState' : 'replaceState']({}, '', 
                                     _opts.state.replace(/\/$/, '') + (_value === '' ? '/' : _value));
                         } else {
                             _silent = TRUE;
                             if (_webkit) {
                                 if (_opts.history) {
                                     _l.hash = '#' + _value;
                                 } else {
                                     _l.replace('#' + _value);
                                 }
                             } else if (_value != _href()) {
                                 if (_opts.history) {
                                     _l.hash = '#' + _value;
                                 } else {
                                     _l.replace('#' + _value);
                                 }
                             }
                             if ((_msie && !_hashchange) && _opts.history) {
                                 _st(_html, 50);
                             }
                             if (_webkit) {
                                 _st(function(){ _silent = FALSE; }, 1);
                             } else {
                                 _silent = FALSE;
                             }
                         }
                     }
                     return this;
                 }
                 return _strict(_value);
             },
             path: function(value) {
                 if (value !== UNDEFINED) {
                     var qs = this.queryString(),
                         hash = this.hash();
                     this.value(value + (qs ? '?' + qs : '') + (hash ? '#' + hash : ''));
                     return this;
                 }
                 return _strict(_value).split('#')[0].split('?')[0];
             },
             pathNames: function() {
                 var path = this.path(),
                     names = path.replace(_re, '/').split('/');
                 if (path.substr(0, 1) == '/' || path.length === 0) {
                     names.splice(0, 1);
                 }
                 if (path.substr(path.length - 1, 1) == '/') {
                     names.splice(names.length - 1, 1);
                 }
                 return names;
             },
             queryString: function(value) {
                 if (value !== UNDEFINED) {
                     var hash = this.hash();
                     this.value(this.path() + (value ? '?' + value : '') + (hash ? '#' + hash : ''));
                     return this;
                 }
                 var arr = _value.split('?');
                 return arr.slice(1, arr.length).join('?').split('#')[0];
             },
             parameter: function(name, value, append) {
                 var i, params;
                 if (value !== UNDEFINED) {
                     var names = this.parameterNames();
                     params = [];
                     value = value === UNDEFINED || value === NULL ? '' : value.toString();
                     for (i = 0; i < names.length; i++) {
                         var n = names[i],
                             v = this.parameter(n);
                         if (typeof v == STRING) {
                             v = [v];
                         }
                         if (n == name) {
                             v = (value === NULL || value === '') ? [] : 
                                 (append ? v.concat([value]) : [value]);
                         }
                         for (var j = 0; j < v.length; j++) {
                             params.push(n + '=' + v[j]);
                         }
                     }
                     if ($.inArray(name, names) == -1 && value !== NULL && value !== '') {
                         params.push(name + '=' + value);
                     }
                     this.queryString(params.join('&'));
                     return this;
                 }
                 value = this.queryString();
                 if (value) {
                     var r = [];
                     params = value.split('&');
                     for (i = 0; i < params.length; i++) {
                         var p = params[i].split('=');
                         if (p[0] == name) {
                             r.push(p.slice(1).join('='));
                         }
                     }
                     if (r.length !== 0) {
                         return r.length != 1 ? r : r[0];
                     }
                 }
             },
             parameterNames: function() {
                 var qs = this.queryString(),
                     names = [];
                 if (qs && qs.indexOf('=') != -1) {
                     var params = qs.split('&');
                     for (var i = 0; i < params.length; i++) {
                         var name = params[i].split('=')[0];
                         if ($.inArray(name, names) == -1) {
                             names.push(name);
                         }
                     }
                 }
                 return names;
             },
             hash: function(value) {
                 if (value !== UNDEFINED) {
                     this.value(_value.split('#')[0] + (value ? '#' + value : ''));
                     return this;
                 }
                 var arr = _value.split('#');
                 return arr.slice(1, arr.length).join('#');                
             }
         };
     })();
     
     $.fn.address = function(fn) {
         $(this).each(function(index) {
             if (!$(this).data('address')) {
                 $(this).on('click', function(e) {
                     if (e.shiftKey || e.ctrlKey || e.metaKey || e.which == 2) {
                         return true;
                     }
                     var target = e.currentTarget;
                     if ($(target).is('a')) {
                         e.preventDefault();
                         var value = fn ? fn.call(target) : 
                             /address:/.test($(target).attr('rel')) ? $(target).attr('rel').split('address:')[1].split(' ')[0] : 
                             $.address.state() !== undefined && !/^\/?$/.test($.address.state()) ? 
                                     $(target).attr('href').replace(new RegExp('^(.*' + $.address.state() + '|\\.)'), '') : 
                                     $(target).attr('href').replace(/^(#\!?|\.)/, '');
                         $.address.value(value);
                     }
                 }).on('submit', function(e) {
                     var target = e.currentTarget;
                     if ($(target).is('form')) {
                         e.preventDefault();
                         var action = $(target).attr('action'),
                             value = fn ? fn.call(target) : (action.indexOf('?') != -1 ? action.replace(/&$/, '') : action + '?') + 
                                 $(target).serialize();
                         $.address.value(value);
                     }
                 }).data('address', true);
             }
         });
         return this;
     };
     
 })(jQuery);
 ;
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
   lcly.map.mapData                 = {'geo': {'hash': '', 'locked': false}, 'conv': {'hash': '', 'locked': false }};
 
   lcly.map.hasMapDataChanged = function(hashType, newData) {
     var hash = lcly.map.mapData[hashType];
     if (hash.locked === true) {
       return false
     }
 
     var newHash = JSON.stringify(newData);
     if (newHash === hash.hash) {
       return false
     }
     lcly.map.mapData[hashType] = {
       'hash': newHash,
       'locked': true
     };
 
     console.log(hashType, ' changed to ', newHash)
     return true
   }
 
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
       var geoData = { 
         lat: currentLat, 
         lng: currentLng,
         custom_id: customId
       }
 
       if (lcly.map.hasMapDataChanged('geo', geoData) === false) {
         return
       }
       
       $.ajax({
         url: '/geo/reverse/lookup',
         type: 'GET',
         dataType: 'json',
         data: geoData
       })
       .done(function(response) {
         lcly.map.mapData.geo.locked = false;
         
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
       if (lcly.map.mapType != 'cities') retrieveDataAndPopulate(lcly.map.$.parent, false);
      
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
       var clusterColor = typeof customAccentColor != 'undefined' ? customAccentColor : '#D73E14';
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
       if (markerData){
 
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
 // deals with variant-switching behaviors
 lcly.variantModule = (function($,lcly) {
 
   // calculate the intersection between 2 arrays
   function arrayIntersection(array1, array2){
 
     return array1.filter(function(n) {
         return array2.indexOf(n) != -1
     });
   }
 
   function auditDimensions($parentElement){
 
     var $colorOptions  = $parentElement.find('.js-color-select');
     var $sizeOptions   = $parentElement.find('.js-size-select');
     var $currentColor  = $colorOptions.length && $colorOptions.find(':selected').length ? $colorOptions.find(':selected') : false;
     var dataObj        = data($parentElement); 
 
     if (!$currentColor && $colorOptions.length) { // no color selected but there are color options
       
       $colorOptions.val($colorOptions.find('option:enabled:first').val());
       lcly.variantModule.audit($parentElement);
       return false;
     }
 
     // upc list of all colors that are in stock
     var colorUpcsSet = $currentColor ? $currentColor.data('upcs').toString().split(',') : false;
 
     if (colorUpcsSet && $sizeOptions.length){
 
       $.each($sizeOptions.find('option').not('.note'), function(index, val) {
 
         var sizeUpcsSet      = $(this).data('upcs').toString().split(',');
         var upcIntersection  = arrayIntersection(colorUpcsSet, sizeUpcsSet)[0];
         var allUpcsInStock   = toArray(dataObj.all_upcs_carried);
         var isInStock        = allUpcsInStock.toString().indexOf(upcIntersection) > -1;
 
         $(this).prop('disabled', !isInStock); // disable option if size+color is not in stock
       });
     
     // no colors, but we have sizes. if store is active, sizes are already enabled/disabled via enableOptionsFor()
     } else if ($sizeOptions.length && !lcly.hasActiveStore) { 
 
       $sizeOptions.find('option').not('.note').prop('disabled', false); // make all sizes non-disabled
     } 
 
     // if a size that is now disabled is still selected, select the first non-disabled size instead
     if ($sizeOptions.find('option:selected:disabled').length){
       $sizeOptions.val($sizeOptions.find('option:enabled:first').val());
     }
 
     var currentSize = $sizeOptions.length && $sizeOptions.find(':selected').length ? $sizeOptions.find(':selected') : false;
     $sizeOptions.find('.note').remove();
 
     if (currentSize){
 
       var nDisabledSizes = $sizeOptions.find(':disabled').length;
       // if (nDisabledSizes > 0) $sizeOptions.append('<option class="note" disabled>(some sizes available in other colors)</option>');
     }
 
     // only set the variant-specific price if there are local variants in stock 
     if (typeof dataObj != 'undefined' 
         && dataObj 
         && typeof dataObj.all_upcs_carried != 'undefined' 
         && dataObj.all_upcs_carried 
         && dataObj.all_upcs_carried.length > 0) {
 
       setPrice($parentElement);
     }
   }
 
   function currentUpc($parentElement){
 
     var dataObj          = data($parentElement);
     var $currentColor    = $parentElement.find('.js-color-select option:selected');
     var $currentSize     = $parentElement.find('.js-size-select option:selected'); 
     var colorUpcsSet     = $currentColor.length ? $currentColor.data('upcs').toString().split(',') : false;
     var sizeUpcsSet      = $currentSize.length ? $currentSize.data('upcs').toString().split(',') : false;
     var allUpcsInStock   = toArray(dataObj.all_upcs_carried);
 
     if (colorUpcsSet && sizeUpcsSet){
 
       var upcs = arrayIntersection(colorUpcsSet, sizeUpcsSet);
       return upcs[0];
 
     } else if (colorUpcsSet){
 
       return colorUpcsSet[0];
 
     } else if (sizeUpcsSet) {
 
       return sizeUpcsSet[0];
     
     } else if (allUpcsInStock && allUpcsInStock.length) {
 
       return allUpcsInStock[0];
     
     } else {
 
       return false;
     }
   }
 
   function data($variantParent){
 
     if (!isSimplePDP($variantParent) && typeof lcly.map != 'undefined'){
 
       var ret = lcly.map.data;
 
       if (lcly.hasActiveStore && typeof lcly.variantModule.activeStoreUpcs != 'undefined'){
 
         ret.all_upcs_carried = lcly.variantModule.activeStoreUpcs;
       }
 
       if (typeof lcly.pdp.data != 'undefined' && !ret){
 
         return lcly.pdp.data;
       }
 
       return ret;
 
     } else {
 
       return lcly.pdp.data;
     }
   }
 
   function initColorChangeEvents($variantParent){
 
     // on variant color select change
     $variantParent.on('change', '.js-color-select', function(e) {
       
       if ($(this).data('default-prevented')) e.preventDefault();
 
       var $this = $(this),
           $imgSrc = $this.find(':selected').data('img-src'),
           $parent = $this.closest('.js-variant-container'),
           $variantAlts = $parent.find('.js-variant-alt'),
           variantIndex = $this.find(':selected').index();
 
       // change the conversion column product swatch image 
       $parent.find('.js-variant-img').attr('src', $imgSrc);
 
       // Change corresponding variant alt if it exists
       if ($variantAlts.length) {
         $variantAlts.eq(variantIndex).addClass('active').siblings().removeClass('active');
       }
 
       lcly.variantModule.audit($parent);
       refreshConversionModule($parent, $variantParent);
     });
   }
 
   function initAltClickEvents($variantParent){
 
     // on variant alt change
     $variantParent.on('mouseup', '.js-variant-alt', function(e) {
       e.preventDefault();
 
       var $this = $(this);
 
       if (!$this.hasClass('active')){
 
         var $imgSrc = $this.data('img-src'),
             $parent = $this.closest('.js-variant-container'),
             $colorSelect = $parent.find('.js-color-select'),
             variantIndex = $this.index();
 
         // change the variant img 
         $parent.find('.js-variant-img').attr('src', $imgSrc);
 
         //Make this alt active
         $this.addClass('active').siblings().removeClass('active');
 
         //Change corresponding color select if it exists
         if ($colorSelect.length) {
           $colorSelect.data('default-prevented', true);
           $colorSelect.find('option').eq(variantIndex).prop('selected', true);
         }
 
         lcly.variantModule.audit($parent);
         refreshConversionModule($parent, $variantParent);
       }
     });
   }
 
   function initSizeChangeEvents($variantParent){
 
     // on variant size select change
     $variantParent.on('change', '.js-size-select', function(e) {
       
       if ($(this).data('default-prevented')) e.preventDefault();
 
       var $parent = $(this).closest('.js-variant-container');
 
       lcly.variantModule.audit($parent);
       refreshConversionModule($parent, $variantParent);
     });
   }
 
   function isSimplePDP($variantParent){
 
     // an embedded PDP without all the bells and whistles of the "conversion column"
     return $variantParent.find('.variant-chooser').data('context') == 'simple-pdp';
   }
 
   function refreshConversionModule($parent, $variantParent){
 
     // we only need to refresh the data for the pure conversion column, not for embedded PDPs
     if (isSimplePDP($variantParent)){
 
       lcly.conversionModule.getAndSetPdpStock($variantParent);
     
     } else if (!lcly.hasActiveStore || document.getElementById("variant-chooser-is-dropship") !== null){ // using conversion module, however only refresh if we don't have an active store
 
       lcly.conversionModule.setMetaParam('upc', currentUpc($parent));
       lcly.conversionModule.getAndSetData($variantParent);
     }
   }
 
   function setPrice($parentElement){
 
     var upc     = currentUpc($parentElement);
     var dataObj = data($parentElement);
 
     if (upc && typeof dataObj.upc_prices != 'undefined' 
         && typeof dataObj.upc_prices[upc] != 'undefined'
         && dataObj.upc_prices[upc].unit_msrp){
 
       $parentElement.find('.js-variant-price.js-mutable').html(dataObj.upc_prices[upc].unit_msrp.toString().replace('.00', '')); 
 
     } else if (typeof(dataObj.product) != 'undefined' 
         && typeof(dataObj.product.upc_data) != 'undefined' 
         && typeof(dataObj.product.upc_data.unit_msrp) != 'undefined' 
         && dataObj.product.upc_data.unit_msrp){
 
       $parentElement.find('.js-variant-price.js-mutable').html(dataObj.product.upc_data.unit_msrp.toString().replace('.00', '')); 
     }
 
     if ($parentElement.find('.js-variant-price').html() == '-1') {
 
       $parentElement.find('.js-variant-price').closest('.js-pdp-price-container').hide();
     
     } else {
 
       $parentElement.find('.js-variant-price').closest('.js-pdp-price-container').show();
     }
   }
 
   function toArray(obj){
 
     return Object.keys(obj).map(function (key) { return obj[key]; });
   }
 
   return {
 
     initVariants: function($variantParent){
 
       if ($variantParent.length && $variantParent.data('variants-init') != 1){
 
         initColorChangeEvents($variantParent);
         initAltClickEvents($variantParent);
         initSizeChangeEvents($variantParent);
         $variantParent.data('variants-init', 1);
       }
     },
 
     enableAllOptions: function($parentElement){
 
       var $colorOptions  = $parentElement.find('.js-color-select');
       var $sizeOptions   = $parentElement.find('.js-size-select');
 
       $colorOptions.find('option').prop('disabled', false);
       $sizeOptions.find('option').prop('disabled', false);
     },
 
     enableOptionsFor: function(upcs, $parentElement){
 
       var $colorOptions  = $parentElement.find('.js-color-select');
       var $sizeOptions   = $parentElement.find('.js-size-select');
 
       if (typeof upcs != 'undefined' && upcs.length){
 
         // many of these commands below would be seen as better placed in the auditDimensions() method. 
         // however, these are unique to when we have a single, active store in focus! 
         // so we need to do some work in advance of calling auditDimensions() to ensure that this special configuration is applied.
         lcly.variantModule.activeStoreUpcs = upcs;
         $colorOptions.find('option').prop('disabled', true);
         $sizeOptions.find('option').prop('disabled', true);
 
         $.each(upcs, function(i, upc) { 
           $colorOptions.find('option[data-upcs*="' + upc + '"]').prop('disabled', false);
           $sizeOptions.find('option[data-upcs*="' + upc + '"]').prop('disabled', false);
         });
         
         if ($colorOptions.find('option:selected:disabled').length){
           $colorOptions.val($colorOptions.find('option:first').not(':disabled').val());
         }
 
         if ($colorOptions.find('option:disabled').length || $sizeOptions.find('option:disabled').length) {
           if ($('.conv-select-a-store-head').length && $('.conv-select-a-store-head').is(':visible')) {
             $('.js-alt-store-choice-notice').fadeIn('500');
           }
         }
 
         var $imgSrc = $colorOptions.find(':selected').data('img-src');
         $parentElement.find('.js-variant-img').attr('src', $imgSrc);
       }
 
       return auditDimensions($parentElement);
     },
 
     // disables and re-enables select > option elements depending on stock-level
     // determines currently selected UPC and sets as parameter 
     // fires a request to fetch store/stock data for the selected UPC 
     audit: function($parentElement){
 
       return auditDimensions($parentElement);
     },
 
     getCurrentUpc: function($parentElement){
 
       return currentUpc($parentElement);
     },
 
     setPdpData: function(data){
 
       lcly.pdp.data = data;
     }
   }
 
 })(jQuery,lcly);
 ;
 //requires jquery.autocomplete.js, map functionality requires map.js to load before this file. 
 
 (function($,lcly) {
 
   //DOM Ready
   $(function(){
     toggleSearchState();
     initAutocompleteBehaviors();
   });
 
   //simple function that just checks to see if there is a value and adds/removes classes
   function toggleSearchState() {
     $('#locally-search').on('keyup mouseup',function(){
       var inputVal = $(this).val();
       if(inputVal.length) {
         $(this).addClass('has-value');
       }
       else {
         $(this).removeClass('has-value');
       }
     });
   }
 
   /**
   * initializes all of the autocomplete field behaviors.
   */
   function initAutocompleteBehaviors(){
     var $locationAutocomplete   = $('.location-autocomplete'),
         $mapCont                = $('#map-cont'),
         suggestionParams        = {},
         offerGeolocation        = true;
 
     if ($locationAutocomplete.data('custom-id')) suggestionParams.custom_id = $locationAutocomplete.data('custom-id');
     if (offerGeolocation) suggestionParams.offer_geolocation = true;
 
     $locationAutocomplete.autocomplete({
 
       serviceUrl: '/geo/suggest',
       minChars: offerGeolocation ? 0 : 1, // will display `use my location` option upon focus 
       triggerSelectOnValidInput: false,
       autoSelectFirst: false,
       preserveInput: true,
       params: suggestionParams,
       deferRequestBy: 200,
       onSelect: function (suggestion) {
 
         $locationAutocomplete.val(suggestion.value);
         
         if (typeof lcly != 'undefined' && typeof lcly.map != 'undefined'){
           lcly.map.populateLock = false;  
         }        
 
         if (suggestion.data.lat == 'do_geolocate' && suggestion.data.lng == 'do_geolocate'){ // user selected `use my location` option 
 
           $locationAutocomplete.val('');
           geolocateUser();
 
         } else {
 
           teleportUserTo(suggestion.data.lat, suggestion.data.lng, suggestion.value);
         }  
       }
     });
 
     $('.company-autocomplete').autocomplete({
 
       serviceUrl: '/companies/find-by-term/vendor',
       minChars: 3,
       triggerSelectOnValidInput: false,
       autoSelectFirst: true,
       onSelect: function (suggestion) {
         //if there is a map fire the map.js functions
         if($mapCont.length) lcly.mapModule.setCompany(suggestion.id, suggestion.value);
       }
     });
 
     $('.location-autocomplete, .company-autocomplete').focus(function(event) {
 
       $(this).val('');
       $(this).attr('data-orig-placeholder', $(this).attr('placeholder'));
       $(this).attr('placeholder', '');
     });
 
     $('.location-autocomplete, .company-autocomplete').blur(function(event) {
       $(this).attr('placeholder', $(this).attr('data-orig-placeholder'));
     });
 
     $('.location-autocomplete, .company-autocomplete').mouseup(function(e){
       e.preventDefault();
     });
 
     $locationAutocomplete.on("keyup touchend", function(e) {
       if (e.which <= 90 && e.which >= 48){ // only alphanumeric
         if($mapCont.length && typeof lcly.map != 'undefined') {
           lcly.map.lastSearchTerm = $(this).val();
         }
       }
     }); 
   }
 
   function geolocateUser(){
     
     if ($('#current-location-detector').length){
       
       $('#current-location-detector').click();
 
     } else {
 
       if (navigator.geolocation) {
 
         navigator.geolocation.getCurrentPosition(geolocateUserSuccess, geolocateUserError);
 
       } else {
 
         alert("Sorry, your browser doesn't support geolocation.");
       }
     }
   }
 
   function geolocateUserSuccess(position){
 
     teleportUserTo(position.coords.latitude, position.coords.longitude, false);
   }
 
   function geolocateUserError(error){
 
     $locationAutocomplete = $('.location-autocomplete');
     alert($locationAutocomplete.data('geolocate-error'));
   }
 
   function teleportUserTo(lat, lng, value){
 
     var $mapCont = $('#map-cont');
     var $mastheadLocationForm = $('.masthead-geo-form');
 
     $.ajax({
       url: '/geo/point/' + lat + '/' + lng,
       type: 'GET',
       dataType: 'json',
       data: { switch_user_location: 1 },
     })
     .done(function(response) {
       
       // if there is a map, fire the map.js functions
       if ($mapCont.length && typeof lcly.map != 'undefined') {
         
         lcly.mapModule.teleportTo(lat, lng, value);
 
       } else if (!value && typeof response.base_url != 'undefined' && response.base_url) {
 
         window.location = response.base_url;
 
       } else {
 
         $mastheadLocationForm.submit();
       }           
     }); 
   }
 })(jQuery,lcly);;
 //houses misc actions from the conversion tool not related to the map or product detail
 lcly.conversionModule = (function($,lcly) {
 
   //DOM ready
   $(function(){
 
     //reused Dom elements
     lcly.$.mapCont                  = $('#map-cont');
     lcly.$.convWrapper              = $('#conversion-wrapper');
     lcly.$.convSidebar              = $('#conversion-sidebar');
     lcly.$.convColumnOverflow       = $('#conv-column-overflow');
     lcly.$.convColumnOverflowInner  = $('#conv-column-overflow-inner');
     lcly.$.convLocationsWrapper     = lcly.$.convWrapper.find('.conv-locations-wrapper');
     lcly.$.convLocations            = $('#conversion-locations');
     lcly.$.convCategoryFilter       = lcly.$.convWrapper.find('.conv-store-category-filter');
     lcly.$.convActiveFilters        = lcly.$.convWrapper.find('.active-filter-section');
     lcly.$.convStoreInfo            = $('#conversion-store-info');
     lcly.$.convStoreTabs            = $('#conversion-store-tabs');
     lcly.$.convActionBtn            = $('#conv-btn-submit');
     lcly.$.convPurchaseOptions      = $('#conversion-purchase-options');
     lcly.$.convActionBtns           = $('.conv-column-action-buttons');
     lcly.$.convShareButton          = $('.js-conv-share-product');
     lcly.$.storeFilter              = $('#conv-section-store-filter');
     lcly.$.dealerCategories         = $('.js-dealer-category'); 
     lcly.currentStore               = {};
     lcly.metaParams                 = {};
     lcly.pdp                        = {};
     lcly.isEmbedded                 = $('body.for-widget').length;
     lcly.hostDomain                 = metaParam('host_domain');
     lcly.embedContext               = metaParam('embed_context');
     lcly.isDealerLocator            = $('.dealer-locator-wrapper').length;
     lcly.isConversionTool           = lcly.$.convWrapper.length;
     lcly.isSearchLanding            = $('#search-landing').length;
     lcly.hasMultiCategoryFiltering  = lcly.$.convWrapper.hasClass('conv-store-filtering');
     lcly.storeTileActionType        = null;
     lcly.siblingClickEvent          = null;
     lcly.selectedCategory           = null;
     lcly.firstCatSelected           = false;
     lcly.forceCategoryTab           = false;
     lcly.hasActiveStore             = false;
 
     if ( lcly.$.convWrapper.length ) {
       //init the main conversion map
       lcly.mapModule.initConversionMap();
     }
 
     //init and bind all functions
     initEditAccordions();
     initStoreSelection();
     initMobileMapNav();
     initStoreInfo();
     initPurchaseOptions();
     initStoreTabs();
     initInventorySearch();
     bindMoreConversionLinks();
     bindPurchaseOptionChangeEvent();
 
     //Dealer Locator specific initializations
     if (lcly.isDealerLocator) {
       initDealerTabs();
       bindFilterChangeEvent();
       bindCategoryChangeEvent();
       initStoreActionClick();
     }
 
     //Search Landing specific initializations
     if (lcly.isSearchLanding) {
 
       lcly.$.searchLandingContainer = $('#search-landing');
       bindStockFilterEvents(lcly.$.searchLandingContainer);
       bindStockSortEvents(lcly.$.searchLandingContainer);
       bindLoadMoreResults(lcly.$.searchLandingContainer);
       initMobileFiltersNav(lcly.$.body);
     }
 
     if (lcly.hasMultiCategoryFiltering) {
         initMultiCategoryFilter();
     }
     
     if (typeof lcly.variantModule != 'undefined' && lcly.$.convSidebar.length) {
       lcly.variantModule.initVariants(lcly.$.convSidebar);
     }
 
     makeSVGAccessible();
   });
 
   // utility: calculate the intersection between 2 arrays
   function arrayIntersection(array1, array2){
 
     return array1.filter(function(n) {
         return array2.indexOf(n) != -1
     });
   }
 
   /* 
   initStoreSelection();
   connects the show hide functionality for the edit and selected modes. 
   */
 
   function initEditAccordions() {
     $('#conversion-sidebar').on('click.editAccordion', '.js-conv-edit-btn',function(e){
       e.preventDefault();
 
       var $convEditAccordion = $(this).parents('.js-conv-edit-accordion'),
       $edit                  = $convEditAccordion.find('.edit'),
       $selected              = $convEditAccordion.find('.selected'),
       $convEditButton        = $convEditAccordion.find('.js-conv-edit-btn'),
       speed                  = 0; // <-- killed the slide effect because the reloading is causing janky-ness -BH 
 
       var $priceContainer      = $('#conversion-sidebar .js-price-range-wrapper-primary');
       var $priceContainerClone = $('#conversion-sidebar .js-price-range-wrapper-clone');
 
       if($convEditAccordion.hasClass('active')) { // Make active
         
         $selected.show();
         $convEditAccordion.removeClass('active');
         $convEditButton.attr('tabindex', '-1');   // edit location button is not visible in this state and should not be tab-able
         $edit.slideUp(200);
         lcly.hasActiveStore = true;
 
       } else { // Make inactive
 
         $edit.show();
         $convEditAccordion.addClass('active');
         $convEditButton.attr('tabindex', '0');  // edit location button is visible and should be tab-able
         $selected.hide();
         lcly.conversionModule.hideActions();
         lcly.conversionModule.scrollToActiveLocation();
         lcly.conversionModule.resetActiveLocation();
         lcly.mapModule.closeCurrentInfoBox();
         lcly.mapModule.resetActiveMarker();
         $('.js-alt-store-choice-notice').hide();
         var variantParent = lcly.$.convColumnOverflow.find('.js-variant-container');
         lcly.variantModule.enableAllOptions(variantParent);
         lcly.hasActiveStore = false;
         $priceContainerClone.show();
         $priceContainer.hide();
       }
     });
   }
 
   /* 
   auditCategoryList();
   Determine which method to use based on type of filtering available
   */
 
   function auditCategoryList(data){  
 
     if (lcly.hasMultiCategoryFiltering){
 
       auditMultiCategoryList(data);
 
     } else {
 
       auditSingleCategoryList(data);
     }
   }
 
   /* 
   auditSingleCategoryList();
   Builds the store filter select based on available store categories
   and removes any filter options from the select that are no longer valid
   */
 
   function auditSingleCategoryList(data){
 
     //Find stores that have defined enhanced_categories
     var $storesWithCategories = $('.conv-section-store[data-categories="true"]'),
         $storeFilterDropdown  = lcly.$.convWrapper.find('#conv-section-store-filter'),
         $storeFilterContainer = lcly.$.convWrapper.find('.conv-utility-select-container');
 
     // we have categories for this custom SL!
     if (typeof data.custom != 'undefined' && typeof data.custom.categories != 'undefined' && data.custom.categories.length > 0){
 
       // have we populated the filter yet (only the placeholder option is there?)
       var optionsExist = $storeFilterDropdown.find('option').length > 1;
       var filterIsSelected = !$storeFilterDropdown.find('option:first').is(':selected');
       var nVisibleCategories = 0;
 
       $.each(data.custom.categories, function(index, category) {
         
         if (!category.is_visible) return true;
 
         var hasStoresInCategory = typeof data.category_index[category.key] != 'undefined' && data.category_index[category.key].length > 0;
         var nStoresInCategory   = hasStoresInCategory ? '(' + data.category_index[category.key].length + ')' : '';
         var disabledAttr        = hasStoresInCategory ? '' : 'disabled';
         var optionWithCount     = category.value + ' ' + nStoresInCategory;
 
         if (optionsExist){ // gentle update to existing options 
 
           var option = $storeFilterDropdown.find('option[value="' + category.key + '"]');
 
           option.html(optionWithCount);
           option.prop('disabled', !hasStoresInCategory);
 
         } else { // populate the filter
   
           $storeFilterDropdown.append('<option ' + disabledAttr + ' value="' + category.key + '">' + optionWithCount + '</option>');
         }
 
         nVisibleCategories++;
       });
 
       // always show the filter if there are categories
       if (nVisibleCategories > 1) {
         $storeFilterContainer.show().addClass('cat-list-visible');
       } else {
         $storeFilterContainer.hide().removeClass('cat-list-visible');
       }
 
     } else {
 
       // hide the filter container if there are no categories
       $storeFilterContainer.hide().removeClass('cat-list-visible');
       lcly.selectedCategory = null;
     }
   }
 
   /* 
   auditMultiCategoryList();
   Audit the number of markers for each category 
   */
 
   function auditMultiCategoryList(data){
 
     // we have enough categories for this custom SL to render the filter!
     if (typeof data.custom != 'undefined' && typeof data.custom.categories != 'undefined' && data.custom.categories.length > 1){
 
       $('.category-filter-sub-section').data('total', 0);
       var hasReductiveFiltering = typeof data.custom.has_nested_categories != 'undefined' && data.custom.has_nested_categories == 2;
       var activeFilters = lcly.$.convActiveFilters.find('.js-active-filter');
 
       $.each(data.custom.categories, function(index, category) {
         
         if (!category.is_visible) return true;
 
         var hasStoresInCategory = typeof data.category_index[category.key] != 'undefined' && data.category_index[category.key].length > 0;
         var nStoresInIndex      = hasStoresInCategory ? data.category_index[category.key].length : 0;
 
         // we're using boolean "AND" filters so we must reduce options as the user filters 
         if (hasReductiveFiltering && activeFilters.length){ 
 
           var activeFilterKeys = activeFilters.map(function() { // get the active filter keys 
             return $(this).data('key');
           }).get();
 
           $.each(activeFilterKeys, function(index, val) { // compare this cat against each active filter
 
             if ( // this category does NOT have an intersection of stores with any of the active categories. suppress it.  
                   typeof data.category_index[val] == 'undefined'
                   || typeof data.category_index[category.key] == 'undefined' 
                   || !arrayIntersection(data.category_index[val], data.category_index[category.key]).length
               ){
 
               hasStoresInCategory = false;
               nStoresInIndex = 0;
               return true;
             
             } else { // there is an intersection with 1+ categories. enable and count #.
 
               hasStoresInCategory = true;
               var nIntersected = arrayIntersection(data.category_index[val], data.category_index[category.key]).length;
               nStoresInIndex = Math.min(nStoresInIndex, nIntersected);
             }
           });
         }
 
         var nStoresInCategory   = hasStoresInCategory ? '(' + nStoresInIndex + ')' : '';
         var filterEl            = $('.a-filter-option[data-key="' + category.key + '"]');
         var filterElSpan        = filterEl.find('span');
         var parent              = filterEl.closest('.category-filter-sub-section');
         var checkbox            = filterEl.find('input[type="checkbox"]');
         var parentCheckbox      = parent.find('.js-category-filter-select-all input[type="checkbox"]');
         var isDisabled          = nStoresInIndex == 0;
 
         if (!parent.data() || typeof parent.data() == 'undefined') return true; 
 
         filterElSpan.html(nStoresInCategory);
         parent.data()['total'] += nStoresInIndex;
 
         checkbox.prop('disabled', isDisabled);
         filterEl.fadeTo('fast', isDisabled ? .3 : 1);
 
         var total = parent.data('total');
         var totalStr = total > 0 ? '(' + total + ')' : '';
         var parentIsDisabled = total == 0;
         parent.find('.js-category-parent-count').html(totalStr);
         parent.fadeTo('fast', parentIsDisabled ? .3 : 1);
         parentCheckbox.prop('disabled', parentIsDisabled);
       });
 
     } else {
 
       // we could hide the multi-category filter system here
     }
   }
 
   /* 
   applyMultiCategoryFilters();
   fetches new map data based on active multi-category filters 
   */
 
   function applyMultiCategoryFilters(){
 
     var filterElements = lcly.$.convActiveFilters.find('.js-active-filter');
     var filterOperator = lcly.$.convWrapper.hasClass('filter-operator-type-2') ? 'AND' : 'OR';
     var filterKeysString = '';
 
     if (filterElements.length){
 
       filterElements.each(function(index, el) {
         
         var seperator = index > 0 ? ' ' + filterOperator + ' ' : '';         
         filterKeysString += seperator + $(this).data('key');
       });
     }
 
     //Set the category param and fetch new store filtered store data
     lcly.selectedCategory = filterKeysString;
     lcly.conversionModule.setMetaParam('category', filterKeysString);
     lcly.conversionModule.getAndSetData(lcly.$.convWrapper);
   }
 
   /* 
   auditCategoryTab();
   Builds the store filter tab/panel based on available store categories
   and removes any filter options from the select that are no longer valid
   */
 
   function auditCategoryTab(data){  
 
     //Find stores that have defined enhanced_categories
     var $storesWithCategories = $('.conv-section-store[data-categories="true"]'),
         $storeCatTab  = lcly.$.convWrapper.find('#dealer-navigation-categories'),
         $storeCatContainer = lcly.$.convWrapper.find('.dealer-tab-categories-wrapper');
 
     // we have categories for this custom SL!
     if (typeof data.custom != 'undefined' && typeof data.custom.categories != 'undefined' && data.custom.categories.length > 0){
 
       // have we populated the filter yet (only the placeholder option is there?)
       var optionsExist = $storeCatContainer.find('.dealer-category').length > 1;
       var filterIsSelected = $storeCatContainer.find('.active').length;
       var nVisibleCategories = 0;
 
       $.each(data.custom.categories, function(index, category) {
         
         if (!category.is_visible) return true;
 
         var hasStoresInCategory = typeof data.category_index[category.key] != 'undefined' && data.category_index[category.key].length > 0;
         var nStoresInCategory   = hasStoresInCategory ? '(' + data.category_index[category.key].length + ')' : '';
         var disabledProp        = hasStoresInCategory ? '' : 'disabled';
         var catLabel            = category.value;
         var catKey              = category.key;
         var catIcon             = category.icon.length > 1 ? '<img src="' + category.icon + '" alt="' + catLabel + '" class="inline-svg icon-svg" />' : '';
         var activeClass         = catKey == lcly.selectedCategory ? 'active' : '';
 
         if (optionsExist){ // gentle update to existing options 
 
           var option = $storeCatContainer.find('.dealer-category[data-value="' + catKey + '"]');
 
           if (hasStoresInCategory){
 
             option.removeClass('disabled');
 
           } else {
 
             option.addClass('disabled');
           }
 
           if (activeClass.length > 0) {
             option.parent().addClass('active').siblings().removeClass('active');
           }
 
           option.removeClass('loading');
 
         } else { // populate the filter
   
           $storeCatContainer.append('<div class="dealer-category-wrapper ' + activeClass + '"><a href="#" role="button" data-value="' + category.key + '" class="dealer-category js-dealer-category ' + disabledProp + '">' + catIcon + '<h4>' + catLabel + '</h4></a></div>');
         }
 
         nVisibleCategories++;
       });
 
       // always show the filter if there are more than 1 category options
       if (nVisibleCategories > 1) {
         $storeCatTab.show();
       } else {
         $storeCatTab.hide();
       }
 
     } else {
 
       // hide the filter container if there are no categories
       $storeCatTab.hide();
       lcly.selectedCategory = null;
       //TODO: switch to retailer tab here
     }
   }
 
   /*
   determines display, item counts, endpoints used, and overall visibility of the DL side navigation 
   */
   function auditNavigation(data){
 
     var $retailerTab = $('#dealer-navigation-retailers'),
         $stockTab    = $('#dealer-navigation-inventory'),
         $eventTab    = $('#dealer-navigation-events'),
         $categoryTab = $('#dealer-navigation-categories');
 
     //Show Category tab and disable all others
     if(lcly.forceCategoryTab) {
       $categoryTab.trigger('click').siblings().addClass('disabled');
     }
     else {
       $categoryTab.siblings().removeClass('disabled');
     }
 
 
     // manage stock tab 
     var hasStock = typeof data.brand_carrying_store_ids != 'undefined' && data.brand_carrying_store_ids.length;
     var stockEndpoint = typeof data.stock_link != 'undefined' ? data.stock_link : '';
 
     if (hasStock) {
 
       // inject inventory endpoint 
       $stockTab.addClass('is-avail').show();
       $stockTab.attr('data-endpoint', stockEndpoint);
 
     } else {
 
       $stockTab.removeClass('is-avail').hide();
       $stockTab.data('endpoint', '');
     }
 
     // manage event tab 
     var hasEvents = typeof data.n_events != 'undefined' && data.n_events > 0;
     var eventEndpoint = typeof data.events_link != 'undefined' ? data.events_link : '';
 
     if (hasEvents) {
       
       // inject inventory endpoint 
       $eventTab.addClass('is-avail').show();
       $eventTab.find('.icon-count').html(data.n_events);
       $eventTab.attr('data-endpoint', eventEndpoint);
 
     } else {
 
       $eventTab.removeClass('is-avail').hide();
       $eventTab.find('.icon-count').html('');
       $eventTab.data('endpoint', '');
     }
 
     // manage entire nav 
     var $nav = $('#dealer-navigation');
     if ($nav.find('.is-avail').length > 1){
       $nav.show();
     } else {
       $nav.hide();
     }
 
     // on the first nav audit completion, click any tab that has `js-dealer-tab-start-at` class 
     if (typeof lcly.navigationWasAudited == 'undefined' || !lcly.navigationWasAudited) {
       lcly.navigationWasAudited = true;
       $('.js-dealer-tab-start-at.is-avail').click(); // click only if tab has available data 
     }
   }
 
   /* 
   bindFilterChangeEvent();
   On change of the store filter select, set the new category and repopulate store data
   */
 
   function bindFilterChangeEvent() {
     lcly.$.convWrapper.on('change', '#conv-section-store-filter', function(){
       lcly.$.convLocationsWrapper.addClass('loading');
 
       //Set the category param and fetch new store filtered store data
       lcly.selectedCategory = $(this).val();
       lcly.conversionModule.setMetaParam('category', $(this).val());
       lcly.conversionModule.getAndSetData(lcly.$.convWrapper);
     });
   }
 
   /* 
   bindCategoryChangeEvent();
   On click of category tile, trigger a change to the store filter select
   */
 
   function bindCategoryChangeEvent() {
     lcly.$.convWrapper.on('click', '.js-dealer-category', function(e){
       e.preventDefault();
 
       lcly.firstCatSelected = true;
 
       var $this = $(this),
           $parentContainer = $this.parent();
 
       if (!$this.hasClass('disabled')){
 
         if (!$parentContainer.hasClass('active')) {
           $this.addClass('loading');
 
           var catValue = $this.data('value');
 
           lcly.$.storeFilter.val(catValue).change();
           $parentContainer.addClass('active').siblings().removeClass('active');
 
           //Delay for effect
           setTimeout(function(){
             $('#dealer-navigation-retailers').trigger('click');
           }, 500);
         }
       }
     });
   }
 
 
   function bindLoadMoreResults($parent) {
 
     var curr_search_results_page  = 0,
         n_search_results_pages    = 0,
         n_search_results_per_page = 0,
         n_search_results          = 0,
         $productThumbContainer    = $parent.find('.cat-product-thumb-container');
 
     $parent.find('.js-load-more-results').off().on('click', function(){ // .off() removes event handlers
 
       var $this = $(this),
           $loadMoreContainer = $this.closest('.cat-load-more'), 
           n_search_results_pages = $loadMoreContainer.data('n-pages'),
           n_search_results = $loadMoreContainer.data('total-hits');
           n_search_results_per_page = $loadMoreContainer.data('n-per-page'),
           searchUrl = lcly.isSearchLanding ? document.URL : $loadMoreContainer.data('url');
 
       curr_search_results_page++;
 
       var has_query_string = searchUrl.indexOf('?') != -1;
       var target_url = has_query_string ? searchUrl + '&page=' + curr_search_results_page : searchUrl + '?page=' + curr_search_results_page;
       
       $this.addClass('loading');
 
       $.ajax({
         url: target_url,
         type: 'GET',
         dataType: 'html'
       })
       .done(function(html) {
 
         //Remove loading state
         $this.removeClass('loading');
         
         //Append new product thumbs
         var newProductThumbsHTML = $(html).find('.cat-product-thumb-container').html();
         $productThumbContainer.append(newProductThumbsHTML);
         inlineSVGizeAll();
         
         var $displayCount = $parent.find('.cat-display-count'),
             displayCountValue = parseInt($displayCount.text()),
             newCount = (displayCountValue + n_search_results_per_page) > n_search_results ? n_search_results : (displayCountValue + n_search_results_per_page);
 
         $displayCount.text(newCount);
 
 
         var n_expected_results = (curr_search_results_page + 1) * n_search_results_per_page; 
 
         if (n_expected_results >= n_search_results){
 
           $loadMoreContainer.remove();
         }
 
       });
     });
   }
 
 
    /* 
   storeTileClickAction($element);
   handles click events on the store list and passes data to updateSelectedStoreHTML from JSON, 
   also triggers a click on the map marker element
   */
 
   function storeTileClickAction($element, actionType) {
     
     storeId = $element.data('id');
     storeIndex = lcly.$.convWrapper.find('.conv-section-store').index($element);
 
     // this was a direct click on the store tile
     $element.data('was-direct-clicked', true);
 
     if (actionType != null) {
       lcly.storeTileActionType = actionType;
     }
 
     lcly.manageDealerLocatorAriaTags('store');
 
     $(lcly.map.data.markers).each(function(n, obj){
 
       if (parseInt(storeId) === parseInt(obj.id)) {
 
         //trigger a click if the map is loaded. clicking on marker also calls lcly.updateSelectedStoreHTML(n);
         if(lcly.$.mapCont.length) lcly.mapService.fireMarkerClickEvent(lcly.map.markers[n], obj);
 
         return false; 
       }
     });
   }
 
 
   /* 
   initStoreSelection();
   handles click events on the store list and passes data to updateSelectedStoreHTML from JSON, 
   also triggers a click on the map marker element
   */
   function initStoreSelection() {
     var storeId,
         storeIndex;   
 
     lcly.$.convWrapper.on('click', '.conv-column .conv-section-store', function(){
       
       var $this = $(this);
       storeTileClickAction($this);
       
     }).on('keydown', '.conv-column .conv-section-store', function(e){
       
       if(e.keyCode == 13) { // `enter` key
 
         var $this = $(this);
         storeTileClickAction($this);
       }
       
     }).on('mouseenter', '.conv-section-store', function(){
 
       var isNotForcingCategory = !lcly.isDealerLocator 
                             || (lcly.map.data.custom.is_forced_category && lcly.firstCatSelected 
                             || !lcly.map.data.custom.is_forced_category);
 
       if (isNotForcingCategory) {
 
         storeId = $(this).data('id');
 
         $(lcly.map.data.markers).each(function(n, obj){
           
           if (parseInt(storeId) === parseInt(obj.id)) {
 
             var marker = lcly.map.markers[n];
 
             //switch marker icon only if it is not the active marker
             if(lcly.$.mapCont.length && marker.id != lcly.map.activeMarkerId) {
 
               lcly.mapService.setMarkerZIndex(marker, lcly.mapModule.zIndexMax()); 
               lcly.mapService.setMarkerIcon(marker, lcly.map.hoverMarkerTypes[marker.type]);
               lcly.mapService.fireMarkerHoverOverEvent(marker);
             }
 
             return false; 
           }
         });
       }
     }).on('mouseleave', '.conv-section-store', function(){
 
       var isNotForcingCategory = !lcly.isDealerLocator 
                             || (lcly.map.data.custom.is_forced_category && lcly.firstCatSelected 
                             || !lcly.map.data.custom.is_forced_category);
                             
       if (isNotForcingCategory) {
 
         storeId = $(this).data('id');
 
         $(lcly.map.data.markers).each(function(n, obj){
 
           if(parseInt(storeId) === parseInt(obj.id)) {
 
             var marker = lcly.map.markers[n];
 
             //switch marker icon only if it is not the active marker
             if(lcly.$.mapCont.length && marker.id != lcly.map.activeMarkerId) {
 
               lcly.mapService.setMarkerZIndex(marker, 0); 
               lcly.mapService.setMarkerIcon(marker, lcly.map.markerTypes[marker.type]);
               lcly.mapService.fireMarkerHoverOutEvent(marker);
             }
 
             return false; 
           }
         });
       }
     });
   };
 
 
   /* 
   initStoreActionClick();
   handles click events on the store tile action button
   */
   function initStoreActionClick() {
     lcly.$.convWrapper.on('click', '.conv-column .conv-store-tile-action-btn', function(e){
       e.preventDefault();
       e.stopPropagation();
 
       var $this = $(this),
           $parentStore = $this.closest('.conv-section-store'),
           actionType = $this.data('action-type');
 
       storeTileClickAction($parentStore, actionType);
     });
 
     lcly.$.convWrapper.on('click', '.js-hosted-redirect-button', function(e){
       e.preventDefault();
       e.stopPropagation();
 
       window.open($(this).attr('href'));
     });
   };
 
 
   /* 
   initMobileMapNav();
   Simple trigger of the map link at mobile that applies some classes that show the map. 
   */
   function initMobileMapNav() {
     lcly.$.convWrapper.on('click', '#conv-map-link, .js-map-opener', function(e){
       e.preventDefault();
       lcly.$.convSidebar.addClass('map-active');
     });
 
     $('#map-back-mobile').on('click', function(e){
       e.preventDefault();
       lcly.$.convSidebar.removeClass('map-active');
     });
   };
 
 
   /*
   initMultiCategoryFilter();
   Simple trigger of the category filter trigger and close for the SL.
   */
   function initMultiCategoryFilter() {
 
       lcly.$.convWrapper.on('click', '.js-category-filter-opener', function(e){
           e.preventDefault();
           lcly.$.convWrapper.addClass('category-filter-active');
       });
 
       lcly.$.convWrapper.on('click', '.js-category-filter-close', function(e){
           e.preventDefault();
           lcly.$.convWrapper.removeClass('category-filter-active');
       });
 
       lcly.$.convWrapper.on('click', '.js-category-filter-button .js-accordion-header', function(){
           var $filterButton = $(this).parent('.js-category-filter-button');
 
           $filterButton.siblings().each(function(){
             var $siblingAccordionHeader = $(this).find('.js-accordion-header.category-filter-header');
 
             if ($siblingAccordionHeader.hasClass('active')) {
                 $siblingAccordionHeader.trigger('click');
             }
           });
       });
 
       lcly.$.convCategoryFilter.on('change', 'input[type="checkbox"]', function(){
 
         var $this = $(this),
             checkboxId = $this.attr('id'),
             checkboxLabel = $this.attr('data-label'),
             isSelectAll = $this.parent().hasClass('js-category-filter-select-all'),
             isChecked = $this.prop('checked'),
             partiallyCheckedClass = 'partially-checked',
             value = $this.val();
 
         if (isSelectAll) {
 
           var $childrenCheckboxes = $this.closest('.category-filter-sub-section').find('.category-filter-sub-sub-section').find('input[type="checkbox"]');
           $childrenCheckboxes.each(function(){
             var $thisCheckbox = $(this);
             if ($thisCheckbox.prop('checked') !== isChecked) {
                 $(this).prop('checked', isChecked).trigger('change');
             }
           });
           $this.prop('checked', isChecked).next('label').removeClass(partiallyCheckedClass);
 
         } else {
 
           var $siblingCheckboxes = $this.closest('.radio-list').find('input[type="checkbox"]'),
               siblingCount = $siblingCheckboxes.length,
               siblingsChecked = 0;
               $parentCheckbox = $this.closest('.category-filter-sub-section').find('.js-category-filter-select-all').find('input[type="checkbox"]');
 
           if (isChecked) {
 
               var filterHTML = '<a href="#" '
                                + 'id="activeFilter-' + checkboxId +'" '
                                + 'class="filter-btn-remove js-active-cat-filter-remove js-active-filter" '
                                + 'data-key="' + value + '" '
                                + 'data-checkbox-id="' + checkboxId + '">' 
                                  + checkboxLabel 
                                + '<span class="active-filter-close icon-close"></span>' 
                              + '</a>';
 
               var newActiveFilter = $(filterHTML);
               lcly.$.convActiveFilters.prepend(newActiveFilter);
 
           } else {
 
               lcly.$.convActiveFilters.find('#activeFilter-' + checkboxId).remove();
           }
 
           // Show active filters if it has children, hide it if not.
           var nActiveFilters = lcly.$.convActiveFilters.find('.js-active-cat-filter-remove').length;
           lcly.$.convActiveFilters.toggleClass('show-active-filters', nActiveFilters > 0);
           lcly.$.convActiveFilters.find('.js-active-cat-filter-clearer').toggle(nActiveFilters > 1);
 
           //Check siblings and set checked/unchecked/partial-check on parentCheckbox
           $siblingCheckboxes.each(function(){
             if ($(this).prop('checked')) {
               siblingsChecked++;
             }
           });
 
           if (siblingsChecked === 0) {
             $parentCheckbox.prop('checked', false).next('label').removeClass(partiallyCheckedClass);
           } else if (siblingsChecked === siblingCount) {
             $parentCheckbox.prop('checked', true).next('label').removeClass(partiallyCheckedClass);
           } else {
             $parentCheckbox.prop('checked', false).next('label').addClass(partiallyCheckedClass);
           }
         }
       });
 
       lcly.$.convCategoryFilter.on('change', 'input[type="checkbox"]', $.debounce(200, false, applyMultiCategoryFilters));
 
       lcly.$.convCategoryFilter.on('click', '.js-active-cat-filter-remove', function(e){
         e.preventDefault();
         lcly.$.convCategoryFilter.find('#' + $(this).attr('data-checkbox-id')).trigger('click');
       });
 
       lcly.$.convCategoryFilter.on('click', '.js-active-cat-filter-clearer', function(e){
         e.preventDefault();
         lcly.$.convCategoryFilter.find('.js-active-cat-filter-remove').trigger('click');
       });
 
       // if filters were pre-selected (via URL hash or embed code), let's set them and trigger the change
       $('.conv-store-category-filter input[type="checkbox"].checked').prop('checked', true).trigger('change');
   };
 
 
   /* 
   initPdpActions();
   Deals with nested PDP actions, for multi-store usage primarily
   */
   function initPdpActions($parent){
 
     $parent.on('click keyup', '.conv-section-store', function(e){
 
       event = e || window.event;
 
       if (event.type == 'keyup' && event.which != 13) {
         return false;
       }
 
       e.preventDefault();
       var id = $(this).data('id');
       $(this).closest('.js-conv-edit-accordion').removeClass('active');
       $parent.find('.js-conv-edit-btn').attr('tabindex', '0');
       $parent.find('.conv-section-store').hide();
       $parent.find('.buy-grid-action-links, .buy-grid-purchase-options').show();
       $parent.find('.purchase-options-for-store').hide();
       $parent.find('.purchase-options-for-store[data-id="' + id + '"]').show();
       $parent.find('.purchase-options-for-store[data-id="' + id + '"] input[type="radio"]:first').click();
       $parent.find('.conv-section.conversion-locations').addClass('active');
       $(this).show();
       lcly.conversionModule.getAndSetPdpPrice($parent, id);
       return false;
     });
 
     $parent.on('click', '.js-conv-edit-btn', function(e){
       e.preventDefault();
       $(this).closest('.js-conv-edit-accordion').addClass('active');
       $parent.find('.js-conv-edit-btn').attr('tabindex', '-1');
       $parent.find('.conv-section-store').show();
       $parent.find('.buy-grid-action-links, .buy-grid-purchase-options, .purchase-options-for-store').hide();
       $parent.find('.conv-section.conversion-locations').removeClass('active');
       lcly.conversionModule.getAndSetPdpPrice($parent, false);
       return false;
     });
 
     $parent.on('click', '.conv-submitter', function(){
       if ( !$('.modal-body').hasClass('cart-active') ){
         $('.modal-body').addClass('cart-active');
       }
       lcly.manageDealerLocatorAriaTags('inventory');
     });
   }
 
   /* 
   initPdpNav();
   Simple trigger of the product thumbs to navigate to the pdp on click, and from pdp back to clp 
   */
   function initPdpNav($parent) {
     $parent.on('click', '.product-thumb', function(e){
       e.preventDefault();
 
       var $convPdpContainer = $parent.find('.conv-pdp-container');
 
       //inject the relevant product name into the pdp back title
       var productName = $(this).data('product-name'),
           endpoint = $(this).attr('href'),
           endpointAppend = '';
 
       if (typeof lcly.map.meta != 'undefined'){
         endpointAppend = '&lat=' + lcly.map.meta.center_lat
                        + '&lng=' + lcly.map.meta.center_lng
                        + '&diag=' + lcly.map.meta.distanceDiag
       }
 
       if (typeof lcly.isDealerLocator != 'undefined' && lcly.isDealerLocator){
         endpointAppend += '&is_inline=1';
       }
 
       // user-set categories should persist to PDP store selection
       if (metaParam('category') && metaParam('category') != ''){
         endpointAppend += '&dealer_category=' + metaParam('category');
       }
 
       //Slide in PDP
       $parent.addClass('pdp-active');
       $parent.find('.conv-pdp-back').attr('tabindex', '0');
       lcly.manageDealerLocatorAriaTags('inventory');
 
       //Set pdp container to loading state
       $convPdpContainer.addClass('loading');
 
       //Fetch and Load PDP markup/data
       $.ajax({
         url: endpoint + endpointAppend,
         type: 'GET',
         dataType: 'json'
       })
       .done(function(response) {
 
         //inject PDP markup
         $convPdpContainer.html(response.html);
         lcly.pdp.data = response.data;
 
         if (typeof lcly.variantModule != 'undefined') {
           lcly.variantModule.audit($convPdpContainer);
           lcly.variantModule.initVariants($convPdpContainer);
         }
 
         initPdpPathsToPurchase($convPdpContainer);
         inlineSVGizeAll();
 
         //delay for effect
         setTimeout(function(){
           //remove loading state
           $convPdpContainer.removeClass('loading');
           $convPdpContainer.find('.paths-to-purchase-wrapper .dl-store-list-tile').first().focus();
         }, 300);
       });
     });
 
     $parent.on('click', '.conv-pdp-back', function(e){      
       e.preventDefault();
       $parent.removeClass('pdp-active');
       $parent.find('.conv-pdp-back').attr('tabindex', '-1');
       lcly.manageDealerLocatorAriaTags('inventory');
 
       // empty the pdp panel when 'conv-pdp-back' is selected so that keyboard user can't tab to elements that should be hidden
       // remove them from the DOM instead.  they get re-loaded when a new product thumb is clicked.
       var $variantContainer = $parent.find('.js-variant-container');
       $variantContainer.empty();
     });
   };
 
   function initPdpPathsToPurchase($parent){
 
     var $opts = $parent.find('.conv-purchase-options');
     var $btn = $parent.find('.conv-submitter');
     getAndApplySelectedPurchaseOptionData($opts, $btn);
 
     $storeTiles = $parent.find('.conv-section-store');
     if ($storeTiles.length == 1) $storeTiles.click(); 
 
     $parent.find('#pdp-wrapper.for-single-store .conv-purchase-options').show();
   }
 
   /*
   initMobileFiltersNav();
   Simple trigger of the filters link at mobile that applies some classes that show the filters
   */
   function initMobileFiltersNav($parent) {
 
     $('.conv-mobile-filters-link').click(function(e) {
       e.preventDefault();
       $parent.addClass('mobile-filters-active');
     });
 
     $('.filters-back-mobile').click(function(e) {
       e.preventDefault();
       $parent.removeClass('mobile-filters-active');
     });
 
     $parent.on('click', '.conv-mobile-filters-link', function(e){
 
       e.preventDefault();
       $parent.addClass('mobile-filters-active');
     });
 
     $parent.on('click', '.filters-back-mobile', function(e){
       e.preventDefault();
       $parent.removeClass('mobile-filters-active');
     });
   };
 
   /* 
   updateSelectedStoreHTML(obj);
   this updates the selected store data, we could use this when the store card is clicked or the marker. 
   */
 
   lcly.updateSelectedStoreHTML = function(markerId, active) {
 
     for (var i=0; i < lcly.map.data.markers.length; i++){
       if (markerId == lcly.map.data.markers[i].id){
         var obj = lcly.map.data.markers[i]; // set object `obj` to the active marker 
         break;
       }
     }
 
     var objDistance               = typeof obj.user_distance != 'undefined' ? obj.user_distance : obj.distance;
     var $convEditAccordionStore   = $('#conv-edit-accordion-store'),
     $convSectionStore             = $convEditAccordionStore.find('.conv-section-store'),
     $convEditButton               = $convEditAccordionStore.find('.js-conv-edit-btn'),
     storeTitle                    = obj.name,
     storeIndex                    = obj.index,
     storeInventory                = obj.disclaimer,
     storeInventoryStatus          = obj.stock_class,
     storeId                       = obj.id,
     storeIsDealer                 = typeof obj.store_id != 'undefined';
     storePhone                    = obj.phone.replace('(','').replace(') ', '-'),
     storePhoneLink                = obj.phone_link,
     storeDistance                 = parseFloat(objDistance * LANG_STRINGS.distance_rate).toFixed(1);
     storeDistanceUnit             = LANG_STRINGS.distance_unit;
     storeStatus                   = obj.status_label,
     storeStatusClass              = obj.status_class,
     storeTmpDisclaimer            = storeStatus != '' && typeof obj.tmp_disclaimer != 'undefined' ? obj.tmp_disclaimer : '',
     storeDirections               = 'https://maps.google.com?daddr=' + encodeURIComponent(obj.address)
                                   + ',+' + encodeURIComponent(obj.city) + ', ' + obj.state + '+' + obj.zip;
     var storeIsVisiblyActive      = lcly.$.convStoreInfo.data('id') == storeId;
 
     //set an active class on the store list first: 
     $convSectionStore.eq(storeIndex).addClass('active').siblings('.conv-section-store').removeClass('active');
 
     //Load the store info behind the scenes, if not already active AND this is the conversion tool (not the dealer locator)
     if (!lcly.isDealerLocator || (!active && !storeIsVisiblyActive)){
 
       lcly.$.convStoreInfo.data('id', storeId);
       lcly.$.convStoreInfo.addClass('loading');
       lcly.loadStoreHtml(storeId, storeIsDealer, metaParam('company_id'));
     
     } else {
 
       //If a store action has been clicked, fire the subsequent tab click
       if (lcly.storeTileActionType != null) {
         lcly.$.convWrapper.find('.store-info-tab-' + lcly.storeTileActionType).trigger('click');
         lcly.storeTileActionType = null;
       }
     }
 
     //if click came from Dealer Locator, open the info card
     if (lcly.isDealerLocator) {
       lcly.$.convWrapper.addClass('conv-info-active');
       $convSectionStore.removeClass('active');
     } 
     //otherwise perform the necessary conversion column actions
     else {
       //Populate selected store html and attributes
       $('#selected-location-title').html(storeTitle);
       $('#selected-location-inventory').removeClass('warning').removeClass('success').addClass(storeInventoryStatus);
       $('#selected-location-inventory').html(storeInventory);
       $('#selected-location-tmp-disclaimer').html(storeTmpDisclaimer);
       $('#selected-location-btn-call').attr('href', storePhoneLink);
       $('#selected-location-btn-directions').attr('href', storeDirections);
       $('#selected-location-distance').html(storeDistance + ' ' + storeDistanceUnit);
       $('#selected-location-more-info').attr('data-switchlive-store-id', storeId);
 
       if (storeStatus != ''){
         $('#selected-location-status').html(storeStatus).removeClass('error').removeClass('success').addClass(storeStatusClass).show();
       } else {
         $('#selected-location-status').hide();
       }
 
       //make sure accordion is in 'Selected mode'. Need to trigger click to get the animation.
       if($('#conv-edit-accordion-store').hasClass('active')) {
         $('#btn-conv-edit-location').trigger('click');
       }
 
       // show the call to action buttons
       lcly.conversionModule.showActions(obj.stock_status);
     }
 
     $('.tooltip').tooltip();
 
     // determine whether the actual store tile was physically clicked so we can force scroll to bottom of conversion column
     var wasDirectClicked = $convSectionStore.data('was-direct-clicked');
     $convSectionStore.data('was-direct-clicked', false);
     if (wasDirectClicked && !lcly.isDealerLocator) scrollToColumnTop();
   };
 
 
   /**
    * loads the information for a specific store, when a store has been clicked in either the store list
    * or clicked directly on a map marker 
    */
    lcly.loadStoreHtml = function(store_id, is_dealer, brandId){
     lcly.currentStore.storeId = store_id;
     lcly.currentStore.inventoryLoaded = false;
     
     var params = {};
     var variantParent = lcly.$.convColumnOverflow.find('.js-variant-container');
     var priceContainer = lcly.$.convColumnOverflow.find('.js-price-range-wrapper-primary');
     var priceContainerClone = lcly.$.convColumnOverflow.find('.js-price-range-wrapper-clone');
     var upc = lcly.variantModule.getCurrentUpc(variantParent);
     if (!upc) upc = metaParam('upc');
     if (brandId) params.company_id = brandId;
     if (upc) params.upc = upc;
     params.only_retailer_id = metaParam('only_retailer_id');
 
     var slug = is_dealer ? 'dealer' : 'store';
 
     $.ajax({
       url: '/conversion/location/' + slug + '/' + store_id,
       type: 'GET',
       dataType: 'json',
       data: params
     })
     .done(function(response) {
 
       //inject store info
       lcly.$.convStoreInfo.html($.parseHTML(response['store_html']));
 
       //inject store tabs. TODO: potentially bind a second click event here to not load
       //tab_html until a tab is clicked. 
       lcly.$.convStoreTabs.html($.parseHTML(response['tabs_html']));
 
       //inject purchase options
       lcly.$.convPurchaseOptions.html($.parseHTML(response['purchase_html']));
 
       // if this is a conversion tool, suppress the proper variants 
       if (!lcly.isDealerLocator) lcly.variantModule.enableOptionsFor(response.upcs_carried, variantParent);
       if (!lcly.isDealerLocator && response.disclaimer) $('#selected-location-inventory').html(response.disclaimer);
 
       //Set relevant element variables based on injected content above
       lcly.$.clpContainer = $('#clp-container');
       lcly.$.convTabLocations = $('#conv-store-tab-locations');
 
       //Find the selected option and apply the appropriate data
       getAndApplySelectedPurchaseOptionData(lcly.$.convPurchaseOptions, lcly.$.convActionBtn);
 
       //Bind sibling location js
       bindSiblingStoreClickEvent();
 
       if (response['price_html'] != '') priceContainer.html($.parseHTML(response['price_html']));
       priceContainer.show();
       priceContainerClone.hide();
 
       //delay for effect
       setTimeout(function(){
         //remove loading state
         lcly.$.convStoreInfo.removeClass('loading');
         // if this is dealer locator, then we need to put focus in new modal 
         if (lcly.isDealerLocator) {
           lcly.$.convStoreInfo.find('.nav-bar-back').focus(); //TIMH
         }
 
         //If a store action has been clicked, fire the subsequent tab click
         if (lcly.storeTileActionType != null) {
           lcly.$.convWrapper.find('.store-info-tab-' + lcly.storeTileActionType).trigger('click');
           lcly.storeTileActionType = null;
         }
 
       }, 300);
 
       $('.tooltip').tooltip();
 
       window.parent.postMessage({ broadcast : { name : 'store_click', data : response.store } }, "*");
     });
   }
 
   /**
    * loads the inventroy for a specific store, when the inventory tab has been clicked 
    */
    lcly.loadStoreInventory = function(store_id, endpoint){
     
     //If this is the current store and inventory has not been loaded
     if (lcly.currentStore.storeId == store_id && !lcly.currentStore.inventoryLoaded){
       
       lcly.$.clpContainer.addClass('loading');
 
       $.ajax({
         url: endpoint,
         type: 'GET',
         dataType: 'html'
       })
       .done(function(response) {
         //inject inventory clp html
         lcly.$.clpContainer.html(response);
         inlineSVGizeAll();
 
         //Bind Load more results button
         bindLoadMoreResults(lcly.$.clpContainer);
 
         var $convStoreTabInventory = $('#conv-store-tab-inventory'),
             $loadMoreContainer = $convStoreTabInventory.find('.cat-load-more');
 
         $loadMoreContainer.attr('data-url', endpoint);
 
         //Init PDP Nav
         initPdpNav($convStoreTabInventory);
         initPdpActions($convStoreTabInventory);
 
         //Init the mobile filter navigation
         initMobileFiltersNav($convStoreTabInventory);
 
         //Bind the filter/sort click/change events
         bindStockFilterEvents($convStoreTabInventory);
         bindStockSortEvents($convStoreTabInventory);
 
         //delay for effect
         setTimeout(function(){
           //remove loading state
           lcly.$.clpContainer.removeClass('loading');
           lcly.$.clpContainer.find('input.cat-search').focus();
         }, 500);
 
         lcly.currentStore.inventoryLoaded = true;
       });
     }
     else {
       // inventory loaded once before, lets jump to search
       lcly.$.clpContainer.find('input.cat-search').focus();
     }
 
   }
 
   /* 
   Bind change event to filter radio buttons, sort select box, and active filter remove links
   */
   function bindStockFilterEvents($parent) {
     var $filterContainer = $parent.find('.cat-filter-container'),
         $activeFilterContainer = $parent.find('.cat-active-filter-container'),
         $searchContainer = $parent.find('.cat-search-form'),
         $filterBackMobile = $parent.find('.filters-back-mobile');
 
     $filterContainer.on('keyup', 'li', function(e){
       event = e || window.event;
       if (event.which == 13) {
         $(this).children('label').trigger('click');
       }
     });
 
     //filter click event
     $filterContainer.on('change', 'input', function(e){
       e.preventDefault();
       var endpointUrl = $(this).data('url');
 
       //If native search landing, follow url
       if(lcly.isSearchLanding) {
 
         window.location.href = endpointUrl;
       
       } else { //otherwise, fetch the endpoint via ajax and inject
 
         lcly.dealerStockLoaded = false;
 
         //If mobile, close the filter slide and go back to main inventory screen
         if(lcly.mobile){
           setTimeout(function(){
             $filterBackMobile.trigger('click');
           }, 200);
         }
 
         //delay for effect
         setTimeout(function(){
           getInventoryHtmlAndInject(endpointUrl, $parent);
         }, 250);
       }
     });
 
     //active filter click event
     $activeFilterContainer.on('click keyup', '.filter-btn-remove', function(e){
       e.preventDefault();
       event = e || window.event;
       if ((event.type == 'keyup' && event.which != 13) || $(this).hasClass('immutable')) {
         return false;
       }
       var endpointUrl = $(this).attr('href');
 
       //If native search landing, follow url
       if(lcly.isSearchLanding) {
         window.location.href = endpointUrl;
       }
       //otherwise, fetch the endpoint via ajax and inject
       else {
         lcly.dealerStockLoaded = false;
 
         //delay for effect
         setTimeout(function(){
           getInventoryHtmlAndInject(endpointUrl, $parent);
         }, 250);
       }
 
     });
 
     //active filter click event
     $activeFilterContainer.on('click', '.js-filter-remove-all', function(e){
       e.preventDefault();
       var endpointUrl = $(this).attr('href');
 
       //If native search landing, follow url
       if(lcly.isSearchLanding) {
         window.location.href = endpointUrl;
       }
       //otherwise, fetch the endpoint via ajax and inject
       else {
         lcly.dealerStockLoaded = false;
 
         //delay for effect
         setTimeout(function(){
           getInventoryHtmlAndInject(endpointUrl, $parent);
         }, 250);
       }
 
     });
 
     // on non-embedded systems, radio btn has link for text for SEO reasons
     // we want to have it check the radio button when clicked just so it looks nice
     // while page loads
     $filterContainer.on('click', '.filter-label-link', function(e){
       $(this).parents().eq(1).find('input').attr('checked', 'checked');
     });
 
     //search form submit event
     $searchContainer.on('submit', function(e){
 
       if ($(this).closest('body').hasClass('search-page')){
 
         $(this).attr('action', '');
         return true; // this is a native CLP, allow standard search. 
       
       } else {
 
         e.preventDefault();
         lcly.dealerStockLoaded = false;
 
         var $this = $(this), 
             searchTerm = $this.find('input').val(),
             endpointUrl = $(this).attr('action') + '&q=' + searchTerm;
             
         getInventoryHtmlAndInject(endpointUrl, $parent);
       }
     });
 
   };
 
   /*
   Bind change event to filter radio buttons, sort select box, and active filter remove links
   */
   function bindStockSortEvents($parent) {
     var $sortContainer = $parent.find('.cat-utility-sort');
 
     $sortContainer.on('change', function(e){
       e.preventDefault();
       var endpointUrl = $(this).val();
 
       //If native search landing, follow url
       if(lcly.isSearchLanding) {
         window.location.href = endpointUrl;
       }
       //otherwise, fetch the endpoint via ajax and inject
       else {
         lcly.dealerStockLoaded = false;
 
         //delay for effect
         setTimeout(function(){
           getInventoryHtmlAndInject(endpointUrl, $parent);
         }, 250);
       }
 
     });
   };
 
   /* 
   Bind change event to filter radio buttons, sort select box, and active filter remove links
   */
   function getInventoryHtmlAndInject(endpoint, $parent) {
 
     if ($parent.attr('id') == 'conv-store-tab-inventory') {
 
       updateStoreInventoryHTML(endpoint);
     
     } else if ($parent.attr('id') == 'dealer-tab-inventory-container' || $parent.attr('id') == 'dealer-tab-inventory-grid-container-desktop') {
 
       if( $('#dealer-tab-inventory-grid-container-desktop').hasClass('pdp-active') ) {
         $('#dealer-tab-inventory-grid-container-desktop').removeClass('pdp-active');
       }
       
       loadAllStockHTML(endpoint);
     
     } else if ($parent.attr('id') == 'search-landing' || $parent.attr('id') == 'search-landing-hosted') {
 
       updateNativeInventoryHTML(endpoint);
     }
   };
 
 
   function updateStoreInventoryHTML(endpoint) {
 
     lcly.$.clpContainer.addClass('loading');
 
     $.ajax({
       url: endpoint,
       type: 'GET',
       dataType: 'html'
     })
     .done(function(response) {
       //inject inventory clp html
       lcly.$.clpContainer.html(response);
       inlineSVGizeAll();
 
       var $loadMoreContainer = lcly.$.clpContainer.find('.cat-load-more');
       $loadMoreContainer.attr('data-url', endpoint);
 
       bindLoadMoreResults(lcly.$.clpContainer);
 
       //Bind the filter/sort click/change events
       bindStockFilterEvents($('#conv-store-tab-inventory'));
       bindStockSortEvents($('#conv-store-tab-inventory'));
 
       //delay for effect
       setTimeout(function(){
         //remove loading state
         lcly.$.clpContainer.removeClass('loading');
       }, 500);
 
       lcly.currentStore.inventoryLoaded = true;
     });
   };
 
 
   function updateNativeInventoryHTML(endpoint) {
 
     lcly.$.searchLandingContainer.addClass('loading');
 
     $.ajax({
       url: endpoint,
       type: 'GET',
       dataType: 'html'
     })
     .done(function(response) {
       
       //inject inventory clp html
       lcly.$.searchLandingContainer.html(response);
       inlineSVGizeAll();
 
       //Bind the filter/sort click/change events
       bindStockFilterEvents(lcly.$.searchLandingContainer);
       bindStockSortEvents(lcly.$.searchLandingContainer);
       bindLoadMoreResults(lcly.$.searchLandingContainer);
       initMobileFiltersNav(lcly.$.body);
 
       //delay for effect
       setTimeout(function(){
         //remove loading state
         lcly.$.searchLandingContainer.removeClass('loading');
       }, 500);
     });
   };
 
   
   /* 
   Find the selected purchase option and apply necessary data to the action button
   */
   function getAndApplySelectedPurchaseOptionData($opts, $btn) {
     var selectedOption = $opts.find('input:checked'),
         actionBtnText  = selectedOption.data('action-label'),
         $storeIdEl     = $opts.find('[data-id]'),
         switchLiveEvent = selectedOption.attr('data-switchlive-event');  // buy, reserve, call 
 
     $btn.removeClass('disabled').text(actionBtnText);
 
     // attempt to update switchlive data attribute based on user selection
     try{
       if (typeof switchLiveEvent != 'undefined' && (switchLiveEvent === 'buy' || switchLiveEvent === 'reserve' || switchLiveEvent === 'call' )){
                 
         var newAttribute = "none",
             switchLiveCurrentContext = lcly_switchlive_context || 'PL',
             storeId = $storeIdEl.attr('data-id');
 
         switch (String(switchLiveEvent)) {
           case 'buy':
             newAttribute = $btn.attr('data-switchlive-id-' + switchLiveCurrentContext + '-buy');
             break;        
           case 'reserve':
             newAttribute = $btn.attr('data-switchlive-id-' + switchLiveCurrentContext + '-reserve');
             break;         
           case 'call':
             newAttribute = $btn.attr('data-switchlive-id-' + switchLiveCurrentContext + '-call');
             break;                   
         }
         $btn.attr('data-switchlive-id-' + switchLiveCurrentContext, newAttribute);
         $btn.attr('data-switchlive-store-id', storeId);
       }
     }
     catch(e){
       // fail silently
     }    
   };
 
 
   /* 
   Bind change event to purchase option radio buttons
   */
   function bindPurchaseOptionChangeEvent() {
     $('body').on('keyup', '.conv-purchase-options-inner li', function(e){
       event = e || window.event;
       if (event.which == 13) {
         $(this).children('label').trigger('click');
       }
     });
     $('body').on('change', '.conv-purchase-options-inner input', function(e){
       e.preventDefault(); 
       var $opts = $(this).closest('.conv-purchase-options');
       var $btn = $(this).closest('.conv-column, #pdp-wrapper').find('.conv-submitter');
       getAndApplySelectedPurchaseOptionData($opts, $btn);
     });
   };
 
   /* 
   Bind sibling store click event
   */
   function bindSiblingStoreClickEvent() {
     lcly.$.convTabLocations.on('click', '.conv-section-store', function(e){
       e.preventDefault();
       
       //get the sibling store data and then reset map to that store location
       var $this    = $(this),
           lat      = $this.data('lat'),
           lng      = $this.data('lng'),
           storeId  = $this.data('id'),
           address  = $this.data('address');
 
       if(lcly.$.mapCont.length) {
         //set the map location
         var zoom = lcly.mapService.zoomValueFor(lcly.map.locationSwitchZoom);
 
         lcly.siblingClickEvent = true;
         lcly.map.activeMarkerId = storeId;
         lcly.mapModule.closeCurrentInfoBox();
         lcly.map.populateLock = false;
         lcly.mapModule.setCoords(lat, lng, 0);
         lcly.mapModule.setZoom(zoom);
         lcly.mapModule.setLocation(address);
 
         // set the populateLock for 1 second in case map needs to
         //  shift to bring this store marker into view
         // lcly.map.populateLock = true;
         // setTimeout(function(){ lcly.map.populateLock = false; }, 1000);
 
         //This is here to redraw the map in case the sibling location is right next door
         //TODO: prevent this from happening unless it needs to happen
         lcly.mapModule.triggerRedraw();
 
         lcly.$.convStoreInfo.addClass('loading');
       }
 
       //go back to info tab in loading state
       $('#conv-store-locations-back').trigger('click');
       
 
     });
   };
 
 
   /* 
   initStoreInfo();
   loads the store info pane when the info link is clicked
   */
   function initStoreInfo() {
     var $convStoreInfo = $('#conv-store-info');
 
     //show store info
     lcly.$.convWrapper.on('click','#selected-location-more-info',function(e){
       e.preventDefault();
       lcly.$.convWrapper.addClass('conv-info-active');
     });
 
     //selected store action links, prevent bubbling
     lcly.$.convWrapper.on('click','#selected-location-btn-call, #selected-location-btn-directions',function(e){
       e.stopPropagation();
     });
 
     //hide store info
     lcly.$.convWrapper.on('click','#conv-store-info-back',function(e){
       e.preventDefault();
       e.stopPropagation();
 
       // focus on first store in list going back
       // $('#conversion-locations .dl-store-list-tile').first().focus(); // TIMH
       lcly.$.convWrapper.removeClass('conv-info-active');
       if (typeof lcly.mapModule != 'undefined') {
         lcly.mapModule.resetActiveMarker();
         lcly.mapModule.closeCurrentInfoBox();
       }
     });
  
     //show store map
     lcly.$.convWrapper.on('click','#selected-location-btn-map',function(e){
       e.preventDefault();
       e.stopPropagation();
       lcly.$.convSidebar.addClass('map-active');
     });
   };
 
   /* 
   initPurchaseOptions();
   toggles the radios and the visiblity if the purchase options, and sets it to the selected state. 
   */
   function initPurchaseOptions() {
     lcly.$.convWrapper.on('change','.js-accordion-selection', function(){
       var $this = $(this),
       $contentEditSection = $this.closest('.conv-edit-section'),
       string = $this.next('label').html();
 
       //update the text in the edit section. 
       $contentEditSection.find('.conv-edit-accordion.selected').html(string);
 
       setTimeout(function(){
         $contentEditSection.prevAll('.js-conv-edit-btn').trigger('click.editAccordion');
       },300);
     });
   };
 
 
   function initStoreTabs() {
     var activeTabId;
     /* first bind all the basic events that slide the conversion column over, 
     then check on that ID attr and add a class that shows correct layer. */
     lcly.$.convWrapper.on('click','.js-store-info-tab',function(e){
       e.preventDefault();
       var tabId = $(this).data('id');
 
       lcly.manageDealerLocatorAriaTags('store', tabId);
 
       //if there is a another tab active remove it
       if(lcly.$.convWrapper.hasClass('conv-store-tab-active')) {
         lcly.$.convWrapper.removeClass('conv-' + activeTabId + '-active').addClass('conv-' + tabId + '-active');
       }
       else {
         //no tab is open, add the generic classes to show tab info and then use the id to add specific class. 
         lcly.$.convWrapper.addClass('conv-store-tab-active').addClass('overlay-active').addClass('conv-' + tabId + '-active');
       }
       //set the active tab. 
       activeTabId = tabId; 
 
       //if click is on inventory tab, load the inventory data
       if (tabId == 'inventory'){
         var storeId = $(this).data('store-id'),
             storeInventoryEndpoint = $(this).data('endpoint');
 
         //when opening inventory tab, enable the map.populateLock
         lcly.map.populateLock = true;
 
         lcly.loadStoreInventory(storeId, storeInventoryEndpoint);
       }
 
       if (tabId == 'alt') loadAltTabContent();
     });
 
     //Enable basic back buttons. 
     lcly.$.convWrapper.on('click','#conv-store-tab-overlay, #nav-bar-back-tab, .conv-store-tab-back, #conv-store-info-back',function(e){
     
       e.preventDefault();
       e.stopPropagation();
       
       //handle fringe case of pdp being active from inventory tab
       if (activeTabId == 'inventory' && $('#conv-store-tab-inventory').hasClass('pdp-active') && $(this).hasClass('nav-bar-back-tab')){
         $('#conv-store-tab-inventory').removeClass('pdp-active');
         lcly.manageDealerLocatorAriaTags('inventory');
       }
       //when closing inventory tab, shut off the map.populateLock
       else if (activeTabId == 'inventory'){
         lcly.map.populateLock = false;
         lcly.$.convWrapper.removeClass('conv-store-tab-active').removeClass('overlay-active').removeClass('conv-' + activeTabId + '-active');
       }
       //otherwise, remove the normal class to navigate back
       else{
         lcly.$.convWrapper.removeClass('conv-store-tab-active').removeClass('overlay-active').removeClass('conv-' + activeTabId + '-active');
       }
     });
 
     lcly.$.convWrapper.on('click', '.lcly-vendor', function(e){
 
       lcly.$.convWrapper.find('.store-info-tab-alt-urls').click();
       return false;
     });
   };
 
 
   function initInventorySearch(){ // admin only
 
     $('.js-inventory-search').click(function(event) {
       window.open($(this).data('endpoint'));
       return false;
     });
   }
 
   function initDealerTabs() {
     //DL always starts with retailers tab active
     lcly.activeDealerTabId = "retailers";
     lcly.dealerStockLoaded = false;
     lcly.dealerEventsLoaded = false;    
     lcly.manageDealerLocatorAriaTags("retailers");
 
     lcly.$.convWrapper.on('click','.js-dealer-tab',function(e){
       e.preventDefault();
       var tabId = $(this).data('id');
 
       //If this is not the active tab
       if (lcly.activeDealerTabId != tabId) { 
 
         // aria-hidden for hidden elements        
         lcly.manageDealerLocatorAriaTags(tabId);
 
         if (lcly.activeDealerTabId == 'inventory'){
           lcly.$.convWrapper.removeClass('dealer-inventory-grid-active');
         }
 
         //Remove current active tab state, and add new active tab state
         lcly.$.convWrapper.removeClass('dealer-' + lcly.activeDealerTabId + '-active').addClass('dealer-' + tabId + '-active');
 
         //set the active tab. 
         lcly.activeDealerTabId = tabId; 
 
         //if click is on inventory tab and data is not already loaded, load stocky data
         if (lcly.activeDealerTabId == 'inventory'){
           loadAllStockHTML($(this).attr('data-endpoint'));
         }
 
         //if click is on events tab, and events haven't been loaded, load events data
         else if (lcly.activeDealerTabId == 'events' && !lcly.dealerEventsLoaded){
           var $eventsTabContainer = $('#dealer-tab-events-container');
 
           $eventsTabContainer.addClass('loading');
 
           $.ajax({
             url: $(this).attr('data-endpoint'),
             type: 'GET',
             dataType: 'html'
           })
           .done(function(response) {
             var $response = $(response),
                 $eventsHTML = $response.find('.conv-store-events-container');
 
             //inject events markup
             $eventsTabContainer.html($eventsHTML);
 
             //delay for effect
             setTimeout(function(){
               //remove loading state
               $eventsTabContainer.removeClass('loading');
             }, 400);
           });
 
           lcly.dealerEventsLoaded = true;
         }
       }
 
     });
   }; 
 
   // visible tab:
   // retailers, categories, events, inventory, store, cart, map
 
   // elements that have special aria handling from UppaBABY ADA audit:
   // for elements with aria-hidden=true, also ensure that all children are not focusable
   // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
 
   // #dealer-tab-inventory-container
   // #dealer-tab-inventory-grid-wrapper
   // #dealer-tab-inventory-grid-wrapper-desktop
   // #sidebar-cart-wrapper
   lcly.manageDealerLocatorAriaTags = function(visibleDealerTab, visibleStoreTab){  
 
     if ( typeof $('#conversion-wrapper') == 'undefined' ){
       return;
     }
 
     // map visible
     $('.map-wrapper').removeAttr('aria-hidden');
 
     // pdp hidden
     $('#pdp-wrapper').attr('aria-hidden', 'true');
     $('.conv-pdp-wrapper').attr('aria-hidden', 'true');
     $('.conv-submitter').attr('aria-hidden', 'true');
 
     // sidebar cart hidden
     // for elements with aria-hidden=true, also ensure that all children are not focusable
     // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
     $('#sidebar-cart-wrapper').attr('aria-hidden', 'true');    
     $('#sidebar-cart-wrapper').find('*').each(function () {
       $(this).attr('tabindex', '-1');
     });
 
     // store details "conversion-store" tabs hidden
     $('.store-info-contents').attr('aria-hidden', 'true');
     $('.store-info-tabs').attr('aria-hidden', 'true');
     $('#conv-store-tab-locations').attr('aria-hidden', 'true');
     $('#conv-store-tab-inventory').attr('aria-hidden', 'true');
     $('#conv-store-tab-reviews').attr('aria-hidden', 'true');
     $('#conv-store-tab-events').attr('aria-hidden', 'true');
     $('#conv-store-tab-hours').attr('aria-hidden', 'true');    
     $('#conv-store-tab-links').attr('aria-hidden', 'true');    
 
     // dealer tabs hidden        
     //$('.conversion-column-inner').attr('aria-hidden', 'true');
     $('.conv-locations-wrapper').attr('aria-hidden', 'true');  // retailers tab    
     $('#dealer-tab-categories-container').attr('aria-hidden', 'true');  // categories tab
     $('#dealer-tab-events-container').attr('aria-hidden', 'true');  // events tab
 
     // for elements with aria-hidden=true, also ensure that all children are not focusable
     // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
     $('#dealer-tab-inventory-container').attr('aria-hidden', 'true'); // inventory tab    
     $('#dealer-tab-inventory-container').find('*').each(function () {
       $(this).attr('tabindex', '-1');
     });
 
     // for elements with aria-hidden=true, also ensure that all children are not focusable
     // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
     $('#dealer-tab-inventory-grid-wrapper-desktop').attr('aria-hidden', 'true');  // inventory grid desktop    
     $('#dealer-tab-inventory-grid-wrapper-desktop').find('*').each(function () {
       $(this).attr('tabindex', '-1');
     });
 
     // for elements with aria-hidden=true, also ensure that all children are not focusable
     // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
     $('#dealer-tab-inventory-grid-wrapper').attr('aria-hidden', 'true');  // inventory grid    
     $('#dealer-tab-inventory-grid-wrapper').find('*').each(function () {
       $(this).attr('tabindex', '-1');
     });
     
     $('#dealer-tab-stock-filter-container').removeAttr('aria-hidden'); // inventory filters
             
     // update aria visibility based on sighted visibility
     if(visibleDealerTab == 'retailers'){
       $('.conv-locations-wrapper').removeAttr('aria-hidden');      
       $('.store-info-tabs').removeAttr('aria-hidden');
     }
 
     if (visibleDealerTab == 'categories'){      
       $('#dealer-tab-categories-container').removeAttr('aria-hidden');
       $('.store-info-tabs').removeAttr('aria-hidden');
     }    
 
     if (visibleDealerTab == 'events'){
       $('#dealer-tab-events-container').removeAttr('aria-hidden');
       $('.store-info-tabs').removeAttr('aria-hidden');
     }
 
     if (visibleDealerTab == 'inventory'){
 
       // for elements with aria-hidden=false, make sure that all children are focusable as well 
       // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
       $('#dealer-tab-inventory-container').removeAttr('aria-hidden');
       $('#dealer-tab-inventory-container').find('*').each(function () {
         $(this).removeAttr('tabindex');
       });
 
       // for elements with aria-hidden=false, make sure that all children are focusable as well 
       // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
       $('#dealer-tab-inventory-grid-wrapper-desktop').removeAttr('aria-hidden');
       $('#dealer-tab-inventory-grid-wrapper-desktop').find('*').each(function () {
         $(this).removeAttr('tabindex');
       });
 
       // for elements with aria-hidden=false, make sure that all children are focusable as well 
       // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
       $('#dealer-tab-inventory-grid-wrapper').removeAttr('aria-hidden');
       $('#dealer-tab-inventory-grid-wrapper').find('*').each(function () {
         $(this).removeAttr('tabindex');
       });
 
       $('#dealer-tab-stock-filter-container').removeAttr('aria-hidden');
 
       $('.store-info-tabs').removeAttr('aria-hidden');
 
       $('.map-wrapper').attr('aria-hidden', 'true');
       
       // pdp visible or not?
       if ( $('.dealer-tab-inventory-grid-container-desktop').hasClass('pdp-active') || 
            $('#dealer-tab-inventory-grid-container').hasClass('pdp-active') || 
            $('#conv-store-tab-inventory').hasClass('pdp-active') ){
         $('#pdp-wrapper').removeAttr('aria-hidden');
         $('.conv-pdp-wrapper').removeAttr('aria-hidden');
         $('.conv-submitter').removeAttr('aria-hidden');
 
         // for elements with aria-hidden=true, also ensure that all children are not focusable
         // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
         $('#dealer-tab-inventory-grid-wrapper-desktop').attr('aria-hidden', 'true');
         $('#dealer-tab-inventory-grid-wrapper-desktop').find('*').each(function () {
           $(this).attr('tabindex', '-1');
         });
 
         // for elements with aria-hidden=true, also ensure that all children are not focusable
         // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
         $('#dealer-tab-inventory-grid-wrapper').attr('aria-hidden', 'true');
         $('#dealer-tab-inventory-grid-wrapper').find('*').each(function () {
           $(this).attr('tabindex', '-1');
         });
       }
       else {
         $('#pdp-wrapper').attr('aria-hidden', 'true');
       }
 
       // cart active or not?
       if ( $('.modal-body').hasClass('cart-active') ){
         $('#pdp-wrapper').attr('aria-hidden', 'true');
 
         // for elements with aria-hidden=false, make sure that all children are focusable as well 
         // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
         $('#sidebar-cart-wrapper').removeAttr('aria-hidden');        
         $('#sidebar-cart-wrapper').find('*').each(function () {
           $(this).removeAttr('tabindex');
         });
 
       }
       else {
         $('#pdp-wrapper').removeAttr('aria-hidden');
 
         // for elements with aria-hidden=false, make sure that all children are focusable as well
         // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
         $('#sidebar-cart-wrapper').attr('aria-hidden', 'true');
         $('#sidebar-cart-wrapper').find('*').each(function () {
           $(this).attr('tabindex', '-1');
         });
       }
 
     }     
     
     if (visibleDealerTab == 'store'){
 
       $('#conversion-store-info').removeAttr('aria-hidden');
             
       $('.store-info-tabs').removeAttr('aria-hidden');
       $('.store-info-contents').removeAttr('aria-hidden');      
 
       $('.map-wrapper').removeAttr('aria-hidden');
 
       if (visibleStoreTab == 'locations'){
         $('#conv-store-tab-locations').removeAttr('aria-hidden');
         $('.store-info-contents').attr('aria-hidden', 'true');
       } 
       if (visibleStoreTab == 'inventory'){      
         $('#conv-store-tab-inventory').removeAttr('aria-hidden'); 
         $('.store-info-contents').attr('aria-hidden', 'true');
         $('.map-wrapper').attr('aria-hidden', 'true');
       }
       if (visibleStoreTab == 'reviews'){
         $('#conv-store-tab-reviews').removeAttr('aria-hidden');
         $('.store-info-contents').attr('aria-hidden', 'true');
       }
       if (visibleStoreTab == 'events'){
         $('#conv-store-tab-events').removeAttr('aria-hidden');
         $('.store-info-contents').attr('aria-hidden', 'true');
       }
       if (visibleStoreTab == 'hours'){
         $('#conv-store-tab-hours').removeAttr('aria-hidden');
         $('.store-info-contents').attr('aria-hidden', 'true');
       }
       if (visibleStoreTab == 'links'){
         $('#conv-store-tab-links').removeAttr('aria-hidden');
         $('.store-info-contents').attr('aria-hidden', 'true');
       }
     }
 
     if (visibleDealerTab == 'cart'){
       // for elements with aria-hidden=false, make sure that all children are focusable as well 
       // https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus?application=AxeChrome
       $('#sidebar-cart-wrapper').removeAttr('aria-hidden');        
       $('#sidebar-cart-wrapper').find('*').each(function () {
         $(this).removeAttr('tabindex');
       });
     }
 
     if (visibleDealerTab == 'map'){
     }    
    
   };
 
   function loadAllStockHTML(endpoint){
     //Fetch the inventory and load it
     if (!lcly.dealerStockLoaded) {
       var $filterContainer = $('#dealer-tab-inventory-filter-container'),
           $dealerStockContainer = $('#dealer-tab-inventory-container');
 
       if (lcly.mobile) {
         $dealerStockContainer.addClass('loading');
       }
       else {
         $filterContainer.addClass('loading');
       }
       
       //Fetch and Load PDP markup/data
       $.ajax({
         url: endpoint,
         type: 'GET',
         dataType: 'html'
       })
       .done(function(response) {
         lcly.dealerStockLoaded = true;
 
         //inject PDP markup
         var $response = $(response),
             $filterHTML = $response.find('.cat-sidebar'),
             $stockHTML = $response.find('.cat-results');
 
         //Inject filter HTML
         $filterContainer.html($filterHTML);
 
         //Bind the filter events
         bindStockFilterEvents($dealerStockContainer);
 
         if (lcly.mobile) {
           var $mobileStockContainer = $('#dealer-tab-inventory-grid-container-mobile');
 
           $mobileStockContainer.html($stockHTML);
 
           var $loadMoreContainer = $mobileStockContainer.find('.cat-load-more');
           $loadMoreContainer.attr('data-url', endpoint);
 
 
           bindLoadMoreResults($dealerStockContainer);
 
           //Init the mobile filter navigation
           initMobileFiltersNav($dealerStockContainer);
 
           //Init PDP Nav
           initPdpNav($dealerStockContainer);
           initPdpActions($dealerStockContainer);
 
           //Bind the sort events
           bindStockSortEvents($dealerStockContainer);
 
           //delay for effect
           setTimeout(function(){
             //remove loading animation
             $dealerStockContainer.removeClass('loading');
           }, lcly.animationSpeed);
         }
         else {
           var $desktopStockContainer = $('#dealer-tab-inventory-grid-container-desktop'),
               $desktopStockWrapper = $('#dealer-tab-inventory-grid-wrapper-desktop');
 
           $desktopStockWrapper.html($stockHTML);
 
           var $loadMoreContainer = $desktopStockWrapper.find('.cat-load-more');
           $loadMoreContainer.attr('data-url', endpoint);
 
           bindLoadMoreResults($desktopStockContainer);
 
           //Init PDP Nav
           initPdpNav($desktopStockContainer);
           initPdpActions($desktopStockContainer);
 
           //Bind the sort events
           bindStockSortEvents($desktopStockContainer);
 
           //delay for effect
           setTimeout(function(){
             //slide in stock grid and remove loading animation
             lcly.$.convWrapper.addClass('dealer-inventory-grid-active');
             $filterContainer.removeClass('loading');
             $filterContainer.find('input.cat-search').focus();
           }, lcly.animationSpeed);
         }
 
         inlineSVGizeAll();
         
       });
     }
     //inventory is already loaded, just slide in the stock grid at desktop
     else {
       lcly.$.convWrapper.addClass('dealer-inventory-grid-active');
       $('#dealer-tab-inventory-filter-container input.cat-search').focus();
     }  
   };
 
   /* 
   loadAltTabContent();
   loads alternate tab content (if available) via AJAX
   */
   function loadAltTabContent(){
 
     var dealersToLoad = $('.store-info-alt-urls a.lcly-vendor');
 
     if (dealersToLoad.length){
 
       dealersToLoad.each(function(index, el) {
 
         var id = $(this).data('lcly-vendor-id');
 
         if (id){
 
           var html_id = 'lcly-vendor-result-' + id;
           $(this).after('<div id="' + html_id + '">loading...</div>');
           $(this).remove();
           $.ajax({
             url: '/dealer-vendor/' + id,
             type: 'GET',
             dataType: 'HTML'
           })
           .done(function(response) {
 
             $('#' + html_id).html(response);
           });
         }
       });
     }
   }
 
   /* 
   bindMoreConversionLinks();
   controls the showing and hiding of the more links in the conversion column and closes on scroll
   */
   function bindMoreConversionLinks(){
     var $convColumnMoreActions = $('#conv-column-more-actions');
 
     $('#conversion-sidebar').on('click','#conv-more-btn',function(e){
       e.preventDefault();
       $convColumnMoreActions.slideToggle(300);
     });
 
     //trigger closing at beginning of scroll. 
     $('#conv-column-overflow').scroll($.debounce( 200, true, function(){ 
       $convColumnMoreActions.slideUp(300);
     }));
 
     //trigger closing when clicking on anything. 
     $('#conv-column-overflow').on('click touchstart', function(){ 
       $convColumnMoreActions.slideUp(300);
     });
   };
 
   /**
    * this is a getter / setter of meta data about the map state. 
    * we use it to avoid setting meta data to the URL (which pollutes the browser history)
    */
   function metaParam(varName){
 
     if (!varName) return '';
 
     var method = typeof arguments[1] != 'undefined' ? 'set' : 'get';
 
     if (method == 'set'){
 
       var value = arguments[1];
 
       if (lcly.isEmbedded){ // when embedded never set params via $.address.parameter (pollutes browser history)
 
         lcly.metaParams[varName] = value;
         
       } else { // ok to set param in URL
 
         $.address.parameter(varName, value);
       }
 
     } else { // method == 'get'
 
       if (lcly.isEmbedded){
 
         if (typeof lcly.metaParams[varName] != 'undefined') {
 
           return lcly.metaParams[varName];
 
         } else if ($.address.parameter(varName)){
 
           lcly.metaParams[varName] = $.address.parameter(varName);
           return lcly.metaParams[varName];
 
         } else {
 
           return '';
         }
 
       } else {
 
         if (typeof $.address != 'undefined'){
   
           return $.address.parameter(varName);
         
         } else {
 
           return '';
         }
       }
     }
   }
 
   function scrollToColumnBottom(){
 
     //if the purchase options are hidden, scroll them into view
       var convColumnOverflowHeight = lcly.$.convColumnOverflow.height(),
           convColumnOverflowInnerHeight = lcly.$.convColumnOverflowInner.height();
 
     if ( convColumnOverflowInnerHeight > convColumnOverflowHeight ){
       lcly.$.convColumnOverflow.animate({
         scrollTop: convColumnOverflowInnerHeight
       }, 500); // Using custom speed of 500 for effect here instead of the global variable
     }
   }
 
   function scrollToColumnTop(){
     lcly.$.convColumnOverflow.animate({
       scrollTop: 0
     }, 500);
   }
 
   function trackActivity(data){
 
     var ret = { stores : [], dealers : [] };
 
     if (typeof data.markers != 'undefined' && data.markers.length > 0 && data.markers.length < 200){
 
       for (var i = 0; i < data.markers.length; i++) {
 
         var m        = data.markers[i];
         var isDealer = typeof m.company_id == 'undefined' || !m.company_id;
         var key      = isDealer ? 'dealers' : 'stores';
         var upc      = typeof data.product != 'undefined' && data.product 
                      && typeof data.product.upc_data != 'undefined' && data.product.upc_data 
                      && typeof data.product.upc_data.code != 'undefined' && data.product.upc_data.code
                      ? data.product.upc_data.code : false;
 
         ret[key].push({
           id : m.id,
           name : m.name,
           city_state_zip : m.city + ', ' + m.state + ' ' + m.zip,
           retailer_company_id : !isDealer && typeof m.company_id != 'undefined' ? m.company_id : false,
           stock_status : m.stock_status 
         });
 
         ret['is_embedded']   = lcly.isEmbedded ? '1' : '0';
         ret['url']           = $(location).attr('href');
         ret['company_name']  = metaParam('company_name');
         ret['company_id']    = typeof data.product.company_id != 'undefined' ? data.product.company_id : metaParam('company_id');
         ret['product_id']    = typeof data.product.id != 'undefined' ? data.product.id : false;
         ret['product_name']  = typeof data.product.name != 'undefined' ? data.product.name : false;
         ret['upc']           = upc ? upc : false;
       }
 
       if (ret.stores.length > 0 || ret.dealers.length > 0){
 
         $.ajax({
           url: '/stores/map/track_activity',
           type: 'POST',
           dataType: 'json',
           data: ret,
         })
         .done(function(response) {
           
           // success.
         });
       }
     }
   }
 
   function inlineSVGizeAll(){
 
     $('img.inline-svg').inlineSVG();
   
     makeSVGAccessible();
   }
 
   function makeSVGAccessible(){
 
     setTimeout(function(){ 
       $('svg.inline-svg').attr('aria-label', '[icon image]').attr('role', 'img');
     }, 1000);
   }
 
   return {
 
 
     initNativePdp: function($parent){
 
       return initPdpActions($parent);
     },
 
     getAndSetData: function($parent){
 
       var companyId        = metaParam('company_id');
       var companyName      = metaParam('company_name');
       var style            = metaParam('style');
       var color            = metaParam('color');
       var upc              = metaParam('upc');
       var category         = metaParam('category');
       var inline           = metaParam('inline');
       var onlyRetailerId   = metaParam('only_retailer_id');   
       var dealersCompanyId = metaParam('dealers_company_id');   
       var zoom             = metaParam('zoom'); 
       var showLinksInList  = metaParam('show_links_in_list'); 
       var parentDomain     = metaParam('parent_domain'); 
       var altCoords        = typeof usesAltCoords != 'undefined' && usesAltCoords; // TODO: store this as another meta param
       var onlyStoreId      = lcly.map.storeIsIsolated && lcly.map.initialStoreIdPersisted ? lcly.map.initialStoreIdPersisted : false;
     
       if (companyName) $('input[name="company_name"]').val(companyName.replace(/\+/gi, ' '));
 
       var params = { 
     
         'has_data' : true,
         'company_id' : companyId,
         'store_mode': '',
         'style' : style,
         'color' : color,
         'upc' : upc,
         'category' : category,
         'inline' : inline,
         'show_links_in_list' : showLinksInList,
         'parent_domain' : parentDomain,
         'map_center_lat' : lcly.map.meta.center_lat,
         'map_center_lng' : lcly.map.meta.center_lng,
         'map_distance_diag' : lcly.map.meta.distanceDiag,
         'sort_by' : lcly.map.hasForcedState ? 'stock' : 'proximity',
         'no_variants' : metaParam('no_variants') == 1 ? 1 : 0,
         'only_retailer_id' : onlyRetailerId,
         'dealers_company_id' : dealersCompanyId,
         'only_store_id' : onlyStoreId,
         'uses_alt_coords' : altCoords,
         'q' : lcly.map.lastSearchTerm,
         'zoom_level' : zoom
       };
     
       if (typeof params.map_distance_diag != 'undefined') {
         if (lcly.map.hasMapDataChanged('conv', params) === false) {
           return
         }
         
         $.ajax({
           url: '/stores/conversion_data',
           type: 'GET',
           dataType: 'json',
           data: params
         })
         .done(function(data) {
           lcly.map.mapData.conv.locked = false;
 
           //If forced_category is set and first cat hasn't been selected, prevent any marker population
           if (lcly.isDealerLocator && data.custom.is_forced_category && !lcly.firstCatSelected) {
             
             lcly.map.populateLock = true;
             lcly.forceCategoryTab = true;
 
           } else {
 
             lcly.map.populateLock = false;
             lcly.forceCategoryTab = false;
             trackActivity(data);
           }
           
           $('.js-alt-store-choice-notice').hide();
           lcly.hasActiveStore = false;
           lcly.mapModule.refresh(data);
           lcly.variantModule.audit($parent.find('.js-variant-container'));
           lcly.$.convLocationsWrapper.removeClass('loading');
           inlineSVGizeAll();
 
           if (lcly.isDealerLocator) {
             auditCategoryList(data);
             auditCategoryTab(data);
             auditNavigation(data);
             lcly.dealerStockLoaded = false;
             lcly.dealerEventsLoaded = false;
             $('.tooltip').tooltip();
           }
         });
       }      
     },
 
     getAndSetPdpStock: function($parent){
 
       var $wrapper    = $('#pdp-wrapper');
       var $block      = $wrapper.find('.paths-to-purchase-wrapper');
       var $priceSpan  = $wrapper.find('.js-price-range-wrapper');
       var id          = $wrapper.data('id');
       var upc         = lcly.variantModule.getCurrentUpc($parent);
       var queryString = $wrapper.data('query-string') + '&upc=' + upc;
 
       $block.addClass('loading');
 
       $.ajax({
         url: '/product_stock/' + id + '?' + queryString,
         type: 'GET',
         dataType: 'json'
       })
       .done(function(response) {
         $block.html(response.paths_to_purchase_html);
         $priceSpan.html(response.price_html);
         initPdpPathsToPurchase($parent);
         inlineSVGizeAll();
         //delay for effect
         setTimeout(function(){
           //remove loading state
           $block.removeClass('loading');
           $block.find('.tooltip').tooltip();
         }, 300);
       });
     },
 
     getAndSetPdpPrice: function($parent, storeId){
 
       var $wrapper    = $('#pdp-wrapper');
       var $priceSpan  = $wrapper.find('.js-price-range-wrapper');
       var id          = $wrapper.data('id');
       var upc         = lcly.variantModule.getCurrentUpc($parent);
       var queryString = $wrapper.data('query-string') + '&upc=' + upc;
 
       if (storeId) queryString += '&store=' + storeId;
 
       $.ajax({
         url: '/product_stock/' + id + '?' + queryString,
         type: 'GET',
         dataType: 'json'
       })
       .done(function(response) {
 
         $priceSpan.html(response.price_html);
       });
     },
 
     getMetaParam: function(varName){
 
       return metaParam(varName);
     },
 
     initPathsToPurchase: function($parent){
 
       return initPdpPathsToPurchase($parent);
     },
 
     setMetaParam: function(varName, value){
 
       return metaParam(varName, value);
     },
 
     hideActions: function(){
 
       lcly.$.convActionBtns.removeClass('active');
       lcly.$.convWrapper.find('.conversion-column-inner').removeClass('w-actions w-stock wo-stock w-variants wo-variants');
       lcly.$.convWrapper.find('.conv-purchase-options').removeClass('active');
     },
 
     refreshPdp: function(){
 
       return '';
     },
 
     resetActiveLocation: function(){
 
       $('.conv-section-store').removeClass('active');
     },
 
     scrollToActiveLocation: function(){
 
       var id = lcly.$.convStoreInfo.data('id');
       var activeLocation = $('#conv-section-store-' + id);      
 
       if (activeLocation.length){
 
         var offset = activeLocation.position().top + lcly.$.convWrapper.find('#conversion-product').height();
 
         lcly.$.convColumnOverflow.animate({
           scrollTop: offset
         }, 500);
       }
     },
 
     scrollToBottom: function(){
 
       return scrollToColumnBottom();
     },
 
     scrollToTop: function(){
 
       return scrollToColumnTop();
     },
 
     showActions: function(stockStatus){
 
       //activate call to action if not already done
       if (!lcly.$.convActionBtns.hasClass('active')){
         lcly.$.convActionBtns.addClass('active');
       }
 
       var stockClass = parseInt(stockStatus) > 1 ? 'w-stock' : 'wo-stock';
       var variantClass = parseInt(stockStatus) > 1 ? 'w-variants' : 'wo-variants';
 
       lcly.$.convWrapper.find('.conversion-column-inner').addClass('w-actions').addClass(stockClass).addClass(variantClass);
       lcly.$.convWrapper.find('.conv-purchase-options').addClass('active');
     },
 
     bindStoreStockFilterEvents: function($parent) {
       bindStockFilterEvents($parent);
     },
 
     bindStoreStockSortEvents: function($parent) {
       bindStockSortEvents($parent);
     },
 
     bindStoreStockLoadMoreEvents: function($parent) {
       bindLoadMoreResults($parent);
     },
 
     initMobileFilters: function($parent) {
       initMobileFiltersNav($parent);
     }
   }
 
 })(jQuery,lcly);
 ;
 lcly.cartModule = (function($,lcly) {
 
   $(function(){
     //define some jquery objects
     lcly.$.sidebarCart = $('#sidebar-cart-wrapper');
     lcly.$.cartInterstitial = $('#cart-login-section');
 
     initCart();
     initAddToCart();
     initCartOpener();
     initCartItems();
     initCheckout();
  });
 
   // handles the add to cart and other actions. 
   function initCart() {
 
     //select the input fields when focused. 
     lcly.$.sidebarCart.find('.cart-item-qty-input').on('focus keyup',function(){
       this.select();
     });
 
     $(lcly.$.sidebarCart).on('click', '.cart-item-comments-label', function(){
       $(this).next().addClass('active').focus().trigger('click');
     });
 
     $(lcly.$.sidebarCart).on('blur', '.cart-item-comment-field', function(){
       if($(this).val() === ''){
         $(this).removeClass('active');
       }
     });
 
     $(lcly.$.body).on('click', '#cart-overlay, #cart-icon-back', function(e){
 
       e.preventDefault();
       lcly.$.body.removeClass('cart-active').removeClass('overlay-active');
       lcly.$.sidebarCart.removeClass('sidebar-cart-login-active');
       lcly.iosBodyLockdownDeactivate();
       lcly.manageDealerLocatorAriaTags('close-cart');
 
       // if we are in embedded Locally Pages view, close full-screen mode
       closeFullScreenWidget();
 
       //remove the login classes after it's hidden. 
       setTimeout(function(){
         lcly.$.sidebarCart.removeClass('sidebar-cart-login-active');
         lcly.$.body.removeClass('dashboard-' + lcly.activeDashTab + '-active');
         lcly.$.dashboardTabs.removeClass('active');
         lcly.activeDashTab = '';
         // $('.conv-submitter').focus(); // good idea for ADA compliance but causes major UI bugginess in SL 
         // see https://discourse.lcly.co/t/starting-a-cart-in-a-store-locator-mangles-the-rest-of-the-sl-experience/880
       },lcly.animationSpeed);
 
 
     });
   }
 
   // if we can simply redirect the user to checkout, do that. 
   // but if we're embedded, we must open the modal in the parent frame
   function doCheckout(obj){
 
 
     var endpoint = '/conversion/checkout';
     var hash = $('#order-hash').val();
 
     // if we're in a DL/SL we need to launch a modal to complete the checkout
     if (typeof lcly.isDealerLocator != 'undefined' && lcly.isDealerLocator){
 
         var baseUrl = lcly.hostDomain.indexOf('.test') > -1 ? 'https://modal.locally.test' : 'https://modal.locally.com';
 
         var params = { 
 
           'start_conversion_query' : 'is_embedded=1&hash=' + hash, 
           'start_conversion_endpoint' : baseUrl + endpoint + '?',
           'start_conversion_title' : ''
         };
 
         parent.postMessage(params, "*");
         obj.removeClass('loading').html(obj.data('orig'));
     
     } else { // else just change the current window url
 
         window.location = endpoint + '?hash=' + hash;
     }
   }
 
   // handles the add to cart and other actions. 
   function initAddToCart() {
     
     $('body').on('click', '.conv-submitter', function(e){
       
       e.preventDefault();
 
       var $parent        = $(this).closest('.conv-column, #pdp-wrapper');
       var $variantParent = $parent.find('.js-variant-container');
       var upc            = lcly.variantModule.getCurrentUpc($variantParent);
 
       if (!upc) upc = $parent.data('initial-upc');
 
       var option         = $parent.find('input[name="purchase-option-radio"]:checked');
       var endpointBase   = option.val();
       var endpointAppend = '&host_domain=' + lcly.hostDomain + '&embed_context=' + lcly.embedContext + '&upc=' + upc;
       var endpoint       = endpointBase + endpointAppend;
 
       if (endpointBase == 'call'){
 
         // don't get widget stuck in full-screen mode if 'call store now' button is clicked
         closeFullScreenWidget();
 
         if (option.data('phone') != '') window.open(option.data('phone'));
 
       } else {
         $('.cart-content').html('').addClass('loading');
         lcly.activeDashTab = 'cart';
         lcly.$.cartTab.addClass('active');
         lcly.$.body.addClass('dashboard-cart-active').addClass('cart-active').addClass('overlay-active');
         lcly.iosBodyLockdownActivate();
         sendRequestToCart(endpoint, 'GET');
       }
     });
 
   }
 
   function initCartItems(){
 
     lcly.$.sidebarCart.on('click', '.js-cart-item-remover', function(){
 
       $(this).after('<input type="hidden" name="remove_item" value="' + $(this).data('id') + '">');
       sendRequestToCart('/account/cart', 'POST');
     });
 
     lcly.$.sidebarCart.on('change', '.cart-item-comment-field, .cart-item-qty-input', function(){
 
       sendRequestToCart('/account/cart', 'POST');
     });
 
     lcly.$.sidebarCart.on('click', '.convert-to-buyer', function(){
 
       $(this).after('<input type="hidden" name="convert_to_buy" value="1" />');
       sendRequestToCart('/account/cart', 'POST');
     });
   }
 
   function initCartOpener() {
 
     $('#conversion-cart, #dealer-navigation-cart, #masthead-cart').on('click',function(e){
       e.preventDefault();
       openCart();
       return false;
     });
   }
 
   function openCart(){
     
     $('.cart-content').html('').addClass('loading');
     sendRequestToCart('/account/cart', 'GET');
     lcly.activeDashTab = 'cart';
     lcly.$.cartTab.addClass('active');
     lcly.$.body.addClass('dashboard-cart-active').addClass('cart-active').addClass('overlay-active');
     lcly.iosBodyLockdownActivate();
     lcly.manageDealerLocatorAriaTags('cart');
   }
 
   function initCheckout(){
 
     $(lcly.$.sidebarCart).on('change', '.cart-content input[name="email"]', function(e) {
       validateEmail(this);
     });
 
     // finalize checkout for non-hold order. go to interstitial step
     $(lcly.$.sidebarCart).on('click', '#cart-checkout-button', function(e){
       e.preventDefault();
       lcly.$.sidebarCart.addClass('sidebar-cart-login-active').focus();
       return false;
     });
 
     // close interstitial step, back to cart
     $(lcly.$.sidebarCart).on('click', '#cart-login-back', function(e){
       e.preventDefault();
       lcly.$.sidebarCart.removeClass('sidebar-cart-login-active');
     });
 
     // back button in checkout closes fullscreen widget mode, then redirects
     $(lcly.$.sidebarCart).on('click', '#cart-icon-back', function(e){      
       closeFullScreenWidget();
       return true;
     });
 
     // finalize interstitial step. go to billing form 
     $(lcly.$.sidebarCart).on('click', '.js-continue-checkout', function(e){
       e.preventDefault();
       $(this).data('orig', $(this).html());
       $(this).html('').addClass('loading');
       doCheckout($(this));
     });
 
     // finalize a hold request. 
     // send data via ajax for validation, if works, send direct to order summary
     $(lcly.$.sidebarCart).on('submit', 'form.for-hold', function(e){
       
       e.preventDefault();
 
       closeFullScreenWidget();
       validateEmail($('#reservation-email'));
       if ($('#reservation-email').hasClass('invalid')) {      
         return false;
       }
      
       $(this).find('button').addClass('disabled');
       $(this).addClass('loading');
 
       $.ajax({
         url: '/account/cart/order',
         type: 'POST',
         dataType: 'json',
         data: $(this).closest('form').serialize(),
       })
       .done(function(response) {
         if (response.status == 200){
           window.location = response.target_uri;
         } else {
           $(this).find('button').removeClass('disabled');
           $(this).removeClass('loading');
         }
       });
         
       return false;
     });
   }
 
   function closeFullScreenWidget(){
     if ( typeof $('body.for-widget') != 'undefined' ){
       var widget_path = (location.pathname+location.search).substr(1);
       var lcly_tracked_height_selector = 'body > div:first';      
       var height= $(lcly_tracked_height_selector).height() + 100 + 'px';
       audit_widget_state(widget_path, false, height, false);
     }
   }
 
   function sendRequestToCart(endpoint, action){
 
     var vars = action == 'POST' ? $('.cart-form').serialize() : {};
 
     $.ajax({
       url: endpoint,
       type: action,
       dataType: 'json',
       data: vars
     })
     .done(function(response) {
       
       $('.cart-content').html(response.cart_content_html).removeClass('loading');
       $('.n-in-cart').html(response.n_in_cart > 0 ? response.n_in_cart : '');
       $('.cart-content .js-validate-form').scrupulous();
 
       var lang = navigator.language;
       var input = document.querySelector('.cart-content input[name="phone"]');
       if (input != null) {
         window.intlTelInput(input, {
           // any initialisation options go here
           initialCountry: lang.substr(3),
           nationalMode: true,
           hiddenInput: 'full-phone',
         });
       }
         
       // $('.cart-content input[name="phone"]').mask("(999) 999-9999"); // REPLACE WITH BETTER PHONE MASK OR REMOVE
       if (endpoint.indexOf('cart/new/item') != -1) {
         // something added to cart so lets focus on sidebar content
         lcly.$.sidebarCart.find('footer.sidebar-footer button').focus();
       }
       else {
         lcly.$.sidebarCart.find('#cart-icon-back').focus();
       }
     });
   }
 
   function validateEmail(email) {
     var value = $(email).val();
 
     $.ajax({
       url: '/account/cart/validate_email',
       type: 'POST',
       dataType: 'json',
       data: {'email': value},
       async: false,
     })
     .done(function(response) {
       if (response.is_valid == true) {
         $(email).val(response.email);
         $(email).parent().removeClass('has-error').addClass('has-success');
         $(email).removeClass('invalid').addClass('valid');
         $('.validate-email-error').remove();
       } else {
         $(email).parent().removeClass('has-success').addClass('has-error');
         $(email).removeClass('valid').addClass('invalid');
         $(email).after('<label class="error-message validate-email-error" for="checkout-form">' + $(email).attr('title') + '</label>');
         $(email).val(value);
       }
     });
   }
 
   return {
 
     load: function(){
 
       $('.cart-content').html('').addClass('loading');
       sendRequestToCart('/account/cart', 'GET');
     }
   }
 
 })(jQuery,lcly);
 ;
 (function($,lcly) {
 
   $(function(){
 
     initDashNavigation();
     initSavedNavigation();
     initAccountNavigation();
     initOrdersNavigation();
     initAccountSignupToggle();
     initAutoShowDashboard();
     initAccountCreateForm();
     initNewRetailerOpener();
     initNewBrandOpener();
     initLangSwitcher();
     initPosOtherShower();
  });
 
 
  function initDashNavigation() {
   lcly.$.accountTab = $('#dash-account-tab');
   lcly.$.savedTab = $('#dash-saved-tab');
   lcly.$.ordersTab = $('#dash-orders-tab');
   lcly.$.cartTab = $('#dash-cart-tab');    
   lcly.$.dashboardTabs = lcly.$.sidebarCart.find('.masthead-icon');
 
   bindDashTriggerClick();
 
   lcly.$.dashboardTabs.on('click', function(){
     var $this = $(this),
         dashTab = $this.data('dashboard-tab'),
         isActive = $this.hasClass('active');
 
     //if this tab is not active
     if (!isActive) {
 
       //Remove previously active tab body class, and add the new one
       lcly.$.body.removeClass('dashboard-' + lcly.activeDashTab + '-active').addClass('dashboard-' + dashTab + '-active');
       
       $this.addClass('active').siblings().removeClass('active');
       lcly.activeDashTab = dashTab;
     }
 
     loadTabContent(dashTab);
   });
  }
 
  function initAutoShowDashboard(){
 
    if (typeof showDashboard != 'undefined' && showDashboard){
 
      loadTabContent(showDashboard);
    }
  }
 
  function bindDashTriggerClick() {
 
   lcly.$.body.on('click', '.js-sidebar-dash-trigger', function(e){
     e.preventDefault();
 
     var $this = $(this),
         dashType = $this.data('dash-type');
 
     //Open sidebar dash with proper open tab
     lcly.activeDashTab = dashType;
     lcly.$.sidebarCart.find('#dash-' + dashType + '-tab').addClass('active');
     lcly.$.body.addClass('dashboard-' + dashType + '-active').addClass('cart-active').addClass('overlay-active');
     lcly.iosBodyLockdownActivate();
 
     //If the active tab is saved, trigger the saved item js
     if (dashType == 'saved') {
       var saveType = $this.data('save-type'),
           itemId = $this.data('item-id'),
           storeId;
 
       if (saveType == 'product' && $this.data('store-id') != '') {
         storeId = $this.data('store-id');
       }
 
       saveItemToAccount(saveType, itemId, storeId);
     }
 
   });
 
  }
 
  //TODO: Build save item functionality here....ajax call to load new saved slideout??
  function saveItemToAccount(saveType, itemId, storeId) {
   //console.log('add in saved ' + saveType + ' with ID of ' + itemId);
  }
 
 
  function initSavedNavigation() {
   lcly.$.savedContent = $('#saved-content');
   lcly.activeSavedSlide = '';
 
   lcly.$.savedContent.on('click', '.dash-content-drawer-link', function(e){
     e.preventDefault();
 
     var $this = $(this),
         saveType = $this.data('save-type');
 
     lcly.$.savedContent.addClass('saved-' + saveType + '-active');
     lcly.activeSavedSlide = saveType;
   });
 
   lcly.$.savedContent.on('click', '.nav-bar-back', function(e){
     e.preventDefault();
 
     lcly.$.savedContent.removeClass('saved-' + lcly.activeSavedSlide + '-active');
     lcly.activeSavedSlide = '';
   });
  }
 
 
  function initAccountNavigation() {
   lcly.$.accountContent = $('#account-content');
   lcly.activeAccountSlide = '';
 
   lcly.$.accountContent.on('click', '.dash-content-drawer-link', function(e){
     e.preventDefault();
 
     var $this = $(this),
         accountType = $this.data('account-type');
 
     lcly.$.accountContent.addClass('account-' + accountType + '-active');
     lcly.activeAccountSlide = accountType;
   });
 
   lcly.$.accountContent.on('click', '.nav-bar-back', function(e){
     e.preventDefault();
 
     lcly.$.accountContent.removeClass('account-' + lcly.activeAccountSlide + '-active');
     lcly.activeAccountSlide = '';
   });
  }
 
 
 
  function initOrdersNavigation() {
   lcly.$.ordersContent = $('#orders-content');
 
   lcly.$.ordersContent.on('click', '.dash-order-details-link', function(e){
     e.preventDefault();
 
     var $this = $(this),
         orderId = $this.data('order-id'),
         $activeSlide = lcly.$.ordersContent.find('.order-details-slide[data-order-id="' + orderId + '"]');
 
     $activeSlide.addClass('slide-active');
     
   });
 
   lcly.$.ordersContent.on('click', '.nav-bar-back', function(e){
     e.preventDefault();
 
     $(this).closest('.order-details-slide').removeClass('slide-active');
   });
  }
 
 
 
  function initAccountSignupToggle() {
 
   lcly.$.accountContent = $('#account-content');
 
   lcly.$.accountContent.on('click', '.account-create-toggle', function(e){
     e.preventDefault();
 
     var $this = $(this),
         accountForm = $this.data('account-form');
 
     $.ajax({
       url: '/create',
       type: 'GET',
       dataType: 'html',
       data: {user_type: accountForm},
     })
     .done(function(response) {
 
       $('.create-account-form-wrapper').html(response);
       initAccountCreateForm();
     });
     
     $this.addClass('active').siblings().removeClass('active');
 
   });
  }
 
  function initPosOtherShower() {
 
   lcly.$.accountContent = $('#account-content');
 
   lcly.$.accountContent.on('change', '.user-create-form select[name="pos"]', function(e){
 
     if ($(this).val() == '10') { // 'other' POS
       $('.pos-other-data-group').show();
       $('textarea[name="pos_other_data"]').attr('disabled', false);
     }
     else {
       $('.pos-other-data-group').hide();
       $('textarea[name="pos_other_data"]').val('');
       $('textarea[name="pos_other_data"]').attr('disabled', true);
     }
 
   });
  }
 
  function initAccountCreateForm(){
 
   initCompanyNameAutocomplete();
 
   $('.user-create-form input[name="origin"]').val(window.location.href);
   $('.user-create-form .company-name-autocomplete').keypress(function(event) { return event.keyCode != 13; });
   $('.user-create-form .disabled input').attr('readonly', 'readonly').blur();
 
   $('.user-create-form').submit(function(event) {
     
     $.ajax({
       url: $(this).attr('action'),
       type: $(this).attr('method'),
       dataType: 'html',
       data: $(this).serialize(),
     })
     .done(function(response) {
       $('.create-account-form-wrapper').html(response);
       initAccountCreateForm();
     });
     
     $(this).find('button[type="submit"]').prop('disabled', true).addClass('loading');
     return false;
   });
  }
 
  function initCompanyNameAutocomplete(){
 
   if ($('.user-create-form .company-name-autocomplete').length){
 
     $('.user-create-form .company-name-autocomplete').autocomplete({
         serviceUrl: '/companies/find-by-term/' + $('input[name="user_type"]').val(),
         minChars: 3,
         onSelect: function (suggestion) {
 
           if (suggestion.web_address != ''){
             
             $('.user-create-form .company-web-address').val(suggestion.web_address);
           }
         }
     });
   }
  }
 
  function loadOrdersContent(){
 
   lcly.$.ordersContent = $('#orders-content');
   lcly.$.ordersContent.addClass('loading');
 
   $.ajax({
     url: '/account/orders',
     type: 'GET',
     dataType: 'html'
   })
   .done(function(response) {
     lcly.$.ordersContent.html(response);
     lcly.$.ordersContent.removeClass('loading');
   });
  }
 
  function initNewBrandOpener(){
 
   $('.js-new-brand-account-opener').click(function(e) {
     
     loadTabContent('new/brand');
     return false;
   });
  }
 
  function initNewRetailerOpener(){
 
   $('.js-new-retailer-account-opener').click(function(e) {
     
     loadTabContent('new/retailer');
     return false;
   });
  }
 
  function initLangSwitcher(){
 
   $('#language-select, #currency-select').change(function(e) {
     var param = $(this).is('#currency-select') ? 'currency' : 'lang';
     var url = [location.protocol, '//', location.host, location.pathname].join('');
     window.location = url + '?' + param + '=' + $(this).val();
   });
  }
 
  function loadTabContent(tab){
 
   switch(tab) {
     case 'cart':
       lcly.cartModule.load();
       break;
     case 'orders':
       loadOrdersContent();
       break;
     case 'account':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       break;
     case 'login':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       $('[data-account-type="sign-in"]').click();
       break;
     case 'password':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       $('[data-account-type="password"]').click();
       break;
     case 'new/member':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       $('[data-account-type="create"]').click();
       $('[data-account-form="personal"]').click();
       break;
     case 'new/retailer':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       $('[data-account-type="create"]').click();
       $('[data-account-form="retailer"]').click();
       break;
     case 'new/brand':
       $('.js-sidebar-dash-trigger[data-dash-type="account"]').click();
       $('[data-account-type="create"]').click();
       $('[data-account-form="brand"]').click();
       break;
     case 'demo':
       lcly.$.scheduleDemoButton.click();
       break;
     default:
         //...
   }
  }
 })(jQuery,lcly);
 ;
 (function($,lcly) {
 
   $(function(){
     //define some jquery objects
     lcly.$.sidebarShare = $('#sidebar-share-wrapper');
     lcly.$.sidebarDemo = $('#sidebar-demo-wrapper');
     lcly.$.scheduleDemoButton = $('.js-schedule-demo');
     lcly.$.languageSidebarTrigger  = $('.js-language-sidebar');
     lcly.$.suggestRetailerTrigger  = $('.js-suggest-retailer');    
     lcly.$.embedButton = $('.js-embed-opener');
     lcly.$.siblingStoresButton = $('.js-sibling-stores-opener');
 
     initAdminSidebarSizeToggle();
     initShareSidebar();
     initScheduleDemoSidebar();
     initLanguageSidebar();
     initSuggestRetailerSidebar();    
     initEmbedder();
     initSiblingStores();
 
     if ( $('body').hasClass('station-wrapper') ){
       initSidebarSearchShortcut();
     }
 
   });
 
   function initEmbedder(){
 
     //Embed sidebar close
     $('#cart-overlay, #embed-icon-back').on('click', function(){
       lcly.$.body.removeClass('embed-active').removeClass('overlay-active');
     });    
 
     //Embed sidebar open
     lcly.$.embedButton.on('click',function(e){
       e.preventDefault();
       lcly.$.body.addClass('embed-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
 
     $('#widget-embedder, #widget-embedder-2').focus(function(event) {
       $(this).select();
     });
   }
 
   // handles the Sibling Stores "available elsewhere" functionality.
   // TODO bind events on document so they work in Shop-in-Shop
   function initSiblingStores() {
 
     //sibling stores sidebar close
     $('#cart-overlay, #sibling-stores-icon-back').on('click', function(){
       lcly.$.body.removeClass('sibling-stores-active').removeClass('overlay-active');
     });  
 
     //sibling stores sidebar open
     lcly.$.siblingStoresButton.on('click',function(e){
       e.preventDefault();
       lcly.$.body.addClass('sibling-stores-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
 
     // simple text search on "location" property of sibling stores
     $(document).on('input', '.js-sibling-store-search', function () {
 
       textInputVal = $(this).val();
       textInputValLowerCase = textInputVal.toLowerCase();
 
       var $siblingStoreLocations = $('.js-sibling-store-wrapper');
 
       $.each($siblingStoreLocations, function (iSiblingStore, siblingStore) {
 
         var $siblingStore = $(siblingStore);
         var $storeLocationEl = $siblingStore.find('.js-store-location');        
         var storeLocation = $storeLocationEl.html();
         var storeLocationLowerCase = storeLocation.toLowerCase();
         var $storeNameEl = $siblingStore.find('.js-sibling-store-title');
         var storeName = $storeNameEl.html();
         var storeNameLowerCase = storeName.toLowerCase();
         
         // search store name and store location strings for the string the user is typing.  
         if ((storeLocationLowerCase.indexOf(textInputValLowerCase) != -1) || (storeNameLowerCase.indexOf(textInputValLowerCase) != -1)) {
           $siblingStore.removeClass('hide');
         }
         else {
           $siblingStore.addClass('hide');
         }
       });
     });
 
     // restore view of all sibling stores if user clicks out of input
     $(document).on('focusout', '.js-sibling-store-search', function () {
       $(this).val('');
       $('.js-sibling-store-wrapper').removeClass('hide');
     }); 
 
   }
 
   //handles the share sidebar functionality. 
   function initShareSidebar() {
     
     //Share sidebar close
     $('#cart-overlay, #share-icon-back').on('click', function(){
       lcly.$.body.removeClass('share-active').removeClass('overlay-active');
     });    
 
     //Share sidebar open
     //TODO: Add in js here needed to populate share sidebar with relevant data
     lcly.$.convShareButton.on('click',function(e){
       e.preventDefault();
       lcly.$.body.addClass('share-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
   }
 
   //Show the schedule demo sidebar
   function initScheduleDemoSidebar() {
 
     lcly.$.scheduleDemoButton.on('click',function(e){
       e.preventDefault();
       lcly.$.body.addClass('schedule-demo-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
 
     //close the demo sidebar
     $('#cart-overlay, #demo-icon-back').on('click', function(e){
       e.preventDefault();
       lcly.$.body.removeClass('schedule-demo-active').removeClass('overlay-active');
     });  
   }
 
   function initLanguageSidebar() {
 
     lcly.$.languageSidebarTrigger.on('click', function(e) {
       e.preventDefault();
 
       lcly.$.body.addClass('language-sidebar-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
 
     //close the demo sidebar
     $('#cart-overlay, #language-icon-back').on('click', function(e){
       e.preventDefault();
       lcly.$.body.removeClass('language-sidebar-active').removeClass('overlay-active');
     }); 
 
   }
 
   function initSuggestRetailerSidebar() {
 
     lcly.$.suggestRetailerTrigger.on('click', function(e) {
       e.preventDefault();
 
       lcly.$.body.addClass('suggest-retailer-sidebar-active').addClass('overlay-active');
       lcly.iosBodyLockdownActivate();
     });
 
     //close the demo sidebar
     $('#cart-overlay, #suggest-retailer-icon-back').on('click', function(e){
       e.preventDefault();
       lcly.$.body.removeClass('suggest-retailer-sidebar-active').removeClass('overlay-active');
     }); 
 
   }   
 
   function initAdminSidebarSizeToggle() {      
 
     // always collapse nav on mobile
     if (lcly.mobile){
       collapseStationNav();
     }
 
     // bind interactive elements
     $('.js-admin-sidebar-toggle').on('click', function(e){
       e.preventDefault();
 
       var $navToggler = $('.js-admin-sidebar-toggle');
       var $parentSidebar = $navToggler.parents('#sidebar-admin-wrapper');
       var navToggleState = $parentSidebar.attr('data-toggle-state');
       var saveNavStatePrefs = false;
       
       // only save the prefs if the event was a human click, not if it's a triggered JS click
       if (e.originalEvent != undefined){
         var saveNavStatePrefs = true;
       }            
 
       if (navToggleState == 'open'){        
         collapseStationNav(saveNavStatePrefs);
       }
       else {        
         openStationNav(saveNavStatePrefs);
       }
 
     });
 
     $('.js-accordion-header').on('click', function(e){     
 
       // only do this if human input click
       if ( e.originalEvent == undefined){
         return true;
       }
 
       var $navToggler = $('.js-admin-sidebar-toggle');
       if ($navToggler.attr('data-toggle-state') == 'closed'){
         $navToggler.trigger('click');        
       }
 
     });
 
     $('.js-admin-sidebar-search').on('click', function(){
       
       var $navToggler = $('.js-admin-sidebar-toggle');
       if ($navToggler.attr('data-toggle-state') == 'closed'){
         $navToggler.trigger('click');        
       }
 
     });   
 
   }
 
   function openStationNav(saveNavStatePrefs){
 
     var $navToggler = $('.js-admin-sidebar-toggle');
     var $parentSidebar = $navToggler.parents('#sidebar-admin-wrapper');
     var navToggleState = $parentSidebar.attr('data-toggle-state');
     var $stationContainer = $('.station-container');
 
 
     $navToggler.attr('data-toggle-state', 'open');
     $parentSidebar.attr('data-toggle-state', 'open');
 
     $navToggler.removeClass('nav-closed');
     $parentSidebar.removeClass('nav-closed');
     $stationContainer.removeClass('nav-closed');
 
     if (saveNavStatePrefs == true){
       ajaxSaveCollapsedNavSettings('open');
     }    
   }
 
   function collapseStationNav(saveNavStatePrefs){
 
     var $navToggler = $('.js-admin-sidebar-toggle');
     var $parentSidebar = $navToggler.parents('#sidebar-admin-wrapper');
     var navToggleState = $parentSidebar.attr('data-toggle-state');
     var $stationContainer = $('.station-container');
 
     $navToggler.attr('data-toggle-state', 'closed');
     $parentSidebar.attr('data-toggle-state', 'closed');
 
     $navToggler.addClass('nav-closed');
     $parentSidebar.addClass('nav-closed');
     $stationContainer.addClass('nav-closed');
 
     $('.js-accordion-header.active').trigger('click');
 
     if (saveNavStatePrefs == true){      
       ajaxSaveCollapsedNavSettings('closed');
     }
   }
 
   function ajaxSaveCollapsedNavSettings( navState ){
     
     var endpointPath = '/station/nav'; 
     var payload = {"preference" : navState };   
 
     $.ajax({
       url: endpointPath,
       type: 'POST',
       data: payload
     })
     .done(function(response){
       //console.log(response); 
     })
     .error(function(response){
       console.error(response);
     });
   }
 
   function initSidebarSearchShortcut(){
     $(document).on('keydown', function(e){
 
       // only use keyboard shortcuts on desktop for Station pages
       if ( lcly.mobile ){        
         return;
       }     
       // if we have a forward slash "/" see if any form fields are focused.  if not, click into the sidebar search field
       if (e.which == 191 ){
 
         var formFieldHasFocus = false;
         var $formFields = $('form, input, label, select, textarea, fieldset');
 
         $.each($formFields, function (iFormField, formField){
 
           var isFocused = $(formField).is(":focus");
 
           if (isFocused){
             formFieldHasFocus = true;
             return false;  // break loop
           }
 
         });
 
         if (formFieldHasFocus == false){
           $('.js-admin-sidebar-search').trigger('click');
           
           setTimeout(function(){
             $('.js-admin-sidebar-search input').val(' ');
             $('.js-admin-sidebar-search input').focus();
           }, 500);
           
         }
       }
     });
   }
 
 })(jQuery,lcly);;
 var lcly_tracked_height_selector = 'body > div:first';
 
 $(document).ready(function() { 
 
     // in widget behaviors 
 
     if ($('body.for-widget').length){
 
         var widget_path = (location.pathname+location.search).substr(1);
 
         $('#buy-grid-submit, #conv-btn-submit, #conversion-cart').on('click', function () {
             audit_widget_state(widget_path, false, '100vh', true);
         });
 
         var nots = '.related-products-toggle, .conv-section-store, #btn-conv-edit-location, .for-facebook-context a, .external-link, '
                  + '.for-facebook-context .outbound-product, #sidebar-cart-wrapper a, #sidebar-cart-wrapper button';
 
         $('a, .outbound-product').not(nots).click(function(event) {
    
             var href = $(this).attr('href');
             if (href.indexOf('javascript:;') == -1) audit_widget_state(href, true);
             //return false;
         });
 
         $('.embedded-search').not('.for-location').submit(function(event) {
 
             var href = $(this).attr('data-endpoint') + '&q=' + $(this).find('input:first').val();
 
             if ($('body.for-facebook-context').length){
 
                 window.location = href;
 
             } else {
 
                 audit_widget_state(href, true);
             }
             
             event.stopPropagation;
             return false;
         });
         
         $('body.for-widget').on('submit', '.cart-form', function(){
             
             var height= $(lcly_tracked_height_selector).height() + 100 + 'px';     
             audit_widget_state(widget_path, false, height, false);
 
         });
 
         $('body.for-widget').on('click', '#cart-icon-back', function(e){
 
             e.preventDefault();
             e.stopPropagation();
             
             var height= $(lcly_tracked_height_selector).height() + 100 + 'px';     
             audit_widget_state(widget_path, false, height, false);
 
 
             return false;
         });
 
         audit_widget_state(widget_path, false);
         init_event_listener();
         init_location_autocomplete();
     }
 });
 
 function audit_widget_state(path, change, height, fullscreen){
     
     if ( !$('body').hasClass('for-widget') ){
         return;
     }
 
     var cartActive = document.querySelector('body.cart-active');
     var orderSummaryActive = document.querySelector('div.order-summary-wrapper');
 
     if(height === undefined){
         height= $(lcly_tracked_height_selector).height() + 100 + 'px';        
 
         // if we detect we are in cart or order summary, maintain fullscreen mode
         if( cartActive !== null || orderSummaryActive !== null ){            
             height= '100vh';
         }
     }
     if (fullscreen === undefined ){
         fullscreen = false;
         
         if( cartActive !== null || orderSummaryActive !== null ){            
             fullscreen = true;
         }
     }
     parent.postMessage({
         change_url : change,
         height : height,
         document_path : path,
         is_fullscreen : fullscreen,
         requestor : 'widget'
 
     }, "*");
 }
 
 function init_event_listener(){
 
     var event_listener_type = window.addEventListener ? "addEventListener" : "attachEvent";
     var event_listener = window[event_listener_type];
     var message_event = event_listener_type == "attachEvent" ? "onmessage" : "message";
 
     event_listener(message_event, function(e) {
 
         if (typeof e.data.host_domain != 'undefined'){
 
             lcly.hostDomain = e.data.host_domain;
         }
 
     }, false);
 }
 
 function init_location_autocomplete(){
 
     if (typeof $('.embedded-search.for-location input').autocomplete == 'function'){
         $('.embedded-search.for-location input').autocomplete({
 
             serviceUrl: '/geo/lookup',
             minChars: 3,
             triggerSelectOnValidInput: false,
             autoSelectFirst: true,
             onSelect: function (suggestion) {
                 
                 $('.embedded-search.for-location').submit();
             }
         });
     }
 }
 
 /**
  * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
  * directory of this distribution and at
  * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
  */
 ;
 (function() {
 
     /**
      * Class for dimension change detection.
      *
      * @param {Element|Element[]|Elements|jQuery} element
      * @param {Function} callback
      *
      * @constructor
      */
     this.ResizeSensor = function(element, callback) {
         /**
          *
          * @constructor
          */
         function EventQueue() {
             this.q = [];
             this.add = function(ev) {
                 this.q.push(ev);
             };
 
             var i, j;
             this.call = function() {
                 for (i = 0, j = this.q.length; i < j; i++) {
                     this.q[i].call();
                 }
             };
         }
 
         /**
          * @param {HTMLElement} element
          * @param {String}      prop
          * @returns {String|Number}
          */
         function getComputedStyle(element, prop) {
             if (element.currentStyle) {
                 return element.currentStyle[prop];
             } else if (window.getComputedStyle) {
                 return window.getComputedStyle(element, null).getPropertyValue(prop);
             } else {
                 return element.style[prop];
             }
         }
 
         /**
          *
          * @param {HTMLElement} element
          * @param {Function}    resized
          */
         function attachResizeEvent(element, resized) {
             if (!element.resizedAttached) {
                 element.resizedAttached = new EventQueue();
                 element.resizedAttached.add(resized);
             } else if (element.resizedAttached) {
                 element.resizedAttached.add(resized);
                 return;
             }
 
             element.resizeSensor = document.createElement('div');
             element.resizeSensor.className = 'resize-sensor';
             var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;';
             var styleChild = 'position: absolute; left: 0; top: 0;';
 
             element.resizeSensor.style.cssText = style;
             element.resizeSensor.innerHTML =
                 '<div class="resize-sensor-expand" style="' + style + '">' +
                     '<div style="' + styleChild + '"></div>' +
                 '</div>' +
                 '<div class="resize-sensor-shrink" style="' + style + '">' +
                     '<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
                 '</div>';
             element.appendChild(element.resizeSensor);
 
             if (!{fixed: 1, absolute: 1}[getComputedStyle(element, 'position')]) {
                 element.style.position = 'relative';
             }
 
             var expand = element.resizeSensor.childNodes[0];
             var expandChild = expand.childNodes[0];
             var shrink = element.resizeSensor.childNodes[1];
             var shrinkChild = shrink.childNodes[0];
 
             var lastWidth, lastHeight;
 
             var reset = function() {
                 expandChild.style.width = expand.offsetWidth + 10 + 'px';
                 expandChild.style.height = expand.offsetHeight + 10 + 'px';
                 expand.scrollLeft = expand.scrollWidth;
                 expand.scrollTop = expand.scrollHeight;
                 shrink.scrollLeft = shrink.scrollWidth;
                 shrink.scrollTop = shrink.scrollHeight;
                 lastWidth = element.offsetWidth;
                 lastHeight = element.offsetHeight;
             };
 
             reset();
 
             var changed = function() {
                 if (element.resizedAttached) {
                     element.resizedAttached.call();
                 }
             };
 
             var addEvent = function(el, name, cb) {
                 if (el.attachEvent) {
                     el.attachEvent('on' + name, cb);
                 } else {
                     el.addEventListener(name, cb);
                 }
             };
 
             addEvent(expand, 'scroll', function() {
                 if (element.offsetWidth > lastWidth || element.offsetHeight > lastHeight) {
                     changed();
                 }
                 reset();
             });
 
             addEvent(shrink, 'scroll',function() {
                 if (element.offsetWidth < lastWidth || element.offsetHeight < lastHeight) {
                     changed();
                 }
                 reset();
             });
         }
 
         if ("[object Array]" === Object.prototype.toString.call(element)
             || ('undefined' !== typeof jQuery && element instanceof jQuery) //jquery
             || ('undefined' !== typeof Elements && element instanceof Elements) //mootools
             ) {
             var i = 0, j = element.length;
             for (; i < j; i++) {
                 attachResizeEvent(element[i], callback);
             }
         } else {
             attachResizeEvent(element, callback);
         }
 
         this.detach = function() {
             ResizeSensor.detach(element);
         };
     };
 
     this.ResizeSensor.detach = function(element) {
         if (element.resizeSensor) {
             element.removeChild(element.resizeSensor);
             delete element.resizeSensor;
             delete element.resizedAttached;
         }
     };
 
 })();
 //# sourceMappingURL=conversion.js.map