import Navbar from './Components/NavBar/NavBar';
import Drop from './Components/Dropcde/Drop';
import './App.css';
import AllRoutes from "./Routes/AllRoutes"

function App() {
  return (
    <div>
    <AllRoutes/>
    <Navbar/>
    <Drop />
    </div>
  );
}

export default App;
