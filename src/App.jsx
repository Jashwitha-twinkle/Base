import { useState } from 'react'
import './App.css'

function App(){
  
  let [num, setnum] = useState(1)
  let [show, setshow] = useState(true)
  const [task, setask] = useState("")
  const [email, setemail] = useState("")
  const [color, setcolor] = useState("coral")
  const [todos, settodos] = useState([])
  const [work, setwork] = useState("")

  const add = () => {
    if(num < 10){
      setnum(num + 1);
    }
  };

  const sub = () => {
    if(num > 1){
      setnum(num - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setask("");
    setemail("");
  }
  const handleAdd = () => {
    if (work.trim() === "") return
    settodos([...todos, {text: work, done: false}])
    setwork("")
  }
  const handleDelete = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    settodos(updated);
  }
  const toggleDone = (index) => {
    const updated = todos.map((todo, i) => {
      if (i == index){
        return {...todo, done:!todo.done};
      }
      return todo;
    });
    settodos(updated);
  }

  return (

    <>
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-white">

        <div className="text-center p-6 rounded shadow bg-gray-100 mt-5 mb-5">
          <h1 className="text-2xl font-bold ">useState Practice Projects</h1>
        </div>

        
        <div className="text-center p-6 px-28 py-20 rounded shadow mt-5 mb-5 bg-blue-100">
          <h1 className='text-xl font-bold text-left'>
            1. Counter App
            </h1>
          <p className="font-bold text-3xl mt-3">
            {num}
            </p><br />

          <div className="flex gap-4">
            <button 
            onClick={sub}
            className="bg-red-500 py-2 px-6 rounded hover:bg-red-600 text-white">
              -
              </button>
  
            <button 
            onClick={() => setnum(1)}
            className="bg-gray-500 py-2 px-6 rounded hover:bg-gray-600 text-white">
              Reset
              </button>
  
            <button
            onClick={add} 
            className="bg-green-500 py-2 px-6 rounded hover:bg-green-600 text-white">
              +
              </button>
          </div>
        </div>

        <div className="text-center px-22 py-20 rounded shadow mt-5 mb-5 bg-green-100">
          <h1 className='text-xl font-bold text-left'>
            2. Toggle visibilty
            </h1>
            <button 
            onClick={() => setshow(!show)}
            className='bg-blue-500 py-2 px-6 hover:bg-blue-600 rounded text-white mt-3 mb-3 flex justify-start'>
              Hide text
            </button>
            {show && <p className="text-gray-600">🎉 This text can be toggled on and off!</p>}
        </div>

        <div className="text-center p-6 rounded shadow mt-5 mb-5 bg-yellow-100 px-21 py-10">
          <h1 className='text-xl font-bold text-left'>
            3. Simple form
            </h1>
            <div>
              <form onSubmit={handleSubmit}
              >
                <input type="text" 
                       value={task}
                       onChange={(e) => setask(e.target.value)}
                       placeholder='Your name'
                       className='bg-white rounded px-13 mt-3 mb-2'
                        />
                        <br />
                <input type="email" 
                       value={email}
                       onChange={(e) => setemail(e.target.value)}
                       placeholder='Your email'
                       className='bg-white rounded px-13 mt-2 mb-3'
                        />
                        <br />
              <button 
                       className='bg-blue-500 text-white rounded hover:bg-blue-600 mt-3 px-2 py-1 flex justify-start'
                       type="submit"
                       >
                Submit
                </button>
              </form>
            </div>
        </div>

        <div className="text-center px-39 py-20 rounded shadow mt-5 mb-5 bg-purple-50">
          <h1 className='text-xl font-bold text-left'>
            4. Colour Picker
            </h1>
            <div 
                 className='px-5 py-15 rounded border-5 border-gray-300 mt-3 mb-2 flex justify-start'
                 style={{backgroundColor: color}}
                 ></div>
            <p className='flex justify-start'>
              Selected: #3B82F6
              </p>
            <div className='flex gap-3 mt-3'>
              <div 
                  className='h-7 w-7 bg-[#3B82F6] border-2 border-gray-400 rounded'
                  onClick={() => setcolor("#3B82F6")}></div>
              <div 
                  className='h-7 w-7 bg-red-500 border-2 border-gray-400 rounded'
                  onClick={() => setcolor("red")}></div>
              <div 
                  className='h-7 w-7 bg-[#10B981] border-2 border-gray-400 rounded'
                  onClick={() => setcolor("#10B981")}></div>
              <div 
                  className='h-7 w-7 bg-[#F59E0B] border-2 border-gray-400 rounded'
                  onClick={() => setcolor("#F59E0B")}></div>
              <div 
                  className='h-7 w-7 bg-[#8B5CF6] border-2 border-gray-400 rounded'
                  onClick={() => setcolor("#8B5CF6")}></div>
              <div 
                  className='h-7 w-7 bg-[#EC4899] border-2 border-gray-400 rounded
                  onClick={() => setcolor("#EC4899")}'></div>
            </div>
        </div>
        
        <div className="text-center p-6 rounded shadow px-35 py-20 mt-5 mb-5 bg-red-50">
          <h1 
          className='text-xl font-bold text-left'
          >
            5. Simple To-do list
            </h1>
            <div className='flex rounded-l mt-5 mb-5'>
              <input 
              type="text" 
              value={work}
              placeholder=' Enter a task' 
              onChange={(e) => setwork(e.target.value)}
              className='bg-white'/>
              <button 
                    className='bg-blue-500 text-white px-3 py-3 rounded-r'
                    onClick = {handleAdd}
                    >
                Add
                </button>
            </div>
            <ul
            className='w-full max-w-md'>
            {todos.map((todo, index) =>(
              <li 
              key={index}
              className='flex justify-between items-center bg-white p2 mb-2 rounded'
              >
               
                <input 
                type="checkbox" 
                checked={todo.done}
                onChange={()=>toggleDone(index)}
                />
                <span
                className={todo.done ? "line-through text-gray-500" : ""}
                >{todo.text}</span>
                <button 
                onClick={() => handleDelete(index)}
                 className="bg-red-600 text-white pl-1 pr-1 rounded"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
            <p className='mt-3'>No todos yet. Add one above!</p>
        </div>
      </div>

    </>
  )
}

export default App;