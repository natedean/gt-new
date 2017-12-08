import React, {Component} from 'react';

class Login extends Component {

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <div>
        {
          !isAuthenticated() && (
            <button
              onClick={this.login}
            >
              Log In
            </button>
          )
        }
        {
          isAuthenticated() && (
            <button
              onClick={this.logout}
            >
              Log Out
            </button>
          )
        }
      </div>
    )
  }

}

export default Login;
