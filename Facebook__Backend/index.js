//import express module
import express from 'express'

//import nodejs http module
import http from 'http'

//import cors module & allow cross origin requsts
import cors from 'cors'

//import routes from routes
import router from './Routes/postRoute.js'

//middlewares
import { errorHandler, notFound } from './Middleware/errorMiddleware.js'

//initialize express
const app = express()

const server = http.createServer(app)

//use express json
app.use(express.json())

//cors options
const whitelist = ['http://localhost:3000', 'http://example2.com']
const  corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

//allow cross-origin requests
app.use(
  cors(corsOptions)
)

//routes
app.use(router)


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);



//declear port or take in the process.env
const PORT = process.env.PORT || 8080


const _socket = server.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

import {Server} from 'socket.io'
const io = new Server(_socket, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
