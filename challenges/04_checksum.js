import {resolve} from 'path';
import {readFileSync} from 'fs';

// file and data
const FILE_PATH = resolve('challenges/files/04.txt');
const filenames = readFileSync(FILE_PATH, {encoding: 'utf-8'}).toString( ).split(/\n/);

// index of the solution string
const THE_INDEX = 32;

/**
 * Verifies if the filename has intersection with the checksum str
 * @param {string} file
 * @param {string} checksum
 * @return {boolean}
 */
const isProperlyChecksum = (file, checksum) => {
  const intersected = file.split(/\s/gi).filter((item) => checksum.includes(item));
  const finalStr = intersected.reduce((prev, next) => prev + next);
  return finalStr === checksum;
};

/**
 * ## Some explaination before you continue
 * this implementation was too stressfull to me because i was trying to extract the intersection
 * as a fashion form at all, but two days later i think about array intersection
 * and basically it may not be the best approach, BUT is the most secure cuz preserves the
 * order and only extracts the characters at the properly positions
 * it looks simple, but my mind was growling for the solution at end
 */

/**
 * Solves the challenge given the previous functions / vars
 * @param {Array<Array<string>>} names
 * @return {string}
 */
const solution = (names) => {
  const trueLabels = [];
  for (let itr = 0; itr < names.length; itr++) {
    const [name, checksum] = names[itr].split('-');

    // One way ternary
    isProperlyChecksum(name, checksum) === true ? trueLabels.push(checksum) : trueLabels;
  }

  return trueLabels[THE_INDEX];
};

console.log(solution(filenames));
