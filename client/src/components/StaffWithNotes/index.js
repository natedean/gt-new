import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Staff, {yOffsetMap} from "../Staff";

class StaffWithNotes extends Component {
  staffHeight = 120;

  render() {
    const {notes} = this.props;

    console.log(yOffsetMap[notes[0]], typeof yOffsetMap[notes[0]]);

    return (
      <Staff>
        {notes.map((note, i) =>
          <ellipse key={i} className="staff--quarterNoteBody"
              cx="60"
              cy={this.staffHeight - yOffsetMap[note] - 5}
              rx="6"
              ry="5"
          />)}
      </Staff>
    )
  }
}

StaffWithNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default StaffWithNotes;
