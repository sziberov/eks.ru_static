/*
** header_404.js
**
** (c) kayover
*/

$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
	options.async = true;
});
document.write('<div id="header">');

$.get("http://eks.my1.ru/header_404.html", function(data){
	$("#header").replaceWith(data);
});