import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ArticleTopSearch from "./components/ArticleTopSearch";
import CaterogyFoo from "./components/CaterogyFoo";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import WatchingFilm from "./pages/WatchingFilm";
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ArticleTopSearch />
        <CaterogyFoo />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
