var ContactForm = function(flashMessage, elmsId) {
	this._ec = [];
	this._dom = {};
	this._obj = { flashMessage: flashMessage };

	this._elmsId = {
		form: "contactForm",
		name: "name",
		email: "email",
		message: "message",
		button: "sendButton"
	};

	/* Define XHR Object */
	this._requestObj = false;
	if (window.XMLHttpRequest) {
		this._requestObj = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		this._requestObj = new ActiveXObject("Microsoft.XMLHTTP");
	}

	/* Is this form submitted anytime? */
	this._submitted;

	for (var id in elmsId) {
		this._elmsId[id] = elmsId[id];
	}

	for (var id in this._elmsId) {
		this._dom[id] = $.gel(this._elmsId[id]);
	}

	this._fields = ["name", "email", "message"];

	this._addListeners();
};

ContactForm.prototype._addListeners = function() {
	this._ec.push($.addListener(this._dom.form, "submit", this, "_submit"));
	for (var i=0; this._fields.length>i; i++) {
		this._ec.push($.addListener(this._dom[this._fields[i]], "change keypress", this, "_contentChanged"));
	}
	this._ec.push($.addListener(this._dom.message, "change keydown keypress keyup mouseover mouseout click", this, "_textAreaFontSize"));
};

ContactForm.prototype._submit = function(e, elm) {
	if (e) { $.cancelEvent(e); }

	this._submitted = 1;

	this._checkFields(this._fields);
};

ContactForm.prototype._checkFields = function(fields) {
	for (var i=0, field; fields.length>i; i++) {
		field = this._dom[fields[i]];
		$.removeClass(field, "err");
		if (!field.value) {
			var empty = 1;
			$.addClass(field, "err");
		}
	}

	if (empty) { this._obj.flashMessage.show("error", Dict.form.errEmpty); return; }

	this._sendForm();
};

ContactForm.prototype._sendForm = function() {
	var params = "name=" + this._dom.name.value
		+ "&email=" + this._dom.email.value
		+ "&code=" + "idclip"
		+ "&message=" + this._dom.message.value;
	this._AJAXrequest(this._dom.form.action, params);
};

ContactForm.prototype._AJAXrequest = function(url, params) {
	if (this._requestObj) {
		this._requestObj.open("POST", url, true);
		this._requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		this._requestObj.setRequestHeader("Content-length", params.length);
		this._requestObj.setRequestHeader("Connection", "close");
		this._requestObj.send(params);
		this._requestObj.onreadystatechange = function () {
			if (this._requestObj.readyState == 4) {
				switch (this._requestObj.status) {
					case 200:
						this._obj.flashMessage.show("ok", Dict.form.ok);
						break;
					case 400:
						$.addClass(this._dom.email, "err");
						this._obj.flashMessage.show("error", Dict.form.err400);
						break;
					case 403:
						this._obj.flashMessage.show("error", Dict.form.err403);
						break;
					default:
						this._obj.flashMessage.show("error", Dict.form.err500);
						break;
				}
				/*
				console.log(this._requestObj.status);
				console.log(JSON.parse(this._requestObj.responseText));
				*/
			}
		}.bind(this);
	}
};

ContactForm.prototype._contentChanged = function(e, elm) {
	if (elm.value) {
		$.removeClass(elm, "err");
	} else {
		if (this._submitted) { $.addClass(elm, "err"); }
	}
};

ContactForm.prototype._textAreaFontSize = function(e, elm) {
	if ($.getDevice("device") != "desktop") { return; }

	var len = elm.value.length;

	if (!len) {
		elm.style.fontSize = "18px";
	} else if (len > 0 && len <= 5) {
		elm.style.fontSize = "36px";
	} else if (len > 5 && len <= 10) {
		elm.style.fontSize = "35px";
	} else if (len > 10 && len <= 15) {
		elm.style.fontSize = "34px";
	} else if (len > 15 && len <= 20) {
		elm.style.fontSize = "33px";
	} else if (len > 20 && len <= 25) {
		elm.style.fontSize = "32px";
	} else if (len > 25 && len <= 30) {
		elm.style.fontSize = "31px";
	} else if (len > 30 && len <= 35) {
		elm.style.fontSize = "30px";
	} else if (len > 35 && len <= 40) {
		elm.style.fontSize = "29px";
	} else if (len > 40 && len <= 45) {
		elm.style.fontSize = "28px";
	} else if (len > 45 && len <= 50) {
		elm.style.fontSize = "27px";
	} else if (len > 50 && len <= 55) {
		elm.style.fontSize = "26px";
	} else if (len > 55 && len <= 60) {
		elm.style.fontSize = "25px";
	} else if (len > 60 && len <= 65) {
		elm.style.fontSize = "24px";
	} else if (len > 65 && len <= 70) {
		elm.style.fontSize = "23px";
	} else if (len > 70 && len <= 75) {
		elm.style.fontSize = "22px";
	} else if (len > 75 && len <= 80) {
		elm.style.fontSize = "21px";
	} else if (len > 80 && len <= 85) {
		elm.style.fontSize = "20px";
	} else if (len > 85 && len <= 90) {
		elm.style.fontSize = "19px";
	} else if (len > 90) {
		elm.style.fontSize = "18px";
	} else {
		elm.style.fontSize = "36px";
	}
};
