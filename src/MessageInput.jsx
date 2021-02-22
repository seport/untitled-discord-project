import React, { useState } from 'react';
import { io } from 'socket.io-client';

export const MessageInput = ({ socket }) => {
  const hello = () => {
    socket.emit('message', inputValue);
  };

  const [inputValue, setInputValue] = useState('text');

  const onInputChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value);
  }

  return (
    <div>
      Message input
      <form>
        <input value={inputValue} onChange={onInputChange}/>
        <button type="button" onClick={hello}>submit</button>
      </form>
    </div>
  );
};

const ConnectedMessageInput = () => {
 const socket = io();
 return <MessageInput socket={socket} />
}

export default ConnectedMessageInput;
