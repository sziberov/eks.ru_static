/*
** time.js
**
** (c) kayover
*/

//(function () {
//    function checkTime(i) {
//        return (i < 10) ? "0" + i : i;
//    }
//
//    function startTime() {
//        var today = new Date(),
//            h = checkTime(today.getHours()),
//            m = checkTime(today.getMinutes()),
//            s = checkTime(today.getSeconds());
//        document.getElementById('time').innerHTML = h + ":" + m /*+ ":" + s*/;
//        t = setTimeout(function () {
//            startTime()
//        }, 500);
//    }
//    startTime();
//})();


function checkTime(i) {
	return (i < 10) ? "0" + i : i;
};

function calcTime(city, offset) {
	d = new Date();
	utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	nd = new Date(utc + (3600000*offset)),
		h = checkTime(nd.getHours()),
		m = checkTime(nd.getMinutes()),
		s = checkTime(nd.getSeconds());
	return nd.toLocaleString();
};

function timeKiev() {
	calcTime('Kiev', '+2');
	document.getElementById('timeKiev').innerHTML = "Киев " + h + ":" + m /*+ ":" + s*/;
};
	
function timeMoscow() {
	calcTime('Moscow', '+3');
	document.getElementById('timeMoscow').innerHTML = "Москва " + h + ":" + m /*+ ":" + s*/;
};

function checkIeStartTime() {
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
	{
		setInterval(timeKiev, 10);
		setInterval(timeMoscow, 10);
	}
	else
	{
		setInterval(timeKiev, 0);
		setInterval(timeMoscow, 0);
	}
};

checkIeStartTime();