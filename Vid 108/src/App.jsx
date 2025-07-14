import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  const [c, setc] = useState(false)
  const [todo, settodo] = useState([
    {
      title : "Todo-1",
      desc : "Todo-1 desc"
    },
    {
      title : "Todo-2",
      desc : "Todo-2 desc"
    },
    {
      title : "Todo-3",
      desc : "Todo-3 desc"
    }
  ])
  //creating component
  const Todo = (props)=>{
    return(<>
            <div className="todo">
              Hii im todo {props.title} and {props.desc}
            </div>
          </>)
  }
  const a = useRef(0)
  //uescase 2 of ref
  const b = useRef()
  
  //run on every render
  // useEffect(() => {
  //   a.current = a.current+1;
  //   console.log(`a value ${a.current}`)
  //   b.current.style.backgroundColor = "red"
  //   alert("Hey sending alert!") 
  // },)

  // useEffect(() => {
  //   alert(`Count is changed`) 
  //   setColor(color+1)
  // }, [count])


  return (
    <>
      {todo.map(items=>{
        console.log(items)
          return<Todo title={items.title} desc={items.desc}/>
      })}

      <Navbar color={"cyan" + "blue" + color} />
      {/* <button ref={b} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      <button ref={b} onClick={()=>{ setc(!c)}}>
        count 
      </button>
       {/* {c?<button>C is true</button>:"C is false"}  */}
      {/* {c && <button>I'll show only when im true {c}</button>} */}
       <button>{`c value ${c}`}</button>
    </>
  )
}

export default App
