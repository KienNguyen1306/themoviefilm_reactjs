import { useState } from "react";

function ArticleImage({ data }) {
  const [loaded, setLoaded] = useState(false);
    // loading image
    const handleImageLoad = () => {
        setLoaded(true);
      };
  return (
    <>
      {!loaded && <div className="placeholder blur" style={{ height: 220 }} />}
      <img
          className="image"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data?.poster_path}`}
          alt="error"
          style={{
            display: loaded ? "block" : "none",
           
          }}
  
          onLoad={handleImageLoad}
        />
      {/* <img
        className="image"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${link}`}
        alt="error"
        style={{
            display: loaded ? "block" : "none",
           
          }}
  
          onLoad={handleImageLoad}
      /> */}
    </>
  );
}

export default ArticleImage;
