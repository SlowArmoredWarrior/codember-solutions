import {resolve} from 'path';
import {readFileSync} from 'fs';

// inside the files folder
const FILE_PATH = resolve('challenges/files/02.txt');

// content of the file
const formula = readFileSync(FILE_PATH, {encoding: 'utf8'}).toString();

/**
 * compiles each expression passed
 * @param {number} item the accumulator
 * @return {string | number} number casted as string char or modified number
 */
const parseExprItem = {
  '&': (item) => item,
  '#': (item) => item += 1,
  '@': (item) => item -= 1,
  '*': (item) => item *= item,
};

/**
 * solves the challenge given the previous functions and vars
 * @param {string} problem the formula in this case
 * @return {string}
 */
const solution = (problem) => {
  let total = 0;
  let superStr = '';

  for (let formIndex = 0; formIndex < problem.length; formIndex++) {
    // get the compiled expression based of the current symbol
    const parseStep = parseExprItem[problem[formIndex]](total);

    // prints the value in a string if not modified, otherwise, accums it
    parseStep === total ? superStr += parseStep : total = parseStep;
  }

  return superStr;
};

console.log(solution(formula));
