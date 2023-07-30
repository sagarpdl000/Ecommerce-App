import { useState } from 'react'
import '../style/Signup.css'
import userSignUp from '../auth/userSignUp';
import { useNavigate, useLocation } from 'react-router';


function Signup(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage]= useState(null);

    const navigate= useNavigate();
    const location= useLocation();

    const from = location.state?.from?.pathname ||  "/dashboard"
    const {error, signUp} = userSignUp()


  const handleSignOut = async (e) =>{
    e.preventDefault();

    await signUp(email,password)

    if (!error){
      navigate(from, {replace: true})
      setEmail ("")
      setPassword("")

      return
      
    } else {
      setErrorMessage(Error)
    }
  }
  return (
    <div className='login-container'>
    <form className='form' onSubmit={handleSignOut}>
        <h1>Sign Up</h1>

        <div className='form-group'>
                    <label htmlFor=" ">Email</label><br/>
                    <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className='form-group'>
                    <label htmlFor=" ">Password</label><br/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                {error && <p>{errorMessage}</p>}

        <button>SIGNUP</button>

        <p>Already have an account?</p>
        <button  onClick={props.toggleForm}>LOGIN</button>

    </form>
</div>
  )
}

export default Signup