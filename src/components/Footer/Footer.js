import "./Footer.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Information from "./Icons/Information.svg";
const Footer = (props) => {
  return (
    <>
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
              <p>Dorfer Games OÜ, Poznyaki, Kyiv, 02068, Ukraine</p>
              <p>Reg. No.: 14854266</p>
              <p>VAT Number: EE102288380</p>
            </div>
            <div className="container-flex__icons">
              <div className="icons__apple">
                {/* <ButtonComponent
                  style={{ color: rgb(255, 255, 255) }}
                  type={"big"}
                  icon={"app"}
                >
                  App Store
                </ButtonComponent> */}
              </div>
              <div className="icons__information">
                <img src={Information} alt="" />
              </div>
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
    </>
  );
};
export default Footer;
