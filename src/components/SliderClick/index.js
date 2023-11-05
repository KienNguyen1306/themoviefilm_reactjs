import Slider from "react-slick";
import ArticleItem from "../ArticleItem";

function SliderClick({ datas }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (datas.length === 0) {
    return (
      <>
        <section className="mainslider">
          <Slider {...settings}>
            {new Array(11).fill(0).map((item, index) => {
              return <div key={index} class="item-loading"></div>;
            })}
          </Slider>
        </section>
      </>
    );
  }
  return (
    <section className="mainslider">
      <Slider {...settings}>
        {datas.map((item, index) => {
          return <ArticleItem key={index} data={item} />;
        })}
      </Slider>
    </section>
  );
}

export default SliderClick;
