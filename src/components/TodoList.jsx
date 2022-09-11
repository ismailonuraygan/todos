import React from 'react'
import Todo from './Todo'
const TodoList = ({todoList}) => {
  return (
    <div className='mt-10'>
        {todoList.map((todo)=>(
        <Todo key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default TodoList