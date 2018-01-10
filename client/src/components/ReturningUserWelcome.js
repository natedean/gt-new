import React from 'react';
import PropTypes from 'prop-types';

const ReturningUserWelcome =
  ({score, setUserHasBeenWelcomed}) => (
    <div>
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>Welcome back!</h3>
          <p>Wow, you already have {score} points! That's big time.
            <br/>
            Let's continue your fast track to world domination.
          </p>
          <button onClick={setUserHasBeenWelcomed}>LET US DO THIS</button>
        </div>
      </div>
    </div>
);

ReturningUserWelcome.propTypes = {
  score: PropTypes.number.isRequired,
  setUserHasBeenWelcomed: PropTypes.func.isRequired,
};

export default ReturningUserWelcome;
