export const welcomeMsg = () => {
  return console.log(`SQLite version 0.00.1 [date] [time]
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.`);
};

const exitDeno = () => Deno.exit(0);

const isValidCommand = ([command]) => {
  const validCommands = ["create", "table", "column", "row"];

  if (!validCommands.includes(command)) {
    console.log("Invalid Command"); // don't print here
  }

  return true; // shouldn't always return true
};

const isValidMetaCommand = ([command]) => {
  const validMetaCommands = [".exit", ".help"];

  if (!validMetaCommands.includes(command)) {
    console.log("Invalid Command");
  }

  return true;
};

const executeCommand = (arg) => {
  if (arg.at(0) === ".exit") {
    exitDeno();
  }

  return true;
};

const isMetaCommand = ([arg]) => arg.startsWith(".");

const runningCondition = (arg) => {
  // name change
  const validity = isMetaCommand(arg)
    ? isValidMetaCommand(arg)
    : isValidCommand(arg);

  if (validity) {
    executeCommand(arg);
  }

  return validity;
};

export const repl = () => {
  const args = prompt("sqlite>");
  const argList = args.split(" "); //name change

  return runningCondition(argList);
};
