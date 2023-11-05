import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import Header from "./components/Header";
import ArticleTopSearch from "./components/ArticleTopSearch";
import Footer from "./components/Footer";
import WatchingFilm from "./pages/WatchingFilm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  actFetchArticlesLatestAsync,
  actFetchArticlesNoPlayAsync,
  actFetchMovieTopRateAsync,
  actFetchMovieUpcomingAsync,
} from "./store/movies/action";
import {
  actFetchArticlesCoutryAsync,
  actFetchArticlesOrtherAsync,
} from "./store/orthers/action";
import MoviesPage from "./pages/MoviesPage";
import CaterogyFoo from "./components/CaterogyFoo";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchMovieTopRateAsync());
    dispatch(actFetchMovieUpcomingAsync());
    dispatch(actFetchArticlesNoPlayAsync());
    dispatch(actFetchArticlesOrtherAsync());
    dispatch(actFetchArticlesCoutryAsync());
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/film/:id/watch/:imdb_id" element={<WatchingFilm />} />
          <Route path="/movie/:id" element={<MoviesPage />} />
        </Routes>
        <ArticleTopSearch />
        <CaterogyFoo />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
