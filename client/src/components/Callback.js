import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {setUser} from '../actions/user';

class Callback extends Component {

  state = {
    isLoading: true
  };

  componentWillMount() {
    const {location, auth} = this.props;

    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication(this.props)
        .then(user => {
          this.props.setUser(user);

          this.setState(() => ({isLoading: false}));
        })
    }
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) return <div>Loading...</div>;

    return <Redirect to="/" />;
  }

}

export default connect(() => ({}), {setUser})(Callback);
