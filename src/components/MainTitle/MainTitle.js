import "./MainTitle.scss";
const Maintitle = (props) => {
  return (
    <div style={{ color: props.color }} className="title-main">
      {props.children}
    </div>
  );
};
export default Maintitle;
