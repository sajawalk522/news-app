/* eslint-disable react/style-prop-object */
import React, { useState, useContext } from "react";
import { MyContext } from "../contexts/dataContext";
import { getNews } from "../services/api";
import { Link } from 'react-router-dom';
function Header() {
  const { setData } = useContext(MyContext);
  const [inputValue, setInputValue] = useState("");
  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem("payload")) || [];
    try {
      const response = await getNews(data, inputValue);
      setData(response.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="fluid-container">
      <div className="header">
        <div className="header-logo">
        <Link to="/"><h2>NEWS APP </h2></Link>
          
        </div>
        <div className="header-search">
          <form onSubmit={handleSubmit} className="search-form">
            <button>
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search the Content"
              name="search"
            />
          </form>
          <div className="header-list">
            <ul>
              <li>
                <i className="fa fa-bell-o" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-cog" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
