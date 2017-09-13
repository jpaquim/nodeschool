module.exports = function makeCounter(someObj, maxNum = 10) {
  let counter = 1;
  someObj.next = function() {
    if (counter > maxNum) {
      return { done: true };
    }
    return { value: counter++, done: false };
  }
}
