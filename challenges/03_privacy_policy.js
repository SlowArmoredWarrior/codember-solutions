import {resolve} from 'path';
import {readFileSync} from 'fs';

// desired index of the challenge
const THE_INDEX = 41;

// file and data
const FILE_PATH = resolve('challenges/files/03.txt');
const passwords = readFileSync(FILE_PATH, {encoding: 'utf-8'}).toString();

// data splitted by lines
const keys = passwords.split(/\n/);

/**
 * splits the policy into 3 sections for take data
 * @param {Array<string>} key the line of data
 * @return {Array<string>} the line splitted
 */
const parseKey = (key) => {
  // 0: range, 1: character, 2: password
  return key.split(/\s/gi);
};

/**
 * extract ranges for the policy
 * @param {Array<string>} parsedKey the line splitted
 * @return {object} the min and max values of the range
 */
const getRange = (parsedKey) => {
  const both = parsedKey[0].split('-');
  return ({
    min: parseInt(both[0]),
    max: parseInt(both[1]),
  });
};

/**
 * extracts the character to be analyzed in the password
 * @param {Array<string>} parsedKey the line splitted
 * @return {string} the char
 */
const getChar = (parsedKey) => {
  return parsedKey[1][0];
};

/**
 * extracts the password of the parsed line
 * @param {Array<string>} parsedKey the parsed line
 * @return {string} the password
 */
const getPassword = (parsedKey) => {
  return parsedKey[2];
};

/**
 * solves the challenge given the above functions
 * @param {Array<string>} entries the array of keys
 * @return {string} the 42th password according to the challenge
 */
const solution = (entries) => {
  const badPasswords = [];
  for (let itr = 0; itr < entries.length; itr++) {
    const theKey = parseKey(entries[itr]);

    const {min, max} = getRange(theKey);
    const theChar = getChar(theKey);
    const thePassword = getPassword(theKey);

    const charOccurrences = thePassword.split('').filter((item) => item === theChar).length;

    if ( !(charOccurrences >= min && charOccurrences <= max) ) {
      badPasswords.push(thePassword);
    }
  }

  return badPasswords[THE_INDEX];
};

console.log(solution(keys));
