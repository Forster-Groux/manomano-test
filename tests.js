'use strict';

const occurrences = require('./occurrences');
const fixtures = require('./fixtures');
const assert = require('assert');

let result1 = occurrences.getWordOccurrence(fixtures.text1, 'mano');
let result2 = occurrences.getWordOccurrence(fixtures.text2, 'mano');

assert.equal(result1, 4, `Expected 4 occurrences got ${result1}`);
assert.equal(result2, 0, `Expected 0 occurrence got ${result2}`);

assert.throws(() => occurrences.getWordOccurrence(null, 'mano'), Error, 'Expected "invalid text" error');
assert.throws(() => occurrences.getWordOccurrence('', 'mano'), Error, 'Expected "invalid text" error');

assert.throws(() => occurrences.getWordOccurrence(fixtures.text2), Error, 'Expected "invalid word" error');
assert.throws(() => occurrences.getWordOccurrence(fixtures.text2, ''), Error, 'Expected "invalid word" error');
assert.throws(() => occurrences.getWordOccurrence(fixtures.text2, 'a'), Error, 'Expected "invalid word" error');


assert.equal(occurrences.getAllOccurrences(fixtures.text1).toString(), { 'oui': 1, 'non': 2, 'mano': 4, 'manomano': 1 }.toString());

assert.throws(() => occurrences.getAllOccurrences(null, 'mano'), Error, 'Expected "invalid text" error');
assert.throws(() => occurrences.getAllOccurrences('', 'mano'), Error, 'Expected "invalid text" error');

console.log("All tests passed successfully");
