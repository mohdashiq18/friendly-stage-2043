import "./App.css";
import Drop from "./Components/Dropcde/Drop";
import Footer from "./Components/Footer/Footer";
import {Navbar} from "./Components/Navbar/Navbar";
import { useMedia } from "./MediaQuery/UseMedia";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  const {smallScreen, mediumScreen} = useMedia()
  return (


    <div className="App">
      { mediumScreen && <Navbar/>}
      {/* <Drop/> */}
    <AllRoutes/>
    {mediumScreen && <Footer/> }
    </div>
  );
}

export default App;
