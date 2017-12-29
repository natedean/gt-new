import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveAnswer} from '../actions';
import LazySightReading from '../games/SightReading/LazyIndex';

class Play extends Component {

  state = {
    mode: null,
    category: null
  };

  componentWillMount() {
    console.log(this.props);
  }

  setQuestionMode = (category) => {
    this.setState(() => ({ mode: 'question', category }));
  };

  render() {
    const {mode, category} = this.state;
    const {user} = this.props;

    const view = mode ? viewSelector(category) : (<div>
      <h3>Oh, hi there!</h3>
      <p>It's time to learn and play. <br /> What category would you like?</p>
      <div className="vertical-button-array">
        <button onClick={this.setQuestionMode.bind(this, 'Guitar Fretboard')}>Guitar Fretboard</button>
        <button onClick={this.setQuestionMode.bind(this, 'Sight-Reading')}>Sight Reading</button>
        <button onClick={this.setQuestionMode.bind(this, 'Music-Theory')}>Music Theory</button>
      </div>
    </div>);

    if (!user) return null;

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          {mode && <p>Category: {category} - Level {user.level}</p>}
          {view}
        </div>
      </div>
    );
  }
}

const viewSelector = (viewName) => {
  switch(viewName) {
    case 'Sight-Reading':
      return (<LazySightReading />);
    default:
      return (<div>No view found</div>)
  }
};

const mapStateToProps = (state) => ({
  user: state.root.user.data
});

export default connect(mapStateToProps)(Play);
