
import { Box, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CloudIcon from '@mui/icons-material/Cloud';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/home/side-bar.css';
function SideBar() {
  

  return (
    <Box className="sidebar">
      <Stack direction="column" spacing={2}>
        <IconButton>
          <Avatar>H</Avatar>
        </IconButton>

        <IconButton>
          <MessageIcon className="icon" />
        </IconButton>

        <IconButton>
          <CloudIcon className="icon" />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton>
          <SettingsIcon className="icon" />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default SideBar;
