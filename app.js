const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

// const validator = require("validator");
// import chalk from "chalk";

// console.log(notes());

// const greenMsg = chalk.bold.red("error!");
// console.log(greenMsg);
// // console.log(validator.isEmail("Saeed@gmail.com"));
// // console.log(validator.isURL("Saeed@gmail"));

// const command = process.argv[2].toUpperCase();

// console.log(process.argv[2]);

// if (command === "ADD") {
//   console.log("Adding Note!");
// }
// else if(command === 'REMOVE'){
//     console.log("Removing Note!");
// }

//create add command

console.log(chalk.red("Welcome To My Note-app where you can:"));
console.log(chalk.green("Add a new Note Using 'add' command.  "));
console.log(chalk.green("Remove a Note Using 'remove' command."));
console.log(chalk.green("Read a Note Using 'read' command.    "));
console.log(chalk.green("List all Notes Using 'list' command. "));

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "The title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The body of note!",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command

yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      describe: "The title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "List all notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      description: "Title of Note!",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
