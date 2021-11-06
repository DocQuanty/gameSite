import "./CardComponent.scss";
import Bulletimage from "../CardComponent/images/bullet.jpg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Card = (props) => {
  return (
    <div className="card-component">
      <div className="card-component__image">
        <a href="/">
          <img src={Bulletimage} alt="изображение не отображено" />
        </a>
      </div>
      <div className="card-component__text-card">Bullet Collect 3D</div>
      <div className="card-component__button">
        <ButtonComponent type={"small"} icon={"app"}>
          AppStore
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Card;
