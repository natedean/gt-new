import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import LazyAbout from './components/About/LazyAbout';
import LazyStaffNote from './components/StaffNote/LazyIndex';
import LazyNameThisNote from './games/nameThisNote/LazyIndex';
import LazyTheory from './games/theory/LazyIndex';
import LazyUsers from './components/Users/LazyIndex';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';
import Login from './components/Login';
import RankedQuestionsList from './components/RankedQuestionsList';
import Callback from './components/Callback';
import Auth from './Auth';
import {setUser} from './actions/user';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

const auth = new Auth();

class App extends Component {

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      // try to retrieve user from local storage
      const user = JSON.parse(window.localStorage.getItem('gt_user'));

      // if we have a user in localStorage, set them in the store (WE MIGHT NEED TO CHECK EXPIRATION)
      if (user) {
        this.props.setUser(user);
      }
    }
  }

  render() {
    const {store} = this.props;

    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={LazyAbout}/>
          <Route path="/users" component={LazyUsers}/>
          <Route path="/questions" component={RankedQuestionsList}/>
          <Route exact path="/games" component={Games}/>
          <Route path="/games/theory" render={() => <LazyTheory store={store} />}/>
          <Route path="/games/staff-note" component={LazyStaffNote}/>
          <Route path="/games/name-this-note" component={() => <LazyNameThisNote store={store}/>} />
          <Route path="/login" render={() => (<Login auth={auth} />)} />
          <Route path="/callback" render={(props) => (<Callback auth={auth} {...props} />)}/>
        </div>
      </Router>
    );
  }
}



export default connect(null, {setUser})(App);
