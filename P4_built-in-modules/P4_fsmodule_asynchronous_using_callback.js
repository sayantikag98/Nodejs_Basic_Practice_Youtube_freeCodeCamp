const { readFile, writeFile } = require("fs");

readFile("P4_built-in-modules/P4_fs-read.txt", "utf-8", (...args) => {
  if (args[0]) {
    console.log(args[0]);
    return;
  }
  console.log(args[1]);
  writeFile("P4_built-in-modules/P4_fs-write.txt", args[1], "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});

// CALLBACK HELL
