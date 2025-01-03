

import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/home/search-tool.css';
import UserInfor from './user/UserInfor';
function SearchTool() {
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
    <Paper className='search-tool'
        component="form"
        sx={{borderRadius: 0}}
    >
      <InputBase className='search-input'
        
        placeholder="Tìm kiếm"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" onClick={handleClickOpen} className='search-button' aria-label="search">
        <SearchIcon />
      </IconButton>
      <UserInfor
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Paper>
  )
}


export default SearchTool;
