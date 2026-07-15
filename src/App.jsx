import { Route, Routes, useLocation } from "react-router-dom";
import ButtonHeader from "./component/header/ButtonHeader";
import TopHeader from "./component/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import ScrollToTop from "./component/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import PageCategories from "./page/pageCategories/PageCategories";
import SearchResult from "./page/SearchResult";
import Favorite from "./page/favorite/Favorite";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import ProtectedRoute from "./component/ProtectedRoute";


function App() {
  const location = useLocation()
  return (
    <>
      <header>
        <TopHeader />
        <ButtonHeader />
      </header>
      <ScrollToTop />
      <Toaster position="bottom-right" reverseOrder={false} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}></Route>
          <Route path="/favorite" element={<ProtectedRoute><Favorite /></ProtectedRoute>}></Route>
          <Route path="/search" element={<SearchResult />}></Route>
          <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
          <Route path="/pageCategories/:category" element={<PageCategories />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
