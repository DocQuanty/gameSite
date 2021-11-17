import "./sectionHero.scss";
import Header from "../../components/Header/Header";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header paddingTop={20} marginBottom={560} />
      <div className="background"></div>
      <div className="container"></div>
    </div>
  );
};
export default SectionHero;
