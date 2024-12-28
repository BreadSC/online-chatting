
import { Box } from '@mui/material';
import SearchTool from '../SearchTool';
import '../../styles/chatting-window/room-list.css';
import Room from '../chatting-window/Room'
function RoomList() {
  

  return (
    <Box className="room-list">
        <SearchTool/>
        <Room/>

        <Room/>


        <Room/>

        <Room/>
    </Box>
  )
}

export default RoomList;
