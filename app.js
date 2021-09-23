/*

- Node uses CommonJS modules 
- In javascript every file is a module by default
- module: encapsulated code share minimum

*/

const func = (name) => console.log(`Hello ${name}`);

const name = "Sayantika";

const obj = {
  name,
  func,
};
console.log(obj.func(obj.name));
