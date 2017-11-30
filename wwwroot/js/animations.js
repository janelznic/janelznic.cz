var Animations = function() {
	this._ec = [];
	this._dom = { elms: $(".animated") };
	this._addListeners();
};

Animations.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load", this, "_removeAnimations"));
};

Animations.prototype._removeAnimations = function() {
	for (var i=0, elm; this._dom.elms.length>i; i++) {
		elm = this._dom.elms[i];
		if (!$.hasClass(elm, "always-animated")) {
			$.removeClass(elm, "animated");
		}
	}
};
