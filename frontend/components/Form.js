// Form.js

import React from 'react';

// This component represents a form for adding new Todos
export default class Form extends React.Component {
  state = {
    name: '',
  };

  // Handles form submission
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    // Resetting the name input field after submission
    this.setState({
      name: '',
    });
  };

  // Handles input field changes
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {/* Input field for Todo name */}
        <input type="text" value={this.state.name} onChange={this.onChange} />
        {/* Submit button */}
        <input type="submit" />
      </form>
    );
  }
}
