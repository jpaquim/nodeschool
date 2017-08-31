function onReject(error) {
  console.log(error.message);
}

const promise = new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
});
promise.then(console.log, onReject);
