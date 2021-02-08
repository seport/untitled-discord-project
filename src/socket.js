import * as socketio from 'socket.io';
import * as http from 'http';

const iorouter = (socket) => {
  // Socket.io routing goes here:
  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });
};

export default function socketServer(httpServer) {
  const sock = new socketio.Server(httpServer);
  sock.on('connection', iorouter);
}
