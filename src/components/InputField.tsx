import React from 'react'
import './styles.css'


interface Props{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    duration:number;
    setDuration:React.Dispatch<React.SetStateAction<number>>;
    handleAdd:(e:React.FormEvent)=>void;

}
const InputField:React.FC<Props> = ({todo, setTodo,handleAdd,duration,setDuration}) => {
    
  return (
    <form className='input' onSubmit = {handleAdd}>
        <input type = 'input' value = {todo} onChange = {(e)=>setTodo(e.target.value)} placeholder  ='Enter your task here' className='inputBox'/>
        <input type = 'number' value = {duration} onChange = {(e)=>setDuration(Number(e.target.value))} placeholder  ='Enter your task duration' className='inputBox'/>
        <button type = 'submit'  className='submitButton'>Add</button>

        

    </form>
  )
}

export default InputField;

