import { projectAuth } from "../firebase/Config";

let error =null;

const logOut = async ()=>{
    error = null;


try {
    await projectAuth.signOut()
} catch(err){
    error = err.message;
}
}
const userLogout = ()=>{
    return {error,logOut}
}

export default userLogout;