import s from "./Header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <p className="header__logo_title">Vlados games</p>
      </div>
      <div className="menu">
        <div className="menu__games">Games</div>
        <div className="aboutUs">About us</div>
        <div className="menu__career">Career</div>
      </div>
    </div>
  );
};
export default Header;
