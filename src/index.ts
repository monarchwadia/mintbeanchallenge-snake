import ControlManager from "./control.manager";
import gameUtil from "./game/game.util";
import initialize from "./game/initialize";
import { State } from "./game/types";
import renderUtil from "./render.util";
import RenderloopManager from "./renderloop.manager";

const controlManager = new ControlManager(document.body);

let state: State = initialize();

controlManager.onUp = () => state.direction = "up";
controlManager.onRight = () => state.direction = "right";
controlManager.onDown = () => state.direction = "down";
controlManager.onLeft = () => state.direction = "left";

const renderManager = new RenderloopManager(() => {
  console.log("Loop");
  gameUtil(state);
  renderUtil(document.getElementById("out"), state);
});