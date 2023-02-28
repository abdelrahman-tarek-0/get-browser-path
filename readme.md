# Get-Browser-Path

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]

very simple package to get the path of the browser currently (chrome and edge) only <br />
works for all operating systems (windows, mac, linux)

```js
const getBrowserPath = require('get-browser-path');

console.log(getBrowserPath('chrome')); // /Applications/Google Chrome.app/Contents/MacOS/Google Chrome (if found) 
console.log(getBrowserPath('edge')); // /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge (if found)
console.log(getBrowserPath()); // will return the path of edg if found else it will return chrome chrome

console.log(getBrowserPath()); // will return null if no browser found

```


[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/get-browser-path
[npm-version-image]: https://img.shields.io/npm/v/get-browser-path.svg?style=flat

[npm-downloads-image]: https://img.shields.io/npm/dm/get-browser-path.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/get-browser-path?minimal=true