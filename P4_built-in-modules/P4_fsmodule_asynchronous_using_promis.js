const { readFile, writeFile, write } = require("fs");

/*

Converting callback to promise using promisify method from util module and 
using that promise to read and write in file

*/

const util = require("util");

const fileRead = util.promisify(readFile);
const fileWrite = util.promisify(writeFile);

fileRead("P4_built-in-modules/P4_fs-read.txt", "utf-8")
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) =>
    fileWrite("P4_built-in-modules/P4_fs-write.txt", data, "utf-8")
  )
  .catch((err) => console.log(err));

/*

  Writing own promises for reading and writing in files

  */

const funcRead = (...args) => {
  return new Promise((resolve, reject) => {
    readFile(args[0], args[1], (...arr) => {
      if (arr[0]) reject(arr[0]);
      resolve(arr[1]);
    });
  });
};

const funcWrite = (...args) => {
  return new Promise((reject) => {
    writeFile(args[0], args[1], args[2], (err) => {
      if (err) reject(err);
    });
  });
};

funcRead("P4_built-in-modules/P4_fs-read.txt", "utf-8")
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) =>
    funcWrite("P4_built-in-modules/P4_fs-write.txt", data, "utf-8")
  )
  .catch((err) => console.log(err));
