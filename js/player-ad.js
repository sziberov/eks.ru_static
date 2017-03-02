var player_loaded = false;
var player_visible = false;
var player_info = new Array({ pos: 8, title: 'Zootopia (2016) BDRip 720p.mkv' });
var player_play_auto = 0;
var player_play_auto_index = 0;
var player_play_auto_seek = 0;

var player_ad = 0;
var player_ad_time = 8;
var player_ad_left = 0;
var player_ad_started = false;
var player_ad_interval = null;
var player_ad_js = false;
var player_ad_js_div = null;
var player_ad_js_html = null;
var player_ad_hard_time = 0;
var player_ad_wait = 4;
var player_ad_url_1 = 'http://ads.adfox.ru/175105/getCode?p1=beygs&p2=emxn&pfc=a&pfb=a&plp=a&pli=a&pop=a';
var player_ad_url_2 = 'http://ads.adfox.ru/175105/getCode?p1=brcph&p2=emxn&pfc=a&pfb=a&plp=a&pli=a&pop=a';
var player_ad_url_3 = 'http://ads.adfox.ru/175105/getCode?p1=bktim&p2=emxn&pfc=a&pfb=a&plp=a&pli=a&pop=a';

var player_kids = 'beygs';

var player_in = 0;

var player_init = '"cover": "http://fs155.www.ex.ua/show/260645366/260645366.jpg?1600", ';
var player_list = '{ "type": "video", "url": "http://www.ex.ua/show/260648464/2960f5b5e380d92c6ae166a9cb9e7ce8.mp4" }';

function init_player()
{
	var ar_Keyword = '';
	var player_tags = '';

	if (typeof(hitua) != 'undefined')
	{
		var ar_Gender = new Array('unknown', 'female', 'male');
		var ar_Age = { 0: 'unknown', 14: '1_14', 17: '15_17', 21: '18_21', 25: '22_25', 30: '26_30', 36: '31_36', 41: '37_41', 99: '42_99' };
		
		ar_Keyword = '&puid1=' + ar_Gender[hitua.poll_sex] + '&puid2=' + ar_Age[hitua.poll_age];
		player_tags = '"adGender": "' + ar_Gender[hitua.poll_sex] + '", "adAge": "' + ar_Age[hitua.poll_age] + '", ';
	}
	
	swfobject.embedSWF("/swf/explayer-0.9.37.swf", "player_window", "720", "506", "10", "/swf/expressinstall.swf",
		{
			config: 	escape('{ ' +
						player_init + player_tags +
						(player_in ? '"preroll": "' + player_ad_url_1 + ar_Keyword + '", "preroll2": "' + player_ad_url_2 + ar_Keyword + '", "postPauseroll": "' + player_ad_url_3 + ar_Keyword + '", "adVolumeFactor": 0.25, "adDelay": 60, "adTimeout": 5, "adSkip": 3, "adPauseDelay": 60, "pauseDurationBeforePostpauseRoll": 45, ' : '') +
						(player_play_auto ? '"auto": true, ' : '') +
						(player_play_auto_index ? '"track": ' + player_play_auto_index + ', ' : '') +
						(player_play_auto_seek ? '"seek": ' + player_play_auto_seek + ', ' : '') +
						'"playlist": [ ' + player_list + ' ] ' +
					' }')
		},
		{
			quality:		"high",
			scale:			"noscale",
			allowScriptAccess:	"always",
			allowFullScreen:	"true",
			wmode:			"opaque"
		},
		{
			id:			"player_window"
		}
	);
}

function track_start(index)
{
	var e = document.getElementById('player_title');
	var i = player_info[index];
	if (e && i) e.innerHTML = "<small>" + i['pos'] + ".</small>&nbsp;" + i['title'];
}

function track_finish(index)
{
	var e = document.getElementById('player_title');
	if (e) e.innerHTML = '';
}

function ad_tick_show()
{
	if (player_ad_started)
	{
		var e = document.getElementById('player_tick');
		if (e) e.innerHTML = "Реклама" + (player_ad_left > 0 ? " " + player_ad_left : "") + "...";
	}
}

function ad_tick()
{
	if (player_visible)
	{
		if (player_ad_started || player_ad_left > 1)
		{
			player_ad_left--;
			ad_tick_show();

			if (player_ad_started && player_ad_left < -player_ad_wait) ad_finish();
		}
		else
		{
			ad_finish();
		}
	}
	else
	{
		player_ad_left = player_ad_time;
		ad_tick_show();
	}
}

