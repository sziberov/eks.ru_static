/*
** domainTitle.js
**
** (c) kayover
*/

if (document.title == '') {
	document.title += "EKS.RU";
}
else {
	if(window.location.href.indexOf("software") > -1) {
		if(location.pathname.substr(location.pathname.lastIndexOf("/")+1) == 'index.html') {
			document.title += " @ EKS.RU";
		}
		else {
		document.title += " - Программы @ EKS.RU";
		}
	}
	else {
		document.title += " @ EKS.RU";
	}
}