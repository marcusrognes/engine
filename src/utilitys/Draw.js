class Draw {
	static fill(color) {
		var oldStyle = this.context.fillStyle;

		if (color) {
			this.context.fillStyle = color;
		}

		this.context.fillRect(0, 0, this.rect.width, this.rect.height);

		this.context.fillStyle = oldStyle;
	}

	static image(image, rect, rotation) {
		this.context.save();

		this.context.translate(
			rect.x,
			rect.y
		);

		this.context.rotate(rotation * Math.PI / 180);

		/**
		 * Center image for rotation
		 */
		this.context.drawImage(
			image,
			-rect.width / 2,
			-rect.height / 2,
			rect.width,
			rect.height
		);

		this.context.restore();
	}

	static fillCircle(x, y, r, color) {
		this.context.beginPath();
		this.context.arc(x, y, r, 0, 2 * Math.PI, false);
		this.context.fillStyle = color;
		this.context.fill();
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
