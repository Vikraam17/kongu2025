import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({name}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>
        <Link to='/state'>Usestate Example</Link>
        <Link to='/form'>Controlled Form</Link>
    </div>
  )
}

export default Home //rafce
// react arrow function component export
