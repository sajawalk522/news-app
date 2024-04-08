import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/NewsPage";
import News from "./components/News/news";
import NewsDetail from "./components/News/newsDetail";
import About from "./pages/About";
import "./App.css";
import { MyProvider } from "./contexts/dataContext";
function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="" element={<News />} />
            <Route path="news-detail" element={<NewsDetail />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={"not found"} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
