var viewer_visible = false;
var viewer_image = new Image();
var viewer_image_loaded = false;
var viewer_dpr = (window.devicePixelRatio || 1);

var picture_next = 0;

viewer_image.onload = viewer_show;

function viewer_show()
{
	viewer_image_loaded = true;

	var src = viewer_image.src;
	var w = viewer_image.width;
	var h = viewer_image.height;

	if (viewer_dpr > 1)
	{
		w = (Math.floor(w / 2) || 1);
		h = (Math.floor(h / 2) || 1);
	}

	var v = document.getElementById('viewer');
	if (v)
	{
		v.style.width = (w > 120 ? w : 120) + 'px';
		v.style.height = h + 'px';
	}

	var i = document.getElementById('viewer_img');
	if (i)
	{
		i.src = src;
		i.width = w;
		i.height = h;
	}

	if (v)
	{
		v.style.visibility = 'visible';
		viewer_visible = true;
	}
}

function viewer_hide()
{
	var e = document.getElementById('viewer');
	if (e)
	{
		e.style.visibility = 'hidden';
		viewer_visible = false;
	}
}

function view(a, id)
{
	picture_next = id + 1;

	if (viewer_image.src == a.href)
	{
		if (viewer_image_loaded) viewer_visible ? viewer_hide() : viewer_show();
	}
	else
	{
		if (viewer_visible)
		{
			var e = document.getElementById('viewer');
			if (e) e.style.visibility = 'hidden';

			viewer_visible = false;
		}

		viewer_image_loaded = false;
		viewer_image.src = a.href;
	}

	return false;
}

function view_next()
{
	var a = document.getElementById('picture_' + picture_next);
	a ? view(a, picture_next) : viewer_hide();
}

function view_close(e)
{
	viewer_hide();

	if (e.stopPropagation)
		e.stopPropagation();
	else
		e.cancelBubble = true;
}