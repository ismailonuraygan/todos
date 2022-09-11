import React, {useState} from 'react'

const AddTodo = () => {
    const [form, setForm] = useState({title: "", content:"", id:""})


    /* POST REQUEST */
  async function createTodo(data) {
    try{
      fetch("https://630f2d283792563418893c3d.mockapi.io/todos", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }, 
        method: "POST"
      }).then(()=> {
        setForm({title:"" , content:"", id:""})
      }).then(() => window.location.reload())
    }catch(err){
      console.log(err);
    }
  }

    const handleSubmit = async (data) => {
        if(data.content.length < 3 && data.title.length < 3){
            alert("3 karakterden fazlasını girmelisiniz!")
            return;
        } /* if content or title length less than 3 it wont allow to add new todo */
    
        try{
          createTodo(data)
        }catch(err){
          console.log(err)
        }
      }

  return (
    <div>
        <form className='w-auto min-w-[25%] mx-auto space-y-6 max-w-md flex flex-col items-stretch mt-10' onSubmit={ e => {
        e.preventDefault()
        handleSubmit(form) 
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
        <button type='submit' className='border-2 bg-blue-500' >Add +</button>
      </form>
    </div>
  )
}

export default AddTodo