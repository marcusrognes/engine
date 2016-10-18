class Logger {
	static log(message, properties) {
		let props = Object.assign({}, properties, Logger.defaultLogProps);
	}

	static debug(message) {

	}

	static error(message) {

	}
}

Logger.defaultLogProps = {

};

Logger.currentReportLevel = 0;

export default Logger;
