
import { Box } from '@mui/material';
import {Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import '../../styles/chatting-window/room.css';
import useRoom from '../../zustand/useRoom';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useSocketContext } from '../../context/SocketContext';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const Room = ({room,lastIdx,emoji}) => {
  
  const {selectedRoom, setSelectedRoom} = useRoom()
  const isSelected = selectedRoom?._id === room._id;
  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(room._id);
  
  return (
    <Box className={`room hover:bg-sky-500 ${isSelected ? "bg-sky-500" : ""}`} 
      onClick={() => setSelectedRoom(room)}
    >
        <StyledBadge
          overlap='circular'
          anchorOrigin={{vertical:'bottom', horizontal:'right'}}
          variant={`${isOnline ? 'dot': ""}`}
        >
          <Avatar className='room-avatar' alt='name' src={room.profilePic}/>
        </StyledBadge>
        
        <Box className="room-sum">
            <Typography variant='h6' sx={{marginTop: '2px', marginLeft: '6px'}}>{room.fullName}</Typography>
            <Typography variant='body2' sx={{marginTop: '6px', marginLeft: '6px'}}>{emoji}</Typography>
        </Box>
        {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </Box>
  )
}

export default Room;
