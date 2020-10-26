import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <InputBase
            name="email"
            placeholder="email"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <InputBase
            name="password"
            placeholder="password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <Button onClick={this.onSubmit} variant="outlined">
            sign up
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
