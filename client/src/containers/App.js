import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {} from 'react-motion';
import {connect} from 'react-redux';
import LazyAbout from '../components/About/LazyAbout';
import LazyUsers from '../components/Users/LazyIndex';
import NavBar from '../components/NavBar';
import UserInfo from '../components/UserInfo'
import Home from '../components/Home/index';
import Login from '../components/Login';
import Logout from '../components/Logout';
import RankedQuestionsList from '../components/RankedQuestionsList/index';
import Callback from '../components/Callback';
import Auth from '../Auth/index';
import Play from './Play';
import {setUser} from '../actions';
import FadeRoute from '../components/FadeRoute';
import uuid from 'uuid/v4';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/index.css';

const auth = new Auth();

class App extends Component {

  componentDidMount() {
    // try to retrieve user from local storage
    const user = JSON.parse(window.localStorage.getItem('gt_user'));

    // if we have a user in localStorage, and our token has not expired, set the user in the store
    // only AUTHENTICATED users will get picked up (not user stubs) - this could be changed to allow non-logged-in-users to persist scores
    if (user && auth.isAuthenticated()) {
      this.props.setUser(user);
    } else {
      // set user in redux store, do not persist temp user to localStorage
      this.props.setUser({
        id: uuid(),
        name: 'Not Signed In',
        level: 1,
        score: 0
      });
    }
  }

  handleLoginClick = (e) => {
    e.preventDefault();

    auth.login();
  };

  render() {
    const {user} = this.props;
    const isAuthenticated = auth.isAuthenticated();

    return (
      <Router>
        <div className="container">
          <NavBar />
          <UserInfo user={user} isAuthenticated={isAuthenticated} handleLoginClick={this.handleLoginClick} />
          <FadeRoute exact path="/" render={() => (<Home isAuthenticated={isAuthenticated} handleLoginClick={this.handleLoginClick} />)} />
          <FadeRoute path="/play" render={() => (user && <Play isAuthenticated={isAuthenticated} handleLoginClick={this.handleLoginClick} />)} />
          <FadeRoute path="/about" render={LazyAbout} />
          <Route path="/users" render={LazyUsers}/>
          <Route path="/questions" render={RankedQuestionsList}/>
          <Route path="/login" render={() => (<Login auth={auth} />)} />
          <Route path="/logout" render={() => (<Logout auth={auth} />)} />
          <Route path="/callback" render={(props) => (<Callback auth={auth} {...props} />)}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({user: state.root.user.data});

export default connect(mapStateToProps, {setUser})(App);
