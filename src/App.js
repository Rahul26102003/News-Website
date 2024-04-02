import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9689f36b94334029ae4e4d032126abce`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }

    const handleCategoryChange = (newCategory) => {
      setCategory(newCategory);
    }
  };
  return (
    <div>
      <center>
        <h1>News App</h1>
        <div className="category-buttons">
          <button onClick={() => setCategory('general')}>General</button>
          <button onClick={() => setCategory('business')}>Business</button>
          <button onClick={() => setCategory('entertainment')}>Entertainment</button>
          <button onClick={() => setCategory('health')}>Health</button>
          <button onClick={() => setCategory('science')}>Science</button>
          <button onClick={() => setCategory('sports')}>Sports</button>
          <button onClick={() => setCategory('technology')}>Technology</button>
        </div>
      </center>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="card">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-image"
              height={500}
              width={800}
            />
            <div className="card-content">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
