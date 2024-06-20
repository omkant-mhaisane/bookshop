import React from "react";
import list from "../list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../components/Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-2">
        <h3>
          <span className="freebook">Free Books</span>
        </h3>
        <p>
          Unlock a world of knowledge with our collection of free books,
          designed to fuel your passion for learning. Dive into captivating
          stories, explore new ideas, and empower your mind with the finest
          literary works.
        </p>
      </div>
      <div className="container mt-4">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="p-3">
              <Cards item={item} key={item.id}></Cards>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
