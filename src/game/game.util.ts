import { State } from "./types";

// calculates next game state
export default function gameUtil(state: State) {
  // move
  console.log("State direction", state.direction)
  switch(state.direction) {
    case "up":
      state.snake[0].y--;
      break;
    case "right":
      state.snake[0].x++;
      break;
    case "down":
      state.snake[0].y++;
      break;
    case "left":
      state.snake[0].x--;
      break;
  }
}