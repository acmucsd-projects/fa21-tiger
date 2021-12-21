/**
 * Generates a unique ID. It will only contain base 10 digits.
 */
export function uuid () {
  return `${Date.now()}${Math.random()
    .toFixed(10)
    .slice(2)}`
}
