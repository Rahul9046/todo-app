import React, { Component } from 'react';
import './user.css'
import axios from 'axios'

class User extends Component {
    constructor (props){
        super(props);
        let userData = props.user.data;
        this.state = {
            details: userData.details,
            todos: userData.todos,
            _id: userData._id
        };
      }
    render(){
        let {details, todos, _id} = this.state,
        handleUpdate = ()=>{
            axios.put('/api/user/', { todos: this.state.todos.slice().concat(this.refs.inputElem.value) }, { params: {id: _id}})
            .then((response) => {
                this.setState({ 
                    todos: response.data.todos
            })});
        },
        handleCheckBoxClick = (e)=>{
            let id = e.target.id  || e.target.parentNode.id,
                todoItem = document.getElementById(id).nextElementSibling.innerHTML,
                filterdTodos = this.state.todos.filter(todo => todo !== todoItem);
            axios.put('/api/user/', { todos: filterdTodos }, { params: {id: _id}})
            .then((response) => {
                this.setState({ 
                    todos: response.data.todos
            })});
        },
        todosList = todos.map((todo, index) => {
            return (
                <div key={index}>
                    <div className="todo-item">
                    <svg onClick={handleCheckBoxClick} id={"item" + index}  height="23px" viewBox="-48 0 407 407" width="23px" xmlns="http://www.w3.org/2000/svg"><path stroke="#ffffff" fill="#ffffff" d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"/><path stroke="#ffffff" fill="#ffffff" d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"/><path stroke="#ffffff" fill="#ffffff" d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"/></svg>
                    <label className="todo-text" htmlFor={"item" + index}>{todo}</label>
                    </div>
                </div>
            );
        });
        return(
            <div className="user-details-container">
                <div className="username-container">Hey {details.username}.</div>
                <div className="subtitle-container">Here is a list of your todos</div>
                <div className="user-todos">{todosList}</div>
                <div className="add-item-buttom" onClick={handleUpdate}>ADD ITEM</div>
                <input ref="inputElem" type="text" id="new-todo" placeholder="Enter a new todo"/>
            </div>
        )
    }
}
export default User;
