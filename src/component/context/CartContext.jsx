import { createContext, useEffect, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export default function CartProvider({children}) {
  // FAVORITE
  const [favoriteItems, setFavoriteItems] = useState(() =>{
    const savedFav = localStorage.getItem('fav_item')
    return savedFav ? JSON.parse(savedFav) : []
  })

  useEffect(() =>{
    localStorage.setItem("fav_item", JSON.stringify(favoriteItems))
  },[favoriteItems])

  // add to favorite
  const addToFavorite = (item) =>{
    setFavoriteItems((prevItems) => [...prevItems, item])
  }


  // remove from favorite
  const removeFromFav = (id) =>{
    setFavoriteItems((prevItems) => prevItems.filter((item) =>(
      item.id !== id
    )))
  }


  // CART
    const [cartItems, setCartItems] = useState(() =>{
      const savedItems = localStorage.getItem('cart_items')
      return savedItems ?  JSON.parse(savedItems) : []
    })
    useEffect(() =>{
      localStorage.setItem("cart_items", JSON.stringify(cartItems))
    },[cartItems])
    // ADD TO CART
    const addToCart = (item) =>{
        setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}])
    }
    // INCREASE QUANTITY
    const increaseQuantity = (id) =>{
      setCartItems((prevItems) => prevItems.map((item) =>(
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )))
    }
    // DECREASE QUANTITY
    const decreaseQuantity = (id) =>{
      setCartItems((prevItems) => prevItems.map((item) =>(
        item.id === id && item.quantity > 0 ? {...item, quantity: item.quantity - 1} : item
      )))
    }
    // REMOVE ITEM
    const removeItem = (id) =>{
      setCartItems((prevItems) => prevItems.map((item) =>(
        item.id === id && item.quantity > 0 ? {...item, quantity: item.quantity - 1} : item
      )).filter((item) => item.quantity > 0 ))
    }
  return (
    <CartContext.Provider value={{cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem, addToFavorite, favoriteItems, removeFromFav}}>
        {children}
    </CartContext.Provider>
  )
}
