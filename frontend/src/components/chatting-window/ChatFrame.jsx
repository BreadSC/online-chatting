
import { Box } from '@mui/material';
import RoomTitle from './RoomTitle';
import '../../styles/chatting-window/chat-frame.css';
import ChatContent from './ChatContent';
import MessageInput from './MessageInput';
function ChatFrame() {
  

  return (
    <Box className="chat-frame">
      <RoomTitle/>
      <ChatContent/>
      <MessageInput/>
    </Box>
  )
}

export default ChatFrame;
