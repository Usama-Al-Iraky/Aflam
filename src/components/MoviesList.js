import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import PaginationComp from "./Pagination";
import NoData from "./NoData";
const MoviesList = ({ movies, paginatMovieData, pages }) => {
  return (
    <Row className="mt-3 viwe ">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <h2>
          <NoData />
        </h2>
      )}
      {movies.length >= 1 ? (
        <PaginationComp paginatMovieData={paginatMovieData} pages={pages} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
