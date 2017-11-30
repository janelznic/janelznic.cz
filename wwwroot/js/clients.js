/**
 * Scrolling for banner with clients logos
 */
var Clients = function(wrapId) {
	this._ec = [];

	var cont = $("#"+wrapId);
	this._dom = {
		wrap: cont,
		strip: $("ul.logos", cont)[0],
		arrLeft: $("ul.nav li a", cont)[0],
		arrRight: $("ul.nav li a", cont)[1]
	};

	/* Current scrolled margin-left position */
	this._currentPosition = 0;

	this._initDimensions();
	this._addListeners();
};

Clients.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "resize", this, "_initDimensions"));
	this._ec.push($.addListener(this._dom.arrLeft, "click", this, "_scrollLeft"));
	this._ec.push($.addListener(this._dom.arrRight, "click", this, "_scrollRight"));
};

Clients.prototype._initDimensions = function() {
	/* One offset count pixels */
	this._scrollNum = this._dom.wrap.offsetWidth / 2;

	/* How many pixels are maximum for scrolling */
	this._maxScroll = (this._dom.strip.offsetWidth) * -1;
};

Clients.prototype._scrollLeft = function(e) {
	$.cancelEvent(e);

	var setPosition = this._currentPosition + this._scrollNum;
	if (setPosition > 0) { return; }
	this._currentPosition = setPosition;
	this._dom.strip.style.marginLeft = setPosition + "px";
};

Clients.prototype._scrollRight = function(e) {
	$.cancelEvent(e);

	var setPosition = this._currentPosition - this._scrollNum;
	if (setPosition < this._maxScroll) { return; }
	this._currentPosition = setPosition;
	this._dom.strip.style.marginLeft = setPosition + "px";
};
