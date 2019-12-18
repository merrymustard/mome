'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var addons = require('@react-spring/addons/index.cjs.js');



Object.keys(addons).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return addons[k];
		}
	});
});
