// react icon
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [inputFaild, setInputFaild] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()

  const handleFormClick = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(inputFaild.trim())}`)
    setSuggesstions([])
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (inputFaild.trim() !== "") {
          const res = await fetch(
            `https://dummyjson.com/products/search?q=${inputFaild.trim()}`
          );
          const data = await res.json();
          setSuggesstions(data.products.slice(0, 5));
        } else {
          setSuggesstions([]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const debounce = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(debounce);
  }, [inputFaild]);

  useEffect(() =>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSuggesstions([])
  },[location])

  console.log(suggesstions);
  return (
    <div className="search_box">
      <form onSubmit={handleFormClick}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Serach For Products"
          onChange={(e) => setInputFaild(e.target.value)}
          autoComplete="off"
        />
        <button className="search">
          <FaSearch />
        </button>
      </form>
      <div className="sug">
        {suggesstions.map((suggess) => (
          <li key={suggess.id}>
            <Link to={`/productDetails/${suggess.id}`}>
              <div>
                <img src={suggess.images[0]} alt="" />
                <span>{suggess.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
