




/*
     FILE ARCHIVED ON 6:40:09 июл 24, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 7:20:27 янв 2, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
** /web/20120724064009/http://ex.ua/js/request.js
**
** (c) bymer
*/

var r_request = null;
var r_first = null;
var r_queue = new Array();

function request_action()
{
	if (r_request.readyState == 4)
	{
		if (r_first != null)
		{
			r_first['handler'](r_request.status, r_request.responseText, r_first['user_id']);
			r_first = null;
		}

		request_next();
	}
}

function request_create()
{
	if (window.XMLHttpRequest)
	{
        	return new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}

	return null;
}

function request_url(url, params)
{
	r_request = request_create();

	if (r_request)
	{
		r_request.onreadystatechange = request_action;

		if (params)
		{
			var body = '';
			for (var name in params)
			{
				body += (body.length ? "&" : "") + name + '=' + encodeURIComponent(params[name]);
			}

			r_request.open("POST", url, true);
			r_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			r_request.setRequestHeader("Content-Length", body.length);
			r_request.setRequestHeader("Connection", "close");
			r_request.send(body);
		}
		else
		{
			r_request.open("GET", url, true);
			r_request.send(null);
		}
	}
}

function request_next()
{
	if (r_first == null)
	{
		if (r_queue.length > 0)
		{
			r_first = r_queue.shift();

			request_url(r_first['url'], r_first['params']);
		}
	}
}

function request(url, handler, user_id)
{
	r_queue.push({
		url	: url,
		handler	: handler,
		user_id	: user_id
	});

	request_next();
}

function request_post(url, params, handler, user_id)
{
	r_queue.push({
		url	: url,
		params	: params,
		handler	: handler,
		user_id	: user_id
	});

	request_next();
}
