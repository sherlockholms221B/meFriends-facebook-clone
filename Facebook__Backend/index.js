//.env's
require('dotenv').config();

const path = require('path');
const express = require('express');
const http = require('http');
const socketServer = require('./Socket/socket.js');

const app = express();
const server = http.createServer(app);
const io = socketServer(server);
const cors = require('cors');

//import routes from routes
const messageRoutes = require('./Routes/messageRoute.js');
const postRoutes = require('./Routes/postRoute.js');
const chatRoutes = require('./Routes/chatRoute.js');

//middlewares
const { errorHandler, notFound } = require('./Middleware/errorMiddleware.js');

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.get('/api/data', (req, res) => {
  // Handle the request and send a response
  res.json({ message: 'Hello from the server!' });
});

//routes
app.use('/facebook-clone-modern', postRoutes);
app.use('/facebook-clone-modern/api/chat', chatRoutes);
app.use('/facebook-clone-modern/api/message', messageRoutes);

// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// For any other route, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//declear port or take in the process.env
const PORT = process.env.PORT || 8080;

server.listen(PORT, console.log(`Server running on PORT ${PORT}...`));