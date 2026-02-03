import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <div>ANA SAYFA</div>{" "}
      <div>
        <button className="button" onClick={handleLogout}>
          logout
        </button>
      </div>{" "}
    </div>
  );
}

export default Home;
