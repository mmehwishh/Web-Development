import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const p = useParams()
  return (
    <div>
      im user {p.username}
    </div>
  )
}

export default User
