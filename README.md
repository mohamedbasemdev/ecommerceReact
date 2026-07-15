# 🛒 Ecommerce React

A modern ecommerce website built with **React.js** that allows users to browse products, search, add items to cart, manage favorites, and authenticate users.

## 🚀 Live Demo

(Add your deployment link here)

---

## 📌 Features

* 🏠 Home page with hero slider and product sections
* 🔍 Product search with live suggestions
* 📦 Product details page
* ❤️ Add / Remove products from favorites
* 🛒 Shopping cart functionality:

  * Add products
  * Increase / decrease quantity
  * Remove items
  * Calculate total price
* 🔐 Authentication system:

  * Login
  * Register
  * Protected routes
  * Keep user session using Local Storage
* 📱 Responsive design for different screen sizes
* ✨ Smooth page transitions
* 🔔 Toast notifications for user actions

---

## 🛠️ Technologies Used

* React.js
* Vite
* React Router DOM
* Context API
* Framer Motion
* Swiper.js
* React Icons
* React Hot Toast
* CSS3
* Local Storage
* DummyJSON API

---

## 📂 Project Structure

```
src
│
├── component
│   ├── context
│   ├── header
│   ├── slideProducts
│   └── ProtectedRoute
│
├── page
│   ├── home
│   ├── cart
│   ├── favorite
│   ├── productDetails
│   ├── auth
│   └── pageCategories
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/mohamedbasemdev/ecommerceReact.git
```

Go to the project folder:

```bash
cd ecommerceReact
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## 🔑 Authentication

The project uses DummyJSON authentication API.

User data is stored locally using:

```
localStorage
```

Protected pages:

* Cart
* Favorites

Users are redirected to the login page if they are not authenticated.

---

## 🌐 API

Products data is provided by:

DummyJSON API

https://dummyjson.com/

---

## 📸 Screenshots

(Add project screenshots here)

---

## 👨‍💻 Author

Mohamed Basem

GitHub:
https://github.com/mohamedbasemdev

<img width="1366" height="3156" alt="screencapture-localhost-5173-2026-07-15-18_48_21" src="https://github.com/user-attachments/assets/505386b1-4018-446e-8c53-521ae5ecf219" />

---

## 📄 License

This project is for learning and portfolio purposes.

