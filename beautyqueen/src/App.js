import "./App.css";
import Login from "./Components/Login/Login";
import { Products }  from "./Components/products";
import SingUp from "./Components/SignUp/SingUp";
import content from "./content";
import AllRoutes from "./Routes/AllRoutes";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Drop from "./Components/Dropcde/Drop"


function App() {
  return (
    <div>
    <NavBar/>
    <Drop/>
     <AllRoutes />
     <Footer/>
      
    </div>
  );
}

export default App;
