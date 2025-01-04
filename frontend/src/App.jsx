


import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import HomePage from './pages/home/HomePage';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return <div className='p-4 h-screen flex item-center justify-center'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    
  </div>
}

export default App
