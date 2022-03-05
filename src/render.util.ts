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
  switch(state.mode) {
    case "PAUSED":
      blinkingOverlay(chars, timeNow, "PAUSED");
      break;
    case "NOTSTARTED":
      blinkingOverlay(chars, timeNow, "SPACE TO START");
      break;
    case "GAMEOVER":
      blinkingOverlay(chars, timeNow, "GAME OVER PRESS SPACE");
  }

  // add score
  chars.push(`<span style='color: white;'>SCORE: ${state.score}`.split(""));

  const string = chars.map(rows => rows.join("")).join("<br/>");
  el.innerHTML = string;
}

function blinkingOverlay(chars: string[][], timeNow: number, message: string) {
  if ((timeNow % 2000) > 1000) {
    return;
  }

  const yMid = Math.floor(chars.length / 2)
  const xMid = Math.floor(chars[yMid].length / 2);

  const offset = Math.floor(message.length / 2);

  message.split("").forEach((c, i) => {
    chars[yMid][xMid + i - offset] = `<span style='color: white'>${c}</span>`;  
  })
}