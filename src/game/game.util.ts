import { Coords, State } from "./types";

// calculates next game state
export default function gameUtil(state: State) {
  // calculate next move
  state.direction = state.nextDirection || state.direction;

  const directions: Record<string, Coords> = {
    up: { x: 0, y: -1},
    right: { x: 1, y: 0},
    down: { x: 0, y: 1},
    left: { x: -1, y: 0},
  }

  const nextHeadCoords = directions[state.direction];
  const newSnake = [...state.snake];
  
  // remove last segment
  newSnake.pop();
  newSnake.unshift({
    x: state.snake[0].x + nextHeadCoords.x,
    y: state.snake[0].y + nextHeadCoords.y,
  })

  state.snake = newSnake;
}

// ========

const moveSegments = (state: State, direction: Coords) => {

}