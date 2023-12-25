import {resolve} from 'path';
import {readFileSync} from 'fs';

// file and data
const FILE_PATH = resolve('challenges/files/05.txt');
const rows = readFileSync(FILE_PATH, {encoding: 'utf-8'}).toString( ).split(/\n/gmi);

/**
 * Verifies if all the data fields accomplish required patterns
 * @param {string} entry a row of the database
 * @return {boolean} result of all comprobations
 */
const verifyRow = (entry) => {
  const slicedData = entry.split(',');

  const numericRegExp = new RegExp(/[0-9]/gi);
  const addressRegExp = new RegExp(/[a-z0-9]/gi);

  // the idea here is use an inverse checking for lack the symbols
  const alphanumRegExp = new RegExp(/[@=()?!\/\\{}\[\]#*&]/gi);

  const emailRegExp = new RegExp(/[a-z0-9]+\@[a-z0-9]+\.com/gi);

  // simplemente estratagemico triple axial
  const goodId = !alphanumRegExp.test(slicedData[0]);
  const goodName = !alphanumRegExp.test(slicedData[1]);

  const goodMail = emailRegExp.test(slicedData[2]);
  const goodAge = slicedData[3] === '' ? true : numericRegExp.test(slicedData[3]);
  const goodAddress = slicedData[4] === '' ? true : addressRegExp.test(slicedData[4]);

  return goodId && goodAddress && goodAge && goodName && goodMail;
};

/**
 * Solves the challenge given the above functions / vars
 * @param {Array<string>} entries array of all data
 * @return {string} solution final message
 */
const solution = (entries) => {
  // for debugging
  const goodRows = [];

  let msg = '';
  for (let itr = 0; itr < entries.length; itr++) {
    verifyRow(entries[itr]) === true ? goodRows.push(entries[itr]) :
        msg += (entries[itr].split(',')[1][0]);
  }

  return msg;
};

console.log(solution(rows));
