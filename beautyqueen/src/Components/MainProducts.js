import { FaShoppingCart, FaRegBookmark, FaStar } from "react-icons/fa";
import "./Products/Products.css";
export function MainProducts(props) {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} className="productImage" alt="product-img"></img>
        <h3 className="productName">{props.name}</h3>
        <div className="displayStack_2">
          <div className="productRating">
            {[...Array(props.rating)].map((index) => (
              <FaStar id={index + 1} key={index} />
            ))}
          </div>
        </div>
        <div className="productCard__content">
          <div className="displayStack__1">
            <div className="originalPrice">{props.originalprice}</div>
            <div className="productPrice">{props.price}</div>
            <div className="discount">{props.discount}</div>
          </div>
        </div>
        <div className="displayStack__3">
          <FaShoppingCart className={"productCard__cart"} />
          <FaRegBookmark className={"productCard__wishlist"} />
        </div>
      </div>
    </div>
  );
}
