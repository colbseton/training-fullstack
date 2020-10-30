import React from "react";
import { TextField, Button } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const style = {
  root: {
    textAlign: "center",
    width: 300,
  },
  textbox: {
    paddingBottom: "10px",
  },
};

class SignInUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmitSignIn = (event) => {
    event.preventDefault();
    this.props.onSignedIn(this.state);
  };

  onSubmitSignUp = (event) => {
    event.preventDefault();
    this.props.onSignedUp(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form>
          <div>
            <TextField
              size="small"
              className={classes.textbox}
              placeholder="email"
              variant="outlined"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <div>
            <TextField
              className={classes.textbox}
              size="small"
              type="password"
              placeholder="password"
              variant="outlined"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div>
            <Button onClick={this.onSubmitSignIn} variant="outlined">
              sign in
            </Button>
             <Button onClick={this.onSubmitSignUp} variant="outlined">
              sign up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(style)(SignInUp);
