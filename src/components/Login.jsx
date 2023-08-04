import { useState } from 'react'
import '../style/Login.css'
import userLogin from '../auth/userLogin';
import { useNavigate, useLocation } from 'react-router';


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/Home";

     const {error, login} = userLogin ();

     const handleLogin = async(e)=>{
        e.preventDefault();
        await login(email,password);
        if(!error){
            navigate(from, {replace: true});
            setEmail ("");
            setPassword ("");
            return;


        }else{
            setErrorMessage(error)
        }
     }




    return (

        <div className='login-container'>
            <form className='form' onSubmit={handleLogin}>
                <h1>LOGIN</h1>

                <div className='form-group'>
                    <label htmlFor=" ">Email</label><br/>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className='form-group'>
                    <label htmlFor=" ">Password</label><br/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                {error && <p>{errorMessage}</p>}
                <button>LOGIN</button>

                <p>Don't have an account?</p>
                <button onClick={props.toggleForm}>Sign up</button>

            </form>
        </div>

    )
}

export default Login