const os = require("os");
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(typeof os);
// console.log(os.userInfo());
// console.log(os.uptime() / 3600);

console.log(os.type());
console.log(os.release());
console.log(
  os.freemem() / (1024 * 1024 * 1024),
  os.totalmem() / (1024 * 1024 * 1024)
);
