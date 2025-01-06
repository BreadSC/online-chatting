
import { Box } from '@mui/material';
import SearchTool from '../SearchTool';
import '../../styles/chatting-window/room-list.css';
import Room from '../chatting-window/Room'
import useGetRooms from '../../hooks/useGetRooms';
import { getRandomEmoji } from '../../utils/emoji';
function RoomList() {
  
  const {loading, rooms} = useGetRooms();
  // console.log("Rooms:", rooms);
  // update room list success
  return (
    <Box className="room-list">
        <SearchTool/>
        {rooms.map((room,idx) => (
          <Room 
            key={room._id}
            room={room}
            emoji={getRandomEmoji()}
            lastIdx={idx === rooms.length -1}
          />
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        
    </Box>
  )
}

export default RoomList;
