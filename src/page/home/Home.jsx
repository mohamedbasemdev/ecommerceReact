import { useEffect, useState } from "react";
import HeroSlider from "../../component/HeroSlider";
import SlideProducts from "../../component/slideProducts/SlideProducts";
// css file
import "./home.css";
import LoadingSlide from "../../component/slideProducts/LoadingSlide";
import PageTransition from "../PageTransition";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const categories = [
    "Smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "mens-watches",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const newObj = Object.assign({}, ...result);
        setProducts(newObj);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);
  return (
    <PageTransition>
    <div className="home">
      <HeroSlider />
      {loading ? (<LoadingSlide />) : 
      (categories.map((category) => (
        <SlideProducts key={category} item={category} data={products[category] || []} />
      )))
      }
    </div>
    </PageTransition>
  );
}

export default Home;
