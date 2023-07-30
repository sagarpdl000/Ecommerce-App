import React from 'react'
import userLogOut from '../auth/userLogout'
import { useNavigate } from 'react-router'

const Dashboard = () => {

  const navigate = useNavigate();
  const {error, logOut} = userLogOut();

  const handleLogout = async ()=>{
    await logOut();

    if (!error) {
      navigate ("/");
    }
  }



  return (
    <div>
    <h1>Dashboard</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default Dashboard