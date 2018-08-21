'use strict';

const punctuationRegex = /[^A-z0-9_]+/g;

function getWordOccurrence(text, word) {
  if (!text) {
    throw new Error("Invalid text");
  }

  if (!word || word.length < 2) {
    throw new Error("Invalid word");
  }

  let filteredWords = getWords(text).filter((item) => item === word);

  return filteredWords.length;
}

function getAllOccurrences(text) {
  if (!text) {
    throw new Error("Invalid text");
  }

  let filteredWords = getWords(text).filter((item) => item.length > 1);

  return filteredWords.reduce((prev, curr) => (prev[curr] = prev[curr] + 1 || 1, prev), {});
}

function getWords(text) {
  return text.replace(punctuationRegex, ' ').trim().split(' ');
}

module.exports = { getWordOccurrence, getAllOccurrences };
