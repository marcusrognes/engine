import Vector2 from "./Vector2";

class Draw {
	static fill(color) {
		var oldStyle = Draw.context.fillStyle;

		if (color) {
			Draw.context.fillStyle = color;
		}

		Draw.context.fillRect(0, 0, Draw.rect.width, Draw.rect.height);

		Draw.context.fillStyle = oldStyle;
	}

	/**
	 *
	 * @param props {{
	 * x:number,
	 * y:number,
	 * width:number,
	 * height:number,
	 * rotation:number,
	 * shadow:{style:string,blur:number,offsetX:number,offsetY:number},
	 * image:{}
	 * }}
	 * @constructor
	 */
	static Image(props) {
		props = Object.assign({
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			rotation: 0,
			shadow: null,
			image: null
		}, props);

		let renderBounds = Draw.getRenderBounds();

		Draw.context.save();

		Draw.context.translate(
			props.x - renderBounds.left,
			props.y - renderBounds.top
		);

		Draw.context.rotate(props.rotation * Math.PI / 180);

		if (props.shadow) {
			Draw.context.shadowBlur = props.shadow.blur;
			Draw.context.shadowColor = props.shadow.style;
		} else {
			Draw.context.shadowBlur = null;
		}

		/**
		 * Center Image for rotation
		 */
		Draw.context.drawImage(
			props.image,
			-props.width / 2,
			-props.height / 2,
			props.width,
			props.height
		);

		Draw.context.restore();
	}

	/**
	 *
	 * @param props {{
	 * x:number,
	 * y:number,
	 * width:number,
	 * height:number,
	 * rotation:number,
	 * shadow:{style:string,blur:number,offsetX:number,offsetY:number},
	 * fill:{style:string,color:string},
	 * stroke:{style:string,color:string}
	 * }}
	 * @constructor
	 */
	static Rect(props) {
		props = Object.assign({
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			rotation: 0,
			shadow: null,
			fill: null,
			stroke: null
		}, props);

		let renderBounds = Draw.getRenderBounds();

		Draw.context.save();

		Draw.context.translate(
			props.x - renderBounds.left,
			props.y - renderBounds.top
		);

		Draw.context.rotate(rotation * Math.PI / 180);

		if (props.shadow) {
			Draw.context.shadowBlur = props.shadow.blur;
			Draw.context.shadowColor = props.shadow.style;
		} else {
			Draw.context.shadowBlur = null;
		}

		if (props.fill) {
			Draw.context.fillStyle = props.fill.style;
			Draw.context.fillRect(
				-props.width / 2,
				-props.height / 2,
				props.width,
				props.height
			);
		}

		if (props.stroke) {
			Draw.context.strokeStyle = props.stroke.style;
			Draw.context.strokeRect(
				-props.width / 2,
				-props.height / 2,
				props.width,
				props.height
			);
		}

		Draw.context.restore();
	}

	static Circle() {

	}

	static fillCircle(x, y, r, color) {
		let renderBounds = Draw.getRenderBounds();

		Draw.context.beginPath();
		Draw.context.arc(x - renderBounds.left, y - renderBounds.top, r, 0, 2 * Math.PI, false);
		Draw.context.fillStyle = color;
		Draw.context.fill();
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
