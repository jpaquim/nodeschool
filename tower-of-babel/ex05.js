import MyMath from './ex05-module';

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

console.log(MyMath.PI);
console.log(MyMath.sqrt(arg1));
console.log(MyMath.square(arg2));
