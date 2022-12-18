import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";
import { Profile } from "../Pages/Admin/Profile";

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
            <Route path="/test" element={<Admin/> }></Route> 
            <Route path="/admin"   element={<Profile/> } ></Route>
           
        </Routes>
    )
}

export default AllRoutes