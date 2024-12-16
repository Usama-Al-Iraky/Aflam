import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavbarComp from "./Navbar";
import MoviesList from "./MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieComp from "./MovieComp";

const Home = () => {
  const path = "https://api.themoviedb.org/3";
  const getFan = "/movie/popular?";
  const searchFan = "/search/movie?";
  const apiKey = "api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64";
  const searchPara = "&query=";
  const langPara = "&language=";
  const page = "&page=";

  // Main State
  const [movieData, setMovieData] = useState([]);
  // change lang state
  const [lang, setLang] = useState("en_US");
  // Geting All Data by Axios
  const getMovieData = async () => {
    const mainMovieData = await axios.get(
      path + getFan + apiKey + langPara + lang + page + "1"
    );
    setMovieData(mainMovieData.data.results);
    setPages(mainMovieData.data.total_pages);
  };
  // To render the geting data function when projrct loaded
  useEffect(() => {getMovieData()}, [lang]);
  // Search Fanction
  const searchMovieData = async (searchWord) => {
    if (searchWord === "") {
      getMovieData();
    } else {
      const mainMovieData = await axios.get(
        path + searchFan + apiKey + searchPara + searchWord + langPara + lang
      );
      setMovieData(mainMovieData.data.results);
      setPages(mainMovieData.data.total_pages);
    }
  };
  // Paginat Function
  const paginatMovieData = async (pageNum) => {
    const mainAllMovieData = await axios.get(
      path + getFan + apiKey + langPara + lang + page + pageNum
    );
    setMovieData(mainAllMovieData.data.results);
  };
  // Get number of pages
  const [pages, setPages] = useState(0);
  //
  return (
    <div>
      <NavbarComp search={searchMovieData} setLang={setLang} />
      <div className="main">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <MoviesList
                    movies={movieData}
                    paginatMovieData={paginatMovieData}
                    pages={pages}
                  />
                }
              />
              <Route
                path="movie/:filmname/:id"
                element={<MovieComp movies={movieData} lang={lang} />}
              />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
};

export default Home;
