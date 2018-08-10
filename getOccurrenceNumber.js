'use strict';

const punctuationRegex = /[^A-z0-9_]+/g;

function getOccurrenceNumber(text, word) {
  if (!text || text.length < 2) {
    throw new Error("Invalid text");
  }

  if (!word || word.length < 2) {
    throw new Error("Invalid word");
  }

  let cleanText = text.replace(punctuationRegex, ' ').trim();
  let words = cleanText.split(' ');
  let filteredWords = words.filter((item) => item === word);

  return filteredWords.length;
}

module.exports = getOccurrenceNumber;
