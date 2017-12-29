import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  handleLoginClick = (e) => {
    e.preventDefault();

    this.props.auth.login();
  };

  render() {
    const {auth} = this.props;

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>Get Better Faster</h3>
          <p>GuitarThinker will help</p>
          <div className="vertical-button-array">
            <Link to="/play"><button>Play</button></Link>
            {!auth.isAuthenticated() &&
              <button onClick={this.handleLoginClick}>Sign In to Save Your Scores</button>}
            <Link to="/scoreboard"><button>Scoreboard</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
