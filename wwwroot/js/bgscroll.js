/**
 * Getting all elements with class ".bgscroll" and applies background scrolling effect
 * Elements with class ".bgfixed" have fixed background during the page is scrolling down
 */
var BgScroll = function() {
	/* Disable all background scrolling effect on mobile devices due to performance */
	if ($.getDevice("device") != "desktop"
		|| ($.getDevice("device") != "desktop" && $.getClient() != "ie")
		|| $.getPlatform() == "ios"
		|| $.getPlatform() == "android"
		|| $.getPlatform() == "blackberry"
	) { return false; }

	this._ec = [];
	if ($.getClient() == "chrome") {
		this._dom = { img: $(".bgscroll.strip") };
	} else {
		this._dom = { img: $(".bgscroll") };
	}
	this._props = [];
	this._addListeners();
};

BgScroll.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "load resize", this, "_init"));
	this._ec.push($.addListener(window, "scroll", this, "_scroll"));
};

BgScroll.prototype._init = function() {
	for (var i=0, elm, imgBg, len=this._dom.img.length; len>i; i++) {
		elm = this._dom.img[i];
		imgBg = new Image();

		var bgString = $.getStyle(elm, "background-image").split('"');
		for (var j=0, len2=bgString.length, bgUrlSet=[]; len2>j; j++) {
			if (bgString[j].substring(0, 4) == "http") {
				bgUrlSet.push(bgString[j]);
			}
		}
		imgBg.src = bgUrlSet[bgUrlSet.length-1];

		var params = {
			startPos: elm.offsetTop,
			endPos: elm.offsetTop + elm.offsetHeight,
			maxScrollPos: (imgBg.height / imgBg.width * window.innerWidth - elm.offsetHeight) * -1
		};
		this._props.push(params);
	}
	this._scroll();
};

BgScroll.prototype._scroll = function() {
	var pageY = window.pageYOffset;
	var topEdge = pageY;
	var bottomEdge = pageY + window.innerHeight;

	for (var i=0, len=this._props.length, props, elm, val, startPos, scrollPos; len>i; i++) {
		props = this._props[i];
		startPos = props.startPos;
		if (bottomEdge > startPos || topEdge >= startPos) {
			scrollPos = bottomEdge - startPos;
			elm = this._dom.img[i];
			if (elm) {
				if ($.hasClass(elm, "bgfixed")) {
					if (elm.offsetTop < window.innerHeight) {
						val = "center " + pageY + "px";
					} else {
						val = "center " + ((startPos ? topEdge : bottomEdge) - props.startPos) + "px";
					}
				} else {
					scrollPos = scrollPos / 3 * -1;
					if (scrollPos <= props.maxScrollPos) {
						val = "center " + props.maxScrollPos + "px";
					} else {
						val = "center " + scrollPos + "px";
					}
				}
				elm.style.backgroundPosition = val;
			}
		}
	}
};
