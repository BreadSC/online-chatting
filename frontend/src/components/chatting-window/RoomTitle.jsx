
import { Box, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {Typography } from '@mui/material';
import * as React from 'react';
import UserInfor from '../user/UserInfor';
import '../../styles/chatting-window/chat-frame.css';
function RoomTitle() {
  
  //Xử lý khi nhấn tìm kiếm
    const phone = ['username@gmail.com', 'user02@gmail.com'];
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(phone[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
    return (
      <Box className="room-title">
          <Stack direction="row" spacing={1} sx={{paddingTop:'5px'}}>
            <IconButton onClick={handleClickOpen}>
              <Avatar>H</Avatar>
            </IconButton>
            <UserInfor
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                  />
            <Box sx={{paddingTop:'5px'}}>
              <Typography variant='h4'>Huyền</Typography>
            </Box>
            
            
          </Stack>
      </Box>
    )
}

export default RoomTitle;

//hoan thanh chức nang RommTitle