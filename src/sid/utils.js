// @ts-check

/**
 * Generates a unique ID containing at least 10 base 10 digits.
 */
export function uuid () {
  return `${Date.now()}${Math.random()
    .toFixed(10)
    .slice(2)}`
}
