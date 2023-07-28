export function generateNumbers(min: number, max: number, count: number) {
  const numbers = [];

  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNum);
  }

  return numbers;
}
