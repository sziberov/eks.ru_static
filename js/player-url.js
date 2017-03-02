	var newPlaylist = [], curList = [{ "type": "video", "url": "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" }], newInfo = [{ pos: 8, title: 'VfE_html5.mp4' }];

	$.each(curList, function(n,el) {
		newPlaylist.push({title: newInfo[n].title, src: el.url, type: el.type});
	});

	var vjsCover = {"cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/724px-Big_buck_bunny_poster_big.jpg", };

	var kids_vast_url = '';

	var player_conf = {
		cover: {url: vjsCover.cover},
		// playlist: [
		// 	{ "title": "jailhouse rock", "type": "video", "src": "http://www.ex.ua/get/188017556"},
		// 	{ "title": "jailhouse rock", "type": "video", "src": "http://www.ex.ua/test_player/data/jailhouse.mp4"}
		// ],
		playlist: newPlaylist,
		techOrder: ['html5', 'flash'],
		adsOptions: {
			isMinuteBlock: true,

			pre: [],

			post: [
				{url: ''}
			],
			
			afterpaus: [
				{url: ''}
			],

			overlay: [
				{url: ''}
			],

			debug: false,
			timeout: 2000,
			prerollTimeout: 2000
		}
	};