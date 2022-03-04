import ControlManager from "./control.manager";
import gameUtil from "./game/game.util";
import initialize from "./game/initialize";
import { State } from "./game/types";
import renderUtil from "./render.util";
import RenderloopManager from "./renderloop.manager";

// initialize state
let state: State = initialize();

// controls
const controlManager = new ControlManager(document.body);
controlManager.onUp = () => state.direction = "up";
controlManager.onRight = () => state.direction = "right";
controlManager.onDown = () => state.direction = "down";
controlManager.onLeft = () => state.direction = "left";

const renderLoopManager = new RenderloopManager(() => {
  console.log("Loop", state.direction);
  gameUtil(state);
  renderUtil(document.getElementById("out"), state);
});