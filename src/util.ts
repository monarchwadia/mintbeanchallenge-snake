export const times = (iterations: number, func: (i: number) => void) => {
  for (let i = 0; i < iterations; i++) {
    func(i);
  }
}

export const packArray = (char: string, length: number) => {
  const arr = [];
  times(length, () => arr.push(char));
  return arr;
}