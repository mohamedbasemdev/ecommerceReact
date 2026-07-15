// css file
import "./favorite.css";
import { useContext } from "react";
import { CartContext } from "../../component/context/CartContext";
import Products from "../../component/slideProducts/Products";

function Favorite() {
  const { favoriteItems } = useContext(CartContext);
  
  return (
    <div className="favorite">
      <div className="container">
        <div className="top_slide">
          <h2 style={{ textTransform: "capitalize" }}>{`Favorite For : ${favoriteItems.length}`}</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            reprehenderit rerum nostrum ipsam incidunt eaque!
          </p>
        </div>
        <div className="content">
          {favoriteItems.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
