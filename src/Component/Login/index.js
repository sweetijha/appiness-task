import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../action";
import { login } from "../../utils/login";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  submitLogin = e => {
    e.preventDefault();
    const loginRequest = {
      username: this.props.appState.username,
      password: this.props.appState.password
    };
    const loginResponse = login(loginRequest);
    alert(loginResponse.message);
    if (loginResponse.success) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    return (
      <div className="container">
        <form className="login-form" onSubmit={e => this.submitLogin(e)}>
          <div className="input-container">
            <label>Username:</label>
            <input
              type="text"
              name="name"
              required
              value={this.props.appState.username}
              placeholder="Enter Username"
              onChange={e => this.props.changeUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              name="name"
              required
              value={this.props.appState.password}
              placeholder="Enter Password"
              onChange={e => this.props.changePassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" className="submit-button" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
