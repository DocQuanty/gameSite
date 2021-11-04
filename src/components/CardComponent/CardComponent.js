import "./CardComponent.scss";
const Card = (props) => {
  return (
    <div className="card-component__main">
      <div className="card-component__image">
        <a href="/">
          <img src="./images./bullet.jpg" alt="изображение не отображено" />
        </a>
      </div>
      <div className="card-component__text"></div>
      <div className="card-component__button">
        <ButtonComponent />
      </div>
    </div>
  );
};
// Последняя строчка так пишется?!
export default Card;
