// Stores the active TCP connection object.
let connection;
//connection should be in the outer-most scope so that it can be used by all functions in this module.

// setup interface to handle user input from stdin
// added conn as a parameter into setupInput function
//put connection = conn into setupInput function
// connection = conn sets conn for the global scope so it can be used everywhere? ... can't just use conn?
//had 2 snakes appearing because i didn't delete connect(?) from bottom of page

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event listener to handle data input from player
  stdin.on("data", handleUserInput);
  return stdin;
};

// //Added control+c input and terminate the game
//after putting connection = conn in setupInnput
//can use conn.write here
const handleUserInput = function(key) {
  //console.log("the entered key is", key);// works!
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
};


//old one, didn't add key variable in function
// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

module.exports = { setupInput };