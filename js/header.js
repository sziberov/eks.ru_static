/*
** header.js
**
** (c) kayover
*/

$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
	options.async = true;
});
document.write('<div id="header">');

$.get("./header.html", function(data){
	$("#header").replaceWith(data);
});