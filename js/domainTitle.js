/*
** domainTitle.js
**
** (c) kayover
*/

if (document.title == '') {
	document.title += "EKS.RU";
}
else {
	if (document.getElementById("domain-software")) {
		document.title += " - Программы @ EKS.RU";
	}
	else {
		document.title += " @ EKS.RU";
	}
}