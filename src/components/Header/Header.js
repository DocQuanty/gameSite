import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <div className="header__logo-icon"></div>
          <p className="header__logo-title">Vlados</p>
          <p className="header__logo-postTitle">games</p>
        </NavLink>
      </div>
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
