export const randomNumberGenerator = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}
