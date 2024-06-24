import React from 'react'
import { Todo } from './Model'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

type Props={
    todo: Todo;
    Todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}




const TodoItem = ({todo,Todos,setTodos}:Props) => {

  const handleDone = (id: number) => {

    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, iscompleted: !todo.iscompleted } : todo
      )
    );
  }; 
  const handleRemove = (id: number) => {
    console.log('handleRemove called', id);
    setTodos(
      Todos.filter((todo) => todo.id!==id)
    );
  }
  const handleEdit = (id: number) => {
    console.log('handleEdit called', id);
    setTodos(
      Todos.map((todo) =>
        todo.id === id? {...todo, iscompleted:!todo.iscompleted} : todo
      )
    );
  }


  return (
    <form className='TodoItems'>
      {
        todo.iscompleted?(<s className="todos">
            <span className='todoContent'>{todo.todo}</span><span className='todoDuration'> Do it for : {todo.duration} Hours</span></s>
            
          ):(
            <span className="todos">
            <span className='todoContent'>{todo.todo}</span><span className='todoDuration'>  Do it for : {todo.duration} Hours</span></span> 
            
            
          )}
      
            <span className='icon' onClick={()=>handleDone(todo.id)}>
          <DoneIcon />
        </span>
        <span className='icon' onClick={()=>handleRemove(todo.id)}>
          <DeleteIcon />
        </span>
        
        

    </form>
  )
}

export default TodoItem
