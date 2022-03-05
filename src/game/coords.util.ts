import { Coords } from "./types";

export const isSame = (a: Coords, b: Coords) => a.x === b.x && a.y === b.y;
export const isOutside = (coords: Coords, topLeft: Coords, bottomRight: Coords) =>
  coords.x < topLeft.x ||
  coords.y < topLeft.y ||
  coords.x >= bottomRight.x ||
  coords.y >= bottomRight.y;

export const random = (min: Coords, max: Coords): Coords => ({
  x: Math.floor((Math.random() * max.x) + min.x),
  y: Math.floor((Math.random() * max.y) + min.y),
})