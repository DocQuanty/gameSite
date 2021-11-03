import "./ButtonComponent.scss";
const Button = (props) => {
  return (
    <div className="game-button__app">
      <a href="/">
        {/* <div className="game-button__svg-wrapper"></div> */}
        {/* <img src="./src/Icons/Apple.svg" alt="" /> */}
        <span>App Store</span>
      </a>
    </div>
  );
};
export default Button;
