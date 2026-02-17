import http from 'http';
import app from './src/app.js';
import ENV from './src/configs/env.js';

const PORT = ENV.PORT; // Define port using environment variables

// Create an HTTP server using the Express app as the request handler
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
