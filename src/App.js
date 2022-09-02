import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Home from './Pages/Home';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App