import { State } from "./game/types";

const EMPTY_SPACE = "<span style='color: lightgrey'>.</span>";
const SNAKE_SEGMENT = "<span style='color: green'>%</span>";
const APPLE = "<span style='color: red'>@</span>";

export default function renderUtil(el: HTMLElement, state: State) {
  const chars: string[][] = [];
  for (let y = 0; y < state.boardDimensions.y; y++) {
    chars[y] = [];

    for (let x = 0; x < state.boardDimensions.x; x++) {
      let char = EMPTY_SPACE; // space by default
      
      if (state.snake.find((segment) => segment.x === x && segment.y === y)) {
        char = SNAKE_SEGMENT;
      }

      if (state.apple.x === x && state.apple.y === y) {
        char = APPLE;
      }

      chars[y][x] = char;
    }
  }

  const string = chars.map(rows => rows.join("")).join("<br/>");
  el.innerHTML = string;
}