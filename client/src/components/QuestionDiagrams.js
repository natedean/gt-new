import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StaffWithNotes from './StaffWithNotes';
import Fretboard from './Fretboard';

class QuestionDiagrams extends Component {

  render() {
    const {question} = this.props;
    const mode = 'blended'; // TODO: change mode??

    return (
      <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto 3rem'}}>
        {(mode === 'blended' || mode === 'staff') &&
          <div className="diagramContainer">
            <StaffWithNotes notes={question.staff} />
          </div>}
        {(mode === 'blended' || mode === 'fretboard')
        && <div className="diagramContainer">
          <Fretboard notes={question.fretboard} />
        </div>}
      </div>
    )
  }

}

QuestionDiagrams.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionDiagrams;
