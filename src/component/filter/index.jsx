import { useState } from "react";
import "./index.css";
import { products } from "./meta";

const Filter = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    const filteredData = products.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
    setQuery(value);
  };

  const highlightText = (text, search) => {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="filter-container">
      <div className="search-container">
        <input className="search" type="text" onChange={handleChange} />
      </div>
      <div className="data-container">
        {(data.length ? data : products).map((item) => (
          <p key={item} className="item">
            {highlightText(item, query)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
