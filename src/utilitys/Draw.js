import Vector2 from "./Vector2";
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
		let renderBounds = Draw.getRenderBounds();
		this.context.save();

		this.context.translate(
			rect.x - renderBounds.left,
			rect.y - renderBounds.top
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
		let renderBounds = Draw.getRenderBounds();

		this.context.beginPath();
		this.context.arc(x - renderBounds.left, y - renderBounds.top, r, 0, 2 * Math.PI, false);
		this.context.fillStyle = color;
		this.context.fill();
	}

	static getFinalX(x) {

	}

	static getFinalY(y) {

	}

	static setCanvas(canvas) {
		Draw.canvas = canvas;
		Draw.rect = canvas.getBoundingClientRect();
	}

	static setContext(context) {
		Draw.context = context;
	}

	static getRenderBounds() {
		let width = this.canvas.width;
		let height = this.canvas.height;

		let halfWidth = width / 2;
		let halfHeight = height / 2;
		let cameraPosition = new Vector2(halfWidth, halfHeight);

		if (Draw.currentCamera) {
			cameraPosition = Draw.currentCamera.transform.position;
		}

		return {
			center: cameraPosition,
			left: cameraPosition.x - halfWidth,
			right: cameraPosition.x + halfWidth,
			top: cameraPosition.y - halfHeight,
			bottom: cameraPosition.y + halfHeight
		};
	}

	static setCamera(camera) {
		Draw.currentCamera = camera;
	}
}

Draw.currentCamera = null;
Draw.canvas = null;
Draw.rect = null;
Draw.context = null;

export default Draw;
