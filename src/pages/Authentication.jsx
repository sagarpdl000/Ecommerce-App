import Login from '../components/Login'
import Signup from '../components/Signup'
import { useState } from 'react'

const Authentication = () => {

  const[toggle, setToggle] = useState(true);

  const handelToggle =()=>{
    setToggle(!toggle)
  }



      

  return (

    <div>
      {toggle ?<Login toggleForm={handelToggle} /> : <Signup togleForm={handelToggle}/>}
      
    </div>
    
  )
}

export default Authentication

