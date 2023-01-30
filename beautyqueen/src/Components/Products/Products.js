import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { MainProducts } from "../MainProducts";
const Products = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("/products", { withCredentials: true })
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data.map((content) => (
        <MainProducts
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
  );
};
export { Products };
