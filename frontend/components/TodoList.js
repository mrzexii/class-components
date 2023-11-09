// TodoList.js

import React from 'react';
import Todo from './Todo';

// This component represents a list of Todos
export default class TodoList extends React.Component {
  state = {
    showAll: true,
  };

  // Toggles the visibility of completed Todos
  toggleShowAll = () => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    });
  };

  render() {
    // Extracting properties from props
    const { todos, toggleCompletion } = this.props;

    // Filtering Todos based on completion status and showAll state
    const filtered = todos.filter((td) => !td.completed || this.state.showAll);

    return (
      <div>
        {/* Mapping over filtered Todos and rendering Todo components */}
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
        {/* Button to toggle visibility of completed Todos */}
        <button onClick={this.toggleShowAll}>
          {this.state.showAll ? 'Hide Completed Todos' : 'Show All'}
        </button>
      </div>
    );
  }
}
