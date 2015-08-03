# substr-ansi [![Build Status](https://travis-ci.org/danilosampaio/substr-ansi.svg?branch=master)](https://travis-ci.org/danilosampaio/substr-ansi)

> Get the real `String#substr`, correctly handling ansi escape codes.


## Install

```
$ npm install --save substr-ansi
```


## Usage

```js
var substrAnsi = require('substr-ansi');

console.log(substrAnsi('\u001b[47mHi\u001b[49m', 0, 2));
//=> Hi
Note that the ansi code are preserved: `\u001b[47mHi\u001b[49m`

`String.prototype.substr` results in a broken string:
//=> \u001b[


substrAnsi('\u001b[0m\u001b[31m\u001b[47mHello', 0, 5);
//=> Hello (visible text)
Complete string: `\u001b[0m\u001b[31m\u001b[47mHello`
```


## API

### substrAnsi(input, [options])

#### str

*Required*  
Type: `string`

The original string that will be used to extract a section from it.

##### start

Type: `integer`  
Default: `0`

Location at which to begin extracting characters.


##### length

Type: `integer`  
Default: `str.length`

Optional. The number of characters to extract.


## License

MIT © [Danilo Sampaio](http://github.org/danilosampaio)
