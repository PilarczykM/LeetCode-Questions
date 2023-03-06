export type RandomGenerator = () => number;

export const randomNumber = (
  randomGenerator: RandomGenerator,
  max: number,
) => {
  return Math.floor(randomGenerator() * (max + 1));
};
