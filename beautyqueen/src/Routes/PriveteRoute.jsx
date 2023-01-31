import { Navigate } from "react-router-dom"
import { AuthContext } from "../Components/Context/Auth.context";
import { useContext } from "react";


function PrivateRoute({children}) {
    const {authState}=useContext(AuthContext)
    console.log("ashiq",authState)
    if(authState.token===false){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute;