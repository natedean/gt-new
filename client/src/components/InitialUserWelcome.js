import React from 'react';
import PropTypes from 'prop-types';

const InitialUserWelcome =
  ({isAuthenticated, setUserHasBeenWelcomed, handleLoginClick}) => (
  <div>
    <div className="home body-content-with-top-margin">
      <div className="text-center">
        <h3>Alright, let's do this!</h3>
        <p>I am going to ask you some questions.</p>
        {!isAuthenticated && <p className="secondaryText">
          If you <a href="/#login" onClick={handleLoginClick}>Sign In</a>,
          your points and level will be saved.
        </p>}
        <button onClick={setUserHasBeenWelcomed}>SWEET, I AM READY</button>
      </div>
    </div>
  </div>
);

InitialUserWelcome.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  setUserHasBeenWelcomed: PropTypes.func.isRequired,
};

export default InitialUserWelcome;
