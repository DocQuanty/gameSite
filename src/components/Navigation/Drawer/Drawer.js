import React from "react";
import "./Drawer.scss";
// import BackDrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список", exact: true },
  { to: "/auth", label: "Авторизация", exact: false },
  { to: "/quiz-creator", label: "Создать тест", exact: false },
];
class Drawer extends React.Component {
  onClickHandler = () => {
    this.props.onClose();
  };
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            onClick={this.onClickHandler}
            to={link.to}
            exact={link.exact}
            activeClassName={"active"}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = ["drawer"];
    if (!this.props.isOpen) {
      cls.push("close");
    }
    return (
      <>
        {/* {this.props.isOpen ? <BackDrop onClose={this.props.onClose} /> : null} */}
        <nav className={cls.join(" ")}>
          123123123123
          <ul>{this.renderLinks()}</ul>
        </nav>
      </>
    );
  }
}

export default Drawer;
