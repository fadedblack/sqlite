export const welcomeMsg = () => {
  return console.log(`SQLite version 0.00.1 [date] [time]
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.`);
};

const exitDeno = () => Deno.exit(0);

const runningCondition = ([arg]) => {
  return arg !== ".exit";
};

export const repl = () => {
  const args = prompt("sqlite>");
  const argList = args.split(" ");

  return runningCondition(argList) ? argList : exitDeno();
};
