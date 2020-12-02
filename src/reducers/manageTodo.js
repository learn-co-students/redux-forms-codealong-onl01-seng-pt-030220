export default function manageTodo(state = {
  todos: [
    {text: "Homework"},
    {text: "Do the dishes"}
  ],
}, action) {
  switch(action.type){
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.payload) };
    default:
      return state;
  }
}
