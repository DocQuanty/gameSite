import "../SectionCareer/SectionCareer.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import Footer from "../../components/Footer/Footer";

const SectionCareer = (props) => {
  return (
    <div className="section-career">
      <div className="section-career__wrapper">
        <div className="section-career__container">
          <div className="section-career__maintitle">
            <Maintitle>
              <span className="mark">CAREER </span>AT DORFER GAMES
            </Maintitle>
          </div>
          <div className="section-career__subtitle">REMOTE</div>
          <div className="section-career__generalist">
            <div className="section-career__generalist_text">3D Generalist</div>
            <div className="section-career__generalist_develop">
              <a href="/">Develop</a>
            </div>
          </div>
          <div className="section-career__middle">
            <div className="section-career__middle_text">
              Middle Unity 3D Developer
            </div>
            <div className="section-career__middle_develop">
              <a href="/">Develop</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SectionCareer;
