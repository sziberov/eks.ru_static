/*
** footer.js
**
** (c) kayover
*/

document.write('<div id="footer">');

$.get("./footer.html", function(data){
	$("#footer").replaceWith(data);
});
