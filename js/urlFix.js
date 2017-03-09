/*
** urlFix.js
**
** (c) kayover
*/

function urlFix() {
	var link = window.location.href;
	link.split('.html')[0];
	window.history.replaceState( null, null, link );
};

urlFix();