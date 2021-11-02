import "./sectionHero.scss";
import Header from "../../components/Header/Header";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header />
      <div className="background"></div>
      <div className="container">
        <div className="section-title">
          BRINGING <span className="mark">JOY</span> THROUGH GAMES
        </div>
        <div className="section-subtitle">
          We generate thousands of ideas, test hundreds of them, and publish
          only the very best and most exciting ones.
        </div>
      </div>
    </div>
  );
};
export default SectionHero;
