export enum KEY_CODES {
  SPACE = "Space",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
}

export function isDigit(str): boolean {
  return /^Digit/.test(str);
}

export const getDurationStep = (key: string, duration: number) => {
  const step = parseInt(key) / 10;
  return duration * step;
};

26.749708;
