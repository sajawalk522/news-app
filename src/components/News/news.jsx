import React, { useContext } from "react";
import NewsCard from "../newsCard";
import { MyContext } from "../../contexts/dataContext";

function News() {
  const { data } = useContext(MyContext);
  return (
    <div className="card-grid">
      {data &&
        data.map(
          (item, key) => item.author && <NewsCard data={item} key={key} />
        )}
    </div>
  );
}

export default News;
