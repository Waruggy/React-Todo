import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          todoData: [
          ],
          todo:''
      };
  }
    
    strikeThru = id => {
        let newTodo = this.state.todoData.slice();
        newTodo = newTodo.map(todo => {
           if (todo.id === id) {
               todo.completed = !todo.completed;
               return todo;
           } else {
               return todo;
           }
        });
        this.setState({todoData: newTodo});
    };
addTodo = event => {
    event.preventDefault();
    if(!this.state.todo) {
        return;
    } else {
        this.setState({
            todoData: [
                this.state.todoData,
                {task: this.state.todo, completed: false, id: Date.now()}
            ],
            todo:''
        })
    }
};
    
  render() {
    return (
      <div className="container">
        <h1 className="main-header">Todo List: MVP</h1>
        <TodoList 
        data={this.state.todoData}
        strikeThru={this.strikeThru}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          AddTodoHandler={this.addTodo}
          removeCompleted={this.removeCompleteTodo}
          />
      </div>
    );
  }
}

export default App;
