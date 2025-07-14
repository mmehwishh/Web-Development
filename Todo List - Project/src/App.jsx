import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './App.css'

function App() {
  const [TodoCurr, setTodoCurr] = useState("")
  const [TodosArr, setTodosArr] = useState([])
  const [Finish, setFinish] = useState(false)
  const editTodo = useRef(null)

 
  useEffect(() => {
    let todoString = localStorage.getItem("TodosArr")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("TodosArr"))
      setTodosArr(todos)
    }
  }, [])

   const toggleCheck=() =>{
    setFinish(!Finish)
  }

  const saveToLS = () => {
    localStorage.setItem("TodosArr", JSON.stringify(TodosArr))
  }
  const handleChange = (e) => {
    setTodoCurr(e.target.value)
  }
  const handleAdd = () => {
    setTodosArr([...TodosArr, { desc: TodoCurr, isCompleted: false }])
    setTodoCurr(" ")
    saveToLS()
  }
  const handleDelete = (e) => {
    let str = e.target.name
    const newTodoArr = TodosArr.filter(item => str != item.desc)
    setTodosArr(newTodoArr)
    saveToLS()

  }
  const handleEdit = (e) => {
    let str = e.target.name
    setTodoCurr(str)
    handleDelete(e)
    saveToLS()
  }
  const handleCheckBox = (e) => {
    let str = e.target.name
    let index = TodosArr.findIndex(item => {
      return str == item.desc
    })
    let newTodoArr = [...TodosArr]
    newTodoArr[index].isCompleted = !newTodoArr[index].isCompleted
    setTodosArr(newTodoArr)
    saveToLS()
  }
  return (
    <>
      <Navbar />
      <div className="add-todo bg-purple-300 m-10 rounded-2xl p-4">
        <p className='font-bold text-3xl text-center'>iTask - Manage your all tasks in one place</p>
        <p className='font-bold text-1xl'>Add Todo</p>
        <div className="inside-add flex justify-around">
          <input ref={editTodo} className=' w-full border-b-2 border-transparent placeholder-gray-400 focus:outline-none focus:ring-0  hover:focus:border-purple-800 hover:transition-all duration-150 ease-in-out cursor-pointer ' value={TodoCurr} onChange={handleChange} type="text" placeholder='Enter todo here' />

          <button onClick={handleAdd} disabled={TodoCurr.length<=3} className='hover:cursor-pointer bg-purple-800 rounded-2xl p-2 text-white text-shadow-2xs hover:font-bold hover:transition-all disabled:bg-purple-300'>Add</button>
        </div>
      </div>
      <div className="save-todo  bg-purple-300 m-10 rounded-2xl p-4 flex-col justify-around items-center ">
        <div className='w-full'>
          <h1 className='font-black text-3xl'>Your Saved Todos</h1>
          <input type="checkbox" name="" id="" onChange={toggleCheck} checked={Finish} /> Show Finished Todos
        </div>

        {TodosArr.length === 0 && <div>No todo to display:(</div>}

        {TodosArr.map(item => {
          return (Finish ? item.isCompleted : true) && <div className="text-part flex">
            <div className="todo-des w-full text-black  flex items-center gap-1 hover:font-bold hover:transition-all duration-150 mr-1">
              <input onChange={handleCheckBox} type="checkbox" name={item.desc} id="complete" value={item.isCompleted} />
              {!item.isCompleted ? <p>{item.desc}</p> : <p className='line-through'>{item.desc}</p>}
            </div>

            <div className="todo-btn flex gap-3 m-1">
              <button onClick={handleEdit} className='hover:cursor-pointer bg-purple-800 rounded-sm p-2 text-white text-shadow-2xs hover:font-bold hover:transition-all' name={item.desc}><CiEdit /></button>
              <button onClick={handleDelete} className='hover:cursor-pointer bg-purple-800 rounded-sm p-2 text-white text-shadow-2xs hover:font-bold hover:transition-all' name={item.desc}><MdDeleteOutline /></button>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default App
