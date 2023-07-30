import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import { useNavigate } from "react-router";
import { auth } from "../../firebase.config.js";

const Layout = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
      setName(user.displayName);
    });
  }, [navigate]);
  return (
    <div>
      <NavBar name={name} />
      {props.children}
      <footer className="footer">Copyright</footer>
    </div>
  );
};

export default Layout;
