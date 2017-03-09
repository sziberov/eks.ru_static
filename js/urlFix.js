/*
** urlFix.js
**
** (c) kayover
*/

function urlFix() {
	var link = window.location.host + window.location.pathname;
	var url = link.slice(0, -5);
	window.history.replaceState( null, url );
};

urlFix();