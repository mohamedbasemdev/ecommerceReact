import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // login
const login = async (username, password) => {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const data = await res.json();

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));

    return true;

  } catch (error) {
    console.log(error);
    return false;
  }
};
  // register
  const register = (name, email, pass) => {
    const userData = {
      name,
      email,
      pass,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
