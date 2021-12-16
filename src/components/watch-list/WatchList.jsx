import React, { useState } from "react";
import { useStore, action } from "../../store";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PageHeader from "../page-header/PageHeader";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FaPlay } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import apiConfig from "../../api/apiConfig";
import '../movie-card/movie-card.scss'
import '../movie-grid/movie-grid.scss'
import './watch-list.scss'
const WatchList = () => {
  const [state, dispatch] = useStore();
  const { watchlist } = state;
  const [toggleWatchList, setToggleWatchList] = useState(true);


  const handleDelete = (id) => {
    dispatch(action.removeMovieWatchList(id));
    setToggleWatchList(!toggleWatchList);
  };


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
    <>
      <Header />
      <PageHeader>
        <h2>Watch List</h2>
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          {watchlist.length > 0 ? (
            <div className="movie-grid">
            {watchlist.map((movie, index) => {

              const bg = apiConfig.w500Image(movie.poster_path || movie.backdrop_path);
              console.log(bg)
              
              return (
              <div className="movie-card-wrap">
                <Link to={`/movie/${movie.id}`}>
                  <div
                    className="movie-card"
                    style={{ backgroundImage: `url(${bg})` }}
                  >
                    <Button>
                      <FaPlay/>
                    </Button>
                  </div>
                  <div className="movie-info">
                     <h3>{movie.title || movie.name}</h3>
                     <span className={getClassRate(movie.vote_average)}>
                       {Math.floor(movie.vote_average)}
                     </span>
                   </div>
                </Link>
                <div className="watch-list">
                     <button onClick={() => handleDelete(movie.id)}>
                       {toggleWatchList ? <AiFillHeart/> : <AiOutlineHeart/>}
                     </button>
                   </div>
              </div>
            )})}
            </div>
          ):(
            <h2 className="no-movie">No movies in your list</h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchList;
