import { Link } from "react-router-dom";
// react icons
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import logo from "../../img/online_shopping_icon_only.png";

// css file
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItems } = useContext(CartContext);
  const { favoriteItems} = useContext(CartContext)

  return (
    <div className="top_header">
      <div className="container">
        <div className="image">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>
        </div>
        <SearchBox />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favorite" >
            <FaRegHeart />
            </Link>
            <span className="count">{favoriteItems.length}</span>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
            </Link>
            <span className="count">{cartItems.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
