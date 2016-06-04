var Audio = require('audio');

module.exports = function decode(wav) {
  var rate = wav.readInt32LE(24);
  var depth = wav.readInt16LE(34);
  var sample = wav.slice(44);
  return new Audio(sample, {
    depth: depth,
    rate: rate
  });
};
