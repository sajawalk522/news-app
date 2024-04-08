import React, { useContext } from "react";
import { MyContext } from "../contexts/dataContext";
import { useLocation } from "react-router-dom";

function DetailCard() {
  const { data } = useContext(MyContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const newsData = data.find((item) => item.title === q);
  return (
    <div className="newsDetail-card">
      {newsData && (
        <div>
          <div className="text-container">
            <p>{newsData.source.name}</p>
            <h3>{newsData.title}</h3>
            <div className="auther">
              <span>Story by {newsData.author} </span>
            </div>
          </div>
          <hr />
          {newsData.urlToImage && (
            <img src={newsData.urlToImage} alt="Avatar" />
          )}
          <div className="news-description">
            <p>{newsData.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailCard;
