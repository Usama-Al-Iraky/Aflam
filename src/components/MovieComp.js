import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../style.css'
const MovieComp = ({lang}) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  // Get Movie id to Get Movie Details
  const movieParams = useParams();
  // Main Details State
  const [movieDetails, setMovieDetails] = useState([]);
  // Get Movie Details
  const getMovieDetails = async () => {
    const mainMovieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieParams.id}?api_key=6d1ed9dccc9e5d6862b9e9fe2a4d2a64&language=${lang}`
    );
    setMovieDetails(mainMovieDetails.data);
  };
  // to render getMovieDetails function when the component loaded
  useEffect(() => {getMovieDetails()} , [lang]);
  return (
    <>
      <Row className="card-body mt-3 p-2 rounded">
        <Col xs="12" sm="6" md="6" lg="3">
          <Image src={imgUrl + movieDetails.poster_path} className="card-img d-block m-auto rounded" />
        </Col>
        <Col
          xs="12"
          sm="6"
          md="6"
          lg="9"
          className="d-flex flex-column justify-content-center align-items-center m-3 m-sm-0"
        >
          <div className="fs-5 fw-medium text-black-50 text-md-center">
            <p>Film Name: {movieDetails.title} </p>
            <p>Date: {movieDetails.release_date} </p>
            <p>Raters: {movieDetails.vote_count} </p>
            <p>Rate: {movieDetails.vote_average} </p>
          </div>
        </Col>
      </Row>
      <Row className="card-body mt-3 p-2 flex-column rounded">
        <Col
          xs="1"
          className="w-100 ps-sm-4 p-2 fs-4 fw-bold text-black-50 border-bottom"
        >
          <p>Story :-</p>
        </Col>
        <Col
          xs="11"
          className="w-100 p-2 text-center mt-2 text-black-50 fs-5 fw-medium"
        >
          <p>
          {movieDetails.overview}
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <a href = {movieDetails.homepage} target="_blanck" ><button className="movie-btn mb-3 py-2 border-0 rounded fs-6 fw-bold">
            Watch Now
          </button>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/">
            <button className="movie-btn mb-3 py-2 border-0 rounded fs-6 fw-bold">
              Go Back
            </button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default MovieComp;
