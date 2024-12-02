import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  console.log(children);

  const [isLogin, setIsLogin] = useState(true);

  return <>{!isLogin ? <Navigate to="/" /> : children}</>;
}
