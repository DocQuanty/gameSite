import "./sectionHero.scss";
import Header from "../../components/Header/Header";

const SectionHero = (props) => {
  return (
    <div className="section-hero">
      <Header />
      <div className="background"></div>
      <div className="container"></div>
    </div>
  );
};
export default SectionHero;
