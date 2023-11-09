const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, World!\n');
});

// Define the port and IP address to listen on
const port = 3000;
const hostname = '127.0.0.1';

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
