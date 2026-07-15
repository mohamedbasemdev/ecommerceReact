// css file
import "./pageCategories.css";
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Products from "../../component/slideProducts/Products";
function PageCategories() {

  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);
  
  console.log(products);
  return (
    <div className="page_categories">
      <div className="container">
          {products.map((item) => (
            <Products key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default PageCategories;
