import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Header = (props) => {
  const NavLinks = [
    { to: "/sectionHero", label: "Home", exact: true },
    { to: "/sectionGames", label: "Games", exact: true },
    { to: "/sectionAboutUs", label: "About Us", exact: true },
    { to: "/sectionCareer", label: "Career", exact: true },
  ];
  const renderLinks = () => {
    return NavLinks.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} activeClassName={"active"}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };
  return (
    <div className="header-container" style={{ maxWidth: props.width }}>
      <div
        className="header"
        style={{
          paddingTop: props.paddingTop,
        }}
      >
        <Logo />
        <div className="header__menu">
          <ul className="header__menu-links">{renderLinks()}</ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
