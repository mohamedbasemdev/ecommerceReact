import { Link, useNavigate } from "react-router-dom";
// react icons
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function Products({ item }) {
  const { cartItems, addToCart, favoriteItems, addToFavorite, removeFromFav } = useContext(CartContext);

  const theRightItem = cartItems.some((cart) => cart.id === item.id);
  const theRightItemFav = favoriteItems.some((i) => i.id === item.id);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast">
        <img src={item.images[0]} alt="" />
        <div className="content">
          <h5>{item.title}</h5>
          <p>added to cart</p>
          <button className="btn" onClick={() => navigate("/cart")}>
            View Cart
          </button>
        </div>
      </div>,
      {
        style: {
          background: "#eee",
        },
      }
    );
  };
  const handleAddToFav = () => {
    if (theRightItemFav) {
      removeFromFav(item.id);
      toast.error(
        <div className="toast">
          <h5>no item in favorite</h5>
        </div>
      );
    } else {
      addToFavorite(item);
      toast.success(
        <div className="toast">
          <img src={item.images[0]} alt="" />
          <div className="content">
            <h5>{item.title}</h5>
            <p>added to Favorite</p>
            <button className="btn" onClick={() => navigate("/favorite")}>
              View Favorite
            </button>
          </div>
        </div>,
        {
          style: {
            background: "#eee",
          },
        }
      );
    }
  };
  return (
    <div
      className={`products ${theRightItem ? "in_cart" : ""} ${
        theRightItemFav ? "in_fav" : ""
      }`}
    >
      <Link to={`/productDetails/${item.id}`}>
        <div className="product">
          <span className="check_in_cart">
            In Cart <FaCheck />
          </span>
          <div className="image">
            <img src={item.images[0]} alt="" />
          </div>
          <p className="title">{item.title}</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
          <h5 className="price">{item.price}</h5>
        </div>
      </Link>
      <div className="product_icons">
        <span className="cart_icon" onClick={handleAddToCart}>
          <TiShoppingCart />
        </span>
        <span className="fav_icon" onClick={handleAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Products;
