import "./App.css";
import Login from "./Components/Login/Login";


import SingUp from "./Components/SignUp/SingUp";
import content from "./content";
import AllRoutes from "./Routes/AllRoutes";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Drop from "./Components/Dropcde/Drop"
import { Products } from "./Components/Products/Products";


function App() {
  return (
    <div>
    {/* <NavBar/>
    <Drop/>
  <Footer/> */}
  <AllRoutes/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
