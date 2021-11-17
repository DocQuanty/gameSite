import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Header = (props) => {
  return (
    <div
      className="header-container"
      style={{ maxWidth: "1000px" || props.width }}
    >
      <div
        className="header"
        style={{
          paddingTop: props.paddingTop,
        }}
      >
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
    </div>
  );
};
export default Header;
