import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter/counterSlice'

const Navbar = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      im nav , and counter value is {count}
    </div>
  )
}

export default Navbar
