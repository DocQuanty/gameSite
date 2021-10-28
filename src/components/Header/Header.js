import "./Header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo-icon">
          {/* Добавить иконку */}
          {/* <img    src="./components/icons/joystick.svg" alt="" /> */}
        </div>
        <p className="header__logo-title">Vlados</p>
        <p className="header__logo-postTitle">games</p>
      </div>
      <div className="header__menu">
        <div className="header__menu-games">
          <a href="/">Games</a>
        </div>
        <div className="header__menu-aboutUs">About us</div>
        <div className="header__menu-career">Career</div>
      </div>
    </div>
  );
};
export default Header;
