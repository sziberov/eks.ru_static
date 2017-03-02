
/*! Video.js v4.12.11 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function n(a){return function(){return this[a]}}function p(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");
function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ca[a])return c&&t.log.warn('Player "'+a+'" is already initialised. Options will not be applied.'),d&&t.Ca[a].I(d),t.Ca[a];a=t.n(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}var videojs=window.videojs=t;t.gc="4.12";t.ud="https:"==document.location.protocol?"https://":"http://";t.VERSION="4.12.11";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},loadingSpinner:{},textTrackDisplay:{},bigPlayButton:{},controlBar:{},errorDisplay:{},textTrackSettings:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.If||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.gc&&(videojs.options.flash.swf=t.ud+"vjs.zencdn.net/"+t.gc+"/video-js.swf");t.Id=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.Z.Aa(t.options.languages[a],c):c;return t.options.languages};t.Ca={};"function"===typeof define&&define.amd?define("videojs",[],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.Ga=t.CoreObject=m();
t.Ga.extend=function(a){var c,d;a=a||{};c=a.init||a.m||this.prototype.init||this.prototype.m||m();d=function(){c.apply(this,arguments)};d.prototype=t.i.create(this.prototype);d.prototype.constructor=d;d.extend=t.Ga.extend;d.create=t.Ga.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.Ga.create=function(){var a=t.i.create(this.prototype);this.apply(a,arguments);return a};
t.b=function(a,c,d){if(t.i.isArray(c))return v(t.b,a,c,d);var e=t.getData(a);e.G||(e.G={});e.G[c]||(e.G[c]=[]);d.s||(d.s=t.s++);e.G[c].push(d);e.ba||(e.disabled=l,e.ba=function(c){if(!e.disabled){c=t.Ob(c);var d=e.G[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.Oc();k++)d[k].call(a,c)}});1==e.G[c].length&&(a.addEventListener?a.addEventListener(c,e.ba,l):a.attachEvent&&a.attachEvent("on"+c,e.ba))};
t.o=function(a,c,d){if(t.Jc(a)){var e=t.getData(a);if(e.G){if(t.i.isArray(c))return v(t.o,a,c,d);if(c){var g=e.G[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.G[c]=[];t.yc(a,c)}}else for(g in e.G)c=g,e.G[c]=[],t.yc(a,c)}}};t.yc=function(a,c){var d=t.getData(a);0===d.G[c].length&&(delete d.G[c],a.removeEventListener?a.removeEventListener(c,d.ba,l):a.detachEvent&&a.detachEvent("on"+c,d.ba));t.ib(d.G)&&(delete d.G,delete d.ba,delete d.disabled);t.ib(d)&&t.$c(a)};
t.Ob=function(a){function c(){return f}function d(){return l}if(!a||!a.Tb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.ie=c;a.defaultPrevented=f};a.ie=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Tb=c};a.Tb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.Oc=c;a.stopPropagation()};a.Oc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.l=function(a,c){var d=t.Jc(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.Ob(c);d.ba&&d.ba.call(a,c);if(e&&!c.Tb()&&c.bubbles!==l)t.l(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.N=function(a,c,d){function e(){t.o(a,c,e);d.apply(this,arguments)}if(t.i.isArray(c))return v(t.N,a,c,d);e.s=d.s=d.s||t.s++;t.b(a,c,e)};function v(a,c,d,e){t.uc.forEach(d,function(d){a(c,d,e)})}var w=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.i.ca(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.va=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.i={};
t.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.i.ca=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};t.i.D=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};t.i.Qd=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=t.i.jb(e)&&t.i.jb(g)?t.i.Qd(e,g):c[d]);return a};t.i.copy=function(a){return t.i.D({},a)};
t.i.jb=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.i.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.ke=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=t.s++);e.s=d?d+"_"+c.s:c.s;return e};t.ua={};t.s=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.s++);t.ua[c]||(t.ua[c]={});return t.ua[c]};
t.Jc=function(a){a=a[t.expando];return!(!a||t.ib(t.ua[a]))};t.$c=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=j}}};t.ib=function(a){for(var c in a)if(a[c]!==j)return l;return f};t.Pa=function(a,c){return-1!==(" "+a.className+" ").indexOf(" "+c+" ")};t.p=function(a,c){t.Pa(a,c)||(a.className=""===a.className?c:a.className+" "+c)};
t.r=function(a,c){var d,e;if(t.Pa(a,c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");var x=document.createElement("track");x.Ub="captions";x.fd="en";x.label="English";t.A.appendChild(x);t.P=navigator.userAgent;t.Bd=/iPhone/i.test(t.P);t.Ad=/iPad/i.test(t.P);t.Cd=/iPod/i.test(t.P);t.zd=t.Bd||t.Ad||t.Cd;var aa=t,y;var z=t.P.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;aa.kf=y;t.yd=/Android/i.test(t.P);var ba=t,B;
var C=t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),D,E;C?(D=C[1]&&parseFloat(C[1]),E=C[2]&&parseFloat(C[2]),B=D&&E?parseFloat(C[1]+"."+C[2]):D?D:j):B=j;ba.fc=B;t.Dd=t.yd&&/webkit/i.test(t.P)&&2.3>t.fc;t.hc=/Firefox/i.test(t.P);t.lf=/Chrome/i.test(t.P);t.pa=/MSIE\s8\.0/.test(t.P);t.Eb=!!("ontouchstart"in window||window.wd&&document instanceof window.wd);t.vd="backgroundSize"in t.A.style;
t.bd=function(a,c){t.i.ca(c,function(c,e){e===j||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};t.Oa=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
t.vf=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Sb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.bb={};t.n=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.Na=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.Kd=function(){document.body.focus();document.onselectstart=p(l)};t.af=function(){document.onselectstart=p(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.xa=function(a,c){return a===b&&c===b?{length:0,start:function(){throw Error("This TimeRanges object is empty");},end:function(){throw Error("This TimeRanges object is empty");}}:{length:1,start:function(){return a},end:function(){return c}}};t.Me=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};
t.$d=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Ee=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,""));"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,""));e&&document.body.removeChild(c);return a};
function F(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){F(j,arguments)};t.log.history=[];t.log.error=function(){F("error",arguments)};t.log.warn=function(){F("warn",arguments)};
t.Yd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.uc={};t.uc.forEach=function(a,c,d){if(t.i.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};
t.ff=function(a,c){var d,e,g,h,k,q,r;"string"===typeof a&&(a={uri:a});videojs.Z.Aa({method:"GET",timeout:45E3},a);c=c||m();q=function(){window.clearTimeout(k);c(j,e,e.response||e.responseText)};r=function(a){window.clearTimeout(k);if(!a||"string"===typeof a)a=Error(a);c(a,e)};d=window.XMLHttpRequest;"undefined"===typeof d&&(d=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
});e=new d;e.uri=a.uri;d=t.Ee(a.uri);g=window.location;d.protocol+d.host!==g.protocol+g.host&&window.XDomainRequest&&!("withCredentials"in e)?(e=new window.XDomainRequest,e.onload=q,e.onerror=r,e.onprogress=m(),e.ontimeout=m()):(h="file:"==d.protocol||"file:"==g.protocol,e.onreadystatechange=function(){if(4===e.readyState){if(e.Ye)return r("timeout");200===e.status||h&&0===e.status?q():r()}},a.timeout&&(k=window.setTimeout(function(){4!==e.readyState&&(e.Ye=f,e.abort())},a.timeout)));try{e.open(a.method||
"GET",a.uri,f)}catch(u){r(u);return}a.withCredentials&&(e.withCredentials=f);a.responseType&&(e.responseType=a.responseType);try{e.send()}catch(A){r(A)}};t.Z={};t.Z.Aa=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.i.jb(e)&&t.i.jb(g)?t.Z.Aa(e,g):c[d]);return a};t.z=m();s=t.z.prototype;s.ab={};s.b=function(a,c){var d=this.addEventListener;this.addEventListener=Function.prototype;t.b(this,a,c);this.addEventListener=d};s.addEventListener=t.z.prototype.b;
s.o=function(a,c){t.o(this,a,c)};s.removeEventListener=t.z.prototype.o;s.N=function(a,c){t.N(this,a,c)};s.l=function(a){var c=a.type||a;"string"===typeof a&&(a={type:c});a=t.Ob(a);if(this.ab[c]&&this["on"+c])this["on"+c](a);t.l(this,a)};s.dispatchEvent=t.z.prototype.l;
t.a=t.Ga.extend({m:function(a,c,d){this.d=a;this.q=t.i.copy(this.q);c=this.options(c);this.Qa=c.id||c.el&&c.el.id;this.Qa||(this.Qa=(a.id&&a.id()||"no_player")+"_component_"+t.s++);this.te=c.name||j;this.c=c.el||this.e();this.R=[];this.cb={};this.eb={};this.Lc();this.I(d);if(c.ad!==l){var e,g;this.k().reportUserActivity&&(e=t.bind(this.k(),this.k().reportUserActivity),this.b("touchstart",function(){e();this.clearInterval(g);g=this.setInterval(e,250)}),a=function(){e();this.clearInterval(g)},this.b("touchmove",
e),this.b("touchend",a),this.b("touchcancel",a))}}});s=t.a.prototype;s.dispose=function(){this.l({type:"dispose",bubbles:l});if(this.R)for(var a=this.R.length-1;0<=a;a--)this.R[a].dispose&&this.R[a].dispose();this.eb=this.cb=this.R=j;this.o();this.c.parentNode&&this.c.parentNode.removeChild(this.c);t.$c(this.c);this.c=j};s.d=f;s.k=n("d");s.options=function(a){return a===b?this.q:this.q=t.Z.Aa(this.q,a)};s.e=function(a,c){return t.e(a,c)};
s.v=function(a){var c=this.d.language(),d=this.d.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.n=n("c");s.wa=function(){return this.B||this.c};s.id=n("Qa");s.name=n("te");s.children=n("R");s.ae=function(a){return this.cb[a]};s.da=function(a){return this.eb[a]};
s.aa=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.va(e),c.name=e,d=new window.videojs[d](this.d||this,c)):d=a;this.R.push(d);"function"===typeof d.id&&(this.cb[d.id()]=d);(e=e||d.name&&d.name())&&(this.eb[e]=d);"function"===typeof d.el&&d.el()&&this.wa().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.da(a));if(a&&this.R){for(var c=l,d=this.R.length-1;0<=d;d--)if(this.R[d]===a){c=f;this.R.splice(d,1);break}c&&(this.cb[a.id()]=j,this.eb[a.name()]=j,(c=a.n())&&c.parentNode===this.wa()&&this.wa().removeChild(a.n()))}};
s.Lc=function(){var a,c,d,e,g,h;a=this;c=a.options();if(d=c.children)if(h=function(d,e){c[d]!==b&&(e=c[d]);e!==l&&(a[d]=a.aa(d,e))},t.i.isArray(d))for(var k=0;k<d.length;k++)e=d[k],"string"==typeof e?(g=e,e={}):g=e.name,h(g,e);else t.i.ca(d,h)};s.U=p("");
s.b=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.b(this.c,a,t.bind(this,c)):(e=t.bind(this,d),h=this,g=function(){h.o(a,c,e)},g.s=e.s,this.b("dispose",g),d=function(){h.o("dispose",g)},d.s=e.s,a.nodeName?(t.b(a,c,e),t.b(a,"dispose",d)):"function"===typeof a.b&&(a.b(c,e),a.b("dispose",d)));return this};
s.o=function(a,c,d){!a||"string"===typeof a||t.i.isArray(a)?t.o(this.c,a,c):(d=t.bind(this,d),this.o("dispose",d),a.nodeName?(t.o(a,c,d),t.o(a,"dispose",d)):(a.o(c,d),a.o("dispose",d)));return this};s.N=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.N(this.c,a,t.bind(this,c)):(e=t.bind(this,d),g=this,h=function(){g.o(a,c,h);e.apply(this,arguments)},h.s=e.s,this.b(a,c,h));return this};s.l=function(a){t.l(this.c,a);return this};
s.I=function(a){a&&(this.ya?a.call(this):(this.nb===b&&(this.nb=[]),this.nb.push(a)));return this};s.Va=function(){this.ya=f;var a=this.nb;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.nb=[];this.l("ready")}};s.Pa=function(a){return t.Pa(this.c,a)};s.p=function(a){t.p(this.c,a);return this};s.r=function(a){t.r(this.c,a);return this};s.show=function(){this.r("vjs-hidden");return this};s.X=function(){this.p("vjs-hidden");return this};function G(a){a.r("vjs-lock-showing")}
s.width=function(a,c){return ca(this,"width",a,c)};s.height=function(a,c){return ca(this,"height",a,c)};s.Td=function(a,c){return this.width(a,f).height(c)};function ca(a,c,d,e){if(d!==b){if(d===j||t.ke(d))d=0;a.c.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.l("resize");return a}if(!a.c)return 0;d=a.c.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.c["offset"+t.va(c)],10)}
function da(a){var c,d,e,g,h,k,q,r;c=0;d=j;a.b("touchstart",function(a){1===a.touches.length&&(d=t.i.copy(a.touches[0]),c=(new Date).getTime(),g=f)});a.b("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,q=a.touches[0].pageY-d.pageY,r=Math.sqrt(k*k+q*q),10<r&&(g=l))});h=function(){g=l};a.b("touchleave",h);a.b("touchcancel",h);a.b("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,200>e&&(a.preventDefault(),this.l("tap")))})}
s.setTimeout=function(a,c){function d(){this.clearTimeout(e)}a=t.bind(this,a);var e=setTimeout(a,c);d.s="vjs-timeout-"+e;this.b("dispose",d);return e};s.clearTimeout=function(a){function c(){}clearTimeout(a);c.s="vjs-timeout-"+a;this.o("dispose",c);return a};s.setInterval=function(a,c){function d(){this.clearInterval(e)}a=t.bind(this,a);var e=setInterval(a,c);d.s="vjs-interval-"+e;this.b("dispose",d);return e};
s.clearInterval=function(a){function c(){}clearInterval(a);c.s="vjs-interval-"+a;this.o("dispose",c);return a};t.w=t.a.extend({m:function(a,c){t.a.call(this,a,c);da(this);this.b("tap",this.u);this.b("click",this.u);this.b("focus",this.lb);this.b("blur",this.kb)}});s=t.w.prototype;
s.e=function(a,c){var d;c=t.i.D({className:this.U(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.B=t.e("div",{className:"vjs-control-content"}),this.Jb=t.e("span",{className:"vjs-control-text",innerHTML:this.v(this.ta)||"Need Text"}),this.B.appendChild(this.Jb),d.appendChild(this.B));return d};s.U=function(){return"vjs-control "+t.a.prototype.U.call(this)};s.u=m();s.lb=function(){t.b(document,"keydown",t.bind(this,this.ka))};
s.ka=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.u()};s.kb=function(){t.o(document,"keydown",t.bind(this,this.ka))};t.T=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.Jd=this.da(this.q.barName);this.handle=this.da(this.q.handleName);this.b("mousedown",this.mb);this.b("touchstart",this.mb);this.b("focus",this.lb);this.b("blur",this.kb);this.b("click",this.u);this.b(a,"controlsvisible",this.update);this.b(a,this.Vc,this.update)}});s=t.T.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.i.D({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.mb=function(a){a.preventDefault();t.Kd();this.p("vjs-sliding");this.b(document,"mousemove",this.la);this.b(document,"mouseup",this.Ba);this.b(document,"touchmove",this.la);this.b(document,"touchend",this.Ba);this.la(a)};s.la=m();
s.Ba=function(){t.af();this.r("vjs-sliding");this.o(document,"mousemove",this.la);this.o(document,"mouseup",this.Ba);this.o(document,"touchmove",this.la);this.o(document,"touchend",this.Ba);this.update()};s.update=function(){if(this.c){var a,c=this.Rb(),d=this.handle,e=this.Jd;if("number"!==typeof c||c!==c||0>c||Infinity===c)c=0;a=c;if(d){a=this.c.offsetWidth;var g=d.n().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.n().style.left=t.round(100*c,2)+"%"}e&&(e.n().style.width=t.round(100*a,2)+"%")}};
function ea(a,c){var d,e,g,h;d=a.c;e=t.Yd(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.n().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.n().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.lb=function(){this.b(document,"keydown",this.ka)};
s.ka=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.gd();else if(38==a.which||39==a.which)a.preventDefault(),this.hd()};s.kb=function(){this.o(document,"keydown",this.ka)};s.u=function(a){a.stopImmediatePropagation();a.preventDefault()};t.ga=t.a.extend();t.ga.prototype.defaultValue=0;t.ga.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.i.D({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};
t.qa=t.a.extend();function fa(a,c){a.aa(c);c.b("click",t.bind(a,function(){G(this)}))}t.qa.prototype.e=function(){var a=this.options().Ac||"ul";this.B=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.B,className:"vjs-menu"});a.appendChild(this.B);t.b(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.M=t.w.extend({m:function(a,c){t.w.call(this,a,c);this.selected(c.selected)}});
t.M.prototype.e=function(a,c){return t.w.prototype.e.call(this,"li",t.i.D({className:"vjs-menu-item",innerHTML:this.v(this.q.label)},c))};t.M.prototype.u=function(){this.selected(f)};t.M.prototype.selected=function(a){a?(this.p("vjs-selected"),this.c.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.c.setAttribute("aria-selected",l))};
t.O=t.w.extend({m:function(a,c){t.w.call(this,a,c);this.update();this.b("keydown",this.ka);this.c.setAttribute("aria-haspopup",f);this.c.setAttribute("role","button")}});s=t.O.prototype;s.update=function(){var a=this.La();this.za&&this.removeChild(this.za);this.za=a;this.aa(a);this.H&&0===this.H.length?this.X():this.H&&1<this.H.length&&this.show()};s.Ja=l;
s.La=function(){var a=new t.qa(this.d);this.options().title&&a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.options().title),We:-1}));if(this.H=this.createItems())for(var c=0;c<this.H.length;c++)fa(a,this.H[c]);return a};s.Ka=m();s.U=function(){return this.className+" vjs-menu-button "+t.w.prototype.U.call(this)};s.lb=m();s.kb=m();s.u=function(){this.N("mouseout",t.bind(this,function(){G(this.za);this.c.blur()}));this.Ja?H(this):ga(this)};
s.ka=function(a){32==a.which||13==a.which?(this.Ja?H(this):ga(this),a.preventDefault()):27==a.which&&(this.Ja&&H(this),a.preventDefault())};function ga(a){a.Ja=f;a.za.p("vjs-lock-showing");a.c.setAttribute("aria-pressed",f);a.H&&0<a.H.length&&a.H[0].n().focus()}function H(a){a.Ja=l;G(a.za);a.c.setAttribute("aria-pressed",l)}t.J=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.i.D(this,a);this.message||(this.message=t.J.Rd[this.code]||"")};
t.J.prototype.code=0;t.J.prototype.message="";t.J.prototype.status=j;t.J.hb="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.J.Rd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var I=0;I<t.J.hb.length;I++)t.J[t.J.hb[I]]=I,t.J.prototype[t.J.hb[I]]=I;
var J,ha,K,L;
J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
ha=J[0];for(L=0;L<J.length;L++)if(J[L][1]in document){K=J[L];break}if(K){t.bb.Qb={};for(L=0;L<K.length;L++)t.bb.Qb[ha[L]]=K[L]}
t.Player=t.a.extend({m:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+t.s++;this.Xe=a&&t.Oa(a);c=t.i.D(ia(a),c);this.Qc=c.language||t.options.language;this.ne=c.languages||t.options.languages;this.K={};this.Wc=c.poster||"";this.Kb=!!c.controls;a.controls=l;c.ad=l;ja(this,"audio"===this.L.nodeName.toLowerCase());t.a.call(this,this,c,d);this.controls()?this.p("vjs-controls-enabled"):this.p("vjs-controls-disabled");ja(this)&&this.p("vjs-audio");t.Ca[this.Qa]=this;c.plugins&&t.i.ca(c.plugins,function(a,
c){this[a](c)},this);var e,g,h,k,q;e=t.bind(this,this.reportUserActivity);this.b("mousedown",function(){e();this.clearInterval(g);g=this.setInterval(e,250)});this.b("mousemove",function(a){if(a.screenX!=k||a.screenY!=q)k=a.screenX,q=a.screenY,e()});this.b("mouseup",function(){e();this.clearInterval(g)});this.b("keydown",e);this.b("keyup",e);this.setInterval(function(){if(this.Fa){this.Fa=l;this.userActive(f);this.clearTimeout(h);var a=this.options().inactivityTimeout;0<a&&(h=this.setTimeout(function(){this.Fa||
this.userActive(l)},a))}},250)}});s=t.Player.prototype;s.language=function(a){if(a===b)return this.Qc;this.Qc=a;return this};s.languages=n("ne");s.q=t.options;s.dispose=function(){this.l("dispose");this.o("dispose");t.Ca[this.Qa]=j;this.L&&this.L.player&&(this.L.player=j);this.c&&this.c.player&&(this.c.player=j);this.h&&this.h.dispose();t.a.prototype.dispose.call(this)};
function ia(a){var c,d,e={sources:[],tracks:[]};c=t.Oa(a);d=c["data-setup"];d!==j&&t.i.D(c,t.JSON.parse(d||"{}"));t.i.D(e,c);if(a.hasChildNodes()){var g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)c=a[g],d=c.nodeName.toLowerCase(),"source"===d?e.sources.push(t.Oa(c)):"track"===d&&e.tracks.push(t.Oa(c))}return e}
s.e=function(){var a=this.c=t.a.prototype.e.call(this,"div"),c=this.L,d;c.removeAttribute("width");c.removeAttribute("height");d=t.Oa(c);t.i.ca(d,function(c){"class"==c?a.className=d[c]:a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.q.width,f);this.height(this.q.height,f);c.ge=c.networkState;c.parentNode&&c.parentNode.insertBefore(a,c);t.Sb(c,a);this.c=a;this.b("loadstart",this.xe);this.b("waiting",this.De);this.b(["canplay",
"canplaythrough","playing","ended"],this.Ce);this.b("seeking",this.Ae);this.b("seeked",this.ze);this.b("ended",this.ue);this.b("play",this.Yb);this.b("firstplay",this.ve);this.b("pause",this.Xb);this.b("progress",this.ye);this.b("durationchange",this.Tc);this.b("fullscreenchange",this.we);return a};
function ka(a,c,d){a.h&&(a.ya=l,a.h.dispose(),a.h=l);"Html5"!==c&&a.L&&(t.f.Lb(a.L),a.L=j);a.Ta=c;a.ya=l;var e=t.i.D({source:d,parentEl:a.c},a.q[c.toLowerCase()]);d&&(a.Dc=d.type,d.src==a.K.src&&0<a.K.currentTime&&(e.startTime=a.K.currentTime),a.K.src=d.src);a.h=new window.videojs[c](a,e);a.h.I(function(){this.d.Va()})}s.xe=function(){this.r("vjs-ended");this.error(j);this.paused()?la(this,l):this.l("firstplay")};s.Kc=l;
function la(a,c){c!==b&&a.Kc!==c&&((a.Kc=c)?(a.p("vjs-has-started"),a.l("firstplay")):a.r("vjs-has-started"))}s.Yb=function(){this.r("vjs-ended");this.r("vjs-paused");this.p("vjs-playing");la(this,f)};s.De=function(){this.p("vjs-waiting")};s.Ce=function(){this.r("vjs-waiting")};s.Ae=function(){this.p("vjs-seeking")};s.ze=function(){this.r("vjs-seeking")};s.ve=function(){this.q.starttime&&this.currentTime(this.q.starttime);this.p("vjs-has-started")};s.Xb=function(){this.r("vjs-playing");this.p("vjs-paused")};
s.ye=function(){1==this.bufferedPercent()&&this.l("loadedalldata")};s.ue=function(){this.p("vjs-ended");this.q.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.Tc=function(){var a=M(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.p("vjs-live"):this.r("vjs-live"))};s.we=function(){this.isFullscreen()?this.p("vjs-fullscreen"):this.r("vjs-fullscreen")};
function N(a,c,d){if(a.h&&!a.h.ya)a.h.I(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw t.log(e),e;}}function M(a,c){if(a.h&&a.h.ya)try{return a.h[c]()}catch(d){throw a.h[c]===b?t.log("Video.js: "+c+" method not defined for "+a.Ta+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.Ta+" playback technology element.",d),a.h.ya=l):t.log(d),d;}}s.play=function(){N(this,"play");return this};s.pause=function(){N(this,"pause");return this};
s.paused=function(){return M(this,"paused")===l?l:f};s.currentTime=function(a){return a!==b?(N(this,"setCurrentTime",a),this):this.K.currentTime=M(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.K.duration=parseFloat(a),this;this.K.duration===b&&this.Tc();return this.K.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=M(this,"buffered");if(!a||!a.length)a=t.xa(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.K.volume=a,N(this,"setVolume",a),t.Me(a),this;a=parseFloat(M(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(N(this,"setMuted",a),this):M(this,"muted")||l};s.Sa=function(){return M(this,"supportsFullScreen")||l};s.Nc=l;
s.isFullscreen=function(a){return a!==b?(this.Nc=!!a,this):this.Nc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
s.requestFullscreen=function(){var a=t.bb.Qb;this.isFullscreen(f);a?(t.b(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.o(document,a.fullscreenchange,arguments.callee);this.l("fullscreenchange")})),this.c[a.requestFullscreen]()):this.h.Sa()?N(this,"enterFullScreen"):(this.Gc(),this.l("fullscreenchange"));return this};
s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.bb.Qb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.h.Sa()?N(this,"exitFullScreen"):(this.Mb(),this.l("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
s.Gc=function(){this.je=f;this.Ud=document.documentElement.style.overflow;t.b(document,"keydown",t.bind(this,this.Hc));document.documentElement.style.overflow="hidden";t.p(document.body,"vjs-full-window");this.l("enterFullWindow")};s.Hc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Mb())};s.Mb=function(){this.je=l;t.o(document,"keydown",this.Hc);document.documentElement.style.overflow=this.Ud;t.r(document.body,"vjs-full-window");this.l("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,k=a;h<k.length;h++){var q=k[h];if(g.canPlaySource(q))return{source:q,h:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return M(this,"src");t.i.isArray(a)?ma(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.Ta].canPlaySource(a)?ma(this,[a]):(this.K.src=a.src,this.Dc=a.type||"",this.I(function(){window.videojs[this.Ta].prototype.hasOwnProperty("setSource")?N(this,"setSource",a):N(this,"src",a.src);"auto"==this.q.preload&&this.load();this.q.autoplay&&this.play()})));return this};
function ma(a,c){var d=a.selectSource(c);d?d.h===a.Ta?a.src(d.source):ka(a,d.h,d.source):(a.setTimeout(function(){this.error({code:4,message:this.v(this.options().notSupportedMessage)})},0),a.Va())}s.load=function(){N(this,"load");return this};s.currentSrc=function(){return M(this,"currentSrc")||this.K.src||""};s.Pd=function(){return this.Dc||""};s.Ra=function(a){return a!==b?(N(this,"setPreload",a),this.q.preload=a,this):M(this,"preload")};
s.autoplay=function(a){return a!==b?(N(this,"setAutoplay",a),this.q.autoplay=a,this):M(this,"autoplay")};s.loop=function(a){return a!==b?(N(this,"setLoop",a),this.q.loop=a,this):M(this,"loop")};s.poster=function(a){if(a===b)return this.Wc;a||(a="");this.Wc=a;N(this,"setPoster",a);this.l("posterchange");return this};
s.controls=function(a){return a!==b?(a=!!a,this.Kb!==a&&((this.Kb=a)?(this.r("vjs-controls-disabled"),this.p("vjs-controls-enabled"),this.l("controlsenabled")):(this.r("vjs-controls-enabled"),this.p("vjs-controls-disabled"),this.l("controlsdisabled"))),this):this.Kb};t.Player.prototype.cc;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.cc!==a&&((this.cc=a)?(this.p("vjs-using-native-controls"),this.l("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.l("usingcustomcontrols"))),this):this.cc};s.ja=j;s.error=function(a){if(a===b)return this.ja;if(a===j)return this.ja=a,this.r("vjs-error"),this;this.ja=a instanceof t.J?a:new t.J(a);this.l("error");this.p("vjs-error");t.log.error("(CODE:"+this.ja.code+" "+t.J.hb[this.ja.code]+")",this.ja.message,this.ja);return this};
s.ended=function(){return M(this,"ended")};s.seeking=function(){return M(this,"seeking")};s.seekable=function(){return M(this,"seekable")};s.Fa=f;s.reportUserActivity=function(){this.Fa=f};s.bc=f;
s.userActive=function(a){return a!==b?(a=!!a,a!==this.bc&&((this.bc=a)?(this.Fa=f,this.r("vjs-user-inactive"),this.p("vjs-user-active"),this.l("useractive")):(this.Fa=l,this.h&&this.h.N("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.p("vjs-user-inactive"),this.l("userinactive"))),this):this.bc};s.playbackRate=function(a){return a!==b?(N(this,"setPlaybackRate",a),this):this.h&&this.h.featuresPlaybackRate?M(this,"playbackRate"):1};s.Mc=l;
function ja(a,c){return c!==b?(a.Mc=!!c,a):a.Mc}s.networkState=function(){return M(this,"networkState")};s.readyState=function(){return M(this,"readyState")};s.textTracks=function(){return this.h&&this.h.textTracks()};s.Y=function(){return this.h&&this.h.remoteTextTracks()};s.addTextTrack=function(a,c,d){return this.h&&this.h.addTextTrack(a,c,d)};s.ha=function(a){return this.h&&this.h.addRemoteTextTrack(a)};s.Da=function(a){this.h&&this.h.removeRemoteTextTrack(a)};t.ub=t.a.extend();
t.ub.prototype.q={wf:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{},subtitlesButton:{},captionsButton:{},chaptersButton:{}}};t.ub.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};t.ic=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});
t.ic.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.B=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.v("Stream Type")+"</span>"+this.v("LIVE"),"aria-live":"off"});a.appendChild(this.B);return a};t.lc=t.w.extend({m:function(a,c){t.w.call(this,a,c);this.b(a,"play",this.Yb);this.b(a,"pause",this.Xb)}});s=t.lc.prototype;s.ta="Play";s.U=function(){return"vjs-play-control "+t.w.prototype.U.call(this)};
s.u=function(){if(this.d.paused()){try{this.d.l("livePause")}catch(a){console.log(a.message)}this.d.play()}else this.d.pause()};s.Yb=function(){this.r("vjs-paused");this.p("vjs-playing");this.c.children[0].children[0].innerHTML=this.v("Pause")};s.Xb=function(){this.r("vjs-playing");this.p("vjs-paused");this.c.children[0].children[0].innerHTML=this.v("Play")};t.vb=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.vb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.B);return a};t.vb.prototype.fa=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.B.innerHTML='<span class="vjs-control-text">'+this.v("Current Time")+"</span> "+t.Na(a,this.d.duration())};
t.wb=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa);this.b(a,"loadedmetadata",this.fa)}});t.wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.v("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.B);return a};
t.wb.prototype.fa=function(){var a=this.d.duration();a&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Duration Time")+"</span> "+t.Na(a))};t.rc=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});t.rc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.Db=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.Db.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.B);return a};t.Db.prototype.fa=function(){this.d.duration()&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -"+t.Na(this.d.remainingTime()))};
t.Ya=t.w.extend({m:function(a,c){t.w.call(this,a,c)}});t.Ya.prototype.ta="Fullscreen";t.Ya.prototype.U=function(){return"vjs-fullscreen-control "+t.w.prototype.U.call(this)};t.Ya.prototype.u=function(){this.d.isFullscreen()?(this.d.exitFullscreen(),this.Jb.innerHTML=this.v("Fullscreen")):(this.d.requestFullscreen(),this.Jb.innerHTML=this.v("Non-Fullscreen"))};t.Cb=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});t.Cb.prototype.q={children:{seekBar:{}}};
t.Cb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.oc=t.T.extend({m:function(a,c){t.T.call(this,a,c);this.b(a,"timeupdate",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.oc.prototype;s.q={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Vc="timeupdate";s.e=function(){return t.T.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.Ea=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.c.setAttribute("aria-valuenow",t.round(100*this.Rb(),2));this.c.setAttribute("aria-valuetext",t.Na(a,this.d.duration()))};s.Rb=function(){return this.d.currentTime()/this.d.duration()};s.mb=function(a){t.T.prototype.mb.call(this,a);this.d.ob=f;this.d.p("vjs-scrubbing");this.df=!this.d.paused();this.d.pause()};s.la=function(a){a=ea(this,a)*this.d.duration();a==this.d.duration()&&(a-=0.1);this.d.currentTime(a)};
s.Ba=function(a){t.T.prototype.Ba.call(this,a);this.d.ob=l;this.d.r("vjs-scrubbing");this.df&&this.d.play()};s.hd=function(){this.d.currentTime(this.d.currentTime()+5)};s.gd=function(){this.d.currentTime(this.d.currentTime()-5)};t.zb=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.b(a,"progress",this.update)}});t.zb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Loaded")+"</span>: 0%</span>"})};
t.zb.prototype.update=function(){var a,c,d,e,g=this.d.buffered();a=this.d.duration();var h,k=this.d;h=k.buffered();k=k.duration();h=h.end(h.length-1);h>k&&(h=k);k=this.c.children;this.c.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=k[a])||(e=this.c.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=k.length;a>g.length;a--)this.c.removeChild(k[a-1])};t.kc=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});
t.kc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Progress")+"</span>: 0%</span>"})};t.Za=t.ga.extend({m:function(a,c){t.ga.call(this,a,c);this.b(a,"timeupdate",this.fa)}});t.Za.prototype.defaultValue="00:00";t.Za.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.Za.prototype.fa=function(){var a=this.d.ob?this.d.K.currentTime:this.d.currentTime();this.c.innerHTML='<span class="vjs-control-text">'+t.Na(a,this.d.duration())+"</span>"};t.Gb=t.a.extend({m:function(a,c){t.a.call(this,a,c);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.Gb.prototype.q={children:{volumeBar:{}}};
t.Gb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.Fb=t.T.extend({m:function(a,c){t.T.call(this,a,c);this.b(a,"volumechange",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.Fb.prototype;s.Ea=function(){this.c.setAttribute("aria-valuenow",t.round(100*this.d.volume(),2));this.c.setAttribute("aria-valuetext",t.round(100*this.d.volume(),2)+"%")};s.q={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Vc="volumechange";s.e=function(){return t.T.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.la=function(a){this.d.muted()&&this.d.muted(l);this.d.volume(ea(this,a))};s.Rb=function(){return this.d.muted()?0:this.d.volume()};s.hd=function(){this.d.volume(this.d.volume()+0.1)};s.gd=function(){this.d.volume(this.d.volume()-0.1)};t.sc=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});
t.sc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.Hb=t.ga.extend();t.Hb.prototype.defaultValue="00:00";t.Hb.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ra=t.w.extend({m:function(a,c){t.w.call(this,a,c);this.b(a,"volumechange",this.update);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.ra.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};
t.ra.prototype.u=function(){this.d.muted(this.d.muted()?l:f)};t.ra.prototype.update=function(){var a=this.d.volume(),c=3;0===a||this.d.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.d.muted()?this.c.children[0].children[0].innerHTML!=this.v("Unmute")&&(this.c.children[0].children[0].innerHTML=this.v("Unmute")):this.c.children[0].children[0].innerHTML!=this.v("Mute")&&(this.c.children[0].children[0].innerHTML=this.v("Mute"));for(a=0;4>a;a++)t.r(this.c,"vjs-vol-"+a);t.p(this.c,"vjs-vol-"+c)};
t.Ha=t.O.extend({m:function(a,c){t.O.call(this,a,c);this.b(a,"volumechange",this.ef);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")});this.p("vjs-menu-button")}});t.Ha.prototype.La=function(){var a=new t.qa(this.d,{Ac:"div"}),c=new t.Fb(this.d,this.q.volumeBar);c.b("focus",function(){a.p("vjs-lock-showing")});c.b("blur",function(){G(a)});a.aa(c);return a};
t.Ha.prototype.u=function(){t.ra.prototype.u.call(this);t.O.prototype.u.call(this)};t.Ha.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};t.Ha.prototype.ef=t.ra.prototype.update;t.mc=t.O.extend({m:function(a,c){t.O.call(this,a,c);this.rd();this.qd();this.b(a,"loadstart",this.rd);this.b(a,"ratechange",this.qd)}});s=t.mc.prototype;s.ta="Playback Rate";
s.className="vjs-playback-rate";s.e=function(){var a=t.O.prototype.e.call(this);this.Pc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.Pc);return a};s.La=function(){var a=new t.qa(this.k()),c=this.k().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.aa(new t.Bb(this.k(),{rate:c[d]+"x"}));return a};s.Ea=function(){this.n().setAttribute("aria-valuenow",this.k().playbackRate())};
s.u=function(){for(var a=this.k().playbackRate(),c=this.k().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.k().playbackRate(d)};function na(a){return a.k().h&&a.k().h.featuresPlaybackRate&&a.k().options().playbackRates&&0<a.k().options().playbackRates.length}s.rd=function(){na(this)?this.r("vjs-hidden"):this.p("vjs-hidden")};s.qd=function(){na(this)&&(this.Pc.innerHTML=this.k().playbackRate()+"x")};
t.Bb=t.M.extend({Ac:"button",m:function(a,c){var d=this.label=c.rate,e=this.Xc=parseFloat(d,10);c.label=d;c.selected=1===e;t.M.call(this,a,c);this.b(a,"ratechange",this.update)}});t.Bb.prototype.u=function(){t.M.prototype.u.call(this);this.k().playbackRate(this.Xc)};t.Bb.prototype.update=function(){this.selected(this.k().playbackRate()==this.Xc)};t.nc=t.w.extend({m:function(a,c){t.w.call(this,a,c);this.update();a.b("posterchange",t.bind(this,this.update))}});s=t.nc.prototype;
s.dispose=function(){this.k().o("posterchange",this.update);t.w.prototype.dispose.call(this)};s.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});t.vd||(this.Nb=t.e("img"),a.appendChild(this.Nb));return a};s.update=function(){var a=this.k().poster();this.na(a);a?this.show():this.X()};s.na=function(a){var c;this.Nb?this.Nb.src=a:(c="",a&&(c='url("'+a+'")'),this.c.style.backgroundImage=c)};s.u=function(){this.d.play()};t.jc=t.a.extend({m:function(a,c){t.a.call(this,a,c)}});
t.jc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.sb=t.w.extend();t.sb.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.sb.prototype.u=function(){this.d.play()};t.xb=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.update();this.b(a,"error",this.update)}});
t.xb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.B=t.e("div");a.appendChild(this.B);return a};t.xb.prototype.update=function(){this.k().error()&&(this.B.innerHTML=this.v(this.k().error().message))};var O;t.j=t.a.extend({m:function(a,c,d){c=c||{};c.ad=l;t.a.call(this,a,c,d);this.featuresProgressEvents||this.re();this.featuresTimeupdateEvents||this.se();this.fe();this.featuresNativeTextTracks||this.Vd();this.he()}});s=t.j.prototype;
s.fe=function(){var a,c;a=this.k();c=function(){a.controls()&&!a.usingNativeControls()&&this.Hd()};this.I(c);this.b(a,"controlsenabled",c);this.b(a,"controlsdisabled",this.He);this.I(function(){this.networkState&&0<this.networkState()&&this.k().l("loadstart")})};
s.Hd=function(){var a;this.b("mousedown",this.u);this.b("touchstart",function(){a=this.d.userActive()});this.b("touchmove",function(){a&&this.k().reportUserActivity()});this.b("touchend",function(a){a.preventDefault()});da(this);this.b("tap",this.Be)};s.He=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};s.Sd=400;s.nd=j;s.fb=0;
s.u=function(a){if(0===a.button){var c=this;this.fb++;1==this.fb?this.nd=setTimeout(function(){c.fb=0;c.k().controls()&&(c.k().paused()?(c.k().play(),c.k().l("livePause")):c.k().pause())},this.Sd):(clearTimeout(this.nd),this.fb=0)}};s.Be=function(){this.k().userActive(!this.k().userActive())};s.re=function(){this.Rc=f;this.$e()};s.qe=function(){this.Rc=l;this.jd()};
s.$e=function(){this.Ge=this.setInterval(function(){var a=this.k().bufferedPercent();this.Ld!=a&&this.k().l("progress");this.Ld=a;1===a&&this.jd()},500)};s.jd=function(){this.clearInterval(this.Ge)};s.se=function(){var a=this.d;this.Wb=f;this.b(a,"play",this.od);this.b(a,"pause",this.rb);this.N("timeupdate",function(){this.featuresTimeupdateEvents=f;this.Sc()})};s.Sc=function(){var a=this.d;this.Wb=l;this.rb();this.o(a,"play",this.od);this.o(a,"pause",this.rb)};
s.od=function(){this.Cc&&this.rb();this.Cc=this.setInterval(function(){this.k().l("timeupdate")},250)};s.rb=function(){this.clearInterval(this.Cc);this.k().l("timeupdate")};s.dispose=function(){this.Rc&&this.qe();this.Wb&&this.Sc();t.a.prototype.dispose.call(this)};s.$b=function(){this.Wb&&this.k().l("timeupdate")};
s.he=function(){function a(){var a=c.da("textTrackDisplay");a&&a.C()}var c=this.d,d;if(d=this.textTracks())d.addEventListener("removetrack",a),d.addEventListener("addtrack",a),this.b("dispose",t.bind(this,function(){d.removeEventListener("removetrack",a);d.removeEventListener("addtrack",a)}))};
s.Vd=function(){var a=this.d,c,d,e;window.WebVTT||(e=document.createElement("script"),e.src=a.options()["vtt.js"]||"../node_modules/vtt.js/dist/vtt.js",a.n().appendChild(e),window.WebVTT=f);if(d=this.textTracks())c=function(){var c,d,e;e=a.da("textTrackDisplay");e.C();for(c=0;c<this.length;c++)d=this[c],d.removeEventListener("cuechange",t.bind(e,e.C)),"showing"===d.mode&&d.addEventListener("cuechange",t.bind(e,e.C))},d.addEventListener("change",c),this.b("dispose",t.bind(this,function(){d.removeEventListener("change",
c)}))};s.textTracks=function(){this.d.md=this.d.md||new t.F;return this.d.md};s.Y=function(){this.d.Yc=this.d.Yc||new t.F;return this.d.Yc};O=function(a,c,d,e,g){var h=a.textTracks();g=g||{};g.kind=c;d&&(g.label=d);e&&(g.language=e);g.player=a.d;a=new t.t(g);P(h,a);return a};t.j.prototype.addTextTrack=function(a,c,d){if(!a)throw Error("TextTrack kind is required but was not provided");return O(this,a,c,d)};t.j.prototype.ha=function(a){a=O(this,a.kind,a.label,a.language,a);P(this.Y(),a);return{S:a}};
t.j.prototype.Da=function(a){Q(this.textTracks(),a);Q(this.Y(),a)};t.j.prototype.cd=m();t.j.prototype.featuresVolumeControl=f;t.j.prototype.featuresFullscreenResize=l;t.j.prototype.featuresPlaybackRate=l;t.j.prototype.featuresProgressEvents=l;t.j.prototype.featuresTimeupdateEvents=l;t.j.prototype.featuresNativeTextTracks=l;
t.j.ec=function(a){a.registerSourceHandler=function(c,d){var e=a.dd;e||(e=a.dd=[]);d===b&&(d=e.length);e.splice(d,0,c)};a.pb=function(c){for(var d=a.dd||[],e,g=0;g<d.length;g++)if(e=d[g].canHandleSource(c))return d[g];return j};a.xc=function(c){var d=a.pb(c);return d?d.canHandleSource(c):""};a.prototype.ma=function(c){var d=a.pb(c);d||(a.nativeSourceHandler?d=a.nativeSourceHandler:t.log.error("No source hander found for the current source."));this.ia();this.o("dispose",this.ia);this.gb=c;this.ac=
d.handleSource(c,this);this.b("dispose",this.ia);return this};a.prototype.ia=function(){this.ac&&this.ac.dispose&&this.ac.dispose()}};t.media={};
t.f=t.j.extend({m:function(a,c,d){var e,g,h;if(c.nativeCaptions===l||c.nativeTextTracks===l)this.featuresNativeTextTracks=l;t.j.call(this,a,c,d);for(d=t.f.yb.length-1;0<=d;d--)this.b(t.f.yb[d],this.Wd);(c=c.source)&&(this.c.currentSrc!==c.src||a.L&&3===a.L.ge)&&this.ma(c);if(this.c.hasChildNodes()){d=this.c.childNodes;e=d.length;for(c=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&(this.featuresNativeTextTracks?P(this.Y(),g.track):c.push(g));for(d=0;d<c.length;d++)this.c.removeChild(c[d])}this.featuresNativeTextTracks&&
this.b("loadstart",t.bind(this,this.ee));if(t.Eb&&a.options().nativeControlsForTouch===f){var k,q,r,u;k=this;q=this.k();c=q.controls();k.c.controls=!!c;r=function(){k.c.controls=f};u=function(){k.c.controls=l};q.b("controlsenabled",r);q.b("controlsdisabled",u);c=function(){q.o("controlsenabled",r);q.o("controlsdisabled",u)};k.b("dispose",c);q.b("usingcustomcontrols",c);q.usingNativeControls(f)}a.I(function(){this.src()&&(this.L&&this.q.autoplay&&this.paused())&&(delete this.L.poster,this.play())});
this.Va()}});s=t.f.prototype;s.dispose=function(){t.f.Lb(this.c);t.j.prototype.dispose.call(this)};
s.e=function(){var a=this.d,c,d,e,g=a.L;if(!g||this.movingMediaElementInDOM===l){g?(e=g.cloneNode(l),t.f.Lb(g),g=e,a.L=j):(g=t.e("video"),e=videojs.Z.Aa({},a.Xe),(!t.Eb||a.options().nativeControlsForTouch!==f)&&delete e.controls,t.bd(g,t.i.D(e,{id:a.id()+"_html5_api","class":"vjs-tech"})));g.player=a;if(a.q.pd)for(e=0;e<a.q.pd.length;e++)c=a.q.pd[e],d=document.createElement("track"),d.Ub=c.Ub,d.label=c.label,d.fd=c.fd,d.src=c.src,"default"in c&&d.setAttribute("default","default"),g.appendChild(d);
t.Sb(g,a.n())}c=["autoplay","preload","loop","muted"];for(e=c.length-1;0<=e;e--){d=c[e];var h={};"undefined"!==typeof a.q[d]&&(h[d]=a.q[d]);t.bd(g,h)}return g};s.ee=function(){for(var a=this.c.querySelectorAll("track"),c,d=a.length,e={captions:1,subtitles:1};d--;)if((c=a[d].S)&&c.kind in e&&!a[d]["default"])c.mode="disabled"};s.Wd=function(a){"error"==a.type&&this.error()?this.k().error(this.error().code):(a.bubbles=l,this.k().l(a))};s.play=function(){this.c.play()};s.pause=function(){this.c.pause()};
s.paused=function(){return this.c.paused};s.currentTime=function(){return this.c.currentTime};s.$b=function(a){try{this.c.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};s.duration=function(){return this.c.duration||0};s.buffered=function(){return this.c.buffered};s.volume=function(){return this.c.volume};s.Se=function(a){this.c.volume=a};s.muted=function(){return this.c.muted};s.Oe=function(a){this.c.muted=a};s.width=function(){return this.c.offsetWidth};s.height=function(){return this.c.offsetHeight};
s.Sa=function(){return"function"==typeof this.c.webkitEnterFullScreen&&(/Android/.test(t.P)||!/Chrome|Mac OS X 10.5/.test(t.P))?f:l};s.Fc=function(){var a=this.c;"webkitDisplayingFullscreen"in a&&this.N("webkitbeginfullscreen",function(){this.d.isFullscreen(f);this.N("webkitendfullscreen",function(){this.d.isFullscreen(l);this.d.l("fullscreenchange")});this.d.l("fullscreenchange")});a.paused&&a.networkState<=a.jf?(this.c.play(),this.setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};
s.Xd=function(){this.c.webkitExitFullScreen()};function oa(a,c){var d=/^blob\:/i;return c&&a&&d.test(a)?c:a}s.src=function(a){var c=this.c.src;if(a===b)return oa(c,this.ed);this.na(a)};s.na=function(a){this.c.src=a};s.load=function(){this.c.load()};s.currentSrc=function(){var a=this.c.currentSrc;return!this.gb?a:oa(a,this.gb.src)};s.poster=function(){return this.c.poster};s.cd=function(a){this.c.poster=a};s.Ra=function(){return this.c.Ra};s.Qe=function(a){this.c.Ra=a};s.autoplay=function(){return this.c.autoplay};
s.Le=function(a){this.c.autoplay=a};s.controls=function(){return this.c.controls};s.loop=function(){return this.c.loop};s.Ne=function(a){this.c.loop=a};s.error=function(){return this.c.error};s.seeking=function(){return this.c.seeking};s.seekable=function(){return this.c.seekable};s.ended=function(){return this.c.ended};s.playbackRate=function(){return this.c.playbackRate};s.Pe=function(a){this.c.playbackRate=a};s.networkState=function(){return this.c.networkState};s.readyState=function(){return this.c.readyState};
s.textTracks=function(){return!this.featuresNativeTextTracks?t.j.prototype.textTracks.call(this):this.c.textTracks};s.addTextTrack=function(a,c,d){return!this.featuresNativeTextTracks?t.j.prototype.addTextTrack.call(this,a,c,d):this.c.addTextTrack(a,c,d)};
s.ha=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.ha.call(this,a);var c=document.createElement("track");a=a||{};a.kind&&(c.kind=a.kind);a.label&&(c.label=a.label);if(a.language||a.srclang)c.srclang=a.language||a.srclang;a["default"]&&(c["default"]=a["default"]);a.id&&(c.id=a.id);a.src&&(c.src=a.src);this.n().appendChild(c);c.track.mode="metadata"===c.S.kind?"hidden":"disabled";c.onload=function(){var a=c.track;2<=c.readyState&&("metadata"===a.kind&&"hidden"!==a.mode?a.mode="hidden":
"metadata"!==a.kind&&"disabled"!==a.mode&&(a.mode="disabled"),c.onload=j)};P(this.Y(),c.S);return c};s.Da=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.Da.call(this,a);var c,d;Q(this.Y(),a);c=this.n().querySelectorAll("track");for(d=0;d<c.length;d++)if(c[d]===a||c[d].track===a){c[d].parentNode.removeChild(c[d]);break}};t.f.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.j.ec(t.f);var pa=t.f.prototype.ma,qa=t.f.prototype.ia;
t.f.prototype.ma=function(a){var c=pa.call(this,a);this.ed=a.src;return c};t.f.prototype.ia=function(){this.ed=b;return qa.call(this)};t.f.nativeSourceHandler={};t.f.nativeSourceHandler.canHandleSource=function(a){function c(a){try{return t.A.canPlayType(a)}catch(c){return""}}return a.type?c(a.type):a.src?(a=(a=a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i))&&a[1],c("video/"+a)):""};t.f.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.f.nativeSourceHandler.dispose=m();t.f.registerSourceHandler(t.f.nativeSourceHandler);
t.f.Nd=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};t.f.Md=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};t.f.Ve=function(){var a;(a=!!t.A.textTracks)&&0<t.A.textTracks.length&&(a="number"!==typeof t.A.textTracks[0].mode);a&&t.hc&&(a=l);return a};t.f.prototype.featuresVolumeControl=t.f.Nd();t.f.prototype.featuresPlaybackRate=t.f.Md();t.f.prototype.movingMediaElementInDOM=!t.zd;t.f.prototype.featuresFullscreenResize=f;
t.f.prototype.featuresProgressEvents=f;t.f.prototype.featuresNativeTextTracks=t.f.Ve();var S,ra=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,sa=/^video\/mp4/i;t.f.Uc=function(){4<=t.fc&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ra.test(a)?"maybe":S.call(this,a)});t.Dd&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&sa.test(a)?"maybe":S.call(this,a)})};
t.f.bf=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=S;S=j;return a};t.f.Uc();t.f.yb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
t.f.Lb=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.g=t.j.extend({m:function(a,c,d){t.j.call(this,a,c,d);var e=c.source;d=a.id()+"_flash_api";var g=a.q,g=t.i.D({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:g.autoplay,preload:g.Ra,loop:g.loop,muted:g.muted},c.flashVars),h=t.i.D({wmode:"opaque",bgcolor:"#000000"},c.params);d=t.i.D({id:d,name:d,"class":"vjs-tech"},c.attributes);e&&this.I(function(){this.ma(e)});t.Sb(this.c,c.parentEl);c.startTime&&this.I(function(){this.load();
this.play();this.currentTime(c.startTime)});t.hc&&this.I(function(){this.b("mousemove",function(){this.k().l({type:"mousemove",bubbles:l})})});a.b("stageclick",a.reportUserActivity);this.c=t.g.Ec(c.swf,this.c,g,h,d)}});s=t.g.prototype;s.dispose=function(){t.j.prototype.dispose.call(this)};s.play=function(){this.c.vjs_play()};s.pause=function(){this.c.vjs_pause()};s.src=function(a){return a===b?this.currentSrc():this.na(a)};
s.na=function(a){a=t.$d(a);this.c.vjs_src(a);if(this.d.autoplay()){var c=this;this.setTimeout(function(){c.play()},0)}};t.g.prototype.setCurrentTime=function(a){this.oe=a;this.c.vjs_setProperty("currentTime",a);t.j.prototype.$b.call(this)};t.g.prototype.currentTime=function(){return this.seeking()?this.oe||0:this.c.vjs_getProperty("currentTime")};t.g.prototype.currentSrc=function(){return this.gb?this.gb.src:this.c.vjs_getProperty("currentSrc")};t.g.prototype.load=function(){this.c.vjs_load()};
t.g.prototype.poster=function(){this.c.vjs_getProperty("poster")};t.g.prototype.setPoster=m();s=t.g.prototype;s.seekable=function(){return 0===this.duration()?t.xa():t.xa(0,this.duration())};s.buffered=function(){return!this.c.vjs_getProperty?t.xa():t.xa(0,this.c.vjs_getProperty("buffered"))};s.duration=function(){return!this.c.vjs_getProperty?0:this.c.vjs_getProperty("duration")};s.Sa=p(l);s.Fc=p(l);
function ta(){var a=T[U],c=a.charAt(0).toUpperCase()+a.slice(1);ua["set"+c]=function(c){return this.c.vjs_setProperty(a,c)}}function va(a){ua[a]=function(){return this.c.vjs_getProperty(a)}}
var ua=t.g.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),wa="error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),U;for(U=0;U<T.length;U++)va(T[U]),ta();for(U=0;U<wa.length;U++)va(wa[U]);t.g.isSupported=function(){return 10<=t.g.version()[0]};t.j.ec(t.g);t.g.nativeSourceHandler={};
t.g.nativeSourceHandler.canHandleSource=function(a){return!a.type?"":a.type.replace(/;.*/,"").toLowerCase()in t.g.Zd?"maybe":""};t.g.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.g.nativeSourceHandler.dispose=m();t.g.registerSourceHandler(t.g.nativeSourceHandler);t.g.Zd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.g.onReady=function(a){var c;if(c=(a=t.n(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.g.checkReady(c.h)};
t.g.checkReady=function(a){a.n()&&(a.n().vjs_getProperty?a.Va():this.setTimeout(function(){t.g.checkReady(a)},50))};t.g.onEvent=function(a,c){t.n(a).player.l(c)};t.g.onError=function(a,c){var d=t.n(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
t.g.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.g.Ec=function(a,c,d,e,g){a=t.g.ce(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);a[t.expando]=c[t.expando];var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.g.ce=function(a,c,d,e){var g="",h="",k="";c&&t.i.ca(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.i.D({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.i.ca(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.i.D({data:a,width:"100%",height:"100%"},e);t.i.ca(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash" '+k+">"+h+"</object>"};t.g.Ue={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.g.Hf=function(a,c){return a+"&"+c};
t.g.Te=function(a){var c={zc:"",kd:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.zc=a.substring(0,d);c.kd=a.substring(e,a.length);return c};t.g.me=function(a){return a in t.g.Ue};t.g.Fd=/^rtmp[set]?:\/\//i;t.g.le=function(a){return t.g.Fd.test(a)};t.g.Zb={};t.g.Zb.canHandleSource=function(a){return t.g.me(a.type)||t.g.le(a.src)?"maybe":""};t.g.Zb.handleSource=function(a,c){var d=t.g.Te(a.src);c.setRtmpConnection(d.zc);c.setRtmpStream(d.kd)};
t.g.registerSourceHandler(t.g.Zb);t.Ed=t.a.extend({m:function(a,c,d){t.a.call(this,a,c,d);if(!a.q.sources||0===a.q.sources.length){c=0;for(d=a.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g&&g.isSupported()){ka(a,e);break}}}else a.src(a.q.sources)}});t.pc={disabled:"disabled",hidden:"hidden",showing:"showing"};t.Gd={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
t.t=function(a){var c,d,e,g,h,k,q,r,u,A,R;a=a||{};if(!a.player)throw Error("A player was not provided.");c=this;if(t.pa)for(R in c=document.createElement("custom"),t.t.prototype)c[R]=t.t.prototype[R];c.d=a.player;e=t.pc[a.mode]||"disabled";g=t.Gd[a.kind]||"subtitles";h=a.label||"";k=a.language||a.srclang||"";d=a.id||"vjs_text_track_"+t.s++;if("metadata"===g||"chapters"===g)e="hidden";c.W=[];c.Ia=[];q=new t.V(c.W);r=new t.V(c.Ia);A=l;u=t.bind(c,function(){this.activeCues;A&&(this.trigger("cuechange"),
A=l)});"disabled"!==e&&c.d.b("timeupdate",u);Object.defineProperty(c,"kind",{get:function(){return g},set:Function.prototype});Object.defineProperty(c,"label",{get:function(){return h},set:Function.prototype});Object.defineProperty(c,"language",{get:function(){return k},set:Function.prototype});Object.defineProperty(c,"id",{get:function(){return d},set:Function.prototype});Object.defineProperty(c,"mode",{get:function(){return e},set:function(a){t.pc[a]&&(e=a,"showing"===e&&this.d.b("timeupdate",u),
this.l("modechange"))}});Object.defineProperty(c,"cues",{get:function(){return!this.Vb?j:q},set:Function.prototype});Object.defineProperty(c,"activeCues",{get:function(){var a,c,d,e,g;if(!this.Vb)return j;if(0===this.cues.length)return r;e=this.d.currentTime();a=0;c=this.cues.length;for(d=[];a<c;a++)g=this.cues[a],g.startTime<=e&&g.endTime>=e?d.push(g):g.startTime===g.endTime&&(g.startTime<=e&&g.startTime+0.5>=e)&&d.push(g);A=l;if(d.length!==this.Ia.length)A=f;else for(a=0;a<d.length;a++)-1===xa.call(this.Ia,
d[a])&&(A=f);this.Ia=d;r.qb(this.Ia);return r},set:Function.prototype});a.src?ya(a.src,c):c.Vb=f;if(t.pa)return c};t.t.prototype=t.i.create(t.z.prototype);t.t.prototype.constructor=t.t;t.t.prototype.ab={cuechange:"cuechange"};t.t.prototype.tc=function(a){var c=this.d.textTracks(),d=0;if(c)for(;d<c.length;d++)c[d]!==this&&c[d].Zc(a);this.W.push(a);this.cues.qb(this.W)};t.t.prototype.Zc=function(a){for(var c=0,d=this.W.length,e,g=l;c<d;c++)e=this.W[c],e===a&&(this.W.splice(c,1),g=f);g&&this.Bc.qb(this.W)};
var ya,V,xa;ya=function(a,c){t.ff(a,t.bind(this,function(a,e,g){if(a)return t.log.error(a);c.Vb=f;V(g,c)}))};V=function(a,c){if("function"!==typeof window.WebVTT)window.setTimeout(function(){V(a,c)},25);else{var d=new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());d.oncue=function(a){c.tc(a)};d.onparsingerror=function(a){t.log.error(a)};d.parse(a);d.flush()}};
xa=function(a,c){var d;if(this==j)throw new TypeError('"this" is null or not defined');var e=Object(this),g=e.length>>>0;if(0===g)return-1;d=+c||0;Infinity===Math.abs(d)&&(d=0);if(d>=g)return-1;for(d=Math.max(0<=d?d:g-Math.abs(d),0);d<g;){if(d in e&&e[d]===a)return d;d++}return-1};
t.F=function(a){var c=this,d,e=0;if(t.pa)for(d in c=document.createElement("custom"),t.F.prototype)c[d]=t.F.prototype[d];a=a||[];c.Ua=[];for(Object.defineProperty(c,"length",{get:function(){return this.Ua.length}});e<a.length;e++)P(c,a[e]);if(t.pa)return c};t.F.prototype=t.i.create(t.z.prototype);t.F.prototype.constructor=t.F;t.F.prototype.ab={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var za in t.F.prototype.ab)t.F.prototype["on"+za]=j;
function P(a,c){var d=a.Ua.length;""+d in a||Object.defineProperty(a,d,{get:function(){return this.Ua[d]}});c.addEventListener("modechange",t.bind(a,function(){this.l("change")}));a.Ua.push(c);a.l({type:"addtrack",S:c})}function Q(a,c){for(var d=0,e=a.length,g;d<e;d++)if(g=a[d],g===c){a.Ua.splice(d,1);break}a.l({type:"removetrack",S:c})}t.F.prototype.de=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};
t.V=function(a){var c=this,d;if(t.pa)for(d in c=document.createElement("custom"),t.V.prototype)c[d]=t.V.prototype[d];t.V.prototype.qb.call(c,a);Object.defineProperty(c,"length",{get:n("pe")});if(t.pa)return c};t.V.prototype.qb=function(a){var c=this.length||0,d=0,e=a.length;this.W=a;this.pe=a.length;a=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.W[a]}})};if(c<e)for(d=c;d<e;d++)a.call(this,d)};
t.V.prototype.be=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};t.sa=t.a.extend({m:function(a,c,d){t.a.call(this,a,c,d);a.b("loadstart",t.bind(this,this.Ze));a.I(t.bind(this,function(){if(a.h&&a.h.featuresNativeTextTracks)this.X();else{var c,d,h;a.b("fullscreenchange",t.bind(this,this.C));d=a.q.tracks||[];for(c=0;c<d.length;c++)h=d[c],this.d.ha(h)}}))}});t.sa.prototype.Ze=function(){this.d.h&&this.d.h.featuresNativeTextTracks?this.X():this.show()};
t.sa.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.sa.prototype.Od=function(){"function"===typeof window.WebVTT&&window.WebVTT.processCues(window,[],this.c)};function W(a,c){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+c+")"}
var Aa={xf:"monospace",Df:"sans-serif",Ff:"serif",yf:'"Andale Mono", "Lucida Console", monospace',zf:'"Courier New", monospace',Bf:"sans-serif",Cf:"serif",of:'"Comic Sans MS", Impact, fantasy',Ef:'"Monotype Corsiva", cursive',Gf:'"Andale Mono", "Lucida Console", monospace, sans-serif'};t.sa.prototype.C=function(){var a=this.d.textTracks(),c=0,d;this.Od();if(a)for(;c<a.length;c++)d=a[c],"showing"===d.mode&&this.cf(d)};
t.sa.prototype.cf=function(a){if("function"===typeof window.WebVTT&&a.activeCues){for(var c=0,d=this.d.textTrackSettings.Ic(),e,g=[];c<a.activeCues.length;c++)g.push(a.activeCues[c]);window.WebVTT.processCues(window,a.activeCues,this.c);for(c=g.length;c--;){a=g[c].pf;d.color&&(a.firstChild.style.color=d.color);if(d.ld)try{a.firstChild.style.color=W(d.color||"#fff",d.ld)}catch(h){}d.backgroundColor&&(a.firstChild.style.backgroundColor=d.backgroundColor);if(d.wc)try{a.firstChild.style.backgroundColor=
W(d.backgroundColor||"#000",d.wc)}catch(k){}if(d.dc)if(d.td)try{a.style.backgroundColor=W(d.dc,d.td)}catch(q){}else a.style.backgroundColor=d.dc;d.Ma&&("dropshadow"===d.Ma?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===d.Ma?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===d.Ma?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===d.Ma&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
d.Pb&&1!==d.Pb&&(e=window.Af(a.style.fontSize),a.style.fontSize=e*d.Pb+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px");d.fontFamily&&"default"!==d.fontFamily&&("small-caps"===d.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Aa[d.fontFamily])}}};
t.$=t.M.extend({m:function(a,c){var d=this.S=c.track,e=a.textTracks(),g,h;e&&(g=t.bind(this,function(){var a="showing"===this.S.mode,c,d,g;if(this instanceof t.Ab){a=f;d=0;for(g=e.length;d<g;d++)if(c=e[d],c.kind===this.S.kind&&"showing"===c.mode){a=l;break}}this.selected(a)}),e.addEventListener("change",g),a.b("dispose",function(){e.removeEventListener("change",g)}));c.label=d.label||d.language||"Unknown";c.selected=d["default"]||"showing"===d.mode;t.M.call(this,a,c);e&&e.onchange===b&&this.b(["tap",
"click"],function(){if("object"!==typeof window.xd)try{h=new window.xd("change")}catch(a){}h||(h=document.createEvent("Event"),h.initEvent("change",f,f));e.dispatchEvent(h)})}});t.$.prototype.u=function(){var a=this.S.kind,c=this.d.textTracks(),d,e=0;t.M.prototype.u.call(this);if(c)for(;e<c.length;e++)d=c[e],d.kind===a&&(d.mode=d===this.S?"showing":"disabled")};t.Ab=t.$.extend({m:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" off","default":l,mode:"disabled"};t.$.call(this,a,c);this.selected(f)}});
t.tb=t.$.extend({m:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" settings","default":l,mode:"disabled"};t.$.call(this,a,c);this.p("vjs-texttrack-settings")}});t.tb.prototype.u=function(){this.k().da("textTrackSettings").show()};
t.Q=t.O.extend({m:function(a,c){var d,e;t.O.call(this,a,c);d=this.d.textTracks();1>=this.H.length&&this.X();d&&(e=t.bind(this,this.update),d.addEventListener("removetrack",e),d.addEventListener("addtrack",e),this.d.b("dispose",function(){d.removeEventListener("removetrack",e);d.removeEventListener("addtrack",e)}))}});
t.Q.prototype.Ka=function(){var a=[],c,d;this instanceof t.oa&&(!this.k().h||!this.k().h.featuresNativeTextTracks)&&a.push(new t.tb(this.d,{kind:this.ea}));a.push(new t.Ab(this.d,{kind:this.ea}));d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};t.oa=t.Q.extend({m:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Captions Menu")}});t.oa.prototype.ea="captions";t.oa.prototype.ta="Captions";
t.oa.prototype.className="vjs-captions-button";t.oa.prototype.update=function(){var a=2;t.Q.prototype.update.call(this);this.k().h&&this.k().h.featuresNativeTextTracks&&(a=1);this.H&&this.H.length>a?this.show():this.X()};t.$a=t.Q.extend({m:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Subtitles Menu")}});t.$a.prototype.ea="subtitles";t.$a.prototype.ta="Subtitles";t.$a.prototype.className="vjs-subtitles-button";
t.Wa=t.Q.extend({m:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Chapters Menu")}});s=t.Wa.prototype;s.ea="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.Ka=function(){var a=[],c,d;d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};
s.La=function(){for(var a=this.d.textTracks()||[],c=0,d=a.length,e,g,h=this.H=[];c<d;c++)if(e=a[c],e.kind==this.ea)if(e.Bc){g=e;break}else e.mode="hidden",window.setTimeout(t.bind(this,function(){this.La()}),100);a=this.za;a===b&&(a=new t.qa(this.d),a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.ea),We:-1})));if(g){e=g.cues;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new t.Xa(this.d,{track:g,cue:k}),h.push(k),a.aa(k);this.aa(a)}0<this.H.length&&this.show();return a};
t.Xa=t.M.extend({m:function(a,c){var d=this.S=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.endTime;t.M.call(this,a,c);d.addEventListener("cuechange",t.bind(this,this.update))}});t.Xa.prototype.u=function(){t.M.prototype.u.call(this);this.d.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.Xa.prototype.update=function(){var a=this.cue,c=this.d.currentTime();this.selected(a.startTime<=c&&c<a.endTime)};
function X(a){var c;a.Ke?c=a.Ke[0]:a.options&&(c=a.options[a.options.selectedIndex]);return c.value}function Y(a,c){var d,e;if(c){for(d=0;d<a.options.length&&!(e=a.options[d],e.value===c);d++);a.selectedIndex=d}}
t.qc=t.a.extend({m:function(a,c){t.a.call(this,a,c);this.X();t.b(this.n().querySelector(".vjs-done-button"),"click",t.bind(this,function(){this.Je();this.X()}));t.b(this.n().querySelector(".vjs-default-button"),"click",t.bind(this,function(){this.n().querySelector(".vjs-fg-color > select").selectedIndex=0;this.n().querySelector(".vjs-bg-color > select").selectedIndex=0;this.n().querySelector(".window-color > select").selectedIndex=0;this.n().querySelector(".vjs-text-opacity > select").selectedIndex=
0;this.n().querySelector(".vjs-bg-opacity > select").selectedIndex=0;this.n().querySelector(".vjs-window-opacity > select").selectedIndex=0;this.n().querySelector(".vjs-edge-style select").selectedIndex=0;this.n().querySelector(".vjs-font-family select").selectedIndex=0;this.n().querySelector(".vjs-font-percent select").selectedIndex=2;this.C()}));t.b(this.n().querySelector(".vjs-fg-color > select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-bg-color > select"),"change",t.bind(this,
this.C));t.b(this.n().querySelector(".window-color > select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-text-opacity > select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-bg-opacity > select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-window-opacity > select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-font-percent select"),"change",t.bind(this,this.C));t.b(this.n().querySelector(".vjs-edge-style select"),"change",t.bind(this,
this.C));t.b(this.n().querySelector(".vjs-font-family select"),"change",t.bind(this,this.C));a.options().persistTextTrackSettings&&this.Ie()}});s=t.qc.prototype;s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:'<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'})};
s.Ic=function(){var a,c,d,e,g,h,k,q,r,u;a=this.n();g=X(a.querySelector(".vjs-edge-style select"));h=X(a.querySelector(".vjs-font-family select"));k=X(a.querySelector(".vjs-fg-color > select"));d=X(a.querySelector(".vjs-text-opacity > select"));q=X(a.querySelector(".vjs-bg-color > select"));c=X(a.querySelector(".vjs-bg-opacity > select"));r=X(a.querySelector(".window-color > select"));e=X(a.querySelector(".vjs-window-opacity > select"));a=window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
c={backgroundOpacity:c,textOpacity:d,windowOpacity:e,edgeStyle:g,fontFamily:h,color:k,backgroundColor:q,windowColor:r,fontPercent:a};for(u in c)(""===c[u]||"none"===c[u]||"fontPercent"===u&&1===c[u])&&delete c[u];return c};
s.Re=function(a){var c=this.n();Y(c.querySelector(".vjs-edge-style select"),a.Ma);Y(c.querySelector(".vjs-font-family select"),a.fontFamily);Y(c.querySelector(".vjs-fg-color > select"),a.color);Y(c.querySelector(".vjs-text-opacity > select"),a.ld);Y(c.querySelector(".vjs-bg-color > select"),a.backgroundColor);Y(c.querySelector(".vjs-bg-opacity > select"),a.wc);Y(c.querySelector(".window-color > select"),a.dc);Y(c.querySelector(".vjs-window-opacity > select"),a.td);(a=a.Pb)&&(a=a.toFixed(2));Y(c.querySelector(".vjs-font-percent > select"),
a)};s.Ie=function(){var a;try{a=JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))}catch(c){}a&&this.Re(a)};s.Je=function(){var a;if(this.d.options().persistTextTrackSettings){a=this.Ic();try{t.ib(a)?window.localStorage.removeItem("vjs-text-track-settings"):window.localStorage.setItem("vjs-text-track-settings",JSON.stringify(a))}catch(c){}}};s.C=function(){var a=this.d.da("textTrackDisplay");a&&a.C()};
if("undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var k,q,r=a[e];if(r&&"object"===typeof r)for(k in r)Object.prototype.hasOwnProperty.call(r,k)&&(q=d(r,k),q!==b?r[k]=q:delete r[k]);return c.call(a,e,r)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+
a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.vc=function(){var a,c,d,e;a=document.getElementsByTagName("video");c=document.getElementsByTagName("audio");var g=[];if(a&&0<a.length){d=0;for(e=a.length;d<e;d++)g.push(a[d])}if(c&&0<c.length){d=0;for(e=c.length;d<e;d++)g.push(c[d])}if(g&&0<g.length){d=0;for(e=g.length;d<e;d++)if((c=g[d])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&videojs(c));else{t.Ib();break}}else t.sd||t.Ib()};t.Ib=function(){setTimeout(t.vc,1)};
"complete"===document.readyState?t.sd=f:t.N(window,"load",function(){t.sd=f});t.Ib();t.Fe=function(a,c){t.Player.prototype[a]=c};var Ba=this;function $(a,c){var d=a.split("."),e=Ba;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ca);$("videojs.TOUCH_ENABLED",t.Eb);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.k;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.m;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.wa;t.a.prototype.el=t.a.prototype.n;t.a.prototype.addChild=t.a.prototype.aa;
t.a.prototype.getChild=t.a.prototype.da;t.a.prototype.getChildById=t.a.prototype.ae;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.Lc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.b;t.a.prototype.off=t.a.prototype.o;t.a.prototype.one=t.a.prototype.N;t.a.prototype.trigger=t.a.prototype.l;t.a.prototype.triggerReady=t.a.prototype.Va;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.X;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.Td;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.p;t.a.prototype.removeClass=t.a.prototype.r;t.a.prototype.hasClass=t.a.prototype.Pa;t.a.prototype.buildCSSClass=t.a.prototype.U;t.a.prototype.localize=t.a.prototype.v;t.a.prototype.setInterval=t.a.prototype.setInterval;t.a.prototype.setTimeout=t.a.prototype.setTimeout;$("videojs.EventEmitter",t.z);
t.z.prototype.on=t.z.prototype.b;t.z.prototype.addEventListener=t.z.prototype.addEventListener;t.z.prototype.off=t.z.prototype.o;t.z.prototype.removeEventListener=t.z.prototype.removeEventListener;t.z.prototype.one=t.z.prototype.N;t.z.prototype.trigger=t.z.prototype.l;t.z.prototype.dispatchEvent=t.z.prototype.dispatchEvent;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.Gc;t.Player.prototype.exitFullWindow=t.Player.prototype.Mb;
t.Player.prototype.preload=t.Player.prototype.Ra;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Sa;t.Player.prototype.currentType=t.Player.prototype.Pd;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;t.Player.prototype.textTracks=t.Player.prototype.textTracks;t.Player.prototype.remoteTextTracks=t.Player.prototype.Y;t.Player.prototype.addTextTrack=t.Player.prototype.addTextTrack;t.Player.prototype.addRemoteTextTrack=t.Player.prototype.ha;t.Player.prototype.removeRemoteTextTrack=t.Player.prototype.Da;t.Player.prototype.seekable=t.Player.prototype.seekable;
$("videojs.MediaLoader",t.Ed);$("videojs.TextTrackDisplay",t.sa);$("videojs.ControlBar",t.ub);$("videojs.Button",t.w);$("videojs.PlayToggle",t.lc);$("videojs.FullscreenToggle",t.Ya);$("videojs.BigPlayButton",t.sb);$("videojs.LoadingSpinner",t.jc);$("videojs.CurrentTimeDisplay",t.vb);$("videojs.DurationDisplay",t.wb);$("videojs.TimeDivider",t.rc);$("videojs.RemainingTimeDisplay",t.Db);$("videojs.LiveDisplay",t.ic);$("videojs.ErrorDisplay",t.xb);$("videojs.Slider",t.T);$("videojs.ProgressControl",t.Cb);
$("videojs.SeekBar",t.oc);$("videojs.LoadProgressBar",t.zb);$("videojs.PlayProgressBar",t.kc);$("videojs.SeekHandle",t.Za);$("videojs.VolumeControl",t.Gb);$("videojs.VolumeBar",t.Fb);$("videojs.VolumeLevel",t.sc);$("videojs.VolumeMenuButton",t.Ha);$("videojs.VolumeHandle",t.Hb);$("videojs.MuteToggle",t.ra);$("videojs.PosterImage",t.nc);$("videojs.Menu",t.qa);$("videojs.MenuItem",t.M);$("videojs.MenuButton",t.O);$("videojs.PlaybackRateMenuButton",t.mc);$("videojs.ChaptersTrackMenuItem",t.Xa);
$("videojs.TextTrackButton",t.Q);$("videojs.TextTrackMenuItem",t.$);$("videojs.OffTextTrackMenuItem",t.Ab);$("videojs.CaptionSettingsMenuItem",t.tb);t.O.prototype.createItems=t.O.prototype.Ka;t.Q.prototype.createItems=t.Q.prototype.Ka;t.Wa.prototype.createItems=t.Wa.prototype.Ka;$("videojs.SubtitlesButton",t.$a);$("videojs.CaptionsButton",t.oa);$("videojs.ChaptersButton",t.Wa);$("videojs.MediaTechController",t.j);t.j.withSourceHandlers=t.j.ec;t.j.prototype.featuresVolumeControl=t.j.prototype.uf;
t.j.prototype.featuresFullscreenResize=t.j.prototype.qf;t.j.prototype.featuresPlaybackRate=t.j.prototype.rf;t.j.prototype.featuresProgressEvents=t.j.prototype.sf;t.j.prototype.featuresTimeupdateEvents=t.j.prototype.tf;t.j.prototype.setPoster=t.j.prototype.cd;t.j.prototype.textTracks=t.j.prototype.textTracks;t.j.prototype.remoteTextTracks=t.j.prototype.Y;t.j.prototype.addTextTrack=t.j.prototype.addTextTrack;t.j.prototype.addRemoteTextTrack=t.j.prototype.ha;t.j.prototype.removeRemoteTextTrack=t.j.prototype.Da;
$("videojs.Html5",t.f);t.f.Events=t.f.yb;t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.xc;t.f.patchCanPlayType=t.f.Uc;t.f.unpatchCanPlayType=t.f.bf;t.f.prototype.setCurrentTime=t.f.prototype.$b;t.f.prototype.setVolume=t.f.prototype.Se;t.f.prototype.setMuted=t.f.prototype.Oe;t.f.prototype.setPreload=t.f.prototype.Qe;t.f.prototype.setAutoplay=t.f.prototype.Le;t.f.prototype.setLoop=t.f.prototype.Ne;t.f.prototype.enterFullScreen=t.f.prototype.Fc;t.f.prototype.exitFullScreen=t.f.prototype.Xd;
t.f.prototype.playbackRate=t.f.prototype.playbackRate;t.f.prototype.setPlaybackRate=t.f.prototype.Pe;t.f.selectSourceHandler=t.f.pb;t.f.prototype.setSource=t.f.prototype.ma;t.f.prototype.disposeSourceHandler=t.f.prototype.ia;t.f.prototype.textTracks=t.f.prototype.textTracks;t.f.prototype.remoteTextTracks=t.f.prototype.Y;t.f.prototype.addTextTrack=t.f.prototype.addTextTrack;t.f.prototype.addRemoteTextTrack=t.f.prototype.ha;t.f.prototype.removeRemoteTextTrack=t.f.prototype.Da;$("videojs.Flash",t.g);
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.xc;t.g.onReady=t.g.onReady;t.g.embed=t.g.Ec;t.g.version=t.g.version;t.g.prototype.setSource=t.g.prototype.ma;t.g.selectSourceHandler=t.g.pb;t.g.prototype.setSource=t.g.prototype.ma;t.g.prototype.disposeSourceHandler=t.g.prototype.ia;$("videojs.TextTrack",t.t);$("videojs.TextTrackList",t.F);$("videojs.TextTrackCueList",t.V);$("videojs.TextTrackSettings",t.qc);t.t.prototype.id=t.t.prototype.id;t.t.prototype.label=t.t.prototype.label;
t.t.prototype.kind=t.t.prototype.Ub;t.t.prototype.mode=t.t.prototype.mode;t.t.prototype.cues=t.t.prototype.Bc;t.t.prototype.activeCues=t.t.prototype.nf;t.t.prototype.addCue=t.t.prototype.tc;t.t.prototype.removeCue=t.t.prototype.Zc;t.F.prototype.getTrackById=t.F.prototype.de;t.V.prototype.getCueById=t.F.prototype.be;$("videojs.CaptionsTrack",t.gf);$("videojs.SubtitlesTrack",t.mf);$("videojs.ChaptersTrack",t.hf);$("videojs.autoSetup",t.vc);$("videojs.plugin",t.Fe);$("videojs.createTimeRange",t.xa);
$("videojs.util",t.Z);t.Z.mergeOptions=t.Z.Aa;t.addLanguage=t.Id;})();

/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */
!function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return b?a.toLowerCase():!1}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}this.applyStyles(""===b.vertical?{left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}:{top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return(c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b)?(this.set(a,b),!0):!1}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});
!function(window, document, vjs, undefined) {
	'use strict';

	function playerState() {
		var player = this, plugin = {};

		plugin.state = {
			firstQuartile: true,
			midpoint: true,
			thirdQuartile: true
		};

		player.on('loadedmetadata', function() {
			if(!/^ad\-/.test(player.ads.state)) {
				stat({e: 'loadedmetadata', contentType: player.pl.currentVideo.type});
			}
		});

		player.on('readyStat', function() {
			stat({e: 'load'});

			if(isMobile()) {
				stat({e: 'mobile'});
			}

			setTimeout(function() {
				
				if(isFlashTech()) {
					stat({e: 'flash'});
				} else {
					console.log('Not flash');
				}

			}, 0);
		});

		player.on('error', function() {
			var err;

			if(!/^ad\-/.test(player.ads.state)) {
				err = player.error();
				if(err && err.code)	stat({e: 'error', errorCode: err.code});
			}
		});

		player.on('close', function() {
			if(!/^ad\-/.test(player.ads.state)) {
				stat({e: 'close'});
			}
		});

		player.on('ended', function() {
			if(!/^ad\-/.test(player.ads.state)) {
				stat({e: 'complite'});
			}
		});

		player.on('timeupdate', function() {
			if(!/^ad\-/.test(player.ads.state)) {
				var percent = player.currentTime()/player.duration()*100;

				if((percent >= 25) && plugin.state.firstQuartile) {
					plugin.state.firstQuartile = false;
					stat({e: 'firstQuartile'});
				} else if((percent >= 50) && plugin.state.midpoint) {
					plugin.state.midpoint = false;
					stat({e: 'midpoint'});
				} else if((percent >= 75) && plugin.state.thirdQuartile) {
					plugin.state.thirdQuartile = false;
					stat({e: 'thirdQuartile'});
				}
			}
		});

		player.on('durationchange', function() {
			if(!/^ad\-/.test(player.ads.state)) {
				console.log('<<<<<<<< durationchange >>>>>>>>');

				plugin.state.firstQuartile = plugin.state.midpoint = plugin.state.thirdQuartile = true;
			}
		});


		function stat(params) {
			$.ajax({
				url: 'http://213.133.191.35:8007/stat2',
				type: 'POST',
				dataType: 'text',
				data: params,
				success: function(res) {
					console.log('%cplayer stat'+(JSON.stringify(params)),'color: blue;');
				}
			});
		}

		// detect flash follback
    	function isFlashTech() {
    	    return $('#' + player.id() + '_flash_api').length ? 1 : 0;
    	}

	}


	vjs.plugin('playerState', playerState);

}(window, document, videojs);
/*
* videojs-ga - v0.4.2 - 2015-02-06
* Copyright (c) 2015 Michael Bensoussan
* Licensed MIT
*/
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  videojs.plugin('ga', function(options) {
    var dataSetupOptions, defaultsEventsToTrack, end, error, eventCategory, eventLabel, eventsToTrack, fullscreen, loaded, parsedOptions, pause, percentsAlreadyTracked, percentsPlayedInterval, play, resize, seekEnd, seekStart, seeking, sendbeacon, timeupdate, volumeChange;
    if (options == null) {
      options = {};
    }
    dataSetupOptions = {};
    if (this.options()["data-setup"]) {
      parsedOptions = JSON.parse(this.options()["data-setup"]);
      if (parsedOptions.ga) {
        dataSetupOptions = parsedOptions.ga;
      }
    }
    defaultsEventsToTrack = ['loaded', 'percentsPlayed', 'start', 'end', 'seek', 'play', 'pause', 'resize', 'volumeChange', 'error', 'fullscreen'];
    eventsToTrack = options.eventsToTrack || dataSetupOptions.eventsToTrack || defaultsEventsToTrack;
    percentsPlayedInterval = options.percentsPlayedInterval || dataSetupOptions.percentsPlayedInterval || 10;
    eventCategory = options.eventCategory || dataSetupOptions.eventCategory || 'Video';
    eventLabel = options.eventLabel || dataSetupOptions.eventLabel;
    options.debug = options.debug || false;
    percentsAlreadyTracked = [];
    seekStart = seekEnd = 0;
    seeking = false;
    loaded = function() {
      if (!eventLabel) {
        eventLabel = this.currentSrc().split("/").slice(-1)[0].replace(/\.(\w{3,4})(\?.*)?$/i, '');
      }
      if (__indexOf.call(eventsToTrack, "loadedmetadata") >= 0) {
        sendbeacon('loadedmetadata', true);
      }
    };
    timeupdate = function() {
      var currentTime, duration, percent, percentPlayed, _i;
      currentTime = Math.round(this.currentTime());
      duration = Math.round(this.duration());
      percentPlayed = Math.round(currentTime / duration * 100);
      for (percent = _i = 0; _i <= 99; percent = _i += percentsPlayedInterval) {
        if (percentPlayed >= percent && __indexOf.call(percentsAlreadyTracked, percent) < 0) {
          if (__indexOf.call(eventsToTrack, "start") >= 0 && percent === 0 && percentPlayed > 0) {
            sendbeacon('start', true);
          } else if (__indexOf.call(eventsToTrack, "percentsPlayed") >= 0 && percentPlayed !== 0) {
            sendbeacon('percent played', true, percent);
          }
          if (percentPlayed > 0) {
            percentsAlreadyTracked.push(percent);
          }
        }
      }
      if (__indexOf.call(eventsToTrack, "seek") >= 0) {
        seekStart = seekEnd;
        seekEnd = currentTime;
        if (Math.abs(seekStart - seekEnd) > 1) {
          seeking = true;
          sendbeacon('seek start', false, seekStart);
          sendbeacon('seek end', false, seekEnd);
        }
      }
    };
    end = function() {
      sendbeacon('end', true);
    };
    play = function() {
      var currentTime;
      currentTime = Math.round(this.currentTime());
      sendbeacon('play', true, currentTime);
      seeking = false;
    };
    pause = function() {
      var currentTime, duration;
      currentTime = Math.round(this.currentTime());
      duration = Math.round(this.duration());
      if (currentTime !== duration && !seeking) {
        sendbeacon('pause', false, currentTime);
      }
    };
    volumeChange = function() {
      var volume;
      volume = this.muted() === true ? 0 : this.volume();
      sendbeacon('volume change', false, volume);
    };
    resize = function() {
      sendbeacon('resize - ' + this.width() + "*" + this.height(), true);
    };
    error = function() {
      var currentTime;
      currentTime = Math.round(this.currentTime());
      sendbeacon('error', true, currentTime);
    };
    fullscreen = function() {
      var currentTime;
      currentTime = Math.round(this.currentTime());
      if ((typeof this.isFullscreen === "function" ? this.isFullscreen() : void 0) || (typeof this.isFullScreen === "function" ? this.isFullScreen() : void 0)) {
        sendbeacon('enter fullscreen', false, currentTime);
      } else {
        sendbeacon('exit fullscreen', false, currentTime);
      }
    };
    sendbeacon = function(action, nonInteraction, value) {
      if (window.ga) {
        ga('send', 'event', {
          'eventCategory': eventCategory,
          'eventAction': action,
          'eventLabel': eventLabel,
          'eventValue': value,
          'nonInteraction': nonInteraction
        });
      } else if (window._gaq) {
        _gaq.push(['_trackEvent', eventCategory, action, eventLabel, value, nonInteraction]);
      } else if (options.debug) {
        console.log("Google Analytics not detected");
      }
    };
    this.ready(function() {
      this.on("loadedmetadata", loaded);
      this.on("timeupdate", timeupdate);
      if (__indexOf.call(eventsToTrack, "end") >= 0) {
        this.on("ended", end);
      }
      if (__indexOf.call(eventsToTrack, "play") >= 0) {
        this.on("play", play);
      }
      if (__indexOf.call(eventsToTrack, "pause") >= 0) {
        this.on("pause", pause);
      }
      if (__indexOf.call(eventsToTrack, "volumeChange") >= 0) {
        this.on("volumechange", volumeChange);
      }
      if (__indexOf.call(eventsToTrack, "resize") >= 0) {
        this.on("resize", resize);
      }
      if (__indexOf.call(eventsToTrack, "error") >= 0) {
        this.on("error", error);
      }
      if (__indexOf.call(eventsToTrack, "fullscreen") >= 0) {
        return this.on("fullscreenchange", fullscreen);
      }
    });
    return {
      'sendbeacon': sendbeacon
    };
  });

}).call(this);

/**
  Playlist plugin for videojs 
  Author: oz@ex.ua
*/

(function(vjs) {
  'use strict';

  function pls(options, startIndex) {
    var player = this;
      player.pl = player.pl || {};

    player.tmpcounter = 1;

      if(startIndex !== undefined) player.pl.current = parseInt(startIndex);

    player.pl.items = options.playlist;
    player.pl.itemsCount = player.pl.items.length; 
    player.pl.currentVideo = player.pl.items[player.pl.current];
    player.$title = $(player.el()).find('.vjs-top-bar span');


      player.pl._updatePoster = function(posterURL) {
        if(posterURL == undefined) posterURL == player.poster();
        player.poster(posterURL);
      };

      player.pl._setVideoSource = function(src/*, poster*/) {
        player.src(src);
        
        player.pl._updatePoster(options.cover.url);
        
      };

      // ------

      player.pl._resumeVideo = function() {
        player.one('loadstart',function() {
          // setTimeout(player.play.bind(player), 1000);
          player.play();
          // player.posterImage.hide();
        });
      };

    player.pl._nextPrev = function(func){
        var comparison, addendum;

        if (func === 'next'){
          comparison = player.pl.itemsCount -1;
          addendum = 1;
        } else {
          comparison = 0;
          addendum = -1;
        }

        if (player.pl.current !== comparison){
          var newIndex = player.pl.current + addendum;
          player.pl._setVideo(newIndex);
        }
    };

    // -----------

    player.pl._setVideo = function(index){
      if (index <= player.pl.itemsCount){
        player.pl.current = index;
        player.pl.currentVideo = player.pl.items[index];
    
        // if (!player.paused()){
          // player.pl._resumeVideo();
        // }

        // proc.startProccess(player.pl.currentVideo);
        player.$title.html(player.pl.currentVideo.title);
        
        if(player.pl.currentVideo.type == "audio") {
        	setTimeout(player.pl.showPoster.bind(this), 400);
        } else {
        	player.pl.hidePoster();
        }

        if(player.pl.currentVideo.type == "audio") {
          options.adsOptions.timeout = 0;
          player.pl._setVideoSource({src: player.pl.currentVideo.src, type: 'audio/mpeg'}/*, player.pl.currentVideo.attr('poster')*/);
        } else {
          options.adsOptions.timeout = 2000;
          player.pl._setVideoSource({src: player.pl.currentVideo.src, type: 'video/mp4'}/*, player.pl.currentVideo.attr('poster')*/);
        }

        // --

        if(index == (player.pl.itemsCount-1)) {
          player.addClass('vjs-last-playing');
        } else {
          player.removeClass('vjs-last-playing');
        }

        console.info('%c'+(player.pl.current) + ' [' +  player.pl.currentVideo.title+']', 'color: #fff; background-color: green; font-size: 23px');

        player.pl._resumeVideo();

        
        // setTimeout(player.play.bind(player), 3000);
        
      }
    };

    player.pl.showPoster = function() {
      // alert('poster show');
    	// player.posterImage.show();
      player.pl._updatePoster(options.cover.url);
    	$(player.posterImage.el()).show();
    	$(player.el()).find('.vjs-proxy-layer').show();
    };


    player.pl.hidePoster = function() {
      // alert('poster hide');
    	// player.posterImage.hide();
    	$(player.posterImage.el()).attr('style', '');
    	$(player.el()).find('.vjs-proxy-layer').hide();
    };

    // --------------

    player.pl._setVideo(player.pl.current);
  };


  // -------------------
  // -- public methods;

  vjs.Player.prototype.next = function(){
    // alert('next');
    this.pl._nextPrev('next');
    return this;
  };
  
  vjs.Player.prototype.prev = function(){
    this.pl._nextPrev('prev');
    return this;
  };
  
  vjs.Player.prototype.byIndex = function(index){
    if(/^ad\-/.test(this.ads.state)) return;

    if(this.currentSrc()) {
      this.trigger('adstop');
    };

    this.pl._setVideo(index);
    return this;
  };


  vjs.plugin('playlist', pls);

})(videojs);

// --

/*
 * Video.js Hotkeys
 * https://github.com/ctd1500/videojs-hotkeys
 *
 * Copyright (c) 2015 Chris Dougherty
 * Licensed under the Apache-2.0 license.
 */

(function(window, videojs) {
  'use strict';

  window['videojs_hotkeys'] = { version: "0.2.5" };
  var hotkeys = function(options) {
    var player = this;
    var def_options = {
      volumeStep: 0.1,
      seekStep: 5,
      enableMute: true,
      enableFullscreen: true,
      enableNumbers: true,
      enableJogStyle: false
    };
    options = options || {};
    var volumeStep = options.volumeStep || def_options.volumeStep;
    var seekStep = options.seekStep || def_options.seekStep;
    var enableMute = options.enableMute || def_options.enableMute;
    var enableFull = options.enableFullscreen || def_options.enableFullscreen;
    var enableNumbers = options.enableNumbers || def_options.enableNumbers;
    var enableJogStyle = options.enableJogStyle || def_options.enableJogStyle;

    // Set default player tabindex to handle keydown and doubleclick events
    if (!player.el().hasAttribute('tabIndex')) {
      player.el().setAttribute('tabIndex', '-1');
    }

    player.on('play', function() {
      // Fix allowing the YouTube plugin to have hotkey support.

      var ifblocker = player.el().querySelector('.iframeblocker');
      if (ifblocker &&
          ifblocker.style.display == "") {
        ifblocker.style.display = "block";
        ifblocker.style.bottom = "39px";
      }
    });

    var keyDown = function keyDown(event) {

      var ewhich = event.which, curTime;
      // When controls are disabled, hotkeys will be disabled as well
      if (player.controls()) {

        // Don't catch keys if any control buttons are focused, unless in jogStyle mode
        var activeEl = document.activeElement;
        if (activeEl == player.el() ||
            activeEl == player.el().querySelector('.vjs-tech') ||
            activeEl == player.el().querySelector('.vjs-control-bar') ||
            activeEl == player.el().querySelector('.iframeblocker')) {

          switch (ewhich) {

            // Spacebar toggles play/pause
            case 32:
              event.preventDefault();
              player.trigger( player.paused() ? 'AdResume' : 'AdPause' );
              if (player.paused()) {    
                try {
                  if(!/^ad\-/.test(player.ads.state)) player.trigger('livePause');
                } catch(e) { console.log(e.message); }

                player.play();
              } else {
                player.pause();
              }
              break;

            // Seeking with the left/right arrow keys
            case 37: // Left Arrow
              event.preventDefault();
              curTime = player.currentTime() - seekStep;
              // The flash player tech will allow you to seek into negative
              // numbers and break the seekbar, so try to prevent that.

              if(player.ads.state == 'ad-playback') return;

              if (player.currentTime() <= seekStep) {
                curTime = 0;
              }
              player.currentTime(curTime);
              break;
            case 39: // Right Arrow
              event.preventDefault();
              if(player.ads.state == 'ad-playback') return;
              player.currentTime(player.currentTime() + seekStep);
              break;

            // Volume control with the up/down arrow keys
            case 40: // Down Arrow
              event.preventDefault();
              if (!enableJogStyle) {
                player.volume(player.volume() - volumeStep);
              } else {
                curTime = player.currentTime() - 1;
                if (player.currentTime() <= 1) {
                  curTime = 0;
                }
                player.currentTime(curTime);
              }
              break;
            case 38: // Up Arrow
              event.preventDefault();
              if (!enableJogStyle) {
                player.volume(player.volume() + volumeStep);
              } else {
                player.currentTime(player.currentTime() + 1);
              }
              break;

            // Toggle Mute with the M key
            case 77:
              if (enableMute) {
                if (player.muted()) {
                  player.muted(false);
                } else {
                  player.muted(true);
                }
              }
              break;

            // Toggle Fullscreen with the F key
            case  70:
              event.preventDefault();
              if (enableFull) {
                if (player.isFullscreen()) {
                  player.exitFullscreen();
                } else {
                  player.requestFullscreen();
                }
              }
              break;

            default:
              // Number keys from 0-9 skip to a percentage of the video. 0 is 0% and 9 is 90%
              if ((ewhich > 47 && ewhich < 59) || (ewhich > 95 && ewhich < 106)) {
                if (enableNumbers) {
                  var sub = 48;
                  if (ewhich > 95) {
                    sub = 96;
                  }
                  var number = ewhich - sub;
                  event.preventDefault();
                  player.currentTime(player.duration() * number * 0.1);
                }
              }
          }
        }
      }
    };

    var doubleClick = function doubleClick(event) {

      // When controls are disabled, hotkeys will be disabled as well
      if (player.controls()) {

        // Don't catch clicks if any control buttons are focused
        var activeEl = event.relatedTarget || event.toElement || document.activeElement;
        if (activeEl == player.el() ||
            activeEl == player.el().querySelector('.vjs-tech') ||
            activeEl == player.el().querySelector('.iframeblocker')) {

          if (enableFull) {
            if (player.isFullscreen()) {
              player.exitFullscreen();
            } else {
              player.requestFullscreen();
            }
          }
        }
      }
    };

    player.on('keydown', keyDown);
    player.on('dblclick', doubleClick);

    player.on(['mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'], function(e) {
      e.preventDefault();
      var curVol = player.volume();

      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

      if(delta == 1) {
          if(curVol < 1) {
            if(player.muted()) player.muted(false);
            curVol += 0.05;
          }
      } else if(delta == -1) {
        if(curVol) {
            curVol -= 0.05;
          }
      }

      player.volume(curVol);

      // console.log(curVol);     

    });

    return this;
  };

  videojs.plugin('hotkeys', hotkeys);

})(window, window.videojs);
/**
  Progress-tooltip plugin for videojs 
  Author: oz@ex.ua
*/


!function(vjs) {
	var $progressBar, $player, $tooltip;

	function tooltip() {
		var me = this;
		$player = $(this.el());
		$progressBar = $player.find('.vjs-progress-control');
		$fakeHolde = $('<div>', {'class': 'vjs-fake-progress-holder'});
		$tooltip = $('<div>', {'class': 'vjs-time-tooltip', text: '00:00:00'});
		$tooltipLine = $('<div>', {'class': 'vjs-line-tooltip'});

		$progressBar.append($tooltip, $tooltipLine, $fakeHolde);

		// $progressBar.on('mouseout', function() {
		// 	$tooltip.fadeOut();
		// 	// me.off('timeupdate', updateTipLine);
		// });

		// $progressBar.on('mouseenter', function() {
		// 	me.on('timeupdate', updateTipLine);
		// });


		function updateTipLine(e) {
			var offset = $progressBar.offset();
			var relativeX = (e.pageX - offset.left);
			var $playProgress = $(me.controlBar.progressControl.seekBar.playProgressBar.el());
			if(relativeX < $playProgress.width()) {
				$tooltipLine.css({'left': relativeX+2+'px', 'width': $playProgress.width()-relativeX+'px'});
			} else {
				$tooltipLine.css({'width': relativeX-$playProgress.width()+'px', 'left': $playProgress.width()+'px'});
			}

			// console.log(relativeX);
		}

		// ---

		$progressBar.on('mousemove', function(e) {
			// $tooltip.show();

			updateTipLine(e);

			var offset = $(this).offset();
			var relativeX = (e.pageX - offset.left);
			
			$tooltip.css({left: relativeX+'px'});

			

			// var percent = (relativeX/($(this).width()/100))|0;
  	// 		var ti = (me.duration()/100*percent)|0;

  			var ti = relativeX/$(this).width() * me.duration();

			$tooltip.text(formatTime(ti, me.duration()));
		});

	}

	function formatTime(seconds, guide) {
		guide = guide || seconds;
		var s = Math.floor(seconds % 60),
		    m = Math.floor(seconds / 60 % 60),
		    h = Math.floor(seconds / 3600),
		    gm = Math.floor(guide / 60 % 60),
		    gh = Math.floor(guide / 3600);

		if (isNaN(seconds) || seconds === Infinity) {
		  h = m = s = '-';
		}
	
		h = (h > 0 || gh > 0) ? h + ':' : '';
		m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';
		s = (s < 10) ? '0' + s : s;
	
		return h + m + s;
	}

	vjs.plugin('tooltip', tooltip);

}(videojs);
!function(vjs) {

	function flashNote() {

		console.info('init flashNote');

		var me = this,
			$player = $(this.el()),
			$note,
			$close;

		var showed = getCookie('flashNote');
		var text = "К сожалению, ваш браузер не поддерживает воспроизведение видео/аудио с помощью HTML5 технологии, плеер работает в режиме флеш-плеера. Этот режим отличается своей нестабильностью и предоставляется 'как есть', поэтому все жалобы на неправильную работу плеера в этом режиме будут рассматриваться в последнюю очередь. Больше информации для решения возникших проблем вы найдете в разделе <a href='http://www.ex.ua/93576596' target='_blank'>FAQ</a>."
		if(!showed) {
			$note = $('<div/>', {'class': 'vjs-flash-note', 'html': text});
			$close = $('<i/>', {'class': 'vjs-close-note', title: 'Закрыть'});
			$note.append($close);
			$player.append($note);


			$close.on('click', function() {
				createCookie('flashNote', 1);
				$note.remove();
			});
		}

	}

	vjs.plugin('flashNote', flashNote);

}(videojs);
!function(window, document, vjs, undefined) {
	"use strict";

	var settings, player, eventStat = {};

	

	var sendEvent = function(urlsArr) {
		if(urlsArr == undefined) return;
		if(typeof urlsArr == 'string') urlsArr = [urlsArr];
		
		var xhrFields = {withCredentials: false}, $body = $('body');

		$.each(urlsArr, function(n,url){			
			// $.ajax({
			// 	url:url, 
			// 	type:'get', 
			// 	dataType:'text',
			// 	xhrFields: xhrFields
			// });

			var $img = $('<img/>', {
				style:'width: 1px; height: 1px; border: 0;', 
				src:url, 
				alt:'trecking img'
			});

			$body.append($img);
			
			(function($i) {
				setTimeout(function() {
					$i.remove();
				},3000);
			})($img);

			
		});
	};

	// --		

	function vastEventsTracking() {
		player = this;
		player.adsvast = player.adsvast || {};

		var AdEvents = [
			'Skiped',
			'ClickThrough',
			'Impression',
			'CreativeView',
			'Start',
			'Unmute',
			'Mute',
			'Complete',
			'Pause',
			'Resume',
			'FirstQuartile',
			'Midpoint',
			'ThirdQuartile',
			'Error'
		];

		var style = 'font-size:13px; color: green;';
	

		player.adsvast.startTrecking = function(events) {
			eventStat = events;

			for(var j = 0, l = AdEvents.length; j<l; j++) {
				var eve = 'Ad' + AdEvents[j];
				player.on(eve, player.adsvast[eve]);
			}
		}
	
		player.adsvast.endTrecking = function() {

			for(var j = 0, l = AdEvents.length; j<l; j++) {
				var eve = 'Ad' + AdEvents[j];
				player.off(eve, player.adsvast[eve]);
			}

			eventStat = {};
		}

		// --

		player.adsvast.AdSkiped = function() {
			sendEvent(eventStat.vastExtensions.skipAd);
			sendEvent(eventStat.vastEvents.skip);
			console.log('%c AdSkiped', style);
		};

		player.adsvast.AdClickThrough = function() {
			window.open(eventStat.vastClickThrough);
			sendEvent(eventStat.addClick);
			console.log('%c AdClickThrough', style);
		};

		player.adsvast.AdImpression = function() {
			sendEvent(eventStat.vastImpression);
			console.log('%c AdImpression', style);
			console.log(eventStat.vastImpression);
		};

		player.adsvast.AdCreativeView = function() {
			sendEvent(eventStat.vastEvents.creativeView);
			console.log('%c AdCreativeView', style);
			console.log(eventStat.vastEvents.creativeView)
		};

		player.adsvast.AdStart = function() {
			sendEvent(eventStat.vastEvents.start);
			console.log('%c AdStart', style);
			console.log(eventStat.vastEvents.start);
		};

		player.adsvast.AdUnmute = function() {
			sendEvent(eventStat.vastEvents.unmute);
			console.log('%c AdUnmute', style);
		};

		player.adsvast.AdMute = function() {
			sendEvent(eventStat.vastEvents.mute);
			console.log('%c AdMute', style);
		};

		player.adsvast.AdComplete = function() {
			sendEvent(eventStat.vastEvents.complete);
			console.log('%c AdComplete', style);
		};

		player.adsvast.AdPause = function() {
			sendEvent(eventStat.vastEvents.pause);
			console.log('%c AdPause', style);
		};

		player.adsvast.AdResume = function() {
			sendEvent(eventStat.vastEvents.resume);
			console.log('%c AdResume', style);
		};

		player.adsvast.AdFirstQuartile = function() {
			sendEvent(eventStat.vastEvents.firstQuartile);
			console.log('%c AdFirstQuartile', style);
		};

		player.adsvast.AdMidpoint = function() {
			sendEvent(eventStat.vastEvents.midpoint);
			console.log('%c AdMidpoint', style);
		};

		player.adsvast.AdThirdQuartile = function() {
			sendEvent(eventStat.vastEvents.thirdQuartile);
			console.log('%c AdThirdQuartile', style);
		};

		player.adsvast.AdError = function() {
			sendEvent(eventStat.playerError);
			console.log('%c AdError', style + 'color:red;');
		};

	};

	// --

	vjs.plugin('vastEventsTracking', vastEventsTracking);

}(window, document, videojs);

