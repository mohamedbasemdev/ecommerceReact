import { useContext } from "react";
import { CartContext } from "../../component/context/CartContext";
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function DetailsInfo({oneItem}) {
    const { cartItems, addToCart, favoriteItems, addToFavorite, removeFromFav } = useContext(CartContext);
    const navigate = useNavigate();

    const theRightItem = cartItems.some((cart) => cart.id === oneItem?.id);
    const theRightItemFav = favoriteItems.some((fav) => fav.id === oneItem?.id);

    const handleAddToCart = () => {
    addToCart(oneItem);
    toast.success(
      <div className="toast">
        <img src={oneItem.images[0]} alt="" />
        <div className="content">
          <h5>{oneItem.title}</h5>
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
        removeFromFav(oneItem.id);
        toast.error(
          <div className="toastt">
            <h5>no item in favorite</h5>
          </div>
        );
      } else {
        addToFavorite(oneItem);
        toast.success(
          <div className="toast">
            <img src={oneItem.images[0]} alt="" />
            <div className="content">
              <h5>{oneItem.title}</h5>
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
    <div className="details_info">
      <h2 className="title">{oneItem.title}</h2>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
      <p className="price">${oneItem.price}</p>
      <h5>
        AvailabilityStatus: <span>{oneItem.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{oneItem.brand}</span>
      </h5>
      <p className="desc">{oneItem.description}</p>
      <span>Hurray Up! Only {oneItem.stock} Products Left in Stock</span>
      <button className="btn" onClick={handleAddToCart}>
        {theRightItem ? "No Item" : "Add To Cart"} <TiShoppingCart />
      </button>
      <div className="details_icons">
        <span className="heart" onClick={handleAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default DetailsInfo;
