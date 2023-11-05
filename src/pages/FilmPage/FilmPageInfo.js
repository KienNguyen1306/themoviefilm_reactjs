import { convertMinutesToHoursAndMinutes } from "../../helpers";

function FilmPageInfo({ data,actor }) {
  return (
    <div className="detail-info">
      <div className="detail-info-main">
        <ul className="detail-info-list">
          <li className="detail-info-list-item">
            Đang phát:
            {data.spoken_languages &&
              data.spoken_languages.map((item, index) => {
                return <span key={index}> {item.name},</span>;
              })}
          </li>
          <li className="detail-info-list-item">
            Thể loại:
            {data?.genres &&
              data?.genres.map((item) => {
                return <span key={item.id}>{item.name},</span>;
              })}
          </li>
          <li className="detail-info-list-item">
            Diễn viên :
            {actor.map((item)=>{
              return<span> {item.name},</span>
            })}
          </li>
          <li className="detail-info-list-item">
            Vote average :<span> {data.vote_average}</span>
          </li>
          <li className="detail-info-list-item">
            Vote count:<span> {data.vote_count}</span>
          </li>
          <li className="detail-info-list-item">
            Popularity:<span> {data.popularity}</span>
          </li>
          <li className="detail-info-list-item">
            Imdb_id:<span> {data.imdb_id}</span>
          </li>
        </ul>
        <ul className="detail-info-list">
          <li className="detail-info-list-item">
            Năm Phát Hành:<span>{data.release_date}</span>
          </li>
          <li className="detail-info-list-item">
            Nhà phát hành :
            {data.production_companies.map((item) => {
              return <span key={item.id}> {item.name},</span>;
            })}
          </li>
        </ul>
        <ul className="detail-info-list">
          <li className="detail-info-list-item">
            Quốc gia:
            {data.production_countries.map((item, index) => {
              return <span key={index}>{item.name},</span>;
            })}
          </li>
          <li className="detail-info-list-item">
            Thời lượng:<span> { convertMinutesToHoursAndMinutes(data.runtime)}</span>
          </li>
        </ul>
      </div>
      <div className="detail-info-bottom">
        <div className="heading-body">
          <h2 className="heading heDetai">Nội dung phim</h2>
        </div>
        <p className="detail-info-bottom-desc">{data.overview}</p>
      </div>
      <div id="comment">
        <div className="comment-form">
          <div className="comment-controll">
            <div className="comment-avatar" />
            <textarea name="" defaultValue={""} />
          </div>
          <div className="submit">
            <button>Commment</button>
          </div>
        </div>
        <p className="title">0 comment</p>
        <ul className="body-comment" />
      </div>
    </div>
  );
}

export default FilmPageInfo;
