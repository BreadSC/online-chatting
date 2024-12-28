

import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/home/search-tool.css';
function SearchTool() {
  

  return (
    <Paper className='search-tool'
        component="form"
        sx={{borderRadius: 0}}
    >
      <InputBase className='search-input'
        
        placeholder="Tìm kiếm"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" className='search-button' aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchTool;
