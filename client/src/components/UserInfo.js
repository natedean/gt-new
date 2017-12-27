import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({user}) => {
  if (!user) return (<div>Loading user info...</div>);

  return (
    <div className="secondaryText">
      <span>{user.name}</span>
      {user.score && <span> | {user.score}</span>}
    </div>
  )
};

UserInfo.propTypes = {
  user: PropTypes.object
};

export default UserInfo;

