import React, { useState } from "react";
import PropTypes from "prop-types";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./movie-card.scss";
import { useStore, action } from "../../store";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  const [state, dispatch] = useStore();
  const { watchlist } = state;
  const [toggleWatchList, setToggleWatchList] = useState(true);

  const handleAdd = (movie) => {
    dispatch(action.addMovieWatchList(movie));
    setToggleWatchList(!toggleWatchList)
  };

  const handleDelete = (id) => {
    dispatch(action.removeMovieWatchList(id))
    setToggleWatchList(!toggleWatchList)
  }

  let storeMovie = watchlist.find((movie) => movie.id === item.id);

  const watchlistDisable = storeMovie ? true : false;

  const getClassRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie-card-wrap">
      <Link to={link}>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <Button>
            <FaPlay />
          </Button>
        </div>

        <div className="movie-info">
          <h3>{item.title || item.name}</h3>
          <span className={getClassRate(item.vote_average)}>
            {Math.floor(item.vote_average)}
          </span>
        </div>
      </Link>
        <div className="watch-list">
          <button onClick={toggleWatchList ? ()=> handleAdd(item) : () => handleDelete(item.id)}>
            {toggleWatchList ? <AiOutlineHeart/> : <AiFillHeart/>}
          </button>
        </div>
    </div>
  );
};

MovieCard.propTypes = {};

export default MovieCard;
