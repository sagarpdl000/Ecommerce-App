import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  return (

    <div className='home-container'>

    
    <div>Go to dashboard</div>
    <Link to="/Dashboard">
    <button>Dashboard</button>
    </Link>
    </div>

  )
}

export default Home