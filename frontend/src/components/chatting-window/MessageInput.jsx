


import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import '../../styles/chatting-window/chat-frame.css';
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <Paper className='message-input'
        component="form"
        sx={{borderRadius: 0}}
        onSubmit={handleSubmit}
        
    >
      <InputBase className='search-input'
        
        placeholder="Nhập tin nhắn"
        inputProps={{ 'aria-label': 'input' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconButton type="submit" className='search-button' aria-label="search">
        
        {loading ? <div className='loading loading-spinner'></div> : <SendIcon />}
      </IconButton>
    </Paper>
  )
}

export default MessageInput;
