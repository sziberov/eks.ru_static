var c_bl = $('.fox_collapse_bl'), p;
var $poster = $('#poster');

function clickPlayer(index, auto) {
	var move = false;

	if(player_kids == 'beygs') {
		// is kids;
		player_conf.adsOptions.isMinuteBlock = false;
		player_conf.adsOptions.pre = player_conf.adsOptions.post = player_conf.adsOptions.afterpaus = [{url: kids_vast_url + (auto ? '&novpaid=1' : '')}];
	} else {
		if (auto) requestJSON.ext.novpaid = '1';
		else delete requestJSON.ext.novpaid;
	}

	// player_conf.adsOptions.pre = player_conf.adsOptions.post = player_conf.adsOptions.afterpaus = player_conf.adsOptions.overlay = [];

	if(typeof p === 'object') {
		if(p.el()) {
			p.byIndex(index);
		} else {
			p = initPlayer('fox_player', player_conf, index);
			move = true;
			p.on('collapse', function() {
				c_bl.show();
			});
		}	
	} else {
		p = initPlayer('fox_player', player_conf, index);
		move = true;
		p.on('collapse', function(e) {
			c_bl.find('span').text(this.pl.currentVideo.title);
			c_bl.show();
		});
	}

	p.trigger('open');	
	c_bl.hide();

	if (move && p.el()) {
		var $p = $(p.el());
		//if ($p.length && $poster.length) {
		//	var o = $poster.offset();
		//	var $w = $(window);
		//	o.top += $w.scrollTop();
		//	o.left += $w.scrollLeft();
		//	$p.offset(o);
		//}
	}
}

$(document).on('click', '.fox-play-btn', function() {
	clickPlayer($(this).data('index'), false);
});

$('.fox_expand_player').on('click', function() {
	c_bl.hide();
	p.trigger('open');
});

$('.fox_close_player').on('click', function() {
	c_bl.hide();
	p.trigger('close');
});

// --

var no_cats = false;
	
!function() {
	'use strict';

	var i = getIndexFromHash();

	if(i) {
		setTimeout(function() {
			$('.fox-play-btn[data-index="'+i+'"]').click();
		}, 1000);
	}

	if(getDevOn()) createCookie('tid', '100');
	if(getDevOff()) createCookie('tid', '');

	$(window).on('hashchange', function() {
		var i = getIndexFromHash();
		if(i) $('.fox-play-btn[data-index="'+i+'"]').click();
		try {
			p.userActive(true);
		} catch(e) { console.warn(e.message); }
		
	});

	function getIndexFromHash() {
		var hash = /^#i(\d+)$/.exec(window.location.hash), index;

		if(hash) {
			index = hash[1];
			console.log('index', index);
	
			return index;
		}

		return null;
	}


	function getDevOn() {
		var hash = /^#(devon)$/.exec(window.location.hash), index;

		if(hash) {
			index = hash[1];
			console.log('index', index);
			return index;
		}

		return null;
	}

	function getDevOff() {
		var hash = /^#(devoff)$/.exec(window.location.hash), index;

		if(hash) {
			index = hash[1];
	
			return index;
		}

		return null;
	}
	
//		if ($poster.length && !p) {
//		var hd_ratio = 1080 / 1920;
//		var first_video_ratio = 0.5;
//		player_conf.width = $poster.width();
//		player_conf.height = $poster.width() * (first_video_ratio >= hd_ratio && first_video_ratio <= 1 ? first_video_ratio : hd_ratio);
//		no_cats = true;
//		clickPlayer(0, true);
//	}
}();