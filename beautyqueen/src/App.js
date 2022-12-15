import "./App.css";
import { Products }  from "./Components/products";
import content from "./content";
//import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
    <div className="App">
      {content.map(content=>(
        <Products
          key={content.id}
          image={content.image}
          name={content.name}
          rating={content.rating}
          price={content.price}
          sale={content.sale}
          discount={content.discount}
          originalprice={content.originalprice}
        />
      ))}
    </div>
     {/* <AllRoutes />*/}
      {/* <SingUp /> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
