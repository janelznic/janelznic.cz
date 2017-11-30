var Preview = function(json) {
	this._ec = [];
	var cont = $("#popUpCont");
	this._dom = {
		wrap: cont,
		bg: $("#popUpBg"),
		button: $("#closePopUp"),
		img: $("#popUpImg"),
		links: $('a[data-popup="image"]'),
		title: $("h4", cont)[0],
		lines: $(".info ul li b", cont),
		description: $(".info p.description", cont)[0],
		link: $(".info p.description a .text", cont)[0],
		ftext: $(".info p.description .ftext", cont)[0]
	};
	this._json = json;

	this._addListeners();
};

Preview.prototype._addListeners = function() {
	for (var i=0, len=this._dom.links.length; len>i; i++) {
		this._ec.push($.addListener(this._dom.links[i], "click", this, "_open"));
	}
	this._ec.push($.addListener(this._dom.button, "click", this, "_close"));
	this._ec.push($.addListener(this._dom.bg, "click", this, "_close"));
	this._ec.push($.addListener(window, "keydown", this, "_keydown"));
};

Preview.prototype._open = function(e, elm) {
	if (e) { $.cancelEvent(e); }

	this._dom.wrap.style.top = window.pageYOffset + 50 + "px";

	var data = this._json[elm.getAttribute("data-refId")];

	this._dom.title.innerHTML = data.title || "-";
	this._dom.img.src = elm.href;
	this._dom.lines[0].innerHTML = data.client || "-";
	this._dom.lines[1].innerHTML = data.scope || "-";
	this._dom.lines[2].innerHTML = data.technologies || "-";
	this._dom.lines[3].innerHTML = data.date || "-";
	this._dom.lines[4].innerHTML = data.length || "-";
	this._dom.description.innerHTML = data.description || "";

	if (data.link[0]) {
		this._dom.link.parentNode.style.display="block";
		this._dom.link.parentNode.href=data.link[0];
		this._dom.link.innerHTML=data.link[0];
		this._dom.ftext.style.display="none";
		this._dom.ftext.innerHTML="";
	} else {
		this._dom.link.parentNode.style.display="none";
		this._dom.link.parentNode.href="#";
		this._dom.link.innerHTML="";
		this._dom.ftext.style.display="block";
		this._dom.ftext.innerHTML=data.link[1];
	}

	$.addClass(this._dom.bg, "active");
	$.addClass(this._dom.wrap, "active");
};

Preview.prototype._close = function(e, elm) {
	if (e) { $.cancelEvent(e); }
	$.removeClass(this._dom.bg, "active");
	$.removeClass(this._dom.wrap, "active");
};

Preview.prototype._keydown = function(e, elm) {
	if (e) { if (e.keyCode == 27) { this._close(); } }
};
