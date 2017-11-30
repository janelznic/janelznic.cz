var Menu = function() {
	this._ec = [];
	var container = $("header")[0];
	this._dom = {
		triple: $(".triple", container)[0],
		header: container,
		nav: $("header nav", container)[0],
		links: $("header nav ul li a", container)
	};

	this._addListeners();
};

Menu.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load resize", this, "_init"));
	this._ec.push($.addListener(window, "scroll", this, "_toggleSize"));
	this._ec.push($.addListener(this._dom.triple, "click", this, "_toggleOpen"));
	for (var i=0; this._dom.links.length>i; i++) {
		this._ec.push($.addListener(this._dom.links[i], "click", this, "_close"));
	}
};

Menu.prototype._init = function(e, elm) {
	var device = $.getDevice("device");
	if (device == "tablet" || device == "mobile") {
		this._close();
	} else {
		this._dom.nav.style.display = "block";
	}
};

Menu.prototype._toggleSize = function(e, elm) {
	if (elm.pageYOffset) {
		$.addClass(this._dom.header, "scroll");
	} else {
		$.removeClass(this._dom.header, "scroll");
	}
};

Menu.prototype._toggleOpen = function(e, elm) {
	if (e) { $.cancelEvent(e); }

	if ($.hasClass(elm, "active")) {
		this._close();
	} else {
		this._open();
	}
};

Menu.prototype._open = function() {
	this._dom.nav.style.display = "block";
	setTimeout(function(){
		$.addClass(this._dom.triple, "active");
		$.addClass(this._dom.nav, "active");
	}.bind(this), 10);
};

Menu.prototype._close = function() {
	$.removeClass(this._dom.triple, "active");
	$.removeClass(this._dom.nav, "active");
	setTimeout(function(){
		var device = $.getDevice("device");
		if (device == "tablet" || device == "mobile") {
			this._dom.nav.style.display = "none";
		}
	}.bind(this), 10);
};
