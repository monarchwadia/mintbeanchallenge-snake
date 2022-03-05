import { State } from "./game/types";
import { packArray } from "./util";

const EMPTY_SPACE = "<span style='color: rgb(35,25,25)'>.</span>";
const SNAKE_SEGMENT = "<span style='color: green'>%</span>";
const APPLE = "<span style='color: red'>@</span>";
const WALL_SEGMENT = "<span style='color: darkred'>#</span>"

type Props = {
  el: HTMLElement,
  state: State,
  timeNow: number,
  timePrev: number
}
export default function renderUtil(props: Props) {
  const { el, state, timeNow, timePrev } = props;
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

  // add wall
  chars.unshift(packArray(WALL_SEGMENT, state.boardDimensions.x))
  chars.push(packArray(WALL_SEGMENT, state.boardDimensions.x))
  chars.forEach(arr => {
    arr.unshift(WALL_SEGMENT);
    arr.push(WALL_SEGMENT);
  });

  // paused indicator, if paused
  if (state.paused && ((timeNow % 2000) < 1000)) {
    const yMid = Math.floor(chars.length / 2)
    const xMid = Math.floor(chars[yMid].length / 2);
    chars[yMid][xMid - 2] = "<span style='color: white'>P</span>";
    chars[yMid][xMid - 1] = "<span style='color: white'>A</span>";
    chars[yMid][xMid - 0] = "<span style='color: white'>U</span>";
    chars[yMid][xMid + 1] = "<span style='color: white'>S</span>";
    chars[yMid][xMid + 2] = "<span style='color: white'>E</span>";
    chars[yMid][xMid + 3] = "<span style='color: white'>D</span>";
  }

  // add score
  chars.push(`<span style='color: white;'>SCORE: ${state.score}`.split(""));
  chars.push(`<span style='color: gray;'>↑→↓← to change direction`.split(""));
  chars.push(`<span style='color: gray;'>R to reset`.split(""));
  chars.push(`<span style='color: gray;'>Space to pause`.split(""));

  const string = chars.map(rows => rows.join("")).join("<br/>");
  el.innerHTML = string;
}