/*
<Tracking event="creativeView">
<Tracking event="start">
<Tracking event="midpoint">
<Tracking event="firstQuartile">
<Tracking event="thirdQuartile">
<Tracking event="complete">
<Tracking event="mute">
<Tracking event="unmute">
<Tracking event="pause">
<Tracking event="rewind">
<Tracking event="resume">
<Tracking event="fullscreen">
<Tracking event="expand">
<Tracking event="collapse">
<Tracking event="acceptInvitation">
<Tracking event="close"></TrackingEvents>
*/
/**
 * Basic Ad support plugin for video.js.
 *
 * Common code to support ad integrations.
 */
(function(window, document, vjs, undefined) {
"use strict";

var

  /**
   * Copies properties from one or more objects onto an original.
   */
  extend = function(obj /*, arg1, arg2, ... */) {
    var arg, i, k;
    for (i=1; i<arguments.length; i++) {
      arg = arguments[i];
      for (k in arg) {
        if (arg.hasOwnProperty(k)) {
          obj[k] = arg[k];
        }
      }
    }
    return obj;
  },

  /**
   * Add a handler for multiple listeners to an object that supports addEventListener() or on().
   *
   * @param {object} obj The object to which the handler will be assigned.
   * @param {mixed} events A string, array of strings, or hash of string/callback pairs.
   * @param {function} callback Invoked when specified events occur, if events param is not a hash.
   *
   * @return {object} obj The object passed in.
   */
  on = function(obj, events, handler) {

    var

      type = Object.prototype.toString.call(events),

      register = function(obj, event, handler) {
        if (obj.addEventListener) {
          obj.addEventListener(event, handler);
        } else if (obj.on) {
          obj.on(event, handler);
        } else if (obj.attachEvent) {
          obj.attachEvent('on' + event, handler);
        } else {
          throw new Error('object has no mechanism for adding event listeners');
        }
      },

      i,
      ii;

    switch (type) {
      case '[object String]':
        register(obj, events, handler);
        break;
      case '[object Array]':
        for (i = 0, ii = events.length; i<ii; i++) {
          register(obj, events[i], handler);
        }
        break;
      case '[object Object]':
        for (i in events) {
          if (events.hasOwnProperty(i)) {
            register(obj, i, events[i]);
          }
        }
        break;
      default:
        throw new Error('Unrecognized events parameter type: ' + type);
    }

    return obj;

  },

  /**
   * Runs the callback at the next available opportunity.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/window.setImmediate
   */
  setImmediate = function(callback) {
    return (
      window.setImmediate ||
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.setTimeout
    )(callback, 0);
  },

  /**
   * Clears a callback previously registered with `setImmediate`.
   * @param {id} id The identifier of the callback to abort
   */
  clearImmediate = function(id) {
    return (window.clearImmediate ||
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.clearTimeout)(id);
  },

  /**
   * If ads are not playing, pauses the player at the next available
   * opportunity. Has no effect if ads have started. This function is necessary
   * because pausing a video element while processing a `play` event on iOS can
   * cause the video element to continuously toggle between playing and paused
   * states.
   *
   * @param {object} player The video player
   */
  cancelContentPlay = function(player) {
    if (player.ads.cancelPlayTimeout) {
      // another cancellation is already in flight, so do nothing
      return;
    }
    player.ads.cancelPlayTimeout = setImmediate(function() {
      // deregister the cancel timeout so subsequent cancels are scheduled
      player.ads.cancelPlayTimeout = null;

      // pause playback so ads can be handled.
      if (!player.paused()) {
        player.pause();
        console.log('cancelContentPlay');
      }

      // add a contentplayback handler to resume playback when ads finish.
      player.one('contentplayback', function() {
        if (player.paused()) {
          player.play();
        }
      });
    });
  },

  /**
   * Returns an object that captures the portions of player state relevant to
   * video playback. The result of this function can be passed to
   * restorePlayerSnapshot with a player to return the player to the state it
   * was in when this function was invoked.
   * @param {object} player The videojs player object
   */
  getPlayerSnapshot = function(player) {
    var
      tech = player.el().querySelector('.vjs-tech'),
      tracks = player.remoteTextTracks ? player.remoteTextTracks() : [],
      track,
      i,
      suppressedTracks = [],
      snapshot = {
        ended: player.ended(),
        src: player.currentSrc(),
        currentTime: player.currentTime(),
        type: player.currentType()
      };

      // console.log('player.currentSrc()', player.currentSrc());

    if (tech) {
      snapshot.nativePoster = tech.poster;
      snapshot.style = tech.getAttribute('style');
    }

    i = tracks.length;
    while (i--) {
      track = tracks[i];
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    }
    snapshot.suppressedTracks = suppressedTracks;

    return snapshot;
  },

  removeClass = function(element, className) {
    var
      classes = element.className.split(/\s+/),
      i = classes.length,
      newClasses = [];
    while (i--) {
      if (classes[i] !== className) {
        newClasses.push(classes[i]);
      }
    }
    element.className = newClasses.join(' ');
  },

  /**
   * Attempts to modify the specified player so that its state is equivalent to
   * the state of the snapshot.
   * @param {object} snapshot - the player state to apply
   */
  restorePlayerSnapshot = function(player, snapshot) {
    var
      // the playback tech
      tech = player.el().querySelector('.vjs-tech'),

      // the number of remaining attempts to restore the snapshot
      attempts = 20,

      suppressedTracks = snapshot.suppressedTracks,
      trackSnapshot,
      restoreTracks =  function() {
        var i = suppressedTracks.length;
        while (i--) {
          trackSnapshot = suppressedTracks[i];
          trackSnapshot.track.mode = trackSnapshot.mode;
        }
      },

      // finish restoring the playback state
      resume = function() {
        var
          ended = false,
          updateEnded = function() {
            ended = true;
          };
        player.currentTime(snapshot.currentTime);

        // Resume playback if this wasn't a postroll
        if (!snapshot.ended) {
          if (player.currentTypeRoll == 'PAUS-ROLL') player.currentTypeRoll = 'PAUSE';
	  player.play();
        } else {
          // On iOS 8.1, the "ended" event will not fire if you seek
          // directly to the end of a video. To make that behavior
          // consistent with the standard, fire a synthetic event if
          // "ended" does not fire within 250ms. Note that the ended
          // event should occur whether the browser actually has data
          // available for that position
          // (https://html.spec.whatwg.org/multipage/embedded-content.html#seeking),
          // so it should not be necessary to wait for the seek to
          // indicate completion.
          window.setTimeout(function() {
            if (!ended) {
              player.pause();
            }
            player.off('ended', updateEnded);
          }, 250);
          player.on('ended', updateEnded);
        }
      },

      // determine if the video element has loaded enough of the snapshot source
      // to be ready to apply the rest of the state
      tryToResume = function() {
        if (tech.readyState > 1) {
          // some browsers and media aren't "seekable".
          // readyState greater than 1 allows for seeking without exceptions
          return resume();
        }

        if (tech.seekable === undefined) {
          // if the tech doesn't expose the seekable time ranges, try to
          // resume playback immediately
          return resume();
        }

        if (tech.seekable.length > 0) {
          // if some period of the video is seekable, resume playback
          return resume();
        }

        // delay a bit and then check again unless we're out of attempts
        if (attempts--) {
          setTimeout(tryToResume, 50);
        } else {
          (function() {
            try {
              resume();
            } catch(e) {
              videojs.log.warn('Failed to resume the content after an advertisement', e);
            }
          })();
        }
      },

      // whether the video element has been modified since the
      // snapshot was taken
      srcChanged;

    if (snapshot.nativePoster) {
      tech.poster = snapshot.nativePoster;
    }

    if ('style' in snapshot) {
      // overwrite all css style properties to restore state precisely
      tech.setAttribute('style', snapshot.style || '');
    }

    // Determine whether the player needs to be restored to its state
    // before ad playback began. With a custom ad display or burned-in
    // ads, the content player state hasn't been modified and so no
    // restoration is required

    if (player.src()) {
      // the player was in src attribute mode before the ad and the
      // src attribute has not been modified, no restoration is required
      // to resume playback
      srcChanged = player.src() !== snapshot.src;
    } else {
      // the player was configured through source element children
      // and the currentSrc hasn't changed, no restoration is required
      // to resume playback
      srcChanged = player.currentSrc() !== snapshot.src;
    }

    if (srcChanged) {
      // on ios7, fiddling with textTracks too early will cause safari to crash
      player.one('contentloadedmetadata', restoreTracks);

      // if the src changed for ad playback, reset it
      player.src({ src: snapshot.src, type: snapshot.type });
      // safari requires a call to `load` to pick up a changed source
      player.load();
      // and then resume from the snapshots time once the original src has loaded
      player.one('contentcanplay', tryToResume);
    } else if (!player.ended() || !snapshot.ended) {
      // if we didn't change the src, just restore the tracks
      restoreTracks();

      // the src didn't change and this wasn't a postroll
      // just resume playback at the current time.
      if (player.currentTypeRoll == 'PAUS-ROLL') player.currentTypeRoll = 'PAUSE';
      player.play();
    }
  },

  /**
   * Remove the poster attribute from the video element tech, if present. When
   * reusing a video element for multiple videos, the poster image will briefly
   * reappear while the new source loads. Removing the attribute ahead of time
   * prevents the poster from showing up between videos.
   * @param {object} player The videojs player object
   */
  removeNativePoster = function(player) {
    var tech = player.el().querySelector('.vjs-tech');
    if (tech) {
      tech.removeAttribute('poster');
    }
  },

  // ---------------------------------------------------------------------------
  // Ad Framework
  // ---------------------------------------------------------------------------

  // default framework settings
  defaults = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 5000,

    // maximum amount of time in ms to wait for the ad implementation to start
    // linear ad mode after `readyforpreroll` has fired. This is in addition to
    // the standard timeout.
    prerollTimeout: 100,

    // maximum amount of time in ms to wait for the ad implementation to start
    // linear ad mode after `contentended` has fired.
    postrollTimeout: 0,

    // when truthy, instructs the plugin to output additional information about
    // plugin state to the video.js log. On most devices, the video.js log is
    // the same as the developer console.
    debug: false
  },

  adFramework = function(options) {
    var
      player = this,

      // merge options and defaults
      settings = extend({}, defaults, options || {}),

      fsmHandler;

    // prefix all video element events during ad playback
    // if the video element emits ad-related events directly,
    // plugins that aren't ad-aware will break. prefixing allows
    // plugins that wish to handle ad events to do so while
    // avoiding the complexity for common usage
    (function() {
      var
        videoEvents = videojs.Html5.Events,
        i = videoEvents.length,
        returnTrue = function() { return true; },
        triggerEvent = function(type, event) {
          // pretend we called stopImmediatePropagation because we want the native
          // element events to continue propagating
          event.isImmediatePropagationStopped = returnTrue;
          event.cancelBubble = true;
          event.isPropagationStopped = returnTrue;
          player.trigger({
            type: type + event.type,
            state: player.ads.state,
            originalEvent: event
          });
        },
        redispatch = function(event) {
          if (player.ads.state === 'ad-playback') {
            triggerEvent('ad', event);

          } else if (player.ads.state === 'content-playback' && event.type === 'ended') {
            triggerEvent('content', event);

          } else if (player.ads.state === 'content-resuming') {
            if (player.ads.snapshot) {
              // the video element was recycled for ad playback
              if (player.currentSrc() !== player.ads.snapshot.src) {
                if (event.type === 'loadstart') {
                  return;
                }
                return triggerEvent('content', event);

              // we ended playing postrolls and the video itself
              // the content src is back in place
              } else if (player.ads.snapshot.ended) {
                if ((event.type === 'pause' ||
                    event.type === 'ended')) {
                  // after loading a video, the natural state is to not be started
                  // in this case, it actually has, so, we do it manually
                  player.addClass('vjs-has-started');
                  // let `pause` and `ended` events through, naturally
                  return;
                }
                // prefix all other events in content-resuming with `content`
                return triggerEvent('content', event);
              }
            }
            if (event.type !== 'playing') {
              triggerEvent('content', event);
            }
          }
        };

      while (i--) {
        player.on(videoEvents[i], redispatch);
      }
      return redispatch;
    })();

    // We now auto-play when an ad gets loaded if we're playing ads in the same video element as the content.
    // The problem is that in IE11, we cannot play in addurationchange but in iOS8, we cannot play from adcanplay.
    // This will allow ad-integrations from needing to do this themselves.
    player.on(['addurationchange', 'adcanplay'], function() {
      var snapshot = player.ads.snapshot;
      if (player.currentSrc() === snapshot.src) {
        return;  // do nothing
      }

      player.play();
    });

    // replace the ad initializer with the ad namespace
    player.ads = {
      state: 'content-set',

      startLinearAdMode: function() {
        player.trigger('adstart');
      },

      endLinearAdMode: function() {
        player.trigger('adend');
      }
    };

    fsmHandler = function(event) {
      // Ad Playback State Machine
      var
        fsm = {
          'content-set': {
            events: {
              'adscanceled': function() {
                this.state = 'content-playback';
              },
              'adsready': function() {
                this.state = 'ads-ready';
              },
              'play': function() {
                this.state = 'ads-ready?';
                cancelContentPlay(player);
                // remove the poster so it doesn't flash between videos
                removeNativePoster(player);
              },
              'adserror': function() {
                this.state = 'content-playback';
              }
            }
          },
          'ads-ready': {
            events: {
              'play': function() {
                this.state = 'preroll?';
                cancelContentPlay(player);
              },
              'adserror': function() {
                this.state = 'content-playback';
              }
            }
          },
          'preroll?': {
            enter: function() {
              // change class to show that we're waiting on ads
              player.el().className += ' vjs-ad-loading';
              // schedule an adtimeout event to fire if we waited too long
              player.ads.timeout = window.setTimeout(function() {
                player.trigger('adtimeout');
              }, settings.prerollTimeout);
              // signal to ad plugin that it's their opportunity to play a preroll
              player.trigger('readyforpreroll');
            },
            leave: function() {
              window.clearTimeout(player.ads.timeout);
              removeClass(player.el(), 'vjs-ad-loading');
            },
            events: {
              'play': function() {
                cancelContentPlay(player);
              },
              'adstart': function() {
                this.state = 'ad-playback';
                player.el().className += ' vjs-ad-playing';
              },
              'adtimeout': function() {
                this.state = 'content-playback';
              },
              'adserror': function() {
                this.state = 'content-playback';
              }
            }
          },
          'ads-ready?': {
            enter: function() {
              player.el().className += ' vjs-ad-loading';
              player.ads.timeout = window.setTimeout(function() {
                player.trigger('adtimeout');
              }, settings.timeout);
            },
            leave: function() {
              window.clearTimeout(player.ads.timeout);
              removeClass(player.el(), 'vjs-ad-loading');
            },
            events: {
              'play': function() {
                cancelContentPlay(player);
              },
              'adscanceled': function() {
                this.state = 'content-playback';
              },
              'adsready': function() {
                this.state = 'preroll?';
              },
              'adtimeout': function() {
                this.state = 'content-playback';
              },
              'adserror': function() {
                this.state = 'content-playback';
              }
            }
          },
          'ad-playback': {
            enter: function() {
              // console.info('ENTER', player.currentSrc());
              // capture current player state snapshot (playing, currentTime, src)
              this.snapshot = getPlayerSnapshot(player);

              // remove the poster so it doesn't flash between videos
              removeNativePoster(player);
              // We no longer need to supress play events once an ad is playing.
              // Clear it if we were.
              if (player.ads.cancelPlayTimeout) {
                clearImmediate(player.ads.cancelPlayTimeout);
                player.ads.cancelPlayTimeout = null;
              }
            },
            leave: function() {
              removeClass(player.el(), 'vjs-ad-playing');

              restorePlayerSnapshot(player, this.snapshot);
              if (player.ads.triggerevent !== 'adend') {
                // trigger 'adend' as a consistent notification
                // event that we're exiting ad-playback.
                player.trigger('adend');
              }
            },
            events: {
              'adend': function() {
                this.state = 'content-resuming';
              },
              'adserror': function() {
                this.state = 'content-resuming';
              }
            }
          },
          'content-resuming': {
            enter: function() {
              if (this.snapshot.ended) {
                window.clearTimeout(player.ads._fireEndedTimeout);
                // in some cases, ads are played in a swf or another video element
                // so we do not get an ended event in this state automatically.
                // If we don't get an ended event we can use, we need to trigger
                // one ourselves or else we won't actually ever end the current video.
                player.ads._fireEndedTimeout = window.setTimeout(function() {
                  player.trigger('ended');
                }, 1000);
              }
            },
            leave: function() {
              window.clearTimeout(player.ads._fireEndedTimeout);
            },
            events: {
              'contentupdate': function() {
                this.state = 'content-set';
              },
              'playing': function() {
                this.state = 'content-playback';
              },
              'ended': function() {
                this.state = 'content-playback';
              }
            }
          },
          'postroll?': {
            enter: function() {
              this.snapshot = getPlayerSnapshot(player);

              player.el().className += ' vjs-ad-loading';

              player.ads.timeout = window.setTimeout(function() {
                player.trigger('adtimeout');
              }, settings.postrollTimeout);
            },
            leave: function() {
              window.clearTimeout(player.ads.timeout);
              removeClass(player.el(), 'vjs-ad-loading');
            },
            events: {
              'adstart': function() {
                this.state = 'ad-playback';
                player.el().className += ' vjs-ad-playing';
              },
              'adtimeout': function() {
                this.state = 'content-resuming';
                // setImmediate(function() {
                //   player.trigger('ended');
                // });
              },
              'adserror': function() {
                this.state = 'content-resuming';
                // setImmediate(function() {
                //   player.trigger('ended');
                // });
              }
            }
          },
          'content-playback': {
            enter: function() {
              // make sure that any cancelPlayTimeout is cleared
              if (player.ads.cancelPlayTimeout) {
                clearImmediate(player.ads.cancelPlayTimeout);
                player.ads.cancelPlayTimeout = null;
              }
              // this will cause content to start if a user initiated
              // 'play' event was canceled earlier.
              player.trigger({
                type: 'contentplayback',
                triggerevent: player.ads.triggerevent
              });
            },
            events: {
              // in the case of a timeout, adsready might come in late.
              'adsready': function() {
                player.trigger('readyforpreroll');
              },
              'adstart': function() {
                this.state = 'ad-playback';
                player.el().className += ' vjs-ad-playing';
                // remove the poster so it doesn't flash between videos
                removeNativePoster(player);
              },
              'contentupdate': function() {
                if (player.paused()) {
                  this.state = 'content-set';
                } else {
                  this.state = 'ads-ready?';
                }
              },
              'contentended': function() {
                this.state = 'postroll?';
              }
            }
          }
        };

      (function(state) {
        var noop = function() {};

        // process the current event with a noop default handler
        ((fsm[state].events || {})[event.type] || noop).apply(player.ads);

        // check whether the state has changed
        if (state !== player.ads.state) {

          // record the event that caused the state transition
          player.ads.triggerevent = event.type;

          // execute leave/enter callbacks if present
          (fsm[state].leave || noop).apply(player.ads);
          (fsm[player.ads.state].enter || noop).apply(player.ads);

          // output debug logging
          if (settings.debug) {
            videojs.log('ads', player.ads.triggerevent + ' triggered: ' + state + ' -> ' + player.ads.state);
          }
        }

      })(player.ads.state);

    };

    // register for the events we're interested in
    on(player, vjs.Html5.Events.concat([
      // events emitted by ad plugin
      'adtimeout',
      'contentupdate',
      'contentplaying',
      'contentended',

      // events emitted by third party ad implementors
      'adsready',
      'adserror',
      'adscanceled',
      'adstart',  // startLinearAdMode()
      'adend'     // endLinearAdMode()
    ]), fsmHandler);

    // keep track of the current content source
    // if you want to change the src of the video without triggering
    // the ad workflow to restart, you can update this variable before
    // modifying the player's source
    player.ads.contentSrc = player.currentSrc();

    // implement 'contentupdate' event.
    (function(){
      var
        // check if a new src has been set, if so, trigger contentupdate
        checkSrc = function() {
          var src;
          if (player.ads.state !== 'ad-playback') {
            src = player.currentSrc();
            if (src !== player.ads.contentSrc) {
              player.trigger({
                type: 'contentupdate',
                oldValue: player.ads.contentSrc,
                newValue: src
              });
              player.ads.contentSrc = src;
            }
          }
        };
      // loadstart reliably indicates a new src has been set
      player.on(['loadstart'], checkSrc);
      // check immediately in case we missed the loadstart
      setImmediate(checkSrc);
    })();

    // kick off the fsm
    if (!player.paused()) {
      // simulate a play event if we're autoplaying
      fsmHandler({type:'play'});
    }

  };

  // register the ad plugin framework
  vjs.plugin('ads', adFramework);

})(window, document, videojs);

