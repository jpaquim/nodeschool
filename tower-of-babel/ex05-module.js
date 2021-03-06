const PI = 3.141592;

const _sqrt = (s, x, last) => x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
const sqrt = s => _sqrt(s, s / 2.0, 0.0);

const square = x => x * x;

export default {
  PI,
  sqrt,
  square,
};
