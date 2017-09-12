const inputs = process.argv.slice(2);
const result = inputs
  .map(input => input[0])
  .reduce((reduced, initial) => reduced + initial);
console.log(`[${inputs}] becomes "${result}"`);
