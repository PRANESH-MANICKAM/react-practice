import { useState } from "react";
import "./index.css";
import { products } from "./meta";

const Filter = () => {
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    const filteredData = products.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="filter-container">
      <div className="search-container">
        <input className="search" type="text" onChange={handleChange} />
      </div>
      <div className="data-container">
        {(data.length ? data : products).map((item) => (
          <p key={item} className="item">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
