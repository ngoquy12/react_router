import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function DemoSearchParam() {
  const [value, setValue] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  console.log(searchParam.get("name"));
  console.log(searchParam.get("priceFrom"));
  console.log(searchParam.get("priceTo"));

  const handleSearch = () => {
    setSearchParam({ name: value, priceFrom: 10000, priceTo: 20000 });
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}
