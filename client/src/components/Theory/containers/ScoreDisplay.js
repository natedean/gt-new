import { connect } from 'react-redux';
import Score from '../Score';

const mapStateToProps = (state) => ({
  score: state.theory.score,
  skill: state.theory.skill
});

const ScoreDisplay = connect(mapStateToProps)(Score);

export default ScoreDisplay;
