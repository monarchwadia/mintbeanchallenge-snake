import { State } from "./types";

// calculates next game state
export default function gameUtil(state: State) {
  // move
  switch(state.direction) {
    case "up":
      state.snake[0].x--;
      break;
    case "right":
      state.snake[0].y++;
      break;
    case "down":
      state.snake[0].y++;
      break;
    case "left":
      state.snake[0].x--;
      break;
  }
}