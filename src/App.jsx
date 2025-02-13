import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com'

function App() {
 

  return (
    <>
      <div>
        <NavbarComponent />
        <ToastContainer />
        <Outlet/>
      </div>
    </>
  )
}

export default App
