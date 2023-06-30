//.env's
require('dotenv').config();

// const express = require('express');
// const app = express();
// const http = require('http').Server(app);
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3001',
//   },
// });

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3001',
  },
});
const cors = require('cors');

//import routes from routes
const messageRoutes = require('./Routes/messageRoute.js');
const postRoutes = require('./Routes/postRoute.js');
const chatRoutes = require('./Routes/chatRoute.js');

//middlewares
const { errorHandler, notFound } = require('./Middleware/errorMiddleware.js');
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true, // if you need to send cookies or authorization headers
  })
); // Enable CORS for all routes

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

// io.on('connection', (socket) => {
//   console.log('Connected to socket.io');
//   socket.on('setup', (userData) => {
//     socket.join(userData._id);
//     socket.emit('connected');
//   });

//   socket.on('join chat', (room) => {
//     socket.join(room);
//     // console.log("User Joined Room: " + room);
//   });
//   socket.on('typing', (room) => socket.in(room).emit('typing'));
//   socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));

//   socket.on('new message', ({ data, senderId }) => {
//     // var chat = data?.message
//     const ppl = data?.whoIsIn_id;

//     if (!ppl.length || ppl.length === 1) return; //console.log("chat.users not defined");

//     ppl.forEach((user) => {
//       if (user?._ref == senderId) return; //return if the user is the sender.

//       socket.in(user?._ref).emit('message recieved', data); //dispatch emit action
//     });
//   });

//   socket.off('setup', () => {
//     // console.log("USER DISCONNECTED");
//     socket.leave(userData._id);
//   });
// });

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle when a client sends a message
  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
    io.emit('chat message', msg); // Broadcast the message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

//declear port or take in the process.env
const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server running on PORT ${PORT}...`));


