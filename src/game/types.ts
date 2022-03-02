// the state. this contains everything in the game.
export type State = {
  direction: Direction;
  snake: Coords[];  
  boardDimensions: Coords;
  apple: Coords;
}

// ======================

// which direction the snake is moving in
export type Direction = "up" | "right" | "down" | "left";

// generic coordinates
export type Coords = {
  x: number;
  y: number;
}
