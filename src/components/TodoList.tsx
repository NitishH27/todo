import React from 'react'
import './styles.css'
import { Todo } from './Model'
import TodoItem from './TodoItem';



interface Props{
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
 const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='TodoList'>
        {
            todos.map(todo => (
               <TodoItem todo={todo} key={todo.id} Todos = {todos} setTodos={setTodos}/>
               
            ))
        } 
        
    </div>
  )
}
export default TodoList;
