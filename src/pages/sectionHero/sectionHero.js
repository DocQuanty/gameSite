import "./sectionHero.scss";
import Header from "../../components/Header/Header";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header />
      <div className="background"></div>
      <div className="container">
        {/* title */}
        {/* subtitle */}
      </div>
    </div>
  );
};
export default SectionHero;
