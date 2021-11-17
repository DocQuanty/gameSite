import "./sectionHero.scss";
import Header from "../../components/Header/Header";
import SubTitle from "../../components/SubTitle/SubTitle";
import MainTitle from "../../components/MainTitle/MainTitle";

const SectionHero = (props) => {
  return (
    <div className="section-hero" onWheel={props.listenOnWheelEvent}>
      <Header paddingTop={20} marginBottom={560} />
      <div className="background"></div>
      <div className="container">
        <MainTitle>
          <>
            BRINGING <span className="mark">JOY</span> THROUGH GAMES
          </>
        </MainTitle>
        <SubTitle marginTop={0} marginBot={0}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          corrupti eligendi sequi deleniti, distinctio illo velit quod in id
          architecto.
        </SubTitle>
      </div>
    </div>
  );
};
export default SectionHero;
