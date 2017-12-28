import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoadingIcon from '../components/LoadingIcon';
import {setUser} from '../actions';
import {getUserInfo} from '../services';

class Callback extends Component {

  state = {
    isLoading: true,
    isError: false
  };

  componentWillMount() {
    const {location, auth} = this.props;

    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication(this.props)
        .then(user => {
          // we have the user object from Auth0, but also need score/level info
          getUserInfo(user.id).then(additionInfo => {
            debugger;
            const updatedUser = {...user, ...additionInfo};

            this.props.setUser(updatedUser);

            this.setState(() => ({isLoading: false}));
          });
        })
        .catch(() => {
          this.setState(() => ({isLoading: false, isError: true}));
        })
    }
  }

  render() {
    const {isLoading, isError} = this.state;

    if (isLoading) return (<div style={{
      display: 'flex',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      left: '0',
      width: '100%',
      backgroundColor: 'white',
    }}><LoadingIcon message={'Loading user info...'}  /></div>);

    if (isError) return (<div>There has been an error loading user info.</div>);

    return <Redirect to="/" />;
  }

}

export default connect(() => ({}), {setUser})(Callback);
