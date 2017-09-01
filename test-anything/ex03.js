const test = require('tape');
const fancify = require(process.argv[2]);

const str = 'Hello';
test('fancify', t => {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'Wraps the input string in ~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~',
      'Optionally converts the string to upper case ');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~',
      'Optionally use a character other than "!" in the wrap');
  t.end();
});
