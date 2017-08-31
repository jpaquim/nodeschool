function all(promise1, promise2) {
  return new Promise((resolve, reject) => {
    const values = [];
    let counter = 0;

    function handlePromise(value, promiseNumber) {
      values[promiseNumber] = value;
      ++counter;
      if (counter >= 2) {
        resolve(values);
      }
    }

    promise1
      .then(value => handlePromise(value, 0))
      .catch(err => reject(err));
    promise2
      .then(value => handlePromise(value, 1))
      .catch(err => reject(err));
  });
}

all(getPromise1(), getPromise2())
  .then(console.log)
  .catch(console.log);
