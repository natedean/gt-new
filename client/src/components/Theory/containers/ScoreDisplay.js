import React, {Component} from 'react';
import { connect } from 'react-redux';
import Score from '../Stats';
import {fetchStats} from '../../../actions/theory';

class ScoreDisplay extends Component {

  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    if (this.props.userIsLoading) return <div>Calculating your stats...</div>;

    if (!this.props.userData) return null;

    if (this.props.statsIsLoading) return (<div>Loading stats...</div>);

    if (this.props.statsData) return (<Score {...this.props} />);

    if (this.props.statsIsError) return (<div>There has been an error retrieving avg stats</div>);

    return null;
  }
}

const mapStateToProps = (state) => ({
  userData: state.root.user.data,
  userIsLoading: state.root.user.isLoading,
  statsData: state.theory.stats.data,
  statsIsLoading: state.theory.stats.isLoading,
  statsIsError: state.theory.stats.isError,
  optimisticLeaderboard: optimisticLeaderboard(state.root.user.data, state.theory.score, state.theory.leaderboard)
});

function optimisticLeaderboard(userData, score, leaderboard) {
  if (!userData || !leaderboard) return null;

  // the leaderboard from the server could be out of date, since we're optimistically updating the user's score
  // we also need to optimistically update the leaderboard
  return leaderboard.map(user => {
    if (user._id !== userData._id) return user;

    const optimisticScore = user.totalCorrect > score ? user.totalCorrect : score;

    return Object.assign({}, user, {totalCorrect: optimisticScore, isCurrentUser: true});
  }).sort((a, b) => {
    if (b.totalCorrect < a.totalCorrect) return -1;
    if (b.totalCorrect > a.totalCorrect) return 1;

    if (b._updated_at < a._updated_at) return -1;
    if (b._updated_at > a._updated_at) return 1;

    return 0;
  });
}

export default connect(mapStateToProps, { fetchStats })(ScoreDisplay);
