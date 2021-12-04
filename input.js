// // setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event listener to handle data input from player
  stdin.on("data", handleUserInput);
  return stdin;
};

// //Added control+c input and terminate the game
const handleUserInput = function(key) {
  //console.log("the entered key is", key);// works!
  if (key === '\u0003') {
    process.exit();
  }
};


//old one, didn't add key variable in function
// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

module.exports = { setupInput };