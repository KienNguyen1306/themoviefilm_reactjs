import { Link } from "react-router-dom";
import ArticleImage from "../ArticleImage";
import PercentageCircle from "./PercentageCircle";

function ArticleItem({ data }) {
  return (
    <Link to={`/film/${data.id}`} className="item">
      <div className="main-image">
        <ArticleImage data={data} />
      </div>
      <div className="title">
        <p className="line-camp">{data?.title}</p>
      </div>
      <PercentageCircle vote_average={data?.vote_average}/>
    </Link>
  );
}

export default ArticleItem;
