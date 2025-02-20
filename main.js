import { repl, welcomeMsg } from "./src/lib.js";

const main = () => {
  welcomeMsg();

  while (repl()) {
    // change to a condition
    console.log("Command Executed");
  }
};

main();
