import React from 'react';
import Fretboard from '../Fretboard';

export default ({message = 'Loading...'}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10vh' }}>
    <h4>{message}</h4>
    <Fretboard width="100" isInfinite="true"/>
  </div>
);
