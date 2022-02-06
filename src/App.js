import React from 'react';
import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album/pages';
import { Link, Navigate, NavLink, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      home page 
      {/* <p> <Link to="/todos">todo</Link></p>
      <p> <Link to="/albums">album</Link></p> */}
      
      <p><NavLink to="/todos" activeClassname="active-menu">todo</NavLink></p>
      <p><NavLink to="/albums" activeClassname="active">album</NavLink></p>
      <Routes>
      {/* <Route path='/todos' element={<TodoFeature/>}/> */}
      <Route
        path="/home"
        element={<Navigate to="/" />}// thay redirect
    />
      <Route path="/todos" element={<TodoFeature />}/>
      <Route path='/albums' element={<AlbumFeature />}/>
      </Routes>
      
      
    </div>
    
  );
}

export default App;
