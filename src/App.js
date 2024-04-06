import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  // const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetchData();
  }, [category, country]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9689f36b94334029ae4e4d032126abce`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }

    const handleCategoryChange = (newCategory) => {
      setCategory(newCategory);
    };

    const handleCountryChange = (newCountry) => {
      setCountry(newCountry);
    };

  };

  // Per day only 100 News from this api
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&apikey=42499ba61ccd19d281ff0dc90850aad1`
  //     );
  //     setNews(response.data.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   const handleCategoryChange = (newCategory) => {
  //     setCategory(newCategory);
  //   };

  //   const handleCountryChange = (newCountry) => {
  //     setCountry(newCountry);
  //   };

  //   const handleLanguageChange = (newLanguage) => {
  //     setLanguage(newLanguage);
  //   };
  // };

  return (
    <div>
      <center>
        <div className="main">
          <svg 
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="400.000000pt"
            height="400.000000pt"
            viewBox="0 0 400.000000 400.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1830 2115 l0 -195 725 0 725 0 0 195 0 195 -725 0 -725 0 0 -195z
m1331 161 c16 -8 32 -10 40 -5 24 15 27 10 27 -36 0 -25 -4 -45 -9 -45 -6 0
-27 11 -47 25 -41 28 -83 32 -102 10 -23 -28 -7 -49 55 -70 73 -24 89 -34 104
-62 33 -64 -13 -143 -84 -143 -20 0 -49 7 -65 15 -18 9 -31 11 -35 5 -3 -6
-13 -10 -21 -10 -10 0 -14 14 -14 55 0 30 4 55 8 55 5 0 19 -11 31 -24 12 -13
37 -32 56 -41 32 -18 34 -18 60 -1 19 13 25 24 23 44 -3 23 -12 30 -66 49 -72
24 -97 43 -107 80 -19 77 71 138 146 99z m-1112 -118 l66 -118 3 97 c3 87 1
98 -19 119 l-22 24 63 0 63 0 -21 -23 c-20 -22 -22 -33 -22 -166 l0 -142 -27
3 c-24 3 -37 20 -98 130 -39 70 -73 129 -75 132 -3 2 -4 -46 -2 -107 3 -97 6
-115 25 -134 l20 -23 -66 0 c-70 0 -81 7 -47 28 18 11 20 23 20 134 0 112 -2
124 -22 145 l-23 24 59 -3 59 -3 66 -117z m463 77 c4 -51 -3 -56 -26 -20 -15
23 -23 25 -87 25 l-70 0 3 -47 3 -48 70 0 c65 0 70 -2 73 -22 3 -22 0 -23 -72
-23 l-76 0 0 -50 0 -50 75 0 c41 0 75 4 75 8 0 5 7 17 15 28 13 17 14 15 15
-33 l0 -53 -137 0 -136 0 21 23 c20 21 22 34 22 142 0 108 -2 121 -22 142
l-21 23 135 0 136 0 4 -45z m134 23 c-13 -21 -12 -33 13 -122 15 -55 30 -96
33 -90 3 5 15 50 28 101 23 90 23 93 5 113 -18 20 -18 20 60 20 l78 0 -20 -22
-20 -23 26 -92 c14 -51 28 -93 31 -93 3 0 17 42 32 92 24 81 25 95 12 109 -23
25 -17 29 43 29 l56 0 -20 -22 c-12 -14 -36 -81 -59 -165 -37 -138 -40 -143
-65 -143 -25 0 -27 6 -59 120 -18 66 -37 117 -41 113 -4 -4 -20 -57 -36 -118
-28 -103 -31 -110 -56 -113 -15 -2 -27 -2 -27 0 0 2 -18 66 -40 142 -25 88
-48 148 -61 163 l-22 23 61 0 c62 0 62 0 48 -22z"
              />
              <path
                d="M730 2223 l0 -58 22 38 c19 32 27 37 60 37 l38 0 0 -129 c0 -122 -1
-129 -22 -144 -22 -15 -19 -16 51 -16 l74 -1 -21 23 c-20 21 -22 34 -22 146
l0 122 42 -3 c35 -3 44 -8 57 -35 9 -18 18 -33 21 -33 4 0 6 24 5 53 l0 52
-152 3 -153 3 0 -58z"
              />
              <path
                d="M1098 2257 c20 -21 22 -34 22 -142 0 -108 -2 -121 -22 -142 l-21 -23
68 0 68 0 -22 24 c-18 19 -22 33 -19 77 l3 54 80 0 80 0 3 -54 c3 -44 -1 -58
-19 -77 l-22 -24 68 0 68 0 -21 23 c-20 21 -22 34 -22 142 0 108 2 121 22 142
l21 23 -68 0 -68 0 21 -23 c16 -17 22 -36 22 -71 l0 -47 -82 3 -83 3 -3 44
c-3 34 2 49 19 67 l22 24 -68 0 -68 0 21 -23z"
              />
              <path
                d="M1498 2257 c20 -21 22 -34 22 -142 0 -108 -2 -121 -22 -142 l-21 -23
151 0 152 0 0 46 0 47 -21 -27 c-20 -26 -25 -27 -103 -24 l-81 3 0 50 0 50 83
3 c74 3 82 5 82 22 0 18 -7 20 -85 20 l-85 0 0 50 0 50 84 0 c79 0 86 -2 105
-26 l21 -27 0 47 0 46 -152 0 -151 0 21 -23z"
              />
              <path
                d="M2392 1864 c-22 -15 -31 -64 -12 -64 6 0 10 8 10 19 0 24 25 45 45
37 24 -9 17 -40 -13 -58 -15 -9 -36 -26 -46 -37 l-19 -21 66 0 67 0 0 31 0 31
-18 -22 c-12 -14 -26 -21 -42 -18 -24 3 -23 4 13 26 40 25 47 51 21 76 -20 20
-43 20 -72 0z"
              />
              <path
                d="M2550 1818 c-22 -34 -39 -67 -36 -75 3 -7 21 -13 41 -13 36 0 46 -15
23 -38 -9 -9 -6 -12 15 -12 24 0 26 3 21 30 -4 19 -2 30 5 30 6 0 11 5 11 11
0 5 -4 7 -10 4 -6 -4 -10 18 -10 59 0 36 -4 66 -9 66 -5 0 -28 -28 -51 -62z
m36 -54 c-5 -14 -46 -20 -46 -8 0 4 10 23 23 43 l22 36 3 -28 c2 -16 1 -35 -2
-43z"
              />
              <path
                d="M2770 1853 c-25 -32 -21 -79 7 -100 22 -17 65 -16 89 1 27 20 10 32
-22 16 -33 -18 -58 -3 -62 38 -4 42 26 59 68 38 28 -13 30 -13 30 4 0 12 -10
20 -31 24 -49 10 -56 8 -79 -21z"
              />
              <path
                d="M2925 1855 c-30 -29 -32 -64 -5 -93 43 -46 120 -15 120 48 0 64 -70
91 -115 45z m75 -15 c25 -25 25 -42 0 -65 -17 -15 -24 -16 -45 -7 -42 19 -28
90 18 92 4 0 16 -9 27 -20z"
              />
              <path
                d="M3058 1825 c3 -35 0 -60 -8 -70 -11 -13 -7 -15 26 -15 30 0 35 3 26
12 -19 19 -15 86 6 97 28 15 42 -6 42 -61 0 -43 2 -48 22 -48 17 0 19 3 10 12
-20 20 -15 86 8 98 31 17 40 4 40 -56 0 -49 2 -54 22 -54 17 0 19 3 10 12 -7
7 -12 36 -12 64 0 44 -3 54 -20 59 -10 3 -29 1 -40 -5 -16 -9 -25 -8 -36 1
-11 9 -21 9 -39 1 -15 -7 -25 -8 -25 -2 0 6 -8 10 -18 10 -16 0 -18 -7 -14
-55z"
              />
              <path
                d="M2660 1755 c0 -8 9 -15 20 -15 11 0 20 7 20 15 0 8 -9 15 -20 15 -11
0 -20 -7 -20 -15z"
              />
            </g>
          </svg>
        </div>
        <div className="country-buttons">
          {/* <button onClick={() => setLanguage("hi")}>Language</button> */}
          <button onClick={() => setCountry("in")}>India</button>
          <button onClick={() => setCountry("kr")}>South Korea</button>
          <button onClick={() => setCountry("us")}>USA</button>
          <button onClick={() => setCountry("ua")}>Ukraine</button>
          <button onClick={() => setCountry("nl")}>Netherlands</button>
          <button onClick={() => setCountry("pt")}>Canada</button>
          <button onClick={() => setCountry("sg")}>Japan</button>
          <button onClick={() => setCountry("il")}>Israel</button>
        </div>
        <div className="category-buttons">
          <button onClick={() => setCategory("general")}>General</button>
          <button onClick={() => setCategory("business")}>Business</button>
          <button onClick={() => setCategory("entertainment")}>
            Entertainment
          </button>
          <button onClick={() => setCategory("health")}>Health</button>
          <button onClick={() => setCategory("science")}>Science</button>
          <button onClick={() => setCategory("sports")}>Sports</button>
          <button onClick={() => setCategory("technology")}>Technology</button>
        </div>
      </center>
      <div className="news-container">
        {
        news.map((article, index) => (
          <div key={index} className="card">
            <img
              src={article.urlToImage}
              // src={article.image}
              alt={article.title}
              className="card-image"
              height={500}
              width={800}
            />
            <div className="card-content">
              <h4>{article.title}</h4>
              <h4>{article.publishedAt}</h4>
              <p>{article.description}</p>
              {/* <p>{article.content}</p> */}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
