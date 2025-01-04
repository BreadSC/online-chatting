


import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import HomePage from './pages/home/HomePage';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  
  const {authUser} = useAuthContext();
  return <div className='p-4 h-screen flex item-center justify-center'>
    <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/login"}/>} />
      <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login />}/>
      <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup />}/>
    </Routes>
    <Toaster/>
  </div>
}

export default App
