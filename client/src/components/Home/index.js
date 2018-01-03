import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>Get Better Faster</h3>
          <p>GuitarThinker will help</p>
          <div className="vertical-button-array">
            <Link to="/play"><button>Play</button></Link>
            <Link to="/scoreboard"><button>Scoreboard</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
