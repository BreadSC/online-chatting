
import { Box } from '@mui/material';
import RoomTitle from './RoomTitle';
import '../../styles/chatting-window/chat-frame.css';
import ChatContent from './ChatContent';
import MessageInput from './MessageInput';
const ChatFrame = () => {
  
  const noRoomSelected = true;
  return (
    
    <Box className="chat-frame">
      {noRoomSelected ? <NoRoomSelected/> :(
        <>
          <RoomTitle/>
          <ChatContent/>
          <MessageInput/>
        </>
        
      )}
      
    
    </Box>
    
    
  )
}

export default ChatFrame;

const NoRoomSelected = () => {
  return(
    <h1> Xin chào</h1>
  )
}