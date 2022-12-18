import "./App.css";
import Login from "./Components/Login/Login";

import SingUp from "./Components/SignUp/SingUp";
import content from "./content";
import Cart from "./Pages/Home/Cart";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
    
     <AllRoutes />
     {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
