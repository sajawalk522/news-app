/* eslint-disable eqeqeq */
import React, {useContext, useState} from "react";
import CustomDropdown from "../components/dropdown";

import { MyContext } from "../contexts/dataContext";
import { getNews } from "../services/api";
import { useNavigate } from 'react-router-dom';

function Filter() {
  const { setData } = useContext(MyContext);
  const [active ,setActive] = useState('');
  const navigate = useNavigate();
  const fetchData = async (type) => {
    try {
       setActive(type)
       navigate('/');
      const response = await getNews(type);
      setData(response.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <div className="filter-list desktop">
        <ul className="nav-list">
          <li onClick={() => fetchData([])} className={active === '' ? 'active' : ''}>Discover</li>
          <li onClick={() => fetchData(['technology'])} className={active == 'technology' ? 'active' : ''}>Technology</li>
          <li onClick={() => fetchData(['health'])} className={active == 'health' ? 'active' : ''}>Health</li>
          <li onClick={() => fetchData(['gaming'])} className={active == 'gaming' ? 'active' : ''}>Gaming</li>
        </ul>
        <div className="dropdown-list">
          <CustomDropdown />
        </div>
      </div>
      <div className="filter-list mobile">
        <ul className="nav-list">
          <li onClick={() => fetchData([])} className={active === '' ? 'active' : ''}>Discover</li>
          <li onClick={() => fetchData(['technology'])} className={active == 'technology' ? 'active' : ''}>Technology</li>
          <li onClick={() => fetchData(['health'])} className={active == 'health' ? 'active' : ''}>Health</li>
          <li onClick={() => fetchData(['gaming'])} className={active == 'gaming' ? 'active' : ''}>Gaming</li>
        </ul>
        {/* <div>
          <MobileList options={category} />
        </div> */}
      </div>
    </div>
  );
}

export default Filter;
