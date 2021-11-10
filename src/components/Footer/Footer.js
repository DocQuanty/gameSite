import "./Footer.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
// import Information from "./Icons/Information.svg";
import Facebook from "./Icons/facebook.svg";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="icons__facebook">
                <img src={Facebook} alt="" />
              </div>
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
