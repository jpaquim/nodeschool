module.exports = function(str) {
  return /^(0x[\dA-Fa-f]{2}\s+){8}$/.test(str);
};
