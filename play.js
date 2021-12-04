const net = require("net");

//returns the connect function from client.js //"require" the connect function
const connect = require("./client");

console.log("Connecting ...");
connect();