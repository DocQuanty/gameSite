import "./SubTitle.scss";

const SubTitle = (props) => {
  return (
    <div
      style={{
        marginBottom: props.marginBot,
        marginTop: props.marginTop,
      }}
      className="section-subtitle"
    >
      {props.children}
    </div>
  );
};
export default SubTitle;
