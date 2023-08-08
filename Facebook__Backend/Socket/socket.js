// socketServer.js

const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server, {
    //allow cors for dev url.
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Connected to socket.io');

    socket.on('setup', (userData) => {
      console.log(userData._id);
      socket.join(userData._id);
      socket.emit('connected');
    });

    socket.on('join chat', (room) => {
      socket.join(room);
      console.log('User Joined Room: ' + room);
    });

    // socket.on('typing', (room) => socket.in(room).emit('typing'));
    // socket.on('stop typing', (room) => socket.in(room).emit('stop typing'));

    socket.on('new message', ({ data, senderId }) => {
      // var chat = data?.message
      const ppl = data?.whoIsIn_id;
      console.log(ppl, 'ref', senderId, 'senderId');

      if (!ppl.length || ppl.length === 1) return; //console.log("chat.users not defined");

      ppl.forEach((user) => {
        if (user?._ref == senderId) return; //return if the user is the sender.

        socket.in(user?._ref).emit('message recieved', data); //dispatch emit action
      });
    });

    socket.on('disconnect', () => {
      console.log('USER DISCONNECTED');
      // socket.leave(userData._id);
    });
  });

  return io;
};
