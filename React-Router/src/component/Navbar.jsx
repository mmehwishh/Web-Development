import { useContext } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { counterContext } from '../context/context'
const Navbar = () => {
  const countObj = useContext(counterContext)
  return (
    <div className='nav'>
      <ul>
        <NavLink className={(e)=>{return e.isActive ? "red" : " "}} to="/"><li>Home</li></NavLink>      
        <NavLink className={(e)=>{return e.isActive ? "red" : " "}} to="/about"><li>About</li></NavLink>       
        <NavLink className={(e)=>{return e.isActive ? "red" : " "}} to="/contact"><li>Contact</li></NavLink>
        <button onClick={()=>{countObj.setcount(countObj.count+1)}}>{countObj.count}</button>
      </ul>
    </div>
  )
}

export default Navbar
