import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './component/Navbar'
import './component/Navbar.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import User from './component/User'
import { counterContext } from './context/context'

function App() {
 const [count, setcount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:  <><Navbar/><About/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path:"/user/:username",
      element: <><Navbar/><User/></>
    },
  ])

  return (
    <>
    <div>
      <counterContext.Provider className="provider" value={{count , setcount}} >
      <RouterProvider router={router} />
      <button className='btn-count' onClick={()=>{setcount(count+1)}} >{count}</button>
      </counterContext.Provider>
    </div>
    </>
  )
}

export default App
