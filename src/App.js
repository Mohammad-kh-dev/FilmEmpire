
import React from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import Movies from './components/Movies/Movies';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App" style={{display:'flex' , height:'100%'}}>
     <CssBaseline/>
     <NavBar/> 
     <div style={{flexGrow:1 , width:'100%', paddingTop:'4rem' ,paddingLeft:'1rem'}}>
      <Routes>
      <Route index path='/' element={<Movies/>}/>
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
