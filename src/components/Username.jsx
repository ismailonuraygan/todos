import React,{useState} from 'react'

const Username = () => {
    const [name, setName] = useState("")
    const [form, setForm] = useState({name: ""})

    const handleSubmit2 = (data) => {
        if(data.name.length < 3) {
            return;
        }
        localStorage.setItem("name", data.name)
        const refresh = () => window.location.reload()
        refresh();
        console.log(localStorage.getItem("name"))
        setName(localStorage.getItem("name")+"s")   
      }
      const deleteName =()=>{
        localStorage.clear()
        const refresh = () => window.location.reload()
        refresh();
      }
  return (
    <div>
        <h1 className='text-center font-bold text-2xl mt-5'>
        {localStorage.getItem("name") !== null ? localStorage.getItem("name")+"'s" : ""} TODOS
      </h1>
      <form className='w-auto min-w-[25%] mx-auto space-y-6 max-w-md flex flex-col items-stretch ' onSubmit={ e=>{
        e.preventDefault()
        handleSubmit2(form)
      }}>
        <input
            type="text"
            placeholder='Your name...'
            value={form.name}
            className="border-2 rounded border-gray-600"
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <button type="submit" className='bg-green-500 text-white px-3 mr-1'>Update Name</button>
          <button onClick={()=>{deleteName()}} className='bg-red-500 text-white px-3 mr-1'>Delete Name</button>
      </form>
    </div>
  )
}

export default Username