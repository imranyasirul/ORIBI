import React from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container";

import Promo1 from "../../../assets/images/Promo1.png";
import Promo2 from "../../../assets/images/Promo2.png";
import Promo3 from "../../../assets/images/Promo3.png";

const PromoBanner = () => {
  const promoData = {
    leftBanner: {
      id: 1,
      image: Promo1,
      link: "/#",
      alt: "Phones Sale Banner",
    },
    rightTopBanner: {
      id: 2,
      image: Promo2,
      link: "/#",
      alt: "Electronics Sale Banner",
    },
    rightBottomBanner: {
      id: 3,
      image: Promo3,
      link: "/#",
      alt: "Furniture Offer Banner",
    },
  };

  return (
    <div className="w-full my-10 md:my-[140px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[36px]">
          <div>
            <Link
              to={promoData.leftBanner.link}
              className="block w-full h-full"
            >
              <img
                src={promoData.leftBanner.image}
                alt={promoData.leftBanner.alt}
                className="w-full h-full object-cover block"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-between gap-6 md:gap-[36px]">
            <div>
              <Link to={promoData.rightTopBanner.link} className="block w-full">
                <img
                  src={promoData.rightTopBanner.image}
                  alt={promoData.rightTopBanner.alt}
                  className="w-full h-auto object-cover block"
                />
              </Link>
            </div>

            <div>
              <Link
                to={promoData.rightBottomBanner.link}
                className="block w-full"
              >
                <img
                  src={promoData.rightBottomBanner.image}
                  alt={promoData.rightBottomBanner.alt}
                  className="w-full h-auto object-cover block"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromoBanner;
