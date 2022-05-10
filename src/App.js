import React, { useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album/pages';
import { Link, Navigate, NavLink, Route, Router, Routes } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  //goi API
  useEffect(
    ()=>{
      const fetchProducts = async () => {
        const params = {
          _limit: 10,
        };
        const productList = await productApi.getAll(params);
        console.log(productList)
      }
      fetchProducts();
    },[]
  );
  return (
    
    <div className="App">
      home page 
      {/* <p> <Link to="/todos">todo</Link></p>
      <p> <Link to="/albums">album</Link></p> */}
      
      <p><NavLink to="/todos" activeClassname="active-menu">todo</NavLink></p>
      <p><NavLink to="/albums" activeClassname="active">album</NavLink></p>
    
      {/* <Route path='/todos' element={<TodoFeature/>}/> */}
      {/* <Route
        path="/home"
        element={<Navigate to="/" />}// thay redirect */}
    {/* /> */}
    
     
      <Switch>
      <Redirect from='/home' to="/" exact/>
      <Route path="/todos"  component={TodoFeature} exact/>
      <Route path='/albums' component={AlbumFeature} exact/>
      <Route component={NotFound} />
      </Switch>
      
    </div>
    
  );
}

export default App;
