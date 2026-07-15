import { useContext, useState } from "react";
import { AuthContext } from "../../component/context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [confirm,setConfirm] = useState("");

  const {register} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (pass !== confirm) {
      alert("Password not match");
      return;
    }
    register(name, email, pass);
    navigate("/")
  }

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            onChange={(e) => setName(e.target.value)} 
          />

          <input 
            type="email" 
            placeholder="Your Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <input 
            type="password" 
            placeholder="Your Password" 
            onChange={(e) => setPass(e.target.value)} 
          />

          <input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={(e) => setConfirm(e.target.value)} 
          />

          <input className="btn" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;