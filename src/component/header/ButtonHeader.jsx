import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// react icons
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";
function ButtonHeader() {
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBarsOpen, setIsBarsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsBarsOpen(false);
  }, [location]);

  return (
    <div className="btn_header">
      <div className="container">
        <div
          className={`btn_category ${isCategoryOpen ? "active" : ""}`}
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <div className="browse_category ">
            <span>
              <FaBars />
            </span>
            <h4>Browse Category</h4>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
          <div className="list_category">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`pageCategories/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className={`nav_links`}>
          <div className={`links ${isBarsOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li
                key={link.link}
                className={location.pathname === link.link ? "active" : ""}
              >
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </div>
          <span
            className="nav_links_bars"
            onClick={() => setIsBarsOpen(!isBarsOpen)}
          >
            <FaBars />
          </span>
        </div>
        <div className="btn_icons">
          {user ? (
            <button className="btn" onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login">
                <FaSignInAlt />
              </Link>

              <Link to="/register">
                <HiUserAdd />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ButtonHeader;
