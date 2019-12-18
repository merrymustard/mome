'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var native = require('@react-spring/native/index.cjs.js');



Object.keys(native).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return native[k];
		}
	});
});
