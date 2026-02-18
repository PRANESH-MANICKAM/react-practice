import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchData } from "./service";

import "./index.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchData(page),
    placeholderData: keepPreviousData
  });

  if (isError) {
    return <p>Error...</p>;
  }
  const { products = [], total = 0 } = data || {};
  return (
    <div className="pagination-container">
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })
        )}
      </div>
      <div className="pagination-controls">
        <button
          disabled={page == 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          previous
        </button>
        {Array.from({ length: Math.ceil(total / 10) }, (_, i) => i + 1).map(
          (num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={page == num ? "button-highlight" : ""}
            >
              {num}
            </button>
          )
        )}
        <button
          disabled={page == Math.ceil(total / 10)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
