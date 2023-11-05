import { Link } from "react-router-dom";
import ArticleImage from "../ArticleImage";

function ArticleItem({ data }) {
  return (
    <Link to={`/film/${data.id}`} className="item">
      <div className="main-image">
        <ArticleImage data={data} />
      </div>
      <div className="title">
        <p className="line-camp">{data?.title}</p>
      </div>
    </Link>
  );
}

export default ArticleItem;
