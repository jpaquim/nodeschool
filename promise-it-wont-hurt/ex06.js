const resolvedPromise = Promise.resolve('PROMISE VALUE');
const rejectedPromise = Promise.reject(new Error('REJECTED VALUE'));
resolvedPromise.then(console.log);
rejectedPromise.catch(error => console.log(error.message));
