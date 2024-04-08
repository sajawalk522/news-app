import React from "react";
import { Link } from "react-router-dom";
function newsCard({ data }) {
  return (
    <Link to={`/news-detail?q=${data.title}`}>
      <div className="news-card">
        {data.urlToImage && <img src={data.urlToImage} alt="Avatar" />}
        <div className="text-container">
          <p>{data.source.name}</p>
          <h3>{data.title}</h3>
          <div className="like-icons">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default newsCard;
