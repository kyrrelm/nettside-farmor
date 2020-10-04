// modulo that supports negative numbers (so that e.g. -5 % 4 = 3)
export const modulo = (a: number, n: number) => ((a % n) + n) % n
