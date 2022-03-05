// the state. this contains everything in the game.
export type State = {
  direction: Direction; // the current direction
  nextDirection: Direction; // the next direction. gets cleared after game ticks.
  snake: Coords[];  
  boardDimensions: Coords;
  apple: Coords;
  score: number;
  mode: "NOTSTARTED" | "RUNNING" | "PAUSED" | "GAMEOVER"
}

// ======================

// which direction the snake is moving in
export type Direction = "up" | "right" | "down" | "left";

// generic coordinates
export type Coords = {
  x: number;
  y: number;
}
