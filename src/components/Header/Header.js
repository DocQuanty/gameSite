import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header__menu">
        <div className="header__menu-games">
          <NavLink to="/sectionGames">Games</NavLink>
        </div>
        <div className="header__menu-aboutUs">
          <NavLink to="/sectionAboutUs">About Us</NavLink>
        </div>
        <div className="header__menu-career">
          <NavLink to="/sectionCareer">Career</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
