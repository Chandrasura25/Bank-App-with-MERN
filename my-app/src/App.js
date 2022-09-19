import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import './App.css';
import Contact from './component/Contact';
import Dashboard from './component/Dashboard';
import LandingPage from './component/LandingPage';
import Login from './component/Login';
import Page404 from './component/Page404';
import SignUp from './component/SignUp';
import Transfer from './component/Transfer';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Navigate to='/home'/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/transfer' element={<Transfer/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
    </>
  );
}
export default App;