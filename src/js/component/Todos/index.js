import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Need to work on design as well.
export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : [
                "create a todo list",
                "continue studying",
                "Eat",
                "Sleep",
                "Fuck"
            ]
        };
        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem(e){
        let listState = this.state;
        let newItem = "";
        if(e.keyCode == 13){
            newItem = e.target.value;
            listState.todoList.push(newItem);
            this.setState(listState);
            e.target.value = "";
        }
    }

    deleteListItem(key){
        let listState = this.state;
        let newlistState = listState.todoList.splice(key, 1);
        this.setState(listState);
    }

    render(){
        const listItems = this.state.todoList.map((item, key) => <li key={key} onClick={() => this.deleteListItem(key)}><span><i className="far fa-trash-alt"></i></span>
            {item}
        </li>
        
        );
        return (
            <div>
                <div id="container">
                    <h1 className="todo-header">To do List</h1>
                    <input id="addToDo" onKeyDown={this.addNewItem} type="text" placeholder="Add to do here" />
                    <ul>
                        {listItems}     
                    </ul>
                </div>
            </div>
        );
    }
}

Todos.propTypes = {
    listItem: PropTypes.string
};