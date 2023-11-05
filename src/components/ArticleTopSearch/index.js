import { Link } from "react-router-dom";
import { dataTopSearch } from "../../assets/data";

function ArticleTopSearch() {
  return (
    <div className="topsearch">
      <div className="container">
        <div className="heading-body">
          <h2 className="heading">Top search</h2>
        </div>
        <ul className="list">
          {dataTopSearch.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/movie/search/?type=search&name=${item}`}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ArticleTopSearch;
