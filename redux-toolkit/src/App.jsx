import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispath = useDispatch()
  return (
    <>
    <Navbar/>
    <button onClick={()=>{dispath(decrement())}} >-</button>
    The value of count {count}
    <button onClick={()=>{dispath(increment())}} >+</button>
    </>
  )
}

export default App
