const net = require("net");

//returns the connect function from client.js //"require" the connect function
const {connect} = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  //console.log("the entered key is", key);// works!
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();