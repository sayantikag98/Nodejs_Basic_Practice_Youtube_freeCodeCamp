const { readFileSync, writeFileSync } = require("fs");

console.log("Starting");
const readText = readFileSync("P4_built-in-modules/P4_fs-read.txt", "utf-8");
console.log("Reading");
console.log(readText);
writeFileSync("P4_built-in-modules/P4_fs-write.txt", "\n", { flag: "a" });
writeFileSync("P4_built-in-modules/P4_fs-write.txt", readText, { flag: "a" });
console.log("Ending");