// var snapshotPrerolls = [],
var unit, minuteBlockData = null, deferredMinuteBlock = null;

// ---

var REQUEST_URL = 'http://inv-nets.admixer.net/fs/dsp.aspx';

var requestJSON = {
    "id":"", 
    "imp": [
    {
      "id": "preroll1",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }, 

    {
      "id": "preroll2",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }, 

    {
      "id": "preroll3",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }, 

    {
      "id": "preroll4",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }, 

    {
      "id": "preroll5",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }, 

    {
      "id": "preroll6",
      "video": {"id": "b6f2f9a5-0ae3-439d-a494-65e8b4cff076", "pos": "1"},
      "ext": {"pl": "preroll", "pos": "1", "ct": "adult"}
    }],

    "ext": {
        "maxVideoDurationSec":62,
        "material": {
            "id" :"MaZjNUTPUW7Hhpw3mRjoc", "year":"2015"
        }
    }
};

// ---

!function(window, document, vjs, undefined) {
    "use strict";

    var state = {},
        settings = {},
        player,
        predictionCount = 3,
        $player,
        $videoEl,

        PREROLLS_COUNT,
        AFTER_PAUSROLLS_COUNT,
        POST_ROLL_COUNT,

        ROLLS_PLAYED = 0,

        PREV_ADS_MINUTEBLOCK_DURATION = 0,

        // ads controls 
        skipBtnEl,
        adTiming,
        addClickLayerEl,
        allowMimeTypes = ['video/ogg', 'video/mp4', 'video/webm', 'application/x-shockwave-flash', 'text/html'],
        loadDataPromise;

    function adsPreRolls(options) {
        player = this;
        settings = options;

        if(player.pl.itemsCount == 1) {
          settings.postrollTimeout = 300;
        } else {
          settings.postrollTimeout = 0;
        }

        AFTER_PAUSROLLS_COUNT = settings.afterpaus.length;
        POST_ROLL_COUNT       = settings.post.length;

        PREROLLS_COUNT = settings.isMinuteBlock ? 1 : settings.pre.length;
        
        $player = $(player.el());
        $videoEl = $('#' + player.id() + '_html5_api');

        player.vastEventsTracking();
        player.ads(settings);

        if(!PREROLLS_COUNT) setTimeout(player.trigger.bind(player, 'adtimeout'), 0);

        // snapshotPrerolls = settings.pre.slice();

        player.controlBar.muteToggle.on('click', function() {
            if (state.adPlaying) {
                player.trigger(player.muted() ? 'AdMute' : 'AdUnmute');
            }
        });

        player.controlBar.playToggle.on('click', function() {
            if (state.adPlaying) {
                player.trigger(player.paused() ? 'AdPause' : 'AdResume');
            }
        });

        state.addErrors = 0;

        player.on('aderror', function() {
            var err = player.error();

            if (err && (state.addErrors < 15)) {
                player.src(player.currentSrc());

                state.addErrors++;

                console.log('Try restore ads playback');
            } else {
                player.trigger('AdError');
                state.addErrors = 0;

                // sendCustomStat({
                //     id: statId(),
                //     e: 'err',
                //     type: statType()
                // });

                player.trigger('ad:next');
                console.log('AdError');
            }

        });

        player.on('adstart', function() {
          var vol = 0.3;
          if(player.storage) {
            vol = player.storage.getItem('vol') || 0.3;
          }

          this.volume(0.3);
          player.trigger('volumechange');

          if(player.storage) {
            player.storage.setItem('vol', vol);
          }

        });

        player.on('contentupdate', function() {
            if(!player.currentSrc()) {
              goAd();
            }
        });

        if(player.currentSrc()) {
           goAd();
        }

        player.on('ad:next', function() {
          console.warn('ad:next');
          nextRoll(false);
        });


        player.on('ad:next-with-first-play', function() {
          nextRoll(true);
        });

        player.on('ad:cancel', adcanceled);


        player.on('readyforpreroll', beforePlayAd);

        player.on('setByIndex', function() {
            destructAdsControls();
        });

        player.on('livePause', playAfterPausRoll);
        player.on('pause', playPausRoll);
	player.on('play', playPlay);
	player.on('close', playClose);

        player.on('contentended', playPostroll);

        // --

    }


    // start minute block
    function goAd() {

      if(settings.isMinuteBlock) {
 
        requestMixerMinuteBlock(REQUEST_URL, {
		callback: 'cbMixer',
		_: (new Date()).getTime(),
		data: JSON.stringify(requestJSON)
	});

        deferredMinuteBlock.then(function(res) {
  
          var minuteRolls = [];
  
          // admpresp={"status":"no data", "msg":""}
          if(res.status == 'no data') return;
  
          res.seatbid[0].bid.forEach(function(el,n) {
  
            try{
              
              minuteRolls.push({isString: true, url: el.adm})
  
            } catch(e) { console.warn(e.message); }
  
          });
  
          PREROLLS_COUNT = res.seatbid[0].bid.length;
  
          settings.pre = minuteRolls;
          
  
          console.log('settings.pre', settings.pre);        
  
          requestAds(++ROLLS_PLAYED, PREROLLS_COUNT, true);
  
        });

      } else {

        requestAds(++ROLLS_PLAYED, PREROLLS_COUNT, true);

      }

    }


    function nextRoll(firstPlay) {
      player.adsvast.endTrecking(); // important !

      var CUR = PREROLLS_COUNT;

      switch(state.currentTypeRoll) {
        case 'PRE-ROLL':
          CUR = PREROLLS_COUNT;
        break;

        case 'PAUS-ROLL':
          CUR = AFTER_PAUSROLLS_COUNT;
        break;
  
        case 'AFTER-PAUS-ROLL':
          CUR = AFTER_PAUSROLLS_COUNT;
        break;

        case 'POST-ROLL':
          CUR = POST_ROLL_COUNT;
        break;
      }

      requestAds(++ROLLS_PLAYED, CUR, firstPlay, state.currentTypeRoll);
    }
    
    var pausTimer = null;

    function playAfterPausRoll() {
	if (pausTimer) {
		clearTimeout(pausTimer);
		pausTimer = null;
	}

	if(/^ad\-/.test(player.ads.state)) return;
	requestAds(++ROLLS_PLAYED, AFTER_PAUSROLLS_COUNT, false, 'AFTER-PAUS-ROLL');
    }
    
    function playPausRoll() {
	if (player.currentTypeRoll == 'STOP') {
		createCookie('lastAfterPaus', getUnix());
		player.currentTypeRoll = null;
		return;
	}

	if(/^ad\-/.test(player.ads.state)) return;
	createCookie('lastAfterPaus', getUnix());
	
	if (pausTimer) clearTimeout(pausTimer);
	pausTimer = setTimeout(function() {
		pausTimer = null;

		if(/^ad\-/.test(player.ads.state) || !player.paused()) return;
		requestAds(++ROLLS_PLAYED, AFTER_PAUSROLLS_COUNT, false, 'PAUS-ROLL');
	}, 5000);
    }

    function playPlay() {
	if (pausTimer) {
		clearTimeout(pausTimer);
		pausTimer = null;
	}
        if (player.currentTypeRoll == 'PAUSE') {
		player.currentTypeRoll = 'STOP';
		setTimeout(function() {
			player.pause();
		}, 0);
	}
    }
    
    function playClose() {
	if (pausTimer) {
		clearTimeout(pausTimer);
		pausTimer = null;
	}
    }

    function playPostroll() {
      if(player.ads.state == 'postroll?' && player.pl.itemsCount == 1) {
        console.log('>>>>>>>>> playPostroll');
        requestAds(++ROLLS_PLAYED, POST_ROLL_COUNT, false, 'POST-ROLL');
      }
    }


    function adcanceled() {

        player.adsvast.endTrecking();

        // player.pause();
        state.adPlaying = false;
        state.prerollPlayed = false;
        destructAdsControls();
        player.ads.endLinearAdMode();

        state.prevRollMediaSrc = '';
        if(state.currentTypeRoll != 'POST-ROLL' && state.currentTypeRoll != 'PAUS-ROLL') {
          player.play();
        } else {
          player.pause();
        }

        ROLLS_PLAYED = 0;

        if(player.storage) {
          var vol = player.storage.getItem('vol') || 0.5;
          player.volume(vol);
        } else {
          player.volume(0.5);
        }

        console.log('adcanceled: ', state.currentTypeRoll);
    }

    // --

    function isTimeForPreroll() {
      var lastAds = getCookie('lastAds') || 0;
      return ((getUnix() - lastAds) >= periodAds); // ? true : false;
    }

    // --

    function isTimeForAfterPausroll() {
      var lastAds = getCookie('lastAfterPaus') || 0;
      return ((getUnix() - lastAds) >= periodAfterPaus); // ? true : false;
    }

    // --

    function requestAds(numRoll, countRoll, firstPlay, type) {
        if (numRoll === undefined) numRoll = 0;
        if(type === undefined) type = 'PRE-ROLL';

        console.log('ROLLS_PLAYED', ROLLS_PLAYED-1);

        var shouldShowAds, rollsConf;

        switch(type) {
          case 'PRE-ROLL':
            shouldShowAds = isTimeForPreroll();
            rollsConf = settings.pre;
          break;

          case 'POST-ROLL':
            shouldShowAds = true;
            rollsConf = settings.post;
          break;

          case 'PAUS-ROLL':
            shouldShowAds = true;
            rollsConf = settings.afterpaus;
          break;

          case 'AFTER-PAUS-ROLL':
            shouldShowAds = isTimeForAfterPausroll();
            rollsConf = settings.afterpaus;
          break;

          default:
            shouldShowAds = isTimeForPreroll();
            rollsConf = settings.pre;
          break;
        }

        state.currentTypeRoll = type;
	player.currentTypeRoll = type;

        console.log(shouldShowAds, numRoll, countRoll);

        if(numRoll <= countRoll && shouldShowAds && (player.pl.currentVideo.type !== 'audio') && !isFlashTech() && !isMobileSafari()/* && !isSafari()*/) {

          console.log('numRoll', numRoll, rollsConf);
          var curRollXmlUrl = rollsConf[numRoll-1].url;
          var isString = rollsConf[numRoll-1].isString || false;
          state.prevRollMediaSrc = state.prevRollMediaSrc || '';

          // --

          // var intervalAdPlaying = setTimeout(function(){

          //   // loadDataPromise.reject('timeout ad');

          //   player.trigger('ad:next');

          // }, 2000);

          // --    

          loadDataPromise = parseFullVAST(curRollXmlUrl, isString);

          loadDataPromise.then(function(res) {

            console.log(res);    
            
            // clearTimeout(intervalAdPlaying);

            if(res.nobanner && (numRoll-1) <= 0) {
              
              console.log('ad:next-with-first-play');
              player.trigger('ad:next-with-first-play');
              return;

            } else if(res.nobanner && (numRoll-1) > 0) {
              
              console.log('ad:next');
              player.trigger('ad:next');
              return;

            }

            state.prevRollMediaSrc = res.media.src;
            state.adsMedia = res;           

            if(firstPlay) {
              player.trigger('adsready');
            } else {
              console.log('beforePlayAd');
              beforePlayAd();
            }
          
          }, function(reason) {
            console.log(reason);
          });

        } else {
          setTimeoutAds(numRoll, shouldShowAds);
          console.warn('ad:cancel');

          // setTimeout нужен для afterpaus рола, так как не корректно востанавливалсь позиция таймлайна;
           setTimeout(player.trigger.bind(player, 'ad:cancel'), 0);
        }
    }

    function beforePlayAd() {
      console.log('state.adsMedia', state.adsMedia);

      if (state.adsMedia.media.apiFramework == 'VPAID') {
          playVPAIDAd();
      } else {
          playAd();
      }
    }

    // detect flash follback
    function isFlashTech() {
        return $('#' + player.id() + '_flash_api').length ? 1 : 0;
    }

    function playAd() {
        if (!state.adsMedia) {
            return;
        }

        player.ads.startLinearAdMode();

        state.firstQuartile = state.midpoint = state.thirdQuartile = true;
        state.adPlaying = true;

        player.adsvast.startTrecking(state.adsMedia);

        

        player.pl._setVideoSource({
            type: state.adsMedia.media.type,
            src: state.adsMedia.media.src
        });

        player.one('adloadedmetadata', function() {
            player.trigger('AdImpression');
            player.trigger('AdCreativeView');
            player.trigger('AdStart');
            player.removeClass('vjs-seeking');

            destructAdsControls();
            initAdsControls();

            sendCustomStat({
                id: statId(),
                e: 'start',
                type: statType()
            });
        });

        player.one('adended', function() {
            player.trigger('AdComplete');
            player.trigger('ad:next');
        });

    }

    function setTimeoutAds(count, shouldShowAds) {
      console.log('setTimeoutAds: ', state.currentTypeRoll, PREROLLS_COUNT, count, shouldShowAds);

      switch(state.currentTypeRoll) {
        case 'PRE-ROLL':
          if(count >= PREROLLS_COUNT && shouldShowAds) createCookie('lastAds', getUnix());
        break;

        case 'PAUS-ROLL':
        break;
  
        case 'AFTER-PAUS-ROLL':
          // if(count >= AFTER_PAUSROLLS_COUNT && shouldShowAds) createCookie('lastAfterPaus', getUnix());
        break;

        case 'POST-ROLL':
          // createCookie('lastAds', getUnix());
        break;
      }
    }


    function playVPAIDAd() {
        if (!state.adsMedia) {
            return;
        }

        player.pause();

        player.ads.startLinearAdMode();

        state.firstQuartile = state.midpoint = state.thirdQuartile = true;

        player.adsvast.startTrecking(state.adsMedia);

        state.adPlaying = true;

         if(state.adsMedia.media.type == 'text/html') {
          var opt = {
            skipTime: convertToSeconds(state.adsMedia.vastExtensions.skipTime) || 0, 
            adURL: state.adsMedia.vastClickThrough, 
            debug: false, 
            type: state.adsMedia.media.type
          };

          VPAIDHTML5mixer(state.adsMedia.media.src, player, '.vpaidContainer', opt)
          .then(function(unit) {
            player.trigger('adsready');

            unit.on('AdCreativeView', function(e) {
              player.trigger('AdCreativeView');
            });

            unit.on('AdStart', function(e) {
              player.trigger('AdStart');              
              player.trigger('AdImpression');
            });

            unit.on('AdComplete', function(e) {
              player.trigger('AdComplete');
              player.trigger('ad:next');
            });
    
            unit.on('AdComplete', function(e) {
              player.trigger('AdComplete');
              player.trigger('ad:next');
            });
  
            unit.on('AdSkipped',  function(e) {
              player.trigger('AdSkiped');
              player.trigger('ad:next');
            });

            unit.on('AdClickThrough',  function(e) {
              clickThrough();
              player.trigger('ad:next');
            });
  
            unit.on('AdStopped',  function(e) {
              player.trigger('ad:next');
            });

            unit.on('AdFirstQuartile',  function(e) {
              player.trigger('AdFirstQuartile');
            });

            unit.on('AdMidpoint',  function(e) {
              player.trigger('AdMidpoint');
            });

            unit.on('AdThirdQuartile',  function(e) {
              player.trigger('AdThirdQuartile');
            });

            unit.on('AdError',  function(e) {
              player.trigger('AdError');
            });

            unit.on('AdMute', function() {
                player.trigger('AdMute');
            });
  
            unit.on('AdUnmute', function() {
                player.trigger('AdUnmute');
            });
          
          });


         } else if(state.adsMedia.media.type == 'application/x-shockwave-flash'){          
          state.flashVPaid = new VPAIDFLASHClient(state.$VPAIDContainer.get(0), flashVPAIDWrapperLoaded);
         }       

    }

    // --

    function vastRequest(vastURL, xhrFields) {
        if (xhrFields == undefined) {
            xhrFields = {
                withCredentials: true
            };
        }

        console.warn('vastURL >>>', vastURL);
        return $.ajax({
            url: vastURL,
            dataType: 'xml',
            xhrFields: xhrFields
        });
    }

    // --


    function parseFullVAST(url, isString) {
      state.$VPAIDContainer = $player.find('#vjs-vpaid-container');

       if (!state.$VPAIDContainer.length) {
           state.$VPAIDContainer = $('<div>', {
               id: 'vjs-vpaid-container'
           });
           $player.append(state.$VPAIDContainer);
       }

      return vtj(url, isString);
    }

    function flashVPAIDWrapperLoaded(err, success) {
        if (err) return;

        var adURL = state.adsMedia.src.trim();

        console.log(adURL);

        state.flashVPaid.loadAdUnit(adURL, function(error, adUnit) {
            if (error) return;

            unit = adUnit;

            adUnit.handshakeVersion('2.0', initAd);
            adUnit.on('AdLoaded', startAd);

            adUnit.on('AdStarted', function(err, result) {
                player.trigger('AdCreativeView');
            });

            adUnit.on('AdImpression', function(err, result) {
                player.trigger('AdImpression');
            });

            adUnit.on('AdVideoStart', function(err, result) {
                player.trigger('AdStart');

                // sendCustomStat({
                //     id: statId(),
                //     e: 'start',
                //     type: statType()
                // });
            });

            adUnit.on('AdVideoComplete', function(err, result) {
                player.trigger('AdComplete');
                player.trigger('ad:next');
            });

            adUnit.on('AdUserClose', function(err, result) {
                player.trigger('AdSkiped');
                player.trigger('ad:next');
            });

            adUnit.on('AdClickThru', function(err, result) {
                clickThrough();
                player.trigger('ad:next');
            });

            adUnit.on('AdVideoFirstQuartile', function(err, result) {
                player.trigger('AdFirstQuartile');
            });

            adUnit.on('AdVideoMidpoint', function(err, result) {
                player.trigger('AdMidpoint');
            });

            adUnit.on('AdVideoThirdQuartile', function(err, result) {
                player.trigger('AdThirdQuartile');
            });

            // adUnit.on('AdStopped', function (err, result) {
            // });

            adUnit.on('AdError', function(err, result) {
                player.trigger('AdError');
            });



            function initAd(err, result) {
                console.log('handShake', err, result);
                adUnit.initAd(800, 400, 'normal', -1, '', '', function(err) {
                    console.log('initAd', err);
                });
            }

            function startAd(err, result) {
                adUnit.startAd(function(err, result) {

                });
            }

            // function checkAdProperties() {
            //     adUnit.getAdIcons(function (err, result) {
            //         console.log('getAdIcons', result);
            //     });
            //     adUnit.setAdVolume(10, function (err, result) {
            //         console.log('setAdVolume', result);
            //     });
            //     adUnit.getAdVolume(function (err, result) {
            //         console.log('getAdVolume', result);
            //     });
            // }

        });


        // --

    }

    // --

    function initAdsControls() {
        try {

            skipBtnEl = $('<div>', {
                'class': 'vjs-ads-skip-btn vjs-ads-auto-create'
            });

            skipBtnEl.text('Пропустить>>');

            player.el().appendChild(skipBtnEl.get(0));

            addClickLayerEl = $('<div>', {
                'class': 'vjs-ads-click-layer vjs-ads-auto-create'
            });

            // --

            if(state.currentTypeRoll == 'PRE-ROLL' && settings.isMinuteBlock) {

              adTiming = $('<div>', {
                'class': 'vjs-ads-duration vjs-ads-auto-create',
                'text': 'Реклама'
              });

              PREV_ADS_MINUTEBLOCK_DURATION = state.adsMedia.media.duration + PREV_ADS_MINUTEBLOCK_DURATION;

              player.el().appendChild(adTiming.get(0));
            }

            // --

            player.el().appendChild(addClickLayerEl.get(0));

        } catch (e) {
            console.warn('skipBtnEl', skipBtnEl);
            console.warn('addClickLayerEl', addClickLayerEl);
            console.warn(e.message);
        }

        try {
          if (state.adsMedia.vastExtensions.skipTime > 10 || state.adsMedia.vastExtensions.skipTime <= 0) state.adsMedia.vastExtensions.skipTime = 5;
          // state.adsMedia.vastExtensions.skipTime = state.adsMedia.media.duration > 10 ? 5 : 0;

          state.adsMedia.vastExtensions.skipTime = convertToSeconds(state.adsMedia.vastExtensions.skipTime);

          console.log('state.adsMedia.vastExtensions.skipTime', state.adsMedia.vastExtensions.skipTime);
          
          if (state.adsMedia.vastExtensions.skipButton) { // проверяем разрешен ли скип рекламы.
              // if (state.adsMedia.vastExtensions.skipTime <= 0) { // показать скип кнопку сразу
              //     skipBtnEl.css('display', 'block');
              // } else {
              //     player.on('timeupdate', checkSkip);
              // }  

              if (state.adsMedia.vastExtensions.skipTime > 0) { // показать скип кнопку сразу
                 player.on('timeupdate', checkSkip);
              }
  
              player.on(skipBtnEl.get(0), 'click', skipAds);
  
          } else {
              console.info('Skip button disable');
          }

        } catch(e) {
          console.log(e.message);
        }

        if(!state.adsMedia.vastExtensions.linkTxt) {
          state.adsMedia.vastExtensions.linkTxt = 'Перейти на сайт рекламодателя';
        }

        if(!state.adsMedia.vastExtensions.isClickable) {
          state.adsMedia.vastExtensions.isClickable = 1;
        }

        try {
          // проверяем кликабельный ли видео элемент рекламы
          if (state.adsMedia.vastExtensions.isClickable) {
              addClickLayerEl.html(decodeURI(state.adsMedia.vastExtensions.linkTxt));
              player.on(addClickLayerEl.get(0), 'click', clickThrough);
          } else {
              console.info('isClickable disable');
          }

        } catch(e) {
          console.warn(e.message);
        }

        player.on('timeupdate', checkTimes);


        // --

    }

    // --

    function destructAdsControls() {
        try {
            player.off(addClickLayerEl.get(0), 'click', clickThrough);

            $('.vjs-ads-auto-create').remove();

            player.off('timeupdate', checkSkip);
            player.off('timeupdate', checkTimes);

        } catch (e) {
            console.log(e.message);
        }
    }

    // --

    function checkTimes() {
        var percenr = player.currentTime()/player.duration()*100;

        if ((percenr >= 25) && state.firstQuartile) {
            state.firstQuartile = false;
            player.trigger('AdFirstQuartile');
        }

        if ((percenr >= 50) && state.midpoint) {
            state.midpoint = false;
            player.trigger('AdMidpoint');
        }

        if ((percenr >= 75) && state.thirdQuartile) {
            state.thirdQuartile = false;
            player.trigger('AdThirdQuartile');
        }


        // --

        var dur = state.adsMedia.media.duration;

        var cur = Math.floor(player.currentTime());

        if(state.currentTypeRoll == 'PRE-ROLL' && settings.isMinuteBlock) {
          var res = (60 - 
            (
              PREV_ADS_MINUTEBLOCK_DURATION - dur + cur
            )
          );

          adTiming.text('Реклама '+ 
            (res > 0 ? res: 0) + ' сек из 60 сек'
          );
        }
    }

    // --

    function checkSkip() {
        if (this.currentTime() >= state.adsMedia.vastExtensions.skipTime)
            skipBtnEl.css('display', 'block');
    }


    // --

    function skipAds() {
        skipBtnEl.remove();
        
        // player.off('timeupdate', checkSkip);

        player.trigger('AdSkiped');
        
        player.trigger('ad:next');

    }

    function clickThrough() {
        player.trigger('AdClickThrough');
    }

    // --

    function convertToSeconds(time) {
        var seconds = 0;
        if (time) {
            if (isFinite(time)) return parseInt(time);

            var timesArr = time.split(':');
            if (timesArr.length) {
                if (timesArr.length == 2) {
                    // 00:00
                    seconds = parseInt(timesArr[0]) * 60 + parseInt(timesArr[1]);
                } else if (timesArr.length >= 3) {
                    // 00:00:00
                    seconds = (parseInt(timesArr[0]) * 3600) + (parseInt(timesArr[1]) * 60) + parseInt(timesArr[2]);
                }
            }
        }

        return seconds;
    }

    // --

    function getUnix() {
        return Math.floor((new Date()).getTime()/1000|0);
    }

    // --

    function statId() {
      return ROLLS_PLAYED-1;
    }

    function statType() {
      var type = 0;

      switch(state.currentTypeRoll) {
        case 'PRE-ROLL':
          type = 0;
        break;

        case 'PAUS-ROLL':
          type = 1;
        break;

        case 'AFTER-PAUS-ROLL':
          type = 1;
        break;

        case 'POST-ROLL':
          type = 2;
        break;
      }

      return type;
    }

    function sendCustomStat(params) {
        // $.ajax({
        //     url: 'http://213.133.191.35:8007/stat3',
        //     type: 'POST',
        //     dataType: 'text',
        //     data: params,
        //     success: function(res) {
        //         console.log('Custom stat', res);
        //     }
        // });
    }

    function isMobileSafari() {
      return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
    }

    function isSafari() {
      return navigator.userAgent.indexOf("Safari") > -1;
    }

    // -- admixer

    function requestMixerMinuteBlock(url, param) {
      deferredMinuteBlock = $.Deferred();

      return $.ajax({
        url: url,
        type: 'get',
        dataType: 'script',
        data: param
      });
    }

    // ---

    vjs.plugin('adsPreRolls', adsPreRolls);


}(window, document, videojs);



