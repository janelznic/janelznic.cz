var FlashMessage = function() {
	this._ec = [];

	this._showInt = 3000;

	this._dom = {
		wrap: $("#flashMessage"),
		text: $("#flashMessage p")[0]
	};

	this._ec.push($.addListener(this._dom.wrap, "click", this, "_hide"));
	this._ec.push($.addListener(window, "scroll", this, "_hide"));
};

FlashMessage.prototype.show = function(type, text) { this._show(type, text); };
FlashMessage.prototype.hide = function() { this._hdie(); };

FlashMessage.prototype._show = function(type, text) {
	this._dom.text.innerHTML = text;

	$.addClass(this._dom.wrap, type);
	$.addClass(this._dom.wrap, "show");

	setTimeout(this._hide.bind(this), this._showInt);
};

FlashMessage.prototype._hide = function() {
	$.removeClass(this._dom.wrap, "show");
	$.removeClass(this._dom.wrap, "error");
	$.removeClass(this._dom.wrap, "ok");
};
