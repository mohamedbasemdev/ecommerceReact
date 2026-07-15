// css file
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../component/context/CartContext";
//react icons
import { MdDelete } from "react-icons/md";
import PageTransition from "../PageTransition";
function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <PageTransition>
      <div className="cart">
        <div className="container">
          <div className="box">
            <h2>Order Summary</h2>
            <div className="info">
              {cartItems.map((item) => (
                <div key={item.id} className="info_box">
                  <div className="img_details">
                    <img src={item.images[0]} alt="" />
                    <div className="details">
                      <h4 className="title">{item.title}</h4>
                      <p className="price">${item.price}</p>
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <button className="quantity">{item.quantity}</button>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <span onClick={() => removeItem(item.id)} className="delete">
                    <MdDelete />
                  </span>
                </div>
              ))}
            </div>
            <div className="total">
              <p>Total:</p>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="btn">Place Order</button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
