import { State } from "./game/types";

export default function renderUtil(el: HTMLElement, state: State) {
  const chars: string[][] = [];
  for (let y = 0; y < state.boardDimensions.y; y++) {
    chars[y] = [];

    for (let x = 0; x < state.boardDimensions.x; x++) {
      let char = "."; // space by default
      
      if (state.snake.find((segment) => segment.x === x && segment.y === y)) {
        char = "#";
      }

      if (state.apple.x === x && state.apple.y === y) {
        char = "@";
      }

      chars[y][x] = char;
    }
  }

  const string = chars.map(rows => rows.join("")).join("<br/>");
  el.innerHTML = string;
}