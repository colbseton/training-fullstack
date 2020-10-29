import React from "react";

import SignInUp from "./SignInUp.component";
import GoogleSignIn from "./GoogleSignIn";
import { Card, Divider, List, ListItem, Typography } from "@material-ui/core/";

import { styled } from "@material-ui/core/styles";

import auth from "../api/auth.api";

const MyCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "30px",
  paddingBottom: "30px",
});

class App extends React.Component {
  onSignedIn = (user) => {
    auth.signInUp(user, 'signin');
  };

  onSignedUp = (user) => {
    auth.signInUp(user, 'signup');
  }
  onGSignedIn = () => {};

  render() {
    return (
      <MyCard>
        <Typography style={{ textAlign: "center" }}>
          Choose your way of logging <i className="fas fa-plug" />
        </Typography>
        <List>
          <ListItem style={{ paddingBottom: "20px" }}>
            <SignInUp onSignedIn={this.onSignedIn} onSignedUp={this.onSignedUp} />
          </ListItem>
          <Divider variant="middle" />
          <ListItem style={{ paddingTop: "20px" }}>
            <GoogleSignIn onGSignedIn={this.onGSignedIn} />
          </ListItem>
        </List>
      </MyCard>
    );
  }
}

export default App;
