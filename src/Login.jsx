import { useState, useContext, React } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(email, password) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return false;
    return user.email === email && user.password === password;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (loginUser(email, password)) {
      login("fake-token");
      navigate("/home");
    } else {
      alert("Email veya şifre yanlış");
    }
  }

  return (
    <div className="loginApp">
      <h2>Giriş Yap</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="loginButton">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
