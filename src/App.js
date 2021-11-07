import "./App.scss";
import Footer from "./components/Footer/Footer";
// import MainTitle from "./components/MainTitle/MainTitle";
// import SectionHero from "./pages/sectionHero/sectionHero";

const App = (props) => {
  return (
    <div className="App">
      <Footer>
        <div className="footer__wraper">
          <div className="footer__background">
            <div className="footer__container-flex">
              <div className="container-flex__logo">
                <a href="/">
                  <p>Vlados</p>
                  <p>Games</p>
                </a>
              </div>
              <div className="container-flex__title">
                <p>Dorfer Games OÜ, Ahtri 12, Tallinn, 10151, Estonia</p>
                <p>Reg. No.: 14854266</p>
                <p>VAT Number: EE102288380</p>
              </div>
              <div className="container-flex__icons">
                <div className="icons__apple"></div>
                <div className="icons__information"></div>
                <div className="icons__facebook"></div>
              </div>
            </div>
            <div className="footer__container-subtext-flex">
              <div className="container-subtext-flex__year">
                © Dorfer Games, 2021
              </div>
              <div className="container-subtext-flex__links">
                <p>
                  <a href="/">Contact Us</a>
                </p>
                <p>
                  <a href="/">Privacy Policy</a>
                </p>
                <p>
                  <a href="/">Terms</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Footer>
      {/* <SectionHero /> */}
    </div>
  );
};
export default App;
