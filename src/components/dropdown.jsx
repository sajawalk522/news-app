import React, { useEffect, useState, useContext } from "react";
import { getNews } from "../services/api";
import { MyContext } from "../contexts/dataContext";
const options = ["technology", "health", "gaming"];
const CustomDropdown = () => {
  const { setData } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("payload")) || [];
    setSelectedOption(data);
  }, []);
  const handleOptionClick = (option) => {
    const isExist = selectedOption.includes(option);
    if (!isExist) {
      setSelectedOption([...selectedOption, option]);
    } else {
      const rm = selectedOption.filter((el) => el !== option);
      setSelectedOption(rm);
    }
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getNews(selectedOption);
      setData(response.articles);
      setIsOpen(false);
      localStorage.setItem("payload", JSON.stringify(selectedOption));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        Personalize
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
              {selectedOption.includes(option) ? (
                <i className="fa fa-check" aria-hidden="true"></i>
              ) : (
                ""
              )}
            </li>
          ))}
         <div className="apply">
         <button disabled={loading} onClick={() => fetchData()}>
            {loading ? "loading..." : "Apply"}
          </button>
         </div>
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
