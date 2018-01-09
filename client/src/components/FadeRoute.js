import React from 'react';
import {Route} from 'react-router-dom';
import {TransitionMotion, spring} from 'react-motion';

const FadeRoute = ({ render: Component, ...rest }) => {

  return (
    <Route {...rest} render={({ location, match }) => (
      <TransitionMotion
        willEnter={() => {return {opacity: 0 }}}
        willLeave={() => {return {opacity: spring(0, 1)}}}
        defaultStyles={[ {
          key: location.pathname,
          style: { opacity: 0},
          data: match
        } ]}
        styles={match ? [ {
          key: location.pathname,
          style: { opacity: spring(1, 0) },
          data: match
        } ] : []}
      >
        {interpolatedStyles => (
          <div className="route">
            {interpolatedStyles.map(config => (
              <div
                className="page"
                key={config.key}
                style={{opacity: `${config.style.opacity}`}}
              >
                <Component/>
              </div>
            ))}
          </div>
        )}
      </TransitionMotion>
    )}/>
  )
};

export default FadeRoute
