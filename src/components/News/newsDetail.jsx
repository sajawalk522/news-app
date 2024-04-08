import React from "react";
import DetailCard from "../detailCard";
import AdsCard from "../ads";

function NewsDetail() {
  return (
    <div className="detail-card">
      <div className="left-side">
        <DetailCard />
      </div>
      <div className="right-side">
        <AdsCard />
      </div>
    </div>
  );
}

export default NewsDetail;
