import { useParams } from "react-router-dom";
import FIlmPageThumnal from "./FIlmPageThumnal";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticlesDetailAsync } from "../../store/movies/action";
import FilmPageInfo from "./FilmPageInfo.js";
import SliderClick from "../../components/SliderClick/index.js";
import Loading from "../../components/Loading/index.js";

function FilmPage() {
  const {id} =useParams()
  const dispatch =useDispatch()
  let {detail,actor} = useSelector(state=>state.movies.moviesDetail)
  let {lists:moviesReate} = useSelector(state=>state.movies.moviesReate)

  useEffect(()=>{
    dispatch(actFetchArticlesDetailAsync(id))
  },[dispatch,id])

  if(!detail){
    return <div className="detai-film">
    <div className="container">
      <div className="body1">
       <Loading/>
      </div>
    </div>
  </div>
  }
  return (
    <div className="detai-film">
      <div className="container">
        <div className="body">
          <div className="detai-haeding">phimhay.ord</div>
          <FIlmPageThumnal data={detail}/>
          <FilmPageInfo data={detail} actor={actor}/>
        </div>
        <div className="listFilmSimilar">
          <div className="heading-body">
            <h2 className="heading">CÓ THỂ BẠN CŨNG MUỐN XEM</h2>
          </div>
          <SliderClick datas={moviesReate}/>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
