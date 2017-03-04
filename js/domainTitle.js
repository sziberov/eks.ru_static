/*
** domainTitle.js
**
** (c) kayover
*/

if (document.title == '') {
	document.title += "EKS.RU";
}
else {
	if(window.location.href.indexOf("/software/") > -1) {
		document.title += " - Программы @ EKS.RU";
	}
	else {
		document.title += " @ EKS.RU";
	}
}