import React from 'react';
import { io } from 'socket.io-client';

const MessageInput = () => {
  const socket = io();
  const hello = () => {
    socket.emit('message', 'hello world');
  };

  return (
    <div>
      Message input
      <form>
        <input />
        <button type="button" onClick={hello}>submit</button>
      </form>
    </div>
  );
};

export default MessageInput;
