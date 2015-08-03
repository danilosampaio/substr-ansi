'use strict';
var ansiRegex = require('ansi-regex');

module.exports = function (str, start, length) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (typeof start !== 'number') {
		throw new TypeError('Expected a start index');
	}

	start = start || 0;
	length = length || str.length - start;

	var ansi = ansiRegex().source;
	var regex = new RegExp(ansi + '|\\S?|\\s?', 'g');
	var chunks = str.match(regex);
	var count = 0;
	var added = 0;
	var keepAddingAnsiCodes = true;
	var leadingAnsiCodes = '';
	var res = '';

	for (var i = 0; i < chunks.length; i++) {
		var current = chunks[i];

		if (ansiRegex().test(current) && keepAddingAnsiCodes) {
			if (added === 0) {
				leadingAnsiCodes += current;
			} else {
				res += current;
			}
		} else {
			count++;

			if (added === 0) {
				res = leadingAnsiCodes;
			}

			if (count > start && added < length) {
				res += current;
				added++;
			} else {
				leadingAnsiCodes = '';

				if (added >= length) {
					keepAddingAnsiCodes = false;
				}
			}
		}
	}

	return res;
};
