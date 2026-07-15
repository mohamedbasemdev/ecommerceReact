import { Link, useNavigate, useLocation } from "react-router-dom";
// css file
import "./auth.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../component/context/AuthContext";
function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const location = useLocation();

const handleSubmit = async (e) => {
  e.preventDefault();

  const success = await login(username, password);

  if(success){
    const from = location.state?.from?.pathname || "/";
    navigate(from);
  }else{
    alert("Wrong username or password");
  }
};
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="userName"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="btn" type="submit" value="Login" />
          <Link to="/register">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
