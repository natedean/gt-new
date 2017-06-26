import React from 'react';
import { staffDiagramShape } from '../../../constants/propShapes';
import './index.css';

const NOTE_WIDTH = 13;

const StaffDiagram = ({ diagram }) => {
  return (
    <div className="staffDiagram">
      <div className="staffDiagram__background">
        <div className="staffDiagram__line"></div>
        <div className="staffDiagram__line"></div>
        <div className="staffDiagram__line"></div>
        <div className="staffDiagram__line"></div>
      </div>
      <div className="staffDiagram__foreground">
        <svg height="140%" width="100%" style={{ position: 'absolute', left: '-8%', marginTop: '-4%', fillOpacity: '0.25' }}>
          <path className="staffDiagram__trebleClef"
                d="M -4.3,4.8 C -5.9,4.6 -8.7,2.2 -8.7,-0.9 C -8.6,-4.5 -5.4,-8.5 -1.3,-8.5 C 2.7,-8.4 6,-4.9 6,-0.1 C 6.1,3.7 3.5,8.8 -3,8.8 C -8.7,8.9 -14.7,4.8 -14.8,-3.3 C -15.2,-16.7 1.9,-19.1 2.2,-29.6 C 2.2,-30.9 1.9,-31.9 0.6,-31.9 C -2.8,-31.9 -4.1,-24.4 -4.1,-23.2 C -4,-20.4 1,13.5 0.9,16.7 C 0.6,20.3 -1.8,22.7 -5.4,22.6 C -9.6,22.4 -11.6,19.9 -11.6,17.4 C -11.8,15.5 -10.1,13.1 -7.9,13.1 C -6,13.1 -4.7,15.1 -4.8,16.7 C -4.8,19.1 -7.2,20.2 -8.4,19.9 C -7.9,20.8 -6.7,21.4 -5.4,21.4 C -1.5,21.4 -0.3,18.3 -0.2,15.8 C -0.2,12.8 -5.4,-17.8 -5.3,-25.4 C -5.3,-30 -2.8,-37.1 0.4,-37.1 C 1.5,-37.2 3.5,-33.3 3.5,-28.3 C 3.5,-12.1 -12.2,-12.4 -12.6,-1.2 C -12.8,3.6 -8.8,7.6 -4,7.7 C 3,7.7 3.5,2.9 3.6,1.6 C 3.6,-0.8 1.6,-4.2 -2,-4.2 C -4.2,-4.2 -6.8,-2 -6.7,0.4 C -6.6,2.2 -5.5,3.5 -4.1,4.3 C -3.7,4.4 -4,4.8 -4.3,4.8 Z"
                transform="translate(26 64) scale(1.7)">
          </path>
        </svg>
        { diagram.notes.map((note, i) => {
          return (
            <div key={i} style={{ left: `${i * NOTE_WIDTH}%` }}
                 className={`staffDiagram__pitch ${note.pitch.toLowerCase()}`}>
              { note.tone }
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default StaffDiagram;

StaffDiagram.propTypes = {
  diagram: staffDiagramShape
};

