


import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import '../../styles/chatting-window/chat-frame.css';
function MessageInput() {
  

  return (
    <Paper className='message-input'
        component="form"
        sx={{borderRadius: 0}}
    >
      <InputBase className='search-input'
        
        placeholder="Nhập tin nhắn"
        inputProps={{ 'aria-label': 'input' }}
      />
      <IconButton type="button" className='search-button' aria-label="search">
        <SendIcon />
      </IconButton>
    </Paper>
  )
}

export default MessageInput;
