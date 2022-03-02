import ControlManager from "./control.manager";
import renderUtil from "./render.util";
import RenderloopManager from "./renderloop.manager";

const controlManager = new ControlManager(document.body);

let state = {
  key: ""
};

controlManager.onUp = () => state.key = "up";;
controlManager.onRight = () => state.key = "right";
controlManager.onDown = () => state.key = "down";
controlManager.onLeft = () => state.key = "left";

const renderManager = new RenderloopManager(() => {
  console.log("Loop")
  renderUtil(document.getElementById("out"), state.key);
});