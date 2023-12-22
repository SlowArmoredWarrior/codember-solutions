import { readFileSync } from "fs";

const FILE_PATH = "./files/01_text.txt";
const message = await readFileSync(FILE_PATH);

const solution = (msg) => {
  const expr = /\s/gim;
  const res = msg.split(expr);
  console.log(res);
};

solution("sgdjhaghds ashdahsjd ashdkahsd");
