import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 2,
  boxShadow: "0px 3px 5px 0px rgba(10, 0, 0, .3)",
  color: "white",
  height: 38,
  padding: "10px 10px",
  marginLeft: "auto",
  marginRight: "auto",
});

const buttonConfig = {
  google: {
    classIcon: "fab fa-google left",
    color: "#de4321",
    buttonText: "Log in with Google",
  },
  github: {
    classIcon: "fab fa-github",
    color: "#2b2b2b",
    buttonText: "Log in with Github",
  },
};

class ExternLogin extends React.Component {
  onClick(provider) {
    return () => {
      this.props.onExtSignedIn(provider);
    };
  }

  render() {
    const { provider } = this.props;
    const { classIcon, color, buttonText } = buttonConfig[provider];
    return (
      <MyButton
        style={{
          background: color,
        }}
        onClick={this.onClick(provider)}
      >
        <i className={classIcon} style={{ paddingRight: "10px" }} />
        {buttonText}
      </MyButton>
    );
  }
}

export default ExternLogin;
