
import { Box, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CloudIcon from '@mui/icons-material/Cloud';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import '../styles/home/side-bar.css';
import useLogout from '../hooks/useLogout';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import UserInfor from './user/UserInfor';
function SideBar() {
  const {authUser} = useAuthContext()
  const { loading, logout } = useLogout();


  const phone = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(phone[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <Box className="sidebar">
      <Stack direction="column" spacing={2}>
        <IconButton onClick={handleClickOpen}>
          <Avatar src={authUser.profilePic}/>
        </IconButton>
        <UserInfor
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
        <IconButton>
          <MessageIcon className="icon" />
        </IconButton>

        <IconButton>
          <CloudIcon className="icon" />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        {!loading ? (
          <IconButton onClick={logout}>
            <LogoutIcon className="icon" />
          </IconButton>) : (<span className='loading loading-spinner'></span>)
        }
        {/* <IconButton onClick={logout}>
            <LogoutIcon className="icon" />
        </IconButton> */}
        
      </Stack>
    </Box>
  )
}

export default SideBar;
