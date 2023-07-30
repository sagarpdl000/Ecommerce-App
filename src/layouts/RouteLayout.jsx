import { Outlet, useLocation, Navigate } from "react-router"
import { projectAuth } from "../firebase/Config"

function RouteLayout() {
    const location = useLocation();


  return (
    projectAuth.currentUser ? (<Outlet />) : (
        <Navigate to="/authentication" state={{from : location}} replace/>
    )
  )
}

export default RouteLayout