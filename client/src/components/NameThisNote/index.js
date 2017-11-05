import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import Staff from '../Staff';
import './index.css';

class StaffNote extends Component {

  height = 120;

  notes = [
    { name: 'E2', yOffset: '0' },
    { name: 'F2', yOffset: '5' },
    { name: 'G2', yOffset: '10' },
    { name: 'A2', yOffset: '15' },
    { name: 'B2', yOffset: '20' },
    { name: 'C3', yOffset: '25' },
    { name: 'D3', yOffset: '30' },
    { name: 'E3', yOffset: '35'},
    { name: 'F3', yOffset: '40'},
    { name: 'G3', yOffset: '45'},
    { name: 'A3', yOffset: '50'},
    { name: 'B3', yOffset: '55'},
    { name: 'C4', yOffset: '60'},
    { name: 'D4', yOffset: '65'},
    { name: 'E4', yOffset: '70'},
    { name: 'F4', yOffset: '75'},
    { name: 'G4', yOffset: '80'},
    { name: 'A4', yOffset: '85'},
    { name: 'B4', yOffset: '90'},
    { name: 'C5', yOffset: '95'},
    { name: 'D5', yOffset: '100'},
    { name: 'E5', yOffset: '105'}
  ];

  state = {
    currNote: this.notes[Math.floor(Math.random() * this.notes.length)]
  };

  render() {
    return (
      <div className="staffNote text-center">
        <h4>What note is this? {this.state.currNote.name}</h4>
        <div className="text-center">
        <Staff>
          <Motion style={{ cy: spring(this.height - this.state.currNote.yOffset - 5, { stiffness: 100, damping: 20}), opacity: spring(1) }}>
            {(style) => (
              <ellipse className="staff--quarterNoteBody"
                       cx="60"
                       cy={style.cy}
                       rx="6"
                       ry="5"
                       style={{ opacity: style.opacity }}
              />
            )}
          </Motion>
        </Staff>
      </div>
  </div>
    )
  }

}

export default StaffNote;
