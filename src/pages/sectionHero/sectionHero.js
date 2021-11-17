import "./sectionHero.scss";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header paddingTop={20} marginBottom={560} />
      <div className="background"></div>
      <div className="container">
        <div className="section-subtitle">
          We generate thousands of ideas, test hundreds of them, and publish
          only the very best and most exciting ones.
        </div>
      </div>
    </div>
  );
};
export default SectionHero;
