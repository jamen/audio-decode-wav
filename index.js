var Audio = require('audio');

module.exports = function decode(wav) {
  var data = {};

  // Verify the WAV file format.
  var riffhead = wav.slice(0, 4).toString('ascii');
  var wavehead = wav.slice(8, 12).toString('ascii');
  if (riffhead !== 'RIFF' || wavehead !== 'WAVE') {
    throw new Error('Input not WAV encoded');
  }

  // Determine audio format.
  if (wav.readUInt16LE(20) === 1) {
    // PCM format.
    data.sampleRate = wav.readInt32LE(24);
    data.bitDepth = wav.readInt16LE(34);
    data.sample = wav.slice(44);
    data.channels = wav.readUInt16LE(22);
    data.signed = data.bitDepth === 16;
    return new Audio(data);
  } else {
    throw new Error('Unsupported WAV audio format.');
  }
};
