import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SignUp/SingUp";
import { Products } from "../Components/Products/Products";


const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SingUp/>}></Route>
            <Route path="/admin" element={<Admin/> }></Route>
            <Route path="/products" element={<Products/>}></Route>

           
        </Routes>
    )
}

export default AllRoutes