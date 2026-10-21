import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerImage1 from "../../../assets/images/bannerImg.jpg";

const SliderComponent = Slider.default || Slider;

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const banners = [
    {
      id: 1,
      image: BannerImage1,
      link: "#",
      alt: "Final Offer Banner 1",
    },
    {
      id: 2,
      image: BannerImage1,
      link: "#",
      alt: "Final Offer Banner 2",
    },
    {
      id: 3,
      image: BannerImage1,
      link: "#",
      alt: "Final Offer Banner 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="flex items-center gap-2 cursor-pointer">
        <span
          className={`text-sm md:text-base font-semibold ${
            i === activeSlide ? "text-black font-bold" : "text-gray-400"
          }`}
        >
          {i < 9 ? `0${i + 1}` : i + 1}
        </span>
        <div
          className={`w-[3px] transition-all duration-300 ${
            i === activeSlide ? "h-6 bg-black" : "h-4 bg-transparent"
          }`}
        />
      </div>
    ),
  };

  return (
    <section className="w-full overflow-hidden relative custom-banner-slider">

      <div className="h-6 bg-black/20"></div>
      <style>{`
        .custom-banner-slider .slick-dots {
          position: absolute !important;
          top: 50% !important;
          left: 8% !important;
          bottom: auto !important;
          transform: translateY(-50%) !important;
          width: auto !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          z-index: 20 !important;
        }
        .custom-banner-slider .slick-dots li {
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
        }
        .custom-banner-slider .slick-dots li button {
          width: auto !important;
          height: auto !important;
          padding: 0 !important;
        }
        .custom-banner-slider .slick-dots li button:before {
          display: none !important;
        }
      `}</style>

      <SliderComponent {...settings}>
        {banners.map((item) => (
          <div key={item.id} className="outline-none">
            <Link to={item.link} className="block w-full cursor-pointer">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover block"
              />
            </Link>
          </div>
        ))}
      </SliderComponent>
    </section>
  );
};

export default Banner;
