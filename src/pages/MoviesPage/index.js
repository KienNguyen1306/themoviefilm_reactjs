import { useDispatch, useSelector } from "react-redux";
import ArticleListMovie from "../../components/ArticleListMovie";
import MainTitle from "../../components/MainTitle";
import { useLocation, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { actFetchArticlesFilterAsync } from "../../store/movies/action";
import ReactPaginate from "react-paginate";

function MoviesPage() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const name = searchParams.get("name");
  let moviesFilter = [];
  let totalpages = 0;
  let currenPage = 0
  const moviesFilterData = useSelector((state) => state.movies.moviesFilter);
  if (moviesFilterData) {
    moviesFilter = moviesFilterData.lists || [];
    totalpages = moviesFilterData.totalpages || 0;
    currenPage = moviesFilterData.currenPage - 1 || 0
  }

  const fetchData = useCallback((page) => {
    dispatch(actFetchArticlesFilterAsync({ page, id, type, key: name }));
    window.scrollTo(0, 0);
  }, [id, dispatch, type, name]);

  const handlePageClick = (data) => {
    fetchData(parseInt(data.selected) + 1);
  };
  useEffect(() => {
    fetchData(1);
  }, [id, dispatch, type, name,fetchData]);

  return (
    <main>
      <section className="film">
        <div className="container">
          <div className="home_secsion">
            <div className="heading-body">
              <MainTitle>{name}</MainTitle>
            </div>
            {moviesFilter.length > 0 ? (
              <>
                <ArticleListMovie datas={moviesFilter} />
                {totalpages > 1 && (
                  <ReactPaginate
                    pageCount={totalpages > 400 ? 400:totalpages}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                    nextLabel="next >"
                    previousLabel="< previous"
                    forcePage={currenPage} 
                  />
                )}
              </>
            ) : (
              <p className="nomovie">Không có phim nào 😆</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MoviesPage;
