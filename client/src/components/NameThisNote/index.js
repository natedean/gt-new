import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import Staff, {notes} from '../Staff';
import './index.css';

class StaffNote extends Component {

  height = 120;

  state = {
    currNote: notes[Math.floor(Math.random() * notes.length)]
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
