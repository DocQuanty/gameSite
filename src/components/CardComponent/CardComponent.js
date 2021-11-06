import "./CardComponent.scss";
// import Bulletimage from "../CardComponent/images/bullet.jpg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Card = (props) => {
  return (
    <div className="card-component">
      <div className="card-component__image">
        <img src={props.img} alt="изображение не отображено" />
      </div>
      <div className="card-component__text-card">{props.describe}</div>
      <div className="card-component__button">
        <ButtonComponent type={"small"} link={props.btnLink} icon={"app"}>
          {props.btnInfo}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Card;
