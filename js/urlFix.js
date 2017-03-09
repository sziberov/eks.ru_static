/*
** urlFix.js
**
** (c) kayover
*/

function urlFix() {
	var link = window.location.href;
	link.slice(0, -5);
	window.history.replaceState( null, null, link );
};

urlFix();