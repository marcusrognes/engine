class BoundingRect {
	constructor(left, right, top, bottom) {
		this.left = left;
		this.right = right;
		this.top = top;
		this.bottom = bottom;
	}

	isIntersectingWith(boundingRect) {
		return !(this.left > boundingRect.right
		|| this.right < boundingRect.left
		|| this.top > boundingRect.bottom
		|| this.bottom < boundingRect.top);
	}
}

export default BoundingRect;
