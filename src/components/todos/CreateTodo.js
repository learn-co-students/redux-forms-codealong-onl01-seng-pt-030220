import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: ''
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     text: '',
  //   };
  // }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.mapDispatchToProps.addTodo(this.state)
    // this.props.addTodo(this.state);
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  };
  
  render() {
    return(
      <div>
        <h1>Todo Component</h1>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            {/* <input type="text" onChange={(event) => this.handleChange(event)} /> */}
            {/* <input type="text" onChange={this.handleChange} value={this.state.text} /> */}
            <input type="text" onChange={event => this.handleChange(event)} value={this.state.text} />
          </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };

// export default CreateTodo;
// export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo);