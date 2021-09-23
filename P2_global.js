/*

- No window object. 
- There is a concept of GLOBAL or global variable
which means that they can be accessed from anywhere 
in the application.

- Some examples of global varibles are:
a. __dirname : path to current directory
b. __filename : file name
c. require : function to use modules (CommonJS)
d. module : info about current module or file
e. process : info about the env where the program is being executed

*/

console.log(__dirname);
console.log(__filename);
console.log(require.main);
console.log(module);
console.log(process);
console.log(require.main === module);
