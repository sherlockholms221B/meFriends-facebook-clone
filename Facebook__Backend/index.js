//import express module
import express from 'express'

//import nodejs http module
import http from 'http'

//import cors module & allow cross origin requsts
import cors from 'cors'

//
import {config} from 'dotenv'
//

//import routes from routes
import messageRoutes from './Routes/messageRoute.js'
import postRoutes from './Routes/postRoute.js'
import chatRoutes from './Routes/chatRoute.js'

//middlewares
import { errorHandler, notFound } from './Middleware/errorMiddleware.js'

//allow for environmental variables
config()

//initialize express
const app = express()

const server = http.createServer(app)

//use express json
app.use(express.json())

//cors options
const whitelist = [
  'http://localhost:3000',
  'https://facebook-pi.netlify.app/',
  'http://192.168.207.153:3000',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

//allow cross-origin requests
app.use(cors(corsOptions));

//routes
app.use('/facebook-clone-modern', postRoutes);
app.use('/facebook-clone-modern/api/chat', chatRoutes);
app.use('/facebook-clone-modern/api/message', messageRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

//declear port or take in the process.env
const PORT = process.env.PORT || 8080;

// const _socket =
  
  server.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

// import { Server } from 'socket.io';
// const io = new Server(_socket, {
//   pingTimeout: 60000,
//   cors: {
//     // origin: 'https://facebook-pi.netlify.app',
//     origin: 'http://localhost:3000',
//     // credentials: true,
//   },
// });

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
