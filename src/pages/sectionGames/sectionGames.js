import "./sectionGames.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import longArrow from "./Icons/longArrow.png";
import CardComponent from "./Icons/BubblePhone.JPG";
const sectionGames = (props) => {
  return (
    <div className="section-game">
      <div className="container">
        <div className="section-game__title">
          <Maintitle>
            Our&nbsp;<span className="mark">Games</span>
          </Maintitle>
        </div>
        {/* <h2 className="section-title">
          OUR <span className="section-title__mark">GAMES</span>
        </h2> */}
        <div className="section-game__background">
          <img src={CardComponent} alt="" />
        </div>
        <div className="game">
          <div className="game-name">Sorting Beads: Stencil Fill</div>
          <div className="game-rate">
            <div className="game-rate-star">star 4,6</div>
          </div>
          <div className="game-text">
            <SubTitle marginBot={0} marginTop={0}>
              The most satisfying and relaxing puzzle ever! Sort beads, create
              artworks, enjoy.
            </SubTitle>
          </div>
          <div className="game-button-wrapper">
            <ButtonComponent widthT={170} heightT={60} icon={true} />
            <ButtonComponent widthT={170} heightT={60} icon={false} />
            <div className="game-button-text">1M + downloads</div>
          </div>
        </div>
        <div className="section-decor-arrow">
          <img src={longArrow} alt="нема" />
        </div>
        <div className="and-more">
          <Maintitle>
            And&nbsp;<span className="mark">more</span>
          </Maintitle>
        </div>
        <div className="game-list">
          {/* ===card=== */}
          <div className="game-item">
            <div className="game-item-img">
              <img src="#" alt="#" />
            </div>
            <div className="game-item-name">Bullet Collect 3D</div>
            <div className="game-item-button">
              <a href="/">
                icon
                <span className="btn-text">App Store</span>
              </a>
            </div>
          </div>
          {/* ===card=== */}
          <div className="game-item">
            <div className="game-item-img">
              <img src="#" alt="#" />
            </div>
            <div className="game-item-name">Bullet Collect 3D</div>
            <div className="game-item-button">
              <a href="/">
                icon
                <span className="btn-text">App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default sectionGames;
