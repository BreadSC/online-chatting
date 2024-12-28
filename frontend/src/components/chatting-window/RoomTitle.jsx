
import { Box, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {Typography } from '@mui/material';
import '../../styles/chatting-window/chat-frame.css';
function RoomTitle() {
  

  return (
    <Box className="room-title">
        <Stack direction="row" spacing={1} sx={{paddingTop:'5px'}}>
          <IconButton>
            <Avatar>H</Avatar>
          </IconButton>
          <Box sx={{paddingTop:'5px'}}>
            <Typography variant='h4'>Huyền</Typography>
          </Box>
          
          
        </Stack>
    </Box>
  )
}

export default RoomTitle;
