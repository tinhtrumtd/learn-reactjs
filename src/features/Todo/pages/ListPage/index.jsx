import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useState } from 'react';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const inittodoList =[
        {
            id:1,
            title:'eat',
            status: 'new',
        },
        {
            id:2,
            title:'sleep',
            status: 'completed',
        },
        {
            id:3,
            title:'busy',
            status: 'new',
        },
    ]
    const[ todoList, setTodoList ]= useState(inittodoList);
    const[fillterstatus, setfillterstatus]= useState('all')

    const handleTodoClick =(todo, idx)=>{
       const newtodoList= [...todoList];
        newtodoList[idx ]= {
           ...newtodoList[idx],
           status: newtodoList[idx].status === 'new' ? 'completed':'new',
           
       };
    //    newtodoList= newtodo(idx);
    setTodoList(newtodoList);

        }  
        const handleShowAllClick = () =>{
            setfillterstatus('all')
        }
        const handleShowNewClick = () =>{
            setfillterstatus('new')
         }
        const handleShowComletedClick = ()=>{
            setfillterstatus('completed')
        }
      
        const renderfilltertodolist=todoList.filter(todo=> fillterstatus==='all' || fillterstatus === todo.status);
    return (
        <div>
            <h3>todo list</h3>
            <TodoList todoList={renderfilltertodolist} onTodoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowAllClick}>show all</button>
                <button onClick={handleShowComletedClick}>show completed</button>
                <button onClick={handleShowNewClick}>show new</button>
            </div>
        </div>
    );
}

export default ListPage;