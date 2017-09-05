const marked = require('marked');

module.exports = function(str) {
  const strParsed = marked(str);
  return strParsed.replace(/@@(.+?)@@/g, '<blink>$1</blink>');
};
