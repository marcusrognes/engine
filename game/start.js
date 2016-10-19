import Logger from '../src/utilitys/Logger.js';
import Engine from '../src/Engine.js';
import Player from './assets/Player.js';
import Vector2 from "../src/utilitys/Vector2";

Logger.currentReportLevel = Logger.logLevels.debug;

var game = new Engine({
	canvas: document.getElementById('engine')
});

var player = new Player();

Engine.addGameObject(player);
