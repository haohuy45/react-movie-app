import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { Link } from "react-router-dom";
import Button, { OutlineButton } from "../components/button/Button";
import { category, movieType, tvType } from "../api/tmdbApi";
import MovieList from "../components/movie-list/MovieList";
import ScrollToTop from '../components/scroll/ScrollToTop'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <Button className="small">View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <Button className="small">View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/movie">
              <Button className="small">View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/movie">
              <Button className="small">View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
      <Footer />
      <ScrollToTop/>
    </>
  );
};

export default Home;
