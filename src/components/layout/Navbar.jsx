import { NavLink } from "react-router";
import Container from "../common/Container";
import Images from "../common/Images";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <Container>
      <div className="navMain flex justify-between py-7.5">
        <div className="logo">
          <NavLink>
            <Images src={logo} alt={logo} />
          </NavLink>
        </div>
        <div className="navList ">
            <ul>
                <li>
                     <NavLink className="text-[14px] font-normal hover:font-bold duration-300">
                        Home
                     </NavLink>
                </li>
            
            </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
