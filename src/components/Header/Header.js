import "./Header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <div className="header__logo-icon"></div>
          <p className="header__logo-title">Vlados</p>
          <p className="header__logo-postTitle">games</p>
        </a>
      </div>
      <div className="header__menu">
        <div className="header__menu-games">
          <a href="/">Games</a>
        </div>
        <div className="header__menu-aboutUs">
          <a href="/">About Us</a>
        </div>
        <div className="header__menu-career">
          <a href="/">Career</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
