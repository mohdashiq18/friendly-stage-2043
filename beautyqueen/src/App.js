import "./App.css";
import Drop from "./Components/Dropcde/Drop";
import Navbar from "./Components/NavBar/NavBar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Drop/>
    <AllRoutes/>
    </div>
  );
}

export default App;
