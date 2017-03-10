/*
** footer_404.js
**
** (c) kayover
*/

document.write('<div id="footer">');

$.get("./footer_404.html", function(data){
	$("#footer").replaceWith(data);
});
