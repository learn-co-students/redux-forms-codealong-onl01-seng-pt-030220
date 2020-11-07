export default function manageTodo(state = {
  todos:[{
      text: 'buy groceries'},
     { text: 'watch netflex'}
  ]
}, action) {

  switch(action.type){
   case 'ADD_TODO':
  console.log("reducer received this action:", action);

   return {todos: state.todos.concat(action.payload.text)}
 default:
  return state;
  }
}
