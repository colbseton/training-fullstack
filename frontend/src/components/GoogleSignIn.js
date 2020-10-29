import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #de4321 30%, #de4321 90%)",
  border: 0,
  borderRadius: 2,
  boxShadow: "0px 3px 5px 0px rgba(10, 0, 0, .3)",
  color: "white",
  height: 38,
  padding: "10px 10px",
  marginLeft: "auto",
  marginRight: "auto",
});

class GoogleSignIn extends React.Component {
  render() {
    return (
      <MyButton>
        <i className="fab fa-google left" style={{ paddingRight: "10px" }} />
        Log in with google
      </MyButton>
    );
  }
}

export default GoogleSignIn;
