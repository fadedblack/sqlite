export const welcomeMsg = () => {
  return console.log(`SQLite version 0.00.1 [date] [time]
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.`);
};

const isValidCommand = ([command]) => {
  const commands = [
    "create",
    "table",
    "column",
    "select",
    "insert",
    "row",
    ".exit",
    ".help",
  ];

  if (!commands.includes(command)) {
    console.log("Invalid Command"); // don't print here
  }

  return true; // should always return true?
};

const executeCommand = (arg) => {
  if (arg.at(0) === ".exit") {
    Deno.exit(0);
  }

  return true;
};

const executionStatus = (arg) => {
  const validity = isValidCommand(arg);
  if (validity) {
    console.log(`arg: ${arg}`);

    executeCommand(arg);
  }

  return validity;
};

export const repl = () => {
  const commands = prompt("sqlite>");
  const args = commands.split(" ");

  return executionStatus(args);
};
