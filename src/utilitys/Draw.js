class Draw {
	static fill(color) {
		var oldStyle = this.context.fillStyle;

		if (color) {
			this.context.fillStyle = color;
		}

		this.context.fillRect(0, 0, this.rect.width, this.rect.height);

		this.context.fillStyle = oldStyle;
	}

	static setCanvas(canvas) {
		Draw.canvas = canvas;
		Draw.rect = canvas.getBoundingClientRect();
	}

	static setContext(context) {
		Draw.context = context;
	}
}

Draw.canvas = null;
Draw.rect = null;
Draw.context = null;

export default Draw;