import { State } from "./types";

// returns initial state, including any randomizations
export default function initialize(): State {
  return {
    apple: { x: 5, y: 5 },
    boardDimensions: { x: 25, y: 16 },
    direction: "left",
    snake: [{ x: 10, y: 5 }, { x: 11, y: 5 }, { x: 12, y: 5 }],
    nextDirection: undefined,
    score: 0,
    mode: "NOTSTARTED"
  }
}