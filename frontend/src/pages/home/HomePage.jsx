import * as React from 'react';
import './home.css'
import SideBar from '../../components/SideBar';
import ChatWindow from '../../components/chatting-window/ChatWindow'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
function HomePage() {
  

  return (
    
    
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="false" className="home" >
      <SideBar/> 
      <ChatWindow/>
      
    </Container>
    </React.Fragment>
  )
}

export default HomePage
