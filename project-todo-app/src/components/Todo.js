import React, {Component} from 'react';
import RemoveList from './RemoveList';

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
            todos: []
        }

        this.todoInput = "";
    }

    addTodo() {

        let todoValue = this.todoInput.value;
        let newTodos = this.state.todos
        newTodos.push(todoValue)

        this.setState({
            todos: newTodos
        })

        //reset input values
        this.todoInput.value = ""

        //reset focus
        this.todoInput.focus()
    }

    removeTodo(id) {
        let todos = this.state.todos.filter((todo,index) => {
            return id !== index
        })

        this.setState({
            todos: todos
        })
    }

    render() {
        return(
            <div className="alignment">
                <input type="text" placeholder="Enter todo list here" ref={(input) => this.todoInput = input} />
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <ul>
                    { this.state.todos.map((todo, index) => {
                        return(<RemoveList id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)} />)
                    }) }
                </ul>
                
          </div>
        );
    }
}