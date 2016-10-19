import Logger from '../src/utilitys/Logger';
import Engine from '../src/Engine';

Logger.currentReportLevel = Logger.logLevels.debug;

var game = new Engine({
	canvas: document.getElementById('engine')
});
