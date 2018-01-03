import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {
  render() {
    const {user, isAuthenticated, handleLoginClick} = this.props;

    if (!user) return (<div>Loading user info...</div>);

    const userName = isAuthenticated ?
      (<span>{user.name}</span>) :
      (<a href="/#login" onClick={handleLoginClick}>{user.name}</a>);

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
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired
};

export default UserInfo;

