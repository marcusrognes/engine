const COLLIDER_LAYERS = {
	DYNAMIC: 'dynamic',
	STATIC: 'static'
};

class Collider {
	constructor(polygon, layer) {
		this.setPolygon(polygon);
		this.layer = layer || COLLIDER_LAYERS.DYNAMIC;
	}

	setPolygon(polygon) {
		this.polygon = polygon;
		this.updateBoundingBox();
	}

	updateBoundingBox() {

	}
}

export default Collider;
