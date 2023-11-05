import { useParams } from "react-router-dom";

/* eslint-disable jsx-a11y/iframe-has-title */
function WatchingFilm() {
  const {imdb_id} =useParams()
  return (
    <div className="watchingfilm">
      <div className="container">
        <div className="body">
          <div className="playfilm">
            <iframe
              src={`https://2embed.org/embed/movie?imdb=${imdb_id}&language=vi`}
              allowFullScreen=""
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchingFilm;
