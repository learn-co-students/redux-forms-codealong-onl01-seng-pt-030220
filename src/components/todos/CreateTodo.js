import React, { Component } from 'react'
import {connect}  from 'react-redux'
class CreateTodo extends Component {
  constructor(){
    super()
    this.state={
        text: ''
       }
  }

  handleChange=(event) =>{
    console.log('clicked')
    event.preventDefault()
        console.log(`target`,event.target)
    this.setState({
      text: event.target.value
    });
};

 handleSubmit= event =>{
   event.preventDefault()
   this.props.addTodo(this.state)
 }


  render() {
     console.log(`state`,this.state)
    return(
      <div>

        <form  onSubmit={(e)=>this.handleSubmit(e)}>
        <p>
           <label>
           add todo
           </label>
           <input type="text"  onChange={(event) => this.handleChange(event)} 
           value={this.state.value} />
        </p>
          <input type="submit"/>
        </form>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
   return {
      addTodo: formData => dispatch({type:'ADD_TODO', payload:formData})
      
      }
}

export default  connect(null,mapDispatchToProps)(CreateTodo);


