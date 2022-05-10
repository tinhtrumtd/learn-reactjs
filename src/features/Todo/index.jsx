import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Outlet, Route, Routes} from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    
    return (
        <div>
            todo share 
            <Routes>
            <Route path="/todos" element={<ListPage/>} />
            <Route path="/todos/:todoId" element={<DetailPage/>} />
            </Routes>
           
        </div>
    );
}

export default TodoFeature;