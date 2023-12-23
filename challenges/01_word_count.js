import {readFileSync} from 'fs';
import {resolve} from 'path';

// file path for the test
const FILE_PATH = resolve('challenges/files/01.txt');

// text buffer
const message = await readFileSync(FILE_PATH, {encding: 'utf8'}).toString();

/**
 * push new word on the word list
 * @param {Array<object>} wordArray array of words
 * @param {string} item current word
 * @return {Array<object>} the array of words modified
 */
const pushWord = (wordArray, item) => {
  wordArray.push({
    name: item,
    count: 1,
  });

  return wordArray;
};

/**
 * push new word in the word array info if not exists, otherwise, increments the ocurrences finded
 * @param {Array<object>} wordList array of words
 * @param {string} item current word
 * @return {Array<object>} the array modified
 */
const manageWords = (wordList, item) => {
  const theItem = wordList.find((target) => {
    return target.name == item;
  });

  if (!theItem) {
    pushWord(wordList, item);
    return wordList;
  }

  theItem.count++;
  return wordList;
};

/**
 * compiles all the words an their occurrences into a single string
 * @param {Array<object>} wordList the array of words
 * @return {string} the compilation
 */
const compileSolution = (wordList) => {
  let superStr = '';

  for (let itr = 0; itr < wordList.length; itr++) {
    superStr += `${wordList[itr].name}${wordList[itr].count}`;
  }

  return superStr;
};

/**
 * solves the problem using the above functions
 * @param {string} msg the raw message
 * @return {string} the compiled message
 */
const solution = (msg) => {
  let wordArray = [];
  const expression = /\s/gim;
  const chunked = msg.split(expression);

  for (let wordIterator = 0; wordIterator < chunked.length; wordIterator++) {
    wordArray = manageWords(wordArray, chunked[wordIterator]);
  }

  return compileSolution(wordArray);
};

// result
console.log(solution(message));
