function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomColorWithOpacity(): {
  rgb: string;
  rgba: string;
} {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const rgbaColor = `rgba(${r}, ${g}, ${b}, 0.2)`;

  return { rgb: rgbColor, rgba: rgbaColor };
}
