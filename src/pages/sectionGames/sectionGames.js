import "./sectionGames.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import longArrow from "./Icons/longArrow.png";
import BackGround from "./Icons/BubblePhone.JPG";
import GameListComponent from "../../components/GameListComponent/GameListComponent";
import StartRating from "../../components/StarRaiting/StarRating";

const sectionGames = (props) => {
  // ===========записываем в переменную SVG=================
  const iconApp = (
    <svg
      className="apple-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="35"
      viewBox="0 0 24 24"
    >
      <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
    </svg>
  );
  // ==================================
  const iconPlay = (
    <svg
      style={{
        paddingTop: "5px",
      }}
      className="play-icon"
      width="25"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
    </svg>
  );
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
            <ButtonComponent
              widthBtn={167}
              type={"big"}
              icon={iconApp}
              mode={"light"}
            >
              AppStore
            </ButtonComponent>

            <ButtonComponent
              widthBtn={167}
              type={"big"}
              icon={iconPlay}
              mode={"light"}
            >
              AppStore
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
