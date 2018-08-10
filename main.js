'use strict';

const punctuationRegex = /[^A-z0-9_]+/g;

function getOccurrenceNumber(text, word) {
  let cleanText = text.replace(punctuationRegex, ' ').trim();
  let words = cleanText.split(' ');
  let filteredWords = words.filter((item) => item === word);

  return filteredWords.length;
}

module.export = getOccurrenceNumber;
