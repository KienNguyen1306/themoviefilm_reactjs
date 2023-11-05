import ArticleItem from "../ArticleItem";
import ItemLoading from "../ItemLoading/ItemLoading";

function ArticleListMovie({ datas }) {
  return (
    <div className="homeListFilm">
      {datas.length > 0 &&
        datas.map((item, index) => {
          return <ArticleItem key={index} data={item} />;
        })}
      {datas.length === 0 && <ItemLoading countItem={20} />}
    </div>
  );
}

export default ArticleListMovie;