function cbMixer(admpresp) {
  deferredMinuteBlock.resolve(admpresp);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71726525-1', 'auto');
ga('send', 'pageview');

var periodAds = 120, periodAfterPaus = 120; // 300s == 5m	

// --


// setInterval(function() {
// 	lastAds = (getCookie('lastAfterPaus') || 0);
// 	var diff = (Math.floor((new Date()).getTime()/1000) - lastAds);

// 	var can = 0;

// 	if(diff <= periodAfterPaus) {
// 		can = periodAfterPaus-diff;
// 	}

// 	console.log("Следующий показ рекламы возможен через: "+ can + ' сек');
// }, 1000);

// ---

function initPlayer(node, conf, startIndex) {
	'use strict';

	videojs.options.flash.swf = "video-js.swf";

	if(typeof node === 'string') {
		node = $('#'+node);
	} else {
		node = $(node);
	}

	if(!node.length) {
		node = $('<video>', {"class": "video-js vjs-default-skin", controls: "controls", autoplay: "autoplay"});
		$('body').append(node);
	}

	conf.inactivityTimeout = 500;
	
	var playerInstance = videojs(node.get(0), {techOrder: conf.techOrder, inactivityTimeout: conf.inactivityTimeout, width: conf.width || '780', height: conf.height || '440'}).ready(function() {
		// this.poster(conf.cover.url);

		// width: 720px; height: 526px;
		var me = this, pX, pY, pW, pH, $p;

		me.storage = null;

		// ----------------

		// conf.adsOptions.isMinuteBlock = true;

		// conf.adsOptions.pre = [
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=a118983a-6133-4728-b303-b1cf8a2dd618&zoneInt=8858&sect=2166&site=2030&rnd=931324853'},
		// 	// {url: 'ads.xml'},
		// 	// {url: 'ads_nobanner.xml'},
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=1874abbc-5470-471a-9480-54b9c5cba17c&zoneInt=8883&sect=2009&site=1559&rnd=736270956'},
			
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=b6f2f9a5-0ae3-439d-a494-65e8b4cff076&zoneInt=8362&sect=2166&site=2030&rnd=763821163'},
		// 	// {url: 'https://oz.foxis.org/ads.php'},
		// 	// {url: 'http://ads.adfox.ru/175105/getCode?p1=beygm&p2=emxn&pfc=a&pfb=a&plp=a&pli=a&pop=a'},
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=94e7c35f-3fc5-4e3a-97c0-c69b0f1c769a&zoneInt=8839&sect=2009&site=1559&rnd=824260880'},
		// 	// {url: 'ads2.xml'}
		// ];

		// conf.adsOptions.afterpaus = [
		// 	{url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=a118983a-6133-4728-b303-b1cf8a2dd618&zoneInt=8858&sect=2166&site=2030&rnd=931324853'},
		// 	// {url: 'ads.xml'},
		// 	// {url: 'ads_wrapper.xml'}
		// ];

		// conf.adsOptions.post = [
		// 	{url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&zone=81092ab3-e109-4368-8aca-2b16f837965b&zoneInt=8927&sect=2166&site=2030&rnd=843133205'},
		// 	// {url: 'ads.xml'},
		// 	// {url: 'ads_wrapper.xml'}
		// ];

		// conf.adsOptions.overlay = [
		// 	{url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&nl=1&zone=4f542717-f910-4b8f-a83b-000bd9c0bce3&zoneInt=9110&sect=2166&site=2030&rnd=818098871'},
		// 	// img
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&nl=1&zone=2c2cce23-1ab1-4ac0-822d-34c54fe15e52&zoneInt=9120&sect=2009&site=1559&rnd=767532985'},

		// 	// scalable
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&nl=1&zone=2b566712-ab97-4968-b5bb-81b1be57bb01&zoneInt=9076&sect=2009&site=1559&rnd=1608732553'},
			
		// 	// non scalable
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&nl=1&zone=ccba33f3-e274-4136-97f0-795f78654738&zoneInt=9077&sect=2009&site=1559&rnd=1165877332'},
		// 	// {url: 'http://inv-nets.admixer.net/dsp.aspx?rct=3&nl=1&zone=2b566712-ab97-4968-b5bb-81b1be57bb01&zoneInt=9076&sect=2009&site=1559&rnd=1608732553'},		
		// ];

		// google an. for player
		me.ga({
			debug: false
		});

		// me.playerState();

		me.trigger('readyStat');		

		// --

		$p = $(this.el());

		var $top_bar = $('<div>', {'class': 'vjs-top-bar'});
		$top_bar.append('<span></span> <div><i class="vjs-collaps"></i><i class="vjs-close"></i><div>');
		$p.append($top_bar);

		setTimeout(function() { $p.focus(); }, 0);

		// --

		if(window.localStorage) {
			me.storage = window.localStorage;

			// pX = me.storage.getItem('pX');
			// pY = me.storage.getItem('pY');

			// pW = me.storage.getItem('pW');
			// pH = me.storage.getItem('pH');

			// pX = pX == null ? 100 : pX;
			// pY = pY == null ? 100 : pY;

			// // --

			// pW = me.storage.getItem('pW');
			// pH = me.storage.getItem('pH');

			// pW = pW == null ? 780 : pW;
			// pH = pH == null ? 440 : pH;

			// // --

			// $p.css({
			// 	top: pY+'px', 
			// 	left: pX+'px', 
			// 	width: pW+'px', 
			// 	height: pH+'px'
			// });
		} 		


		// при рпоигровании музыки пробрасываем через этот контейнер события на видеотег, так как его заслоняет постер;
		var $proxy_l = $('<div>', {'class': 'vjs-proxy-layer'});
		var $proxy_bottom_shadow = $('<div>', {'class': 'vjs-proxy-bottomshadow'});
		$p.find('.vjs-poster').after($proxy_l, $proxy_bottom_shadow);

		this.playlist(conf, startIndex);

		this.tooltip();

		this.hotkeys({
		  volumeStep: 0.1,
		  seekStep: 5,
		  enableMute: true,
		  enableFullscreen: true,
		  enableNumbers: true
		});

		$proxy_l.add($proxy_bottom_shadow).on('click', function() { me[(me.paused() ? 'play': 'pause')](); });

		$top_bar.find('.vjs-close').on('click', function() {
			me.trigger('close');
		});

		$top_bar.find('.vjs-collaps').on('click', function() {
			if(!me.paused() && (me.pl.currentVideo.type != 'audio')) me.pause();
			$p.hide();
			me.trigger('collapse');
		});

		me.on('open', function() {
			if(this.paused()) this.play();
			$(this.el()).show();
		});

		me.on("volumechange", function() {
			if(/^ad\-/.test(me.ads.state)) return;

      		if(me.storage) {
      			me.storage.setItem('vol', me.volume());
      		}
    	});

    	me.on('fullscreenchange', function() {
    		$p.resizable(me.isFullscreen() ? 'disable' : 'enable');
    		$p.draggable(me.isFullscreen() ? 'disable' : 'enable');
    	});

		if(me.storage) {
			var vol = me.storage.getItem('vol') || 0.5;
			me.volume(vol);
		} else {
			me.volume(0.5);
		}

		me.on('close', function() {
			this.dispose();
			// if(!me.paused()) me.pause();
			// $player.hide();
		});

		me.on('error', function() {
			var err = me.error();

			if(err && err.code == 4) {
				$(me.el()).removeClass('vjs-error');
				// if(me.ads && me.ads.state == 'content-playback') {
				// 	me.trigger('adcanceled');
				// 	console.log('try cansel ADS');
				// } else {
					// console.log('try play next');
					// if(conf.playlist.length > 1) me.next();
				// }
				
			} else {
				if(me.ads.state !== 'ad-playback') console.warn(err);
			}
		});

		me.on('play', function() { $(me.el()).removeClass('vjs-error'); });

		me.controlBar.muteToggle.on('click', function() {
			if((me.muted() && !me.volume()) || (!me.muted() && !me.volume())) {
				me.volume(0.25);
				me.muted(false);
				// setTimeout(me.volume.bind(me, 0.25), 1000);
			}
		});

		// --

		var playObj = {
		    from: 'M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26', 
		    to: 'M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28',
		    dur: '0.1s',
		    keySplines: '.4 0 1 1',
		    repeatCount: 1
		};
		
		
		var pausObj = {
		    from: 'M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28', 
		    to: 'M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26',
		    dur: '0.1s',
		    keySplines: '.4 0 1 1',
		    repeatCount: 1
		};

		var $playBtn = $(me.controlBar.playToggle.el());

		var svgPlayString = '<svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
    		    +'<path id="fox-play-svg" d="M 11 10 L 18 13.74 L 18 22.28 L 11 26 M 18 13.74 L 26 18 L 26 18 L 18 22.28">'        
    		        +'<animate attributeType="XML" attributeName="d" fill="freeze"></animate>'      
    		    +'</path>'
    		'</svg>';

    	$playBtn.append(svgPlayString);
    	
    	var svgAnim = $playBtn.find('svg animate');

		me.on('play', function() {
			try {
				svgAnim.attr(pausObj).get(0).beginElement();
			} catch(e) {
				console.log(e.message);
			}
		});

		me.on('pause', function() {
			try {
				svgAnim.attr(playObj).get(0).beginElement();
			} catch(e) {
				console.log(e.message);
			}
		});

		// me.on('setcontent', function() {

		// });

		// ---

		var down = false;		
		
		if(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) {
			me.controlBar.progressControl.on('touchstart', function() { down = true; });

			me.controlBar.progressControl.on('touchend', function() { down = false;  });

			me.controlBar.progressControl.on('touchmove', function(e) {
				if(down) {
					this.seekBar.update();
				}
			});

		} else {
			me.controlBar.progressControl.on('mousedown', function() { down = true; });

			me.controlBar.progressControl.on('mouseup', function() { down = false;  });	
	
			me.controlBar.progressControl.on('mousemove', function(e) {
				if(down) {
					this.seekBar.update();
				}
			});
		}

		// --

		if(conf.adsOptions.afterpaus.length || conf.adsOptions.pre.length) {
			me.adsPreRolls(conf.adsOptions);
		}

		if(conf.adsOptions.overlay.length) {
			me.overlay(conf.adsOptions.overlay);
		}


		$p.draggable({
			handle: '.vjs-top-bar',
			containment: "window",
			stop: function(e,ui) {
				if(me.storage) {
					me.storage.setItem('pX', ui.position.left);
					me.storage.setItem('pY', ui.position.top);
				}
			}
		});	

		$p.resizable({
			minWidth: 455, 
			minHeight: 225,

			stop: function(e,ui) {
				if(me.storage) {
					me.storage.setItem('pW', $p.width());
					me.storage.setItem('pH', $p.height());
				}
			}
		});


		// detect flash follback
    	function isFlashTech() {
        	return $('#' + me.id() + '_flash_api').length ? 1 : 0;
    	}

    	if(isFlashTech()) {
    		me.addClass('vjs-flash-tech');
    		// plugun for note flash follback
			this.flashNote();
    	} else {
    		me.removeClass('vjs-flash-tech');
    	}

	});	// end player ready

	var $player = $(playerInstance.el()).show(), $win = $(window);	
	$player.find('video').show();

	// $win.on('resize', function(event){
	// 	if($(event.target).hasClass('ui-resizable')) return;

	// 	var pW, pH, pX, pY, pos = $player.position(), setX, setY;

	// 	setX = pX;
	// 	setY = pY;

	// 	pW = $player.width();
	// 	pH = $player.height();

	// 	pX = pos.left;
	// 	pY = pos.top;

	// 	if((pX+pW) > $win.width()) {
	// 		setX = 20;
	// 		$player.css('left', setX+'px');
	// 	}

	// 	if((pY+pH) > $win.height()) {
	// 		setY = 20;
	// 		$player.css('top', setY+'px');
	// 	}

	// 	if(playerInstance.storage) {
	// 		playerInstance.storage.setItem('pX', setX);
	// 		playerInstance.storage.setItem('pY', setY);
	// 	}
	// });
	

	// playerInstance.userActive(true);

	if(conf.playlist.length > 1) {

		var plWarpper = playerInstance.createEl('div', {'className': 'vjs-pn-control'});
		var nextBtn = playerInstance.createEl('div', {'className': 'vjs-next-btn'});
		var prevBtn = playerInstance.createEl('div', {'className': 'vjs-prev-btn'});
		
		plWarpper.appendChild(prevBtn);
		plWarpper.appendChild(nextBtn);	
		$player.find('.vjs-fullscreen-control').before(plWarpper);	
	
	
		nextBtn.addEventListener('click', function() {
			playerInstance.next();
		}, false);
	
		prevBtn.addEventListener('click', function() {
			playerInstance.prev();
		}, false);
	
		playerInstance.on('ended', function() {
			console.log('ENDED');
			console.info('%c'+this.ads.state, 'color: #000; background-color: yellow; font-size: 18px');
			if(
				((conf.playlist.length > 1) && (this.ads.state == 'postroll?')) 
				// || !conf.adsOptions.pre.length
				) {

					if(!this.hasClass('vjs-last-playing')) {
						this.next();
						console.info('next media start');
					} else {
						setTimeout(function() {window.clearTimeout(playerInstance.ads._fireEndedTimeout)}, 0);
						console.log('Playlist complited');
					}		

			} else if((conf.playlist.length > 1) &&  (this.ads.state == 'content-playback')) {
				playerInstance.play();
			}
		});

		// var delay = 250,timer = null,clicks = 0;


		// me.on('mousedown', function(event) {
		// 	var self = this;

		//  	clicks++;

		//  	console.log(1);
		
		//  	if(clicks == 1) {
		//  	  timer = setTimeout(function(){
		//  	    clicks = 0;
		
		//  	    if (self.player().controls()) {
		//  	      if (self.player().paused()) {
		//  	        self.player().play();
		//  	      } else {
		//  	        self.player().pause();
		//  	      }
		//  	    }
		
		//  	  }, delay);
		//  	} else {
		//  	  clearTimeout(timer);
		//  	  clicks = 0;
		//  	}
		// });

		// playerInstance.on('adtimeout', function() {
		// 	console.info('%c'+this.ads.state, 'color: #000; background-color: green; font-size: 18px');
		// });

	}

	return playerInstance;
}

// ---

function createCookie(name, value, days) {
	var expires = "";
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}

	var host = window.location.host;

	if(/(:\d+)/.test(window.location.host)) {
		host = window.location.host.split(':')[0];
	}
	
	document.cookie = name + "=" + value + expires + ";domain="+ host +";path=/";
}

