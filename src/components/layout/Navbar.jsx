import { NavLink, useLocation } from "react-router";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "../../assets/logo/logo.png";
import NavData from "../../Data/NavData";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Catagory from "../../Data/Catagory";
import UserInfo from "../../Data/UserInfo";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    setSearchText("");
  };
  const location = useLocation();
  const pathname = location.pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTwo, setShowDropdownTwo] = useState(false);

  return (
    <>
      <nav>
        <Container>
          <div className="navMain flex justify-between py-7.5">
            <div className="logo">
              <NavLink>
                <Images src={logo} alt={logo} />
              </NavLink>
            </div>
            <div className="navList ">
              <ul className="flex gap-10">
                {NavData.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray text-[14px] font-normal font-dm-sans hover:text-blackTwo transition-all duration-400"
                  >
                    <NavLink
                      to={item.url}
                      className={`${item.url == pathname ? `text-red-600` : `text-black`}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>

      <div className="bg-gray-white">
        <Container>
          <div className="navMenu py-6.25 flex justify-between">
            <div className="flex items-center gap-2.5 pt-4 pb-4">
              <div className="relative">
                <HiMenuAlt2
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="cursor-pointer text-[22px] "
                />
                <div
                  className={`bg-blackTwo text-white text-2xl absolute w-100 shadow-2xl left-0 -bottom-2 transition-all duration-600 ${
                    showDropdown
                      ? "opacity-100 visible translate-y-full"
                      : "opacity-0 invisible translate-x-[20%]"
                  }`}
                >
                  <ul className="">
                    {Catagory.map((item, index) => (
                      <li
                        className="cursor-pointer py-3 border-b last:border-b-0  hover:bg-white hover:w-full hover:text-black transition-all duration-500"
                        key={index}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className=" font-dm-sans font-normal text-blackTwo text-[14px]">
                Shop by Category
              </span>
            </div>
            <div className="search w-150 relative ">
              <input
                type="text"
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className=" relative py-4.25 px-5 bg-white w-full h-full font-normal font-dm-sans placeholder:text-[#C4C4C4]"
                placeholder="Search Products"
              />
              <NavLink onClick={handleSearch}>
                <IoSearchSharp className=" absolute top-1/2 right-5 -translate-y-1/2 text-[22px]" />
              </NavLink>
            </div>
            <div className="py-4 flex gap-10 items-center text-2xl cursor-auto">
              <div className="flex gap-2.5 relative">
                <FaUser
                  onClick={() => setShowDropdownTwo(!showDropdownTwo)}
                  className="cursor-pointer text-[22px] "
                />

                <div
                  className={`bg-blackTwo text-white text-2xl absolute w-50 shadow-2xl letf-0 -bottom-2 transition-all duration-600 ${
                    showDropdownTwo
                      ? "opacity-100 visible translate-y-full"
                      : "opacity-0 invisible translate-y-full"
                  }`}
                >
                  <ul>
                    {UserInfo.map((item, index) => (
                      <li
                        className="w-full px-6 cursor-pointer py-3 border-b last:border-b-0  hover:bg-white hover:w-full hover:text-black transition-all duration-500"
                        key={index}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <IoCaretDown />
              </div>
              <FaShoppingCart />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
