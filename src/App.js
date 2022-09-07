import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios';

function App() {

  const [form, setForm] = useState({title: "", content:"", id:""})
  const [todoList, setTodoList] = useState([])
  const [refresh, setRefresh] = useState(false)
 
  useEffect(()=>{
    const fetchDatas = async () => {
      const res = await axios.get("https://630f2d283792563418893c3d.mockapi.io/todos")
      setTodoList(res.data)
    }
    fetchDatas()
  },[])

  /* EN SON BURADA KALDIM. POST REQUEST */
  async function createTodo() {
    try{
      await axios.post("https://630f2d283792563418893c3d.mockapi.io/todos",{
        title: todoList.title
      })
    }catch(err){

    }
  }
  const handleSubmit = async () => {

  }

  async function deleteTodo(id) {
    try{
      await axios.delete(`https://630f2d283792563418893c3d.mockapi.io/todos/${id}`) /*.then(()=> window.location.reload())*/
    }catch(err){
      throw(err)
    }
  }
  return (
    <div className="App">
      <h1 className='text-center font-bold text-2xl mt-5'>TODOS</h1>
      <form className='w-auto min-w-[25%] mx-auto space-y-6 max-w-md flex flex-col items-stretch' onSubmit={ e => {
        e.preventDefault()
        /* handleSubmit(form) */
      }}>
        <input 
          type="text"
          placeholder="Title"
          value={form.title}
          className="border-2 rounded border-gray-500 p-1"
          onChange={(e)=> setForm({...form, title: e.target.value})}
          >
        </input>
        <textarea
        placeholder='Content'
        value={form.content}
        className="border-2 rounded border-gray-500 p-1"
        onChange={(e)=> setForm({...form, content: e.target.value})}
        />
        <button type='submit' className='border-2 bg-blue-500'>Add +</button>
      </form>
      <div className="w-auto min-w-[25%] max-w-md mx-auto mt-20 space-y-6 flex flex-col items-stretch">
        <ul>
          {todoList.map((todo)=> (
            <li key={todo.id} className="border-b border-gray-500 p-2">
              <div className='flex justify-between'>
                <div className='flex-1'>
                  <h3 className='font-bold'>{todo.title}</h3>
                  <p className='text-sm'>{todo.content}</p>
                </div>
                <button className='bg-green-500 text-white px-3 mr-1' onClick={()=> setForm({title: todo.title, content: todo.content, id: todo.id})}>Update</button>
                <button className='bg-red-500 text-white px-3' onClick={()=> {deleteTodo(todo.id); setRefresh(true)}}>X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
