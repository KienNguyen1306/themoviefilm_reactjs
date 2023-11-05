import { Link } from "react-router-dom";

function FIlmPageThumnal({data}) {
    return (  <div className="body-main">
    <div className="image">
      <img
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`}
        alt="eorro"
      />
    </div>
    <div className="body-content">
      <div className="body-content-left">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
          alt="error"
        />
      </div>
      <div className="body-content-right">
        <h2 className="body-content-right-haeding">{data.title}</h2>
        <div className="action">
          <button className="btn travel" type="button">
            Travel
          </button>
          <button className="btn watch" type="button">
            <Link to={`/film/951491/watch/${data.imdb_id}`}>Xem phim</Link>
            
          </button>
        </div>
      </div>
    </div>
  </div> );
}

export default FIlmPageThumnal;