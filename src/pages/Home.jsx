import React from 'react'
import '../style/Home.css'
import { Link } from 'react-router-dom'
import userLogOut from '../auth/userLogout'
import { useNavigate } from 'react-router'





const Home = () => {

  const navigate = useNavigate();
  const {error, logOut} = userLogOut();

  const handleLogout = async ()=>{
    await logOut();

    if (!error) {
      navigate ("/");
    }
  }


  return (

    <div className='home-container'>

    
    <div>home</div>
    <button onClick={handleLogout}>Logout</button>

    </div>

  )
}

export default Home