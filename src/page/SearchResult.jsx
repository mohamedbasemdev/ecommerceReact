import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import Products from "../component/slideProducts/Products";

function SearchResult() {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  const query = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query.trim()}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query]);
  console.log(products);
  return (
    <div className="search_result">
      <div className="container">
          {products.map((item) => (
            <Products key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default SearchResult;
