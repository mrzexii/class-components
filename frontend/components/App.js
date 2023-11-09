import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

let id = 0;
let getid = () => ++id;

// Initial set of Todos
const initialTodos = [
  { id: getid(), name: 'Walk the Dog', completed: false },
  { id: getid(), name: 'Learn React', completed: true },
  { id: getid(), name: 'Have Fun', completed: false },
];

// Main application component
export default class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  // Adds a new Todo to the state
  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getid(), completed: false, name }),
    });
  };

  // Toggles the completion status of a Todo
  toggleCompletion = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((td) => {
        if (id === td.id) return { ...td, completed: !td.completed };
        return td;
      }),
    });
  };

  render() {
    return (
      <div>
        {/* TodoList component to display the list of Todos */}
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        {/* Form component for adding new Todos */}
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}


