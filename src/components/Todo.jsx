import React, { useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Todo = ({todo}) => {
    const [updateMode, setUpdateMode] = useState(false)
    const [form, setForm] = useState({title:todo.title, content: todo.content , id:todo.id})

    async function deleteTodo(id) {
        try{
          await axios.delete(`https://630f2d283792563418893c3d.mockapi.io/todos/${id}`).then(()=> window.location.reload())
        }catch(err){
          throw(err)
        }
      }

    async function updateTodo(id) {
        try{
          fetch(`https://630f2d283792563418893c3d.mockapi.io/todos/${id}`, {
            body: JSON.stringify({content: form.content }),
            headers: {
              "Content-Type": "application/json"
            }, 
            method: "PUT"
          }).then(() => window.location.reload())
        }catch(err){
          console.log(err);
        }
      }
  return (
    <div className='w-auto min-w-[25%] mx-auto space-y-6 max-w-md flex flex-col items-stretch'> 
    {updateMode ? 
        <form className="border-b border-gray-600" onSubmit={(e)=> {
            e.preventDefault()
            updateTodo(todo.id)
            }}>
            <div className='flex justify-between'>
            <textarea
                placeholder='Content'
                value={form.content}
                className="border-2 rounded border-gray-500 p-1 flex-1"
                onChange={(e)=> setForm({...form, content: e.target.value})}
            /> 
            <button type='submit' className='border-2 bg-green-500 px-3' ><CheckIcon/></button>  
            </div>
        </form> 
    : 
    <ul >
        <li className="border-b border-gray-500 p-2">
        <div className='flex justify-between'>
                <div className='flex-1'>
                    <h3 className='font-bold'>{todo.title}</h3>
                    <p className='text-sm'>{todo.content}</p>
                </div>
                <EditIcon className="cursor-pointer mr-2 mt-1" onClick={()=> {setUpdateMode(true)}} />
                <DeleteOutlineOutlinedIcon className="mt-1 cursor-pointer" onClick={()=>{deleteTodo(todo.id)}}/>
            </div>
        </li>
    </ul>}  
    </div>
  )
}

export default Todo