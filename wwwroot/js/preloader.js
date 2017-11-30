var Preloader = function() {
	this._ec = [];
	this._dom = {
		preloader: $("#preloader")
	};
	this._addListeners();
};

Preloader.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load", this, "_removePreloader"));
};

Preloader.prototype._removePreloader = function() {
	this._dom.preloader.style.display = "none";
};
