'use strict';

const getOccurrenceNumber = require('./getOccurrenceNumber');
const fixtures = require('./fixtures');
const assert = require('assert');

let expected1 = getOccurrenceNumber(fixtures.text1, 'mano');
let expected2 = getOccurrenceNumber(fixtures.text2, 'mano');

assert.equal(expected1, 4, `Expected 4 occurrences got ${expected1}`);
assert.equal(expected2, 0, `Expected 0 occurrence got ${expected2}`);
