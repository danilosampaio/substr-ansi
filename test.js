'use strict';
var assert = require('assert');
var substrAnsi = require('./');

it('should return the \'hi\' string', function () {
	assert.strictEqual(substrAnsi('\u001b[0m\u001b[31m\u001b[47mHi\u001b[49m\u001b[39m\u001b[0m', 0, 2), '\u001b[0m\u001b[31m\u001b[47mHi\u001b[49m\u001b[39m\u001b[0m');
});

it('should return the \'he\' string', function () {
	assert.strictEqual(substrAnsi('\u001b[0m\u001b[31m\u001b[47mHello\u001b[49m\u001b[39m\u001b[0m', 0, 2), '\u001b[0m\u001b[31m\u001b[47mHe');
});

it('should return the \'hello\' string', function () {
	assert.strictEqual(substrAnsi('\u001b[0m\u001b[31m\u001b[47mhello\u001b[49m\u001b[39m\u001b[0m \u001b[0m\u001b[31m\u001b[47world!\u001b[49m\u001b[39m\u001b[0m', 0, 5), '\u001b[0m\u001b[31m\u001b[47mhello\u001b[49m\u001b[39m\u001b[0m');
});

it('should return the \'llo\' string', function () {
	assert.strictEqual(substrAnsi('\u001b[0m\u001b[31m\u001b[47mHello\u001b[49m\u001b[39m\u001b[0m', 2), 'llo\u001b[49m\u001b[39m\u001b[0m');
});

it('should return the \'hello\' string without trailing ansi codes', function () {
	assert.strictEqual(substrAnsi('\u001b[0m\u001b[31m\u001b[47mHello', 0, 5), '\u001b[0m\u001b[31m\u001b[47mHello');
});

it('should return the \'hell\' string', function () {
	assert.strictEqual(substrAnsi('Hello\u001b[49m\u001b[39m\u001b[0m', 0, 4), 'Hell');
});

it('should handle a simple string without ansi escape codes', function () {
	assert.strictEqual(substrAnsi('Hello', 2), 'llo');
});

it('should return itself', function () {
	assert.strictEqual(substrAnsi('Hello', 0, 5), 'Hello');
});
