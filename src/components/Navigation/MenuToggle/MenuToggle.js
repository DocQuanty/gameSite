import "./MenuToggle";

const MenuToggle = (props) => {
  const cls = ["menuToggle", "open"];
  if (props.isOpen) {
    cls.push("fa-times");
    cls.push("open");
  } else {
    cls.push("fa-bars");
  }
  return (
    <p
      style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      onClick={props.onToggle}
      className={cls.join(" ")}
    />
  );
};
export default MenuToggle;
