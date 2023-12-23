const formula = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

const parseExprItem = {
  '&': (item) => {
    console.log(item); return item;
  },

  '#': (item) => item += 1,
  '@': (item) => item -= 1,
  '*': (item) => item *= item,
};

const solution = (problem) => {
  let total = 0;
  for (let formIndex = 0; formIndex < problem.length; formIndex++) {
    total = parseExprItem[problem[formIndex]](total);
  }
};

solution(formula);
