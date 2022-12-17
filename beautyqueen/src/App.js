import "./App.css";
import Login from "./Components/Login/Login";
import { Products }  from "./Components/products";
import SingUp from "./Components/SignUp/SingUp";
import content from "./content";
//import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
    
     {/* <AllRoutes />*/}
      <SingUp/>
      <Login/>
    </div>
  );
}

export default App;
