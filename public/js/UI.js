/**/
class UI {
	constructor(_color, _bold, _italic, _underline, _animate) {
		_color = _color || "black";
		this.color = _color;
		this.bold = _bold;
		this.italic = _italic;
		this.underline = _underline;
		this.animate = _animate;
	}

	static toUIObject(ui) {
		return new UI(ui._color, ui._bold, ui._italic, ui._underline, ui._animate);
	}

	get color() {
		return this._color;
	}

	set color(value) {
		this._color = (isHex(value) ? "#" : "") + value;
	}

	get bold() {
		return this._bold;
	}

	set bold(value) {
		this._bold = value;
	}

	get italic() {
		return this._italic;
	}

	set italic(value) {
		this._italic = value;
	}

	get underline() {
		return this._underline;
	}

	set underline(value) {
		this._underline = value;
	}

	get animate() {
		return this._animate;
	}

	set animate(value) {
		this._animate = value;
	}
}

UI.prototype.createMessage = (function(msg, userName) {

		return $('<li>')
			.animateCss(this.animate)
			.text(userName+": ").append
			($('<span>')
				.text(msg)
				.css('color', this.color)
				.css('font-weight',  this.bold ? "bold" : "")
				.css('font-style',  this.italic ? "italic" : "")
				.css('text-decoration',  this.underline ? "underline" : "")[0]
			);


});

UI.prototype.decypt = (function(msg) {
	var sep = msg.split(' ');
	if (sep[0] === "color") {
		this.color = sep[1];
	} else if (sep[0] === "bold") {
		this.bold = !this.bold;
	} else if (sep[0] === "italic") {
		this.italic = !this.italic;
	} else if (sep[0] === "underline") {
		this.underline = !this.underline;
	} else if (sep[0] === "animate") {
		this.animate = sep[1];
	}
});


function isHex(h) {
	var a = parseInt(h,16);
	return (a.toString(16) === h) && h.length === 6
}

