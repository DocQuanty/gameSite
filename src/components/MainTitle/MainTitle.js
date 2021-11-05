import "./MainTitle.scss";
const Maintitle = (props) => {
  return (
    <div style={{ color: props.color }} className="section-title">
      {props.children}
    </div>
  );
};
export default Maintitle;
