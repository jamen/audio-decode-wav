# Audio decode-wav [![Build Status][travis-image]][travis-url] [![Gitter][gitter-icon]][gitter]
> Decode a WAV buffer into an Audio object.

Turn a WAV-encoded buffer into an [`Audio`][audio] object.
```js
var decodeWav = require('audio-decode-wav');

var raw = fs.readFileSync('./somefile.wav');
var audio = decodeWav(raw);

audio.slice(100, 200);
// => [10, 2, -2, 10, ...]
```

## Installation
```sh
$ npm install --save audio-decode-wav
```

## API
### `decode(wav)`
Decode a WAV buffer into an `Audio` object.
 - `wav` (`Buffer`): A WAV-encoded buffer you want to decode.

Returns an `Audio` object initialized with the WAV's data.

## Credits

|![@jamen][jamen-image]|
|:--------:|
| [Jamen Marzonie][jamen] |

## License
[MIT](LICENSE) &copy; Jamen Marzonie

[jamen]: https://github.com/jamen
[jamen-image]: https://avatars2.githubusercontent.com/u/6251703?v=3&s=125
[travis-image]: https://travis-ci.org/audiojs/decode-wav.svg?branch=master
[travis-url]: https://travis-ci.org/audiojs/decode-wav
[audio]: https://github.com/jamen/node-audio
[gitter]: https://gitter.im/jamen/node-audio
[gitter-icon]: https://img.shields.io/gitter/room/jamen/node-audio.svg
