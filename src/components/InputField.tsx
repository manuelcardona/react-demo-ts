import React,{useRef} from 'react';
import './InputField.css';

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input  value={todo}
        ref={inputRef}
        type="input" 
        onChange={(e)=>{
            setTodo(e.target.value)
        }}
        placeholder='Enter a Task' 
        className='input__box'/>
        <button type="submit" className='input__submit'>
            Go
        </button>
    </form>
  )
}

export default InputField