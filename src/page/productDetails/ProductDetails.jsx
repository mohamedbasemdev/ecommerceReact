import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import SlideProducts from "../../component/slideProducts/SlideProducts";
// css file
import "./productDetails.css";

import { CartContext } from "../../component/context/CartContext";
import LoadingDetails from "./LoadingDetails";
import LoadingSlide from "../../component/slideProducts/LoadingSlide";
import PageTransition from "../PageTransition";
import ImageDetails from "./ImageDetails";
import DetailsInfo from "./DetailsInfo";
function ProductDetails() {
  const { id } = useParams();
  const [oneItem, setOneItem] = useState(null);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  
  const { cartItems, favoriteItems } = useContext(CartContext);

  const theRightItem = cartItems.some((cart) => cart.id === oneItem?.id);
  const theRightItemFav = favoriteItems.some((fav) => fav.id === oneItem?.id);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setOneItem(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchCatagory = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${oneItem.category}`
        );
        const data = await res.json();
        setCategory(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setCategoryLoading(false);
      }
    };
    if (!oneItem) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCategoryLoading(true);
    fetchCatagory();
  }, [oneItem?.category]);


  return (
    <PageTransition>
      <div className={`product_details ${theRightItem ? "in_cart" : ""} ${theRightItemFav ? "in_fav": ""}`}>
        <div className="container">
          {loading ? (
            <LoadingDetails />
          ) : (
            <div className="content">
              <ImageDetails oneItem={oneItem} />
              <DetailsInfo oneItem={oneItem} />
            </div>
          )}
          {categoryLoading ? (
            <LoadingSlide />
          ) : (
            <SlideProducts item={oneItem?.category} data={category} />
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
