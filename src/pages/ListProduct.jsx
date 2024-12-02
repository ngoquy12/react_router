import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      name: "Xoài",
      price: 20000,
    },
    {
      id: 2,
      name: "Cam",
      price: 20000,
    },
    {
      id: 3,
      name: "Quýt",
      price: 20000,
    },
  ];
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/product-detail", { state: "Nguyễn Văn A" });
  };

  const handleNextPage = () => {
    navigate(1);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate("/product-detail/1");
  //     }, 3000);
  //   }, []);
  return (
    <div>
      <h3>ListProduct</h3>
      <ul>
        {products.map((pro) => (
          <li>
            <p>Id: {pro.id}</p>
            <p>Name: {pro.name}</p>
            <p>Price: {pro.price}</p>
            <Link to={`/product-detail/${pro.id}`}>
              <button>Detail</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
