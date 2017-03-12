/*
** footer_404.js
**
** (c) kayover
*/

document.write('<div id="footer">');

$.get("http://eks.my1.ru/footer_404.html", function(data){
	$("#footer").replaceWith(data);
});
