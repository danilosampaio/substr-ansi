'use strict';
var ansiRegex = require('ansi-regex');

module.exports = function (str, start, length) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (typeof start !== 'number') {
		throw new TypeError('Expected a start index');
	}

	var ansi = ansiRegex().toString().split('/')[1];
	var regex = new RegExp(ansi + "|\\S?|\\s?", "g");
	var chunks = str.match(regex);
	var start = start || 0;
	var length = length || str.length - start;
	var count = 0;
	var added = 0;
	var res = '';

	for (var i = 0; i < chunks.length; i++) {
		var current = chunks[i];

		if (ansiRegex().test(current)){
			res += current;
		} else {
			count++;
			
			if (count > start && added < length) {
				res += current;
				added++;
			}
		}
	};

	return res;
};
