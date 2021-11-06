import "../SectionCareer/SectionCareer.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
const SectionCareer = (props) => {
  return (
    <div className="section-career">
      <div className="section-career__wrapper">
        <div className="section-career__container">
          <div className="section-career__title"></div>
          <div className="section-career__subtitle"></div>
          <div className="section-career__generalist">
            <div className="generalist__text"></div>
            <div className="generalist__develop"></div>
          </div>
          <div className="section-career__generalist_line"></div>
          <div className="section-career__middle">
            <div className="middle__text"></div>
            <div className="middle__develop"></div>
          </div>
          <div className="section-career__middle_line"></div>
        </div>
      </div>
    </div>
  );
};
export default SectionCareer;
