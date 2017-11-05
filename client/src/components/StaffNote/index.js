import React, {Component} from 'react';
import Staff, {notes} from '../Staff';

class StaffNote extends Component {

  height = 120;
  randTimer;

  state = {
    currNote: notes[0]
  };

  componentDidMount() {
    this.setRandomCurrNote();
  }

  componentWillUnmount() {
    clearInterval(this.randTimer);
  }

  setRandomCurrNote() {
    this.randTimer = setInterval(() => {
      const randNum = Math.floor(Math.random() * notes.length);

      this.setState(prevState => ({ currNote: notes[randNum] }));
    }, 1000);
  }

  render() {
    return (
      <div className="staffNote text-center">
        <h4>What note is this? {this.state.currNote.name}</h4>
        <div className="text-center">
        <Staff>
          <ellipse className="staff--quarterNoteBody"
                   cx="60"
                   cy={this.height - this.state.currNote.yOffset - 5}
                   rx="6"
                   ry="5"
          />
        </Staff>
      </div>

  </div>
    )
  }

}

export default StaffNote;
