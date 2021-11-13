import "./sectionGames.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import longArrow from "./Icons/longArrow.png";
import BackGround from "./Icons/BubblePhone.JPG";
import GameListComponent from "../../components/GameListComponent/GameListComponent";
import StartRating from "../../components/StarRaiting/StarRating";

const sectionGames = (props) => {
  return (
    <div className="section-game">
      <div className="container">
        <div className="section-game__title">
          <Maintitle>
            Our&nbsp;<span className="mark">Games</span>
          </Maintitle>
        </div>

        <div className="section-game__background"></div>
        <div className="game">
          <div className="game__background"></div>
          <div className="game-name">Sorting Beads: Stencil Fill</div>
          <div className="game-rate">
            <div className="game-rate-star">
              <StartRating setRating={5} setHover={4} />
              <span>4.0</span>
            </div>
          </div>
          <div className="game-text">
            <SubTitle marginBot={0} marginTop={0}>
              The most satisfying and relaxing puzzle ever! Sort beads, create
              artworks, enjoy.
            </SubTitle>
          </div>
          <div className="game-button-wrapper">
            <div className="game-button-wrapper__wrapper-btn">
              <ButtonComponent type={"big"} icon={"app"}>
                App Store
              </ButtonComponent>
            </div>
            <ButtonComponent type={"big"} icon={"noapp"}>
              Google Play
            </ButtonComponent>

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
          <GameListComponent />
        </div>
      </div>
    </div>
  );
};
export default sectionGames;
