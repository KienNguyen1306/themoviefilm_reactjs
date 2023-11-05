import { useSelector } from "react-redux";
import ArticleListMovie from "../../components/ArticleListMovie";
import MainTitle from "../../components/MainTitle";
import SliderClick from "../../components/SliderClick";
import { Link } from "react-router-dom";

function Homepage() {
  let { lists: moviesPopuplar } = useSelector(
    (state) => state.movies.moviesPopular
  );
  let { lists: moviesTopRate } = useSelector(
    (state) => state.movies.moviesTopRate
  );
  let { lists: moviesUpcoming } = useSelector(
    (state) => state.movies.moviesUpcoming
  );
  let { lists: moviesNoplay } = useSelector(
    (state) => state.movies.moviesNoplay
  );
  return (
    <main>
      <section className="film">
        <div className="container">
          <div className="heading-body">
            <MainTitle>Phim thịnh hành</MainTitle>
          </div>
          <SliderClick datas={moviesPopuplar} />
          <div className="home_secsion">
            <div className="heading-body">
              <MainTitle>Phim mới cập nhập</MainTitle>
              <button
                type="button"
                className="ant-btn css-1e3x2xa ant-btn-default"
              >
                <Link to={`/movie/noplay?type=noplay&name=Phim mới cập nhập`}>
                  Xem thêm
                </Link>
              </button>
            </div>
            <ArticleListMovie datas={moviesNoplay} />
          </div>
          <div className="home_secsion">
            <div className="heading-body">
              <MainTitle>Phim sắp tới</MainTitle>
              <button
                type="button"
                className="ant-btn css-1e3x2xa ant-btn-default"
              >
                <Link to={`/movie/noplay?type=upcoming&name=Phim sắp tới`}>
                  Xem thêm
                </Link>
              </button>
            </div>
            <ArticleListMovie datas={moviesUpcoming} />
          </div>
          <div className="home_secsion">
            <div className="heading-body">
              <MainTitle>TOP PHIM HAY</MainTitle>
              <button
                type="button"
                className="ant-btn css-1e3x2xa ant-btn-default"
              >
                <Link to={`/movie/toprate?type=toprate&name=Top phim hay`}>
                  Xem thêm
                </Link>
              </button>
            </div>
            <ArticleListMovie datas={moviesTopRate} />
          </div>
          <div className="heading-body">
            <MainTitle>phim sắp chiếu</MainTitle>
          </div>
          <SliderClick datas={moviesUpcoming} />
        </div>
      </section>
    </main>
  );
}

export default Homepage;
