'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var three = require('@react-spring/three/index.cjs.js');



Object.keys(three).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return three[k];
		}
	});
});
