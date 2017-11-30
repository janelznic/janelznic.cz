var Debugger = function() {
	this._ec = [];
	this._winDimensions;

	this._addListeners();
};

Debugger.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load", this, "_buildDOM"));
	this._ec.push($.addListener(window, "resize", this, "_showDimensions"));
};

Debugger.prototype._buildDOM = function() {
	this._winDimensions = $.cel("div", {}, {
		position:"fixed",
		top:0, right:0,
		fontSize:"10px",
		padding:"3px 5px",
		background:"blue", color:"#FFF",
		zIndex:999999999
	});
	//document.body.appendChild(this._winDimensions);
	document.body.insertBefore(this._winDimensions, document.body.childNodes[0]);
	this._showDimensions();
};

Debugger.prototype._showDimensions = function() {
	this._winDimensions.innerHTML = window.innerWidth + "*" + window.innerHeight + "px";
};