function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function isMobile() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
!function(window, document, vjs, undefined) {
	'use strict';

	var player = null, 
		OVERLAY_COUNT = 0, 
		OVERLAY_CURRENT_NUM = 0, 
		OVERLAY_URLS = [], 
		OVERLAY_TIMEOUT, 
		$player, 
		$overlayBlock,
		timeout,
		currentOverlayData;

	function overlay(overlayUrls) {
		if(overlayUrls == undefined) return;

		OVERLAY_URLS = overlayUrls;
		// OVERLAY_COUNT = overlayUrls.length;
		// OVERLAY_CURRENT_NUM = 0,
		player = this;
		$player = $(player.el());
		
		player.on('timeupdate', go);

		player.on('ad:overlayLoad', function() {
			sendEvent(currentOverlayData.vastEvents.creativeView);
		});

		player.on('ad:overlayClose', function() {
			sendEvent(currentOverlayData.vastEvents.skip);
		});
		
	}

	function go() {
		if(/^ad\-/.test(player.ads.state)) return;
		
		var percenr = player.currentTime()/player.duration()*100;
		if(percenr >= 10) {
			requestOverlay(1, OVERLAY_URLS);
			player.off('timeupdate', go);
		}
	}

	function requestOverlay(current, urls) {
		if(current > urls.length) {
			console.log('Overlays is over');
			return;
		}

		vtj(urls[current-1].url).then(function(res) {
			currentOverlayData = res;

			if(res.nobanner) return;

			console.log('overlay ' + (current-1)+ ' start', res);

			startShow(res, current);

			if(res.media.minSuggestedDuration) {
				timeout = setTimeout(function() {
					stopOverlay(current, 'ended', urls);				
				}, res.media.minSuggestedDuration*1000);
			}
		});
	}

	function startShow(overlayData, current) {
		buildOverlay(overlayData.media, overlayData.vastClickThrough, current);
	}

	function buildOverlay(media, clickURL, current) {
		var $clickableLayer, cssParam;
		var $close = $('<i/>', {'class': 'vjs-overlay-mixer-close', text: 'X'});
		$overlayBlock = $('<div/>', {'class': 'vjs-overlay-mixer'});

		cssParam = {
			height: media.height+'px',
		};

		if(media.scalable) {
			$overlayBlock.addClass('vjs-overlay-is-scalable');
		} else {
			cssParam.width = media.width+'px';
		}

		$overlayBlock.css(cssParam);

		if(media.type == 'text/html') {
			$clickableLayer = $('<div/>', {'class': 'vjs-overlay-clickable-layer'});
			var $iframe = $('<iframe/>', {src: media.src, scrolling: 'no', seamless: 'seamless'});
			$overlayBlock.append($iframe);

			$iframe.on('load', function() {
				setTimeout(function() { $overlayBlock.append($close); }, 1500);
				player.trigger('ad:overlayLoad');
			});
		} else {
			$clickableLayer = $('<img/>', {'class': 'vjs-overlay-clickable-layer', src: media.src, alt: 'overlay image'}); 
			player.trigger('ad:overlayLoad');
			setTimeout(function() { $overlayBlock.append($close); }, 2000);
		}

		$overlayBlock.append($clickableLayer);

		// --

		$clickableLayer.on('click', function() {
			window.open(clickURL);
			player.trigger('ad:overlayClick');
		});

		$close.on('click', function() {
			stopOverlay(current, 'close', OVERLAY_URLS);
			player.trigger('ad:overlayClose');
		});

		// --

		$player.append($overlayBlock);
	}

	function stopOverlay(current, reason, urls) {
		clearTimeout(timeout);

		$overlayBlock.remove();

		console.log('overlay ' + (current-1)+ ' end, reason: '+reason);

		requestOverlay(++current, urls);
	}

	function sendEvent(urlsArr) {
		if(urlsArr == undefined) return;
		if(typeof urlsArr == 'string') urlsArr = [urlsArr];
		
		var xhrFields = {withCredentials: false}, $body = $('body');

		$.each(urlsArr, function(n,url){
			var $img = $('<img/>', {
				style:'width: 1px; height: 1px; border: 0;', 
				src:url, 
				alt:'overlay img'
			});

			console.log('img tracking', url);

			$body.append($img);
			
			(function($i) {
				setTimeout(function() {
					$i.remove();
				},3000);
			})($img);

			
		});
	};


	vjs.plugin('overlay', overlay);

}(window, document, videojs);