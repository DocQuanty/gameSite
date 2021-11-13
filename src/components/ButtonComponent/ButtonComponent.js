import "./ButtonComponent.scss";
const Button = (props) => {
  let icon;
  if (props.type === "big" && props.mode === "light") {
    icon = (
      <div style={{ width: props.widthBtn }} className="button-game">
        <a href={props.link}>
          <div className="button-game__name">
            {props.icon}
            <span> {props.children}</span>
          </div>
        </a>
      </div>
    );
  } else if (props.type === "big" && props.mode === "dark") {
    icon = (
      <div style={{ width: props.widthBtn }} className="button-game-dark">
        <a href={props.link}>
          <div className="button-game-dark__name-dark">
            {props.icon}
            <span> {props.children}</span>
          </div>
        </a>
      </div>
    );
  } else if (props.type === "small") {
    icon = (
      <div
        style={{ width: props.widthBtn, minHeight: "44px" }}
        className="button-game"
      >
        <a href={props.link}>
          <div className="button-game__name" style={{ padding: "10px" }}>
            {props.icon === "app" ? (
              <svg
                style={{ marginRight: "6px", width: "24px" }}
                class="apple-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
              </svg>
            ) : (
              <svg
                style={{
                  paddingTop: "10px",
                }}
                class="apple-icon"
                width="25"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
            )}
            <span style={{ fontSize: "14px" }}> {props.children}</span>
          </div>
        </a>
      </div>
    );
  }

  return icon;
};
export default Button;
