import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'




function App() {
   const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((res , rej)=>{
      setTimeout(() => {
        res()
      }, d*1000);
    })
  }

  const onSubmitUser = async(data)=> {
    // await delay(4)
    let r = await fetch("http://localhost:3000/" , {method:"POST",headers: {
    "Content-Type": "application/json"  // 👈 important!
  }, body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data , res)
    // if(data.username !== "mehwish") {
    //   setError("serverPr", {message:"Bhai bas mehwish hi naam hai"})
    // }
  }
  return (
    <>
      
        <form action="" className="form" onSubmit={handleSubmit(onSubmitUser)} >
        <input placeholder='Enter name' type='text' {...register ("username", {required:true, minLength:3})} />
        <input type="password" placeholder='Enter password' {...register("password",{required:{value:true , message:"required"}, maxLength: {value:8 , message:"length exceed"} , minLength:{value:3 , message:"Too short password"}} )}/>
        {errors.password &&  <div className='white'>{errors.password.message}d</div>}
        <input type="submit" disabled={isSubmitting} value='submit'/>
        {isSubmitting && <div>Submitting...</div>}
        {errors.serverPr && <div>{errors.serverPr.message}</div> }
      </form>
     
    </>
  )
}

export default App
