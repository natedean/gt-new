import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Staff from "../Staff";

class StaffWithNotes extends Component {
  staffHeight = 120;

  render() {
    const {notes} = this.props;

    return (
      <Staff>
        {notes.map((note, i) =>
          <ellipse key={i} className="staff--quarterNoteBody"
              cx="60"
              cy={this.staffHeight - note.yOffset - 5}
              rx="6"
              ry="5"
          />)}
      </Staff>
    )
  }
}

StaffWithNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StaffWithNotes;
