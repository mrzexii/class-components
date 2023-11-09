// Todo.js

import React from 'react';

// This component represents an individual Todo item
export default class Todo extends React.Component {
  render() {
    // Extracting properties from props
    const { id, name, completed } = this.props.todo;
    const { toggleCompletion } = this.props;

    return (
      // Clicking on the Todo item triggers the toggleCompletion function with the Todo's id
      <div onClick={() => toggleCompletion(id)}>
        {name} {completed && '✓'}
      </div>
    );
  }
}
