const test = require('tape');
const feedCat = require(process.argv[2]);

test('feedCat', t => {
  t.equal(feedCat('any food'), 'yum', 'cats can eat almost any food');
  t.throws(() => feedCat('chocolate'), 'cats should not eat chocolate');
  t.end();
});
