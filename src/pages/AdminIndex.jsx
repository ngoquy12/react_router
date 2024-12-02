import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminIndex() {
  // Bảo vệ router
  return (
    <div>
      <header style={{ display: "flex", gap: 12 }}>
        <NavLink to="/admin/product-manager">Product manager</NavLink>
        <NavLink to="/admin/category-manager">Category manager</NavLink>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
