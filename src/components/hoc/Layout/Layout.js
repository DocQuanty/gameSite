import React from "react";
import "../Layout/Layout";
import MenuToggle from "../../Navigation/MenuToggle/MenuToggle";
import Drawer from "../../Navigation/Drawer/Drawer";

class Layout extends React.Component {
  state = {
    menu: false,
  };
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  MenuCloserHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className="layout">
        <Drawer onClose={this.menuCloserHandler} isOpen={this.state.menu} />
        <MenuToggle
          style={{ width: "100px" }}
          isOpen={this.state.menu}
          onToggle={this.toggleMenuHandler}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
