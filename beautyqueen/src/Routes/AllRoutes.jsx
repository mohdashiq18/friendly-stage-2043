import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound";
import Home from "../Pages/Home/Home";

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
           
        </Routes>
    )
}

export default AllRoutes