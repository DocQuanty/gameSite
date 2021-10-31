import React from "react";
import "./Drawer.scss";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/sectionHero", label: "Home", exact: true },
  { to: "/sectionGames", label: "Games", exact: true },
  { to: "/AboutUs", label: "About Us", exact: true },
  { to: "/????", label: "Career", exact: true },
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
