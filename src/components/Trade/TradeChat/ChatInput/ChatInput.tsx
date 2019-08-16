import React, { useState } from 'react';
import { IProps } from './types';

const ChatInput: React.FC<IProps> = (props: IProps) => {
  
  const [input, setInput] = useState('');

  function handleMessageSending(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(input.trim() != '') {
      props.actions.sendMessage(input, props.activeUserId);
      setInput('');
    }
  }

  function handleOtherPersonMessageSend(event: React.FormEvent<HTMLButtonElement>) {
    if (input.trim() != '') {
      props.actions.sendMessage(input, props.tradingWithId);
      setInput('');
    }
  }

  return (
    <form onSubmit={handleMessageSending} styleName='form'>
      <input 
        value={input} 
        onChange={e => setInput(e.target.value)}
        placeholder='Type your message...'
        styleName='input' 
      />
      <input type='submit' value='SEND' styleName='action-send-message' />
      <button onClick={handleOtherPersonMessageSend} type='button' styleName='action-send-message-other'>
        SEND AS OTHER PERSON
      </button>
    </form>
  )

}

export default ChatInput
