import React, { Component } from 'react';
import './user.css'
import axios from 'axios'

class User extends Component {
    constructor (props){
        super(props);
        let userData = props.user.data;
        this.state = {
            details: userData.details,
            todos: userData.todos
        };
      }
    render(){
        let {details, todos} = this.state,
        handleUpdate = ()=>{
            axios.put('/api/user/', { todos: this.state.todos.slice().concat(this.refs.inputElem.value) }, { params: {usr: details.username}})
            .then((response) => {
                this.setState({ 
                    todos: response.data.todos
                })});
        },
        todosList = todos.map((todo, index) => {
            return (
                <div key={index}>
                    <span id="todo-item">
                    <input type="checkbox" name={"item" + index}/>
                    <label htmlFor={"item" + index}>{todo}</label>
                    </span>
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
