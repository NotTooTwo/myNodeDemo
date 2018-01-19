var assert = require('assert');
var sum = require('./hello.js');

assert.strictEqual(sum(), 0,'判断失败');
assert.strictEqual(sum(1), 1,'判断失败');
assert.strictEqual(sum(1，2), 2,'判断失败');
assert.strictEqual(sum(1，3), 2,'判断失败');