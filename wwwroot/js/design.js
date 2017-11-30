var Design = function() {
	this._ec = [];
	this._dom = {
		sections: $("section.fullhght")
	};

	this._addListeners();
};

Design.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load resize", this, "_calcProps"));
	this._ec.push($.addListener(window, "scroll", this, "_scroll"));
};

Design.prototype._calcProps = function() {
	for (i=0, len=this._dom.sections.length; len>i; i++) {
		if (this._dom.sections[i].offsetHeight <= window.innerHeight) {
			this._dom.sections[i].style.height = window.innerHeight + "px";
		}
	}
};

Design.prototype._scroll = function() {
	
};
