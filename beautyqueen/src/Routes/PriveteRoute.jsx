import { Navigate } from "react-router-dom"


export default function ({children}) {

    const isAuth = true

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

    return children
}