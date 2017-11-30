var PageScroll = function() {
	this._startPos;
	this._endPos;
	this._numerator;
	this._lastActiveSection = false;

	/* Event cache */
	this._ec = [];

	this._init();
	this._addListeners();
};

PageScroll.prototype._init = function() {
	/* DOM nodes */
	this._dom = {
		menu: $("#menu"),
		menuItems: $("#menu li"),
		menuItemsLink: $("#menu li a"),
		sections: $("section.scrollable")
	};

	var scrollableLinks = $('[data-link="scroll"]');
	for (var i=0; scrollableLinks.length>i; i++) {
		this._dom.menuItemsLink.push(scrollableLinks[i]);
	}

	this._sectionsId = [];
	for (var i=0; this._dom.sections.length>i; i++) {
		this._sectionsId.push(this._dom.sections[i].id);
	}
};

PageScroll.prototype._addListeners = function() {
	this._ec.push($.addListener(window, "scroll", this, "_scroll"));
	this._ec.push($.addListener(window, "scroll load", this, "_changeActiveSection"));
	for (var i=0; this._dom.menuItemsLink.length>i; i++) {
		this._ec.push($.addListener(this._dom.menuItemsLink[i], "click", this, "_goTo"));
	}
};

PageScroll.prototype._clearMenuActiveItems = function() {
	for (var i=0, len=this._dom.menuItems.length; len>i; i++) {
		$.removeClass(this._dom.menuItems[i], "active");
	}
};

PageScroll.prototype._changeActiveSection = function() {
	var posY = window.pageYOffset;

	/* Active last section when scrolled to bottom of page */
	if ((window.innerHeight + posY) >= document.body.offsetHeight) {
		this._clearMenuActiveItems();
		$.addClass(this._dom.menuItems[this._dom.menuItems.length-1], "active");
		return;
	}

	/* Highlight active section */
	var i=0, currentSectionId;
	for (var section in this._dom.sections) {
		section = this._dom.sections[section];
		if (posY >= section.offsetTop) {
			this._clearMenuActiveItems();
			currentSectionId = section.id;
			$.addClass(this._dom.menuItems[i], "active");
		}
		i++;
	}
	if (currentSectionId != this._lastActiveSection) {
		this._lastActiveSection = currentSectionId;
		if(posY && history.pushState) {
			history.pushState(null, null, "#" + currentSectionId);
		}
	}
};

PageScroll.prototype._goTo = function(e, elm) {
	if ($.getPlatform() == "android" || $.getPlatform() == "blackberry") { return; }

	if (e) { $.cancelEvent(e); }

	var sectionId = elm.href.split("#")[1];
	this._scrollToPos(this._dom.sections[this._sectionsId.indexOf(sectionId)].offsetTop);
};

PageScroll.prototype._scroll = function(e, elm) {
	
};

PageScroll.prototype._scrollToPos = function(endPos) {
	var startPos = window.pageYOffset;
	this._startPos = startPos;
	this._endPos = endPos;

	var length = startPos > endPos ? startPos - endPos : endPos - startPos;
	this._numerator = Math.round(length / 25);

	this._scrollPix();
};

PageScroll.prototype._scrollPix = function() {
	if (this._endPos > this._startPos) {
		this._startPos += this._numerator;
		if (this._startPos > this._endPos) {
			window.scrollTo(0, this._endPos);
			return;
		}
	} else {
		this._startPos -= this._numerator;
		if (this._startPos < this._endPos) {
			window.scrollTo(0, this._endPos);
			return;
		}
	}
	window.scrollTo(0, this._startPos);
	setTimeout(this._scrollPix.bind(this), 10);
};
