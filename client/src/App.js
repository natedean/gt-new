import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import LazyAbout from './components/About/LazyAbout';
import LazyStaffNote from './components/StaffNote/LazyIndex';
import LazyNameThisNote from './games/nameThisNote/LazyIndex';
import LazyTheory from './games/theory/LazyIndex';
import LazyUsers from './components/Users/LazyIndex';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Games from './components/Games';
import RankedQuestionsList from './components/RankedQuestionsList';
import Auth from './Auth';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      // try to retrieve user from local storage ... ?
      // const user = JSON.parse(window.localStorage.getItem('gt-user'));

      // if (user && user.username === 'Nate Dean') {
      //   this.props.store.dispatch({ type: 'FETCH_USER_SUCCESS', user });
      // }
    }
  }

  render() {
    const {store} = this.props;

    return (
      <Router>
        <div className="container">
          <NavBar auth={auth} />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={LazyAbout}/>
          <Route path="/users" component={LazyUsers}/>
          <Route path="/questions" component={RankedQuestionsList}/>
          <Route exact path="/games" component={Games}/>
          <Route path="/games/theory" render={() => <LazyTheory store={store} />}/>
          <Route path="/games/staff-note" component={LazyStaffNote}/>
          <Route path="/games/name-this-note" component={() => <LazyNameThisNote store={store}/>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return (<div>loading...</div>);
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
