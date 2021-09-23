const path = require("path");
// console.log(path);
console.log(path.sep);
const newPath = path.join("/P3_modules", "P3_function.js");
console.log(newPath);
console.log(path.basename(newPath));
console.log(path.resolve(__dirname, "app.js"));
console.log(__dirname);
