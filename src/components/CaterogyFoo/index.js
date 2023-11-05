import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CaterogyFoo() {
  let { lists: listCaterogy } = useSelector(
    (state) => state.orther.listCaterogy
  );
  return (
    <div className="cate">
      <div className="container">
        <div className="body">
          <h2 className="heading">thể loại phim</h2>
          <ul>
            {listCaterogy.map((item) => {
              return (
                <li>
                  <Link
                    to={`/movie/${item.id}?type=caterogy&name=${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CaterogyFoo;
