/*
** main.js
**
** (c) bymer
*/

var onLoadAction = new Array();

function browseShortcut(event)
{
	if (!document.getElementById) return;
	if (window.event) event = window.event;
	if (event.ctrlKey)
	{
		var code = event.keyCode ? event.keyCode : event.which ? event.which : null;
		var id = '';
		switch (code)
		{
			case 37:
				id = 'browse_prev';
				break;
			case 38:
				id = 'browse_up';
				break;
			case 39:
				id = 'browse_next';
				break;
			case 40:
				id = 'browse_down';
				break;
		}
		if (id)
		{
			var link = document.getElementById(id);
			if (link && link.href) document.location = link.href;
		}
	}			
}

document.onkeydown = browseShortcut;

function tr0()
{
	this.className = 'tr0';
}
function tr1()
{
	this.className = 'tr1';
}
function tr2()
{
	this.className = 'tr2';
}
function initMouseOver()
{
	var c = document.getElementsByTagName('tr');
	for (var i = 0; i < c.length; i++)
	{
		if (c[i].className == "tr0" || c[i].className == "tr1")
		{
			c[i].onmouseover = tr2;
			c[i].onmouseout = c[i].className == "tr0" ? tr0 : tr1;
		}
	}
}
function initImg()
{
	var c = document.getElementsByTagName('img');
	for (var i = 0; i < c.length; i++)
	{
		if (c[i].alt != "" && c[i].title == "")
		{
			c[i].title = c[i].alt;
		}
		else if (c[i].alt == "" && c[i].title != "")
		{
			c[i].alt = c[i].title;
		}
	}
}

var hitua_counter;
function counterDone()
{
	setTimeout("counterLoad()", 1000);
}
function counterLoad()
{
	hitua_counter = new Image(88, 31);
	hitua_counter.onload = counterDraw;
	hitua_counter.src = 'http://c.hit.ua/hit?i=2&x=1&nc=1&' + Math.random();
}
function counterDraw()
{
	var e = document.getElementById('hitua_counter');
	if (e)
	{
		e.src = hitua_counter.src;
	}
}

function initBody()
{
	initMouseOver();
	initImg();

	if (typeof(time_diff) != 'undefined') timeUpdate();

	for (var i in onLoadAction)
	{
		(onLoadAction[i])();
	}
}

function tableAddData(t_id, t_align, t_data)
{
	var align = t_align.split(',');
	var count = t_id.rows.length;
	var rows = t_data.split(';');
	for (var i = 0; i < rows.length; i++)
	{
		var cells = rows[i].split(',');
		var r = t_id.insertRow(count);
		count++;

		r.className = "tr" + (count % 2);
		r.onmouseover = tr2;
		r.onmouseout = r.className == "tr0" ? tr0 : tr1;

		for (var j = 0; j < cells.length; j++)
		{
			var c = r.insertCell(j);
			if (align[j] != '') c.align = align[j];
			c.innerHTML = unescape(cells[j]);
		}
	}
}

function fn(n)
{
	n = n + '';
	var r = '';
	while(n.length > 3)
	{
		r = ',' + n.substr(n.length - 3, 3) + r;
		n = n.substr(0, n.length - 3);
	}
	return n + r;
}

function toHtml(s)
{
	var div  = document.createElement('div');
	var text = document.createTextNode(s);
	div.appendChild(text);

	return div.innerHTML;
}

function captchaRefresh(captcha_id)
{
	var e = document.getElementById('captcha');
	if (e) e.src = '/captcha?captcha_id=' + captcha_id + '&' + Math.random();
	return false;
}

function tzr(x)
{
	return ":" + (x > 9 ? x : "0" + x);
}

function timeUpdate()
{
	var e = document.getElementById('g_time');
	if (e)
	{
		var now = new Date();
		now.setTime(now.getTime() - time_diff);

		e.innerHTML = now.getHours() + tzr(now.getMinutes()) + tzr(now.getSeconds());

		setTimeout("timeUpdate()", 1000);
	}
}

function hintOpen(id)
{
	var e0 = document.getElementById('hint' + id + 'button');
	var e1 = document.getElementById('hint' + id);

	if (e0 && e1)
	{
		e0.style.display = 'none';
		e1.style.display = 'inline';
	}
}

function hintClose(id)
{
	var e0 = document.getElementById('hint' + id + 'button');
	var e1 = document.getElementById('hint' + id);

	if (e0 && e1)
	{
		e1.style.display = 'none';
		e0.style.display = 'inline';
	}
}

function play(id)
{
	return void(0);
}
