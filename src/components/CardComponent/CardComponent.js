import "./CardComponent.scss";
import Bulletimage from "../../Icons/Bullet.jpg";
const Card = (props) => {
  return (
    <div className="card-component__main">
      <div className="card-component__image">
        <a href="/">
          <img src={Bulletimage} alt="изображение не отображено" />
        </a>
      </div>
      <div className="card-component__text">Bullet Collect 3D</div>
      <div className="card-component__button">{/* <ButtonComponent /> */}</div>
    </div>
  );
};
// Последняя строчка так пишется?!
//Вставка кнопки, если её ещё нет
//Вставка картинки
export default Card;
