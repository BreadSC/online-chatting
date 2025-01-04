
import { Box } from '@mui/material';
import {Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import '../../styles/chatting-window/room.css';

const Room = () => {
  

  return (
    <Box className="room">
        <Avatar className='room-avatar'>H</Avatar>
        <Box className="room-sum">
            <Typography variant='h6' sx={{marginTop: '2px', marginLeft: '6px'}}>Đoạn chat B</Typography>
            <Typography variant='body2' sx={{marginTop: '6px', marginLeft: '6px'}}>Nội Dung Đoạn chat B</Typography>
        </Box>
        
    </Box>
  )
}

export default Room;
