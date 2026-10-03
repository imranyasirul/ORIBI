import React from "react";
import { NavLink } from "react-router";
import Images from "../common/Images";
import Logo from '../../assets/logo/logo.png'

const menuData = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Shop", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Contact", link: "#" },
  { id: 5, title: "Journal", link: "#" },
];

const shopData = [
  { id: 1, title: "Category 1", link: "#" },
  { id: 2, title: "Category 2", link: "#" },
  { id: 3, title: "Category 3", link: "#" },
  { id: 4, title: "Category 4", link: "#" },
  { id: 5, title: "Category 5", link: "#" },
];

const helpData = [
  { id: 1, title: "Privacy Policy", link: "#" },
  { id: 2, title: "Terms & Conditions", link: "#" },
  { id: 3, title: "Special E-shop", link: "#" },
  { id: 4, title: "Shipping", link: "#" },
  { id: 5, title: "Secure Payments", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] pt-14 pb-14 font-sans">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex gap-16 md:gap-32 flex-wrap">
            <div>
              <h3 className="text-[16px] font-bold leading-[27px] text-[#262626] mb-4">
                MENU
              </h3>
              <ul>
                {menuData.map((item) => (
                  <li
                    key={item.id}
                    className="text-[14px] font-normal text-[#6D6D6D] mb-3 hover:text-black transition-colors"
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-[27px] text-[#262626] mb-4">
                SHOP
              </h3>
              <ul>
                {shopData.map((item) => (
                  <li
                    key={item.id}
                    className="text-[14px] font-normal text-[#6D6D6D] mb-3 hover:text-black transition-colors"
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-bold leading-[27px] text-[#262626] mb-4">
                HELP
              </h3>
              <ul>
                {helpData.map((item) => (
                  <li
                    key={item.id}
                    className="text-[14px] font-normal text-[#6D6D6D] mb-3 hover:text-black transition-colors"
                  >
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[250px]">
              <h3 className="text-[16px] font-bold leading-[27px] text-[#262626]">
                <a href="tel:(052)611-5711">(052) 611-5711</a>
              </h3>
              <h3 className="text-[16px] font-bold leading-[27px] text-[#262626] mb-4">
                <a href="mailto:company@domain.com">company@domain.com</a>
              </h3>
              <p className="text-[14px] font-normal text-[#6D6D6D] leading-6 mt-4">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>

          <div>
            <div className="w-[120px] h-[40px]">
              <NavLink>
                <Images src={Logo} alt={Logo}/>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-5">
            <a href="#" className="text-[#262626] font-bold text-lg">
              <i className="fab fa-facebook-f"></i> f
            </a>
            <a href="#" className="text-[#262626] font-bold text-lg">
              <i className="fab fa-linkedin-in"></i> in
            </a>
            <a href="#" className="text-[#262626] font-bold text-lg">
              <i className="fab fa-instagram"></i> ig
            </a>
          </div>
          <p className="text-[14px] font-normal text-[#6D6D6D]">
            {new Date().getFullYear()} Orebi Minimal eCommerce Figma Template by
            Adveits
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
