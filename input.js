// W = UP  A = LEFT S = DOWN D = RIGHT 
let connection;

//Update the setupInput function within input module to accept a conn parameter and set it as the value for the connection variable.

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (data) => {
    if (data === '\u0003'){
      process.exit();
    }
    else if (data === 'w'){
     conn.write("Move: up");
    }
    else if (data === 'a'){
      conn.write("Move: left");
    }
     else if (data === 's'){
      conn.write("Move: down");
     }
     else if (data === 'd'){
      conn.write("Move: right");
     }
  }
  stdin.on ('data', handleUserInput);
  
}


module.exports = {setupInput};