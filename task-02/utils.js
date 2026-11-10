export const calculateSum = (numbers) =>
  numbers.reduce((sum, n) => sum + n, 0);

export const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    throw new Error("Nu se poate calcula media unui array gol");
  }
  return calculateSum(numbers) / numbers.length;
};