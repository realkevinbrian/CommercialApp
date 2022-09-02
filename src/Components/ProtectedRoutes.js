import React, { useEffect } from "react";
// import Cookies from "js-c"
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return <div>{children}</div>;
}

export default ProtectedRoutes;
