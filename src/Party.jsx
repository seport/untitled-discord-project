import React from 'react';
import { io } from 'socket.io-client';

const Party = () => {
  const socket = io();

  socket.on('message', (data) => {
    console.log(data); // world
  });

  return (
    <div>
      party
    </div>
  );
};

export default Party;
