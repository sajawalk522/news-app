import React from "react";
import Header from "../components/Header";
import Filter from "../components/filter";
// import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="default-container container">
        <Filter />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
