const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
  
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server: ');
    conn.write("Name: Tom" );

  });
  // conn.on('connect', () => {
  //   setInterval(function(){     
  //   conn.write("Move: up");
  //   }, 1000);
  //   setInterval(function(){     
  //     conn.write("Move: up");
  //   }, 2000);
  //   setInterval(function(){     
  //     conn.write("Move: up");
  //   }, 3000);
  //   setInterval(function(){     
  //     conn.write("Move: left");
  //   }, 4000);
  //   setInterval(function(){     
  //     conn.write("Move: right");
  //   }, 4000);

  });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {connect};
