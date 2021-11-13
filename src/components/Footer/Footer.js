import "./Footer.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Footer = (props) => {
  const AppleIcon = (
    <svg
      style={{ width: "35px", height: "35px" }}
      class="apple-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
    >
      <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
    </svg>
  );
  const Linkedin = (
    <svg
      style={{ width: "35px", height: "35px" }}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="35"
      height="35"
    >
      {" "}
      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
    </svg>
  );
  const Facebook = (
    <svg
      style={{ width: "35px", height: "35px" }}
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="facebook-f"
      class="svg-inline--fa fa-facebook-f"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 490"
      width="35"
      height="35"
    >
      <path
        fill="currentColor"
        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
      ></path>
    </svg>
  );
  return (
    <>
      <div className="footer">
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
                <ButtonComponent
                  style={{
                    color: "rgb(255, 255, 255)",
                  }}
                  type={"big"}
                  icon={AppleIcon}
                  mode={"dark"}
                  widthBtn={170}
                >
                  App Store
                </ButtonComponent>
                <ButtonComponent
                  style={{
                    color: "rgb(255, 255, 255)",
                  }}
                  type={"big"}
                  icon={Linkedin}
                  mode={"dark"}
                  widthBtn={76}
                />
                <ButtonComponent
                  style={{
                    color: "rgb(255, 255, 255)",
                  }}
                  type={"big"}
                  icon={Facebook}
                  mode={"dark"}
                  widthBtn={60}
                />
              </div>
            </div>
            <div className="footer__container-subtext-flex">
              <div className="footer__container-subtext-flex_author">
                © Dorfer Games, 2021
              </div>
              <div className="footer__container-subtext-flex_links">
                <a href="/">Contact Us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
