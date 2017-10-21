const max = process.argv[2];
const FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) return { done: true };
        let value = num;
        if (num % 3 === 0 && num % 5 === 0) value = 'FizzBuzz';
        else if (num % 3 === 0) value = 'Fizz';
        else if (num % 5 === 0) value = 'Buzz';
        ++num;
        return { value, done: false };
      }
    };
  }
};

for (let n of FizzBuzz) {
  console.log(n);
}
