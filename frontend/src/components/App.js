import React from "react";

import Signup from "./Signup";
import auth from "../api/auth.api";

class App extends React.Component {
  onSignedUp = (user) => {
    auth.signUp(user);
  };

  render() {
    return (
      <div>
        <Signup onSubmit={this.onSignedUp} />
      </div>
    );
  }
}

export default App;
