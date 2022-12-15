import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound";
import Home from "../Pages/Home/Home";
import SingUp from "../Components/SignUp/SingUp";

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
            <Route path="/signup" element={<SingUp/>}></Route>
        </Routes>
    )
}

export default AllRoutes