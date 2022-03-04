import ControlManager from "./control.manager";
import gameUtil from "./game/game.util";
import initialize from "./game/initialize";
import { Direction, State } from "./game/types";
import renderUtil from "./render.util";
import RenderloopManager from "./renderloop.manager";

// initialize state
let state: State = initialize();

// controls
const proposeChangeDirection = (state: State, newDirection: Direction): void => {
  const disallowedControls: Record<Direction, Direction> = {
    up: "down",
    right: "left",
    down: "up",
    left: "right"
  }

  state.nextDirection = newDirection === disallowedControls[state.direction]
    ? state.direction
    : newDirection;
}

const controlManager = new ControlManager(document.body);
controlManager.onUp = () => proposeChangeDirection(state, "up");
controlManager.onRight = () => proposeChangeDirection(state, "right");
controlManager.onDown = () => proposeChangeDirection(state, "down");
controlManager.onLeft = () => proposeChangeDirection(state, "left");

new RenderloopManager(function(){
  if (!state.paused) {
    gameUtil(state);
  }
  renderUtil(document.getElementById("out"), state);
});