import React, { useEffect, useContext } from "react";
import Layout from "../layouts/default";
import { getNews } from "../services/api";
import { MyContext } from "../contexts/dataContext";
import { Outlet } from "react-router-dom";

function Home() {
  const { setData } = useContext(MyContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem("payload")) || [];
      try {
        const response = await getNews(data);
        setData(response.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setData]);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Home;
