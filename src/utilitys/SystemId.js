class SystemId {
	static get(key) {
		SystemId.count++;
		return (key || '') + '' + SystemId.count;
	}
}

SystemId.count = 0;

export default SystemId;
