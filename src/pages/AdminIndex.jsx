import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function AdminIndex() {
  const location = useLocation();

  // Bảo vệ router

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <div>
      <>
        <header
          style={{
            display: "flex",
            gap: 12,
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
          }}
        >
          <NavLink to="/admin/product-manager">Product manager</NavLink>
          <NavLink to="/admin/category-manager">Category manager</NavLink>
        </header>
        <Outlet />
        <footer>Footer</footer>
      </>
    </div>
  );
}
