/*
** header.js
**
** (c) kayover
*/

/*
(function() {
	var scriptEls = document.getElementsByTagName( 'script' );
	var thisScriptEl = scriptEls[scriptEls.length - 1];
	var scriptPath = thisScriptEl.src;
	var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' )+1 );
	var root = scriptFolder.substring(0, scriptFolder.lastIndexOf('js/'));

	$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
		options.async = true;
	});
	document.write('<div id="header">');

	$.get(root + "header.html", function(data){
		$("#header").replaceWith(data);
	});
})();
*/

$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
	options.async = true;
});
document.write('<div id="header">');

$.get("./header.html", function(data){
	$("#header").replaceWith(data);
});