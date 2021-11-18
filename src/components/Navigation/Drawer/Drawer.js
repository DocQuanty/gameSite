import React from "react";
import "./Drawer.scss";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/gameSite/sectionHero",
    label: "Home",
    exact: true,
  },
  { to: "/gameSite/sectionGames", label: "Games", exact: true },
  { to: "/gameSite/sectionAbout", label: "About Us", exact: true },
  { to: "/gameSite/sectionCareer", label: "Career", exact: true },
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
        {this.props.isOpen ? <BackDrop onClose={this.props.onClose} /> : null}
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
      </>
    );
  }
}

export default Drawer;
