import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="mt-3">
      <Link to = {`movie/${movie.original_title}/${movie.id}`} >
      <div className="card position-relative rounded-4 overflow-hidden">
        <Image src={imgUrl + movie.poster_path} />
        <div className="card-overlay w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center text-center">
          <div className="overlay-text text-white-50 fw-medium">
            <p>Film Name: {movie.title}</p>
            <p>Date: {movie.release_date}</p>
            <p>Raters: {movie.vote_count} </p>
            <p>Rate: {movie.vote_average} </p>
          </div>
        </div>
      </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
