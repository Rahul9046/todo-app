import React, { Component } from 'react';
import './user.css'

class User extends Component {
    render(){
        let userData = this.props.user.data,
        todos = userData.todos;
        todos = todos.map((todo, index) => {
            return (
                <div key={index}>
                    <span id="todo-item">
                    <input type="checkbox" name={"item" + index}/>
                    <label for={"item" + index}>{todo}</label>
                    </span>
                </div>
            );
        });
        return(
            <div className="user-details-container">
                <div className="username-container">Hey {userData.details.username}.</div>
                <div className="subtitle-container">Here is a list of your todos</div>
                <div className="user-todos">{todos}</div>
                <div className="add-item-buttom">ADD ITEM</div>
                <input type="text" id="new-todo" placeholder="Enter a new todo"/>
            </div>
        )
    }
}
export default User;
