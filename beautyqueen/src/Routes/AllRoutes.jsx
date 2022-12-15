import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
            <Route path="/admin" element={<Admin/> }></Route>
           
        </Routes>
    )
}

export default AllRoutes