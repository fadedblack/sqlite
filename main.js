import { repl, welcomeMsg } from "./src/lib.js";

const main = () => {
  welcomeMsg();

  while (true) {
    // change to a condition
    console.log(repl());
  }
};

main();
