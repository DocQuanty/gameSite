import "../SectionAbout/SectionAbout.scss";
import Maintitle from "../../components/MainTitle/MainTitle";
import Header from "../../components/Header/Header";

const sectionAbout = (props) => {
  return (
    <div className="section-about">
      <div className="section-about__background">
        <Header paddingTop={20} width={1000} />
        <div className="section-about__wrapper">
          <div className="section-about__images">
            <div className="section-about__images_green-cube"></div>
            <div className="section-about__images_orange-cube"></div>
          </div>
          <div className="section-about__title">
            <Maintitle>
              <span style={{ fontWeight: 700 }}>DORFER GAMES</span> IS MADE UP
              OF A GEOGRAPHICALLY DISPERSED TEAM OF STANDOUT PROFESSIONALS WHO
              CREATE HYPER- CASUAL GAMES
            </Maintitle>
          </div>
          <div className="section-about__text-above-cards">
            We generate thousands of ideas, test hundreds of them, and publish
            only the very best and most exciting ones.
          </div>
          <div className="section-about__cards">
            <div className="cards__item">
              <p>1M+</p>
              <p>Downloads of our games worldwide</p>
            </div>
            <div className="cards__item">
              <p>36</p>
              <p>Outstanding games developed</p>
            </div>
            <div className="cards__item">
              <p>25</p>
              <p>Team members around the world</p>
            </div>
            <div className="cards__item">
              <p>6</p>
              <p>Different time zones</p>
            </div>
          </div>
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
