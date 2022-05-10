import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { Outlet, Route, Routes} from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import { useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            todo share 
            
            <Route path={match.path} component={ListPage} exact />
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>
            <Route component={NotFound}/>
           
        </div>
    );
}

export default TodoFeature;