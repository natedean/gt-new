import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {

  handleLoginClick = (e) => {
    e.preventDefault();

    this.props.auth.login();
  };

  render() {
    const {user} = this.props;

    if (!user) return (<div>Loading user info...</div>);

    // user stubs will not have a sub property
    const userName = user.sub ?
      (<span>{user.name}</span>) :
      (<a href="/#login" onClick={this.handleLoginClick}>{user.name}</a>);

    return (
      <div className="secondaryText">
        {userName}
        {Number.isInteger(user.level) && <span> - Level {user.level}</span>}
        {Number.isInteger(user.score) && <span> - Score: {user.score}</span>}
      </div>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.object
};

export default UserInfo;

