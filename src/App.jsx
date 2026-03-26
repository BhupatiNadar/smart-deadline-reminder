import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HorzontalNavbar from './components/Dashboard/HorzontalNavbar'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<HorzontalNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App