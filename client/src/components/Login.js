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
      <div className="text-center body-content-with-top-margin">
        {
          !isAuthenticated() && (
            <div>
              <h4>Save your scores!</h4>
              <p>Log in with Chrome, Facebook, or Twitter</p>
              <p>Or sign in and sign up with your email address</p>
              <button
                onClick={this.login}
              >
                Log In
              </button>
            </div>
          )
        }
        {
          isAuthenticated() && (
            <div>
              <p>You're already logged in!</p>
            <button
              onClick={this.logout}
            >
              Log Out
            </button>
            </div>
          )
        }
      </div>
    )
  }

}

export default Login;
