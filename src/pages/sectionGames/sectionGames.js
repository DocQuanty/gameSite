import "./sectionGames.scss";
import Maintitle from "../../components/MainTitle/MainTitle";

const sectionGames = (props) => {
  return (
    <div className="section-games">
      <div className="container">
        <Maintitle />
        {/* <h2 className="section-title">
          OUR <span className="section-title__mark">GAMES</span>
        </h2> */}
        <div className="section-game__background"></div>
        <div className="game">
          <div className="game-name">Sorting Beads: Stencil Fill</div>
          <div className="game-rate">
            <div className="game-rate-star">star 4,6</div>
          </div>
          <div className="game-text">
            The most satisfying and relaxing puzzle ever! Sort beads, create
            artworks, enjoy.
          </div>
          <div className="game-button">
            <div className="game-button__app">
              <a href="/">
                {/* <div className="game-button__svg-wrapper"></div> */}
                {/* <img src="./src/Icons/Apple.svg" alt="" /> */}
                <span>App Store</span>
              </a>
            </div>
            <div className="game-button__google">
              <a href="/">
                <img src="./src/Icons/GooglePlay.svg" alt="" />
                <span>Google Play</span>
              </a>
            </div>
            <div className="game-button-text">1M + downloads</div>
          </div>
        </div>
        <div className="section-decor-arrow">arrow down</div>
        <div className="section-title">
          <div className="section-title">
            and <div className="mark">More</div>
          </div>
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