function ad_response(code, data, user_id)
{
	var e = document.getElementById('player_window');
	if (e && code == "200" && data != "")
	{
		player_ad = 3;
		player_in = 0;

		var found = /\Wvar\s+ad_time\s*=\s*(\d+)\s*;/.exec(data);
		if (found)
		{
			player_ad_hard_time = parseInt(found[1]);

			if (player_ad_hard_time) player_ad_wait = 1;
		}

		found = /^js:(\d+),/.exec(data);
		if (found)
		{
			ad_js_start(parseInt(found[1]), data.substr(found[0].length));

			player_ad_js = true;
		}
		else
		{
			e.innerHTML = data;

			var tick = document.createElement('span');
			tick.id = 'player_tick';
			e.appendChild(tick);
		}

		e = document.getElementById('player_title');
		if (e) e.innerHTML = 'Реклама';

		player_ad_left = player_ad_time;
		ad_tick_show();
		player_ad_interval = setInterval('ad_tick();', 1000);
	}
	else
	{
		player_ad = 0;

		init_player();
		player_loaded = true;
	}
}

function _toggle()
{
	var e = document.getElementById('player');
	if (e) e.style.visibility = player_visible ? 'hidden' : 'visible';

	e = document.getElementById('ad_place_1');
	if (e) e.style.visibility = !player_visible ? 'hidden' : 'visible';

	e = document.getElementById('player_toggle');
	if (e) e.innerHTML = (player_visible ? "показать" : "скрыть") + " проигрыватель";

	player_visible = !player_visible;

	var params = (typeof(hitua) == 'object') ? "?poll=" + hitua.poll_sex + "," + hitua.poll_age + "," + hitua.favor_mask + "," + hitua.country_id + "," + hitua.region_id : '';

	if (player_ad)
	{
		if (player_ad == 1)
		{
			player_ad = 2;
			request('http://www.ex.ua/ad_player/103004334' + params, ad_response, 0);
		}
	}
	else if (player_loaded)
	{
		var e = document.getElementById('player_window');
		if (e)
		{
			e.style.visibility = player_visible ? 'visible' : 'hidden';
			// player_visible ? e.show() : e.hide();
		}
	}
	else
	{
		init_player();
		player_loaded = true;
	}
}

function toggle()
{
	if (!player_loaded)
	{
		player_play_auto = 0;
		player_play_auto_index = 0;
		player_play_auto_seek = 0;
	}

	_toggle();

	return false;
}

function play_index(index)
{
	if (!player_loaded)
	{
		player_play_auto = 1;

		if (index != -1)
		{
			player_play_auto_index = index;
			player_play_auto_seek = 0;
		}

		_toggle();
	}
	else
	{
		if (!player_visible) _toggle();

		var e = document.getElementById('player_window');
		if (e) e.play(index);
	}

	return false;
}

function play(id)
{
	var ispos = (typeof(id) == 'number');
	var index = 0;

	if (!ispos || id > 0)
	{
		for (var i in player_info)
		{
			if ((ispos ? player_info[i].pos : player_info[i].title) == id)
			{
				index = parseInt(i);
				break;
			}
		}
	}

	return play_index(index);
}

function play_auto()
{
	return play_index(-1);
}

function play_online()
{
	return play_index(0);
}

function ad_start(time)
{
	if (!player_ad_started)
	{
		player_ad_started = true;

		player_ad_left = player_ad_hard_time ? player_ad_hard_time : (time ? time : player_ad_time);
		ad_tick_show();
	}
}

function ad_finish()
{
	if (player_ad)
	{
		player_ad = 0;

		clearInterval(player_ad_interval);

		var e = document.getElementById('player_window');
		if (e) e.innerHTML = "";

		if (player_ad_js) ad_js_finish();

		init_player();
		player_loaded = true;
	}
}

function ad_cancel()
{
	ad_finish();

	return false;
}

function ad_js_start(banner_id, html)
{
	player_ad_js_div = document.createElement('div');

	with (player_ad_js_div)
	{
		style.position = 'fixed';
		style.top = 0;
		style.left = 0;
		style.width = '100%';
		style.height = '100%';
		style.zIndex = 100;

		innerHTML = "<div id='flashcontent'></div>";
	}

	document.body.appendChild(player_ad_js_div);

	swfobject.embedSWF("http://b.ex.ua/" + parseInt(banner_id / 10000) + "/" + banner_id + ".swf", "flashcontent", "100%", "100%", "9", "/swf/expressinstall.swf",
		{
			url: 			"http://www.ex.ua/ad_click/" + banner_id
		},
		{
			wmode:			"opaque",
			quality:		"high",
			scale:			"noscale",
			allowScriptAccess:	"always"
		},
		{
		}
	);

	if (html)
	{
		player_ad_js_html = document.createElement('div');

		with (player_ad_js_html)
		{
			style.width = '1px';
			style.height = '1px';

			innerHTML = html;
		}

		document.body.appendChild(player_ad_js_html);
	}
}

function ad_js_finish()
{
	if (player_ad_js_html)
	{
		player_ad_js_html.innerHTML = "";
		document.body.removeChild(player_ad_js_html);
		player_ad_js_html = null;
	}

	if (player_ad_js_div)
	{
		player_ad_js_div.innerHTML = "";
		document.body.removeChild(player_ad_js_div);
		player_ad_js_div = null;
	}
}

if (player_play_auto) onLoadAction.push(play_auto);