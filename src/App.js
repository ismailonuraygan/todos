import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios';
import TodoList from './components/TodoList';
import Username from './components/Username';
import AddTodo from './components/AddTodo';

function App() {

  const [todoList, setTodoList] = useState([])
 
  useEffect(()=>{
    const fetchDatas = async () => {
      const res = await axios.get("https://630f2d283792563418893c3d.mockapi.io/todos")
      setTodoList(res.data)
    }
    fetchDatas()
  },[])


  /*const handleUpdate = async (id) => {
    try{
      await axios.put(`https://630f2d283792563418893c3d.mockapi.io/todos/${id}`, {
        title: form.title,
        content : form.content
      })
      setUpdateMode(false)
    }catch(err){

    }
  }*/

  return (
    <div className="App">
      <Username/>
      <AddTodo />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
