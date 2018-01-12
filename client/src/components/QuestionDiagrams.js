import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StaffWithNotes from './StaffWithNotes';
import Fretboard from './Fretboard';

class QuestionDiagrams extends Component {

  render() {
    const {question} = this.props;

    return (
      <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto 3rem'}}>
        <div style={{marginRight: '3rem'}}>
          <StaffWithNotes notes={question.staff} />
        </div>
        <Fretboard notes={question.fretboard} />
      </div>
    )
  }

}

QuestionDiagrams.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionDiagrams;
