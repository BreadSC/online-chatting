
import { Box } from '@mui/material';
import RoomList from './RoomList'
import '../../styles/chatting-window/chat-window.css';
import ChatFrame from './ChatFrame';
function ChatWindow() {
  

  return (
    <Box className="chat-window">
        <RoomList/>
        <ChatFrame/>
    </Box>
  )
}

export default ChatWindow;
