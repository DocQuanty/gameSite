import "./sectionHero.scss";
import Header from "../../components/Header/Header";
import SubTitle from "../../components/SubTitle/SubTitle";
import MainTitle from "../../components/MainTitle/MainTitle";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header />
      <div className="background"></div>
      <div className="container">
        <MainTitle />
        <SubTitle />
      </div>
    </div>
  );
};
export default SectionHero;
