import "../SectionAbout/SectionAbout.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
// import SubTitle from "../../components/SubTitle/SubTitle";
const sectionAbout = (props) => {
  return (
    <div className="section-about">
      <div className="section-about__background">
        <div className="section-about__wrapper">
          <div className="section-about__image"></div>
          <div className="section-about__title">
            <Maintitle>
              <span className="mark">DORFER GAMES</span>IS MADE UP OF A
              GEOGRAPHICALLY DISPERSED TEAM OF STANDOUT PROFESSIONALS WHO CREATE
              HYPER- CASUAL GAMES
            </Maintitle>
          </div>
          <div className="section-about__text-above-cards">
            We generate thousands of ideas, test hundreds of them, and publish
            only the very best and most exciting ones.
          </div>
          <div className="section-about__cards"></div>
          <div className="section-about__text-under-cards">
            <p>
              For a long time, we worked as a one- and two-person team, but we
              consider Dorfer Games’ official birthday to be Spring 2020. That's
              when we started to go full steam ahead on creating hyper-casual
              games, working with the market's best publishers, making lots of
              games, and learning.
            </p>
            <p>
              We are now actively expanding. That's why we're recruiting
              talented professionals from around the world to create hit games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default sectionAbout;
