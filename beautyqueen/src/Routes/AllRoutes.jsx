import { Route, Routes } from "react-router-dom";
import PagenotFound from "../Pages/PagenotFound"

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <h1>Hello World</h1>} ></Route>
            <Route path="*" element={ <PagenotFound/> } ></Route>
        </Routes>
    )
}

export default AllRoutes