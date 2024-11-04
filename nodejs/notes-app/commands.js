const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Content of the note",
      demandOption: true,
      type: "string"
    },
  },
  handler: function (argv) {
    console.log("Adding a new note with title '" + argv.title + "'");
  },
});

yargs.command({
  command: "remove",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note...");
  },
});

// yargs.argv;
yargs.parse();
