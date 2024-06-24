import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/Model';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';

function App() {
    const[todo,setTodo] = useState<string>("");
    console.log(todo);
    const[todos,setTodos]=useState<Todo[]>([]);
    const[duration,setDuration] = useState<number>(0);
    const handleAdd=(e: React.FormEvent) => {
        e.preventDefault();
        if(todo.trim()===''){
            toast.info("Cannot be empty");
            return;
        }

        if(todo){
            setTodos([...todos,{id:Date.now(),todo:todo,iscompleted:false,duration:duration}]);
            setTodo("");
        }
        
    };
   console.log(todos);
  return (
      <>
          <div className="App">
              <span className="heading"><PlaylistAddCheckOutlinedIcon fontSize='large' />  TASK MAESTRO<br/></span>
              
              <InputField todo={todo} setTodo={setTodo} duration={duration} setDuration={setDuration} handleAdd={handleAdd} />

              <TodoList todos={todos} setTodos={setTodos} />
              <ToastContainer className="toastContainer" />
          </div>
          

      </>
  );
}

export default App;
