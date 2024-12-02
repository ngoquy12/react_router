import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId, productName } = useParams();

  const location = useLocation();
  console.log("location: ", location);

  const navigate = useNavigate();

  const handlePrev = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate(1);
  };

  return (
    <div>
      <h3>Product Detail</h3>
      <h3>Id: {productId}</h3>
      <h3>Name: {productName}</h3>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
