const inputs = process.argv.slice(2);
const result = inputs.map(word => word[0])
  .reduce((acronym, letter) => acronym + letter);
console.log(result);
