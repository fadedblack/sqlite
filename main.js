import { repl, welcomeMsg } from "./src/lib.js";

const main = () => {
  welcomeMsg();

  while (repl()) {}
};

main();
