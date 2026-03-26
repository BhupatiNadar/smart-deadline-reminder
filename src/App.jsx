import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HorzontalNavbar from './components/Dashboard/HorzontalNavbar'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HorzontalNavbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App