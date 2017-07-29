import React, {Component} from 'react';
import { connect } from 'react-redux';
import Score from '../Stats';
import {fetchStats} from '../../../actions/theory';

const mapStateToProps = (state) => ({
  userData: state.root.user.data,
  userIsLoading: state.root.user.isLoading,
  statsData: state.theory.stats.data,
  statsIsLoading: state.theory.stats.isLoading,
  statsIsError: state.theory.stats.isError
});

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

export default connect(mapStateToProps, { fetchStats })(ScoreDisplay);
