import React, {useEffect} from 'react'

const navbar = ({color}) => {
    // useEffect(() => {
    //   alert("color run on every render") //1
    // })
    // useEffect(() => {
    //   alert("color was changed") //2
    // }, [color])
    
  return (
    <div>
      Hey Im nav of {color}
    </div>
  )
}

export default navbar
