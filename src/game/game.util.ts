import { isOutside, isSame, random } from "./coords.util";
import { Coords, State } from "./types";

// calculates next game state. returns false if collision occurred.
export default function gameUtil(state: State): void {
  if (state.mode !== "RUNNING") {
    return;
  }
  // move the snake
  state.direction = state.nextDirection || state.direction;

  const directionToCoords: Record<string, Coords> = {
    up: { x: 0, y: -1},
    right: { x: 1, y: 0},
    down: { x: 0, y: 1},
    left: { x: -1, y: 0},
  }

  const nextHeadCoords = directionToCoords[state.direction];
  const newSnake = [...state.snake];
  const nextHead: Coords = {
    x: state.snake[0].x + nextHeadCoords.x,
    y: state.snake[0].y + nextHeadCoords.y,
  }

  const appleWasEaten = isSame(nextHead, state.apple);
  const ranIntoWall = isOutside(nextHead, {x: 0, y: 0}, state.boardDimensions);
  const ranIntoSnake = state.snake.find(segment => isSame(nextHead, segment));

  if (appleWasEaten) {
    state.score += 100;
    state.apple = random({x: 0, y: 0}, state.boardDimensions);
  } else {
    newSnake.pop();
  }

  if(ranIntoWall || ranIntoSnake) {
    state.mode = "GAMEOVER";
  }

  newSnake.unshift(nextHead)

  state.snake = newSnake;
}
