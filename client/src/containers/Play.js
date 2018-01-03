import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveAnswer} from '../actions';
import LazySightReading from '../games/SightReading/LazyIndex';

class Play extends Component {

  state = {
    userHasBeenWelcomed: false,
    question: {
      text: 'What note is this?',
      difficulty: 1,
      staff: {

      },
      fretboard: {

      }
    }
  };

  setUserHasBeenWelcomed = () => {
    this.setState(() => ({userHasBeenWelcomed: true}));
  };

  render() {
    const {question, userHasBeenWelcomed} = this.state;
    const {user} = this.props;

    if (!user) return (<div>No user found</div>);

    if (!userHasBeenWelcomed && user.score === 0) {
      return (
        <div>
          <div className="home body-content-with-top-margin">
            <div className="text-center">
              <h3>Alright, let's do this!</h3>
              <p>I am going to ask you some questions.
                <br/>
                Questions will get harder if you're doing well.
                <br/>
                There will be games, and fun, and places to study if you struggle.
              </p>
              {!user.sub && <p className="secondaryText">If you sign in, your points and level will be saved.</p>}
              <button onClick={this.setUserHasBeenWelcomed}>SWEET, I AM READY</button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="home body-content-with-top-margin">
        <div className="text-center">
          <h3>{question.text}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.root.user.data
});

export default connect(mapStateToProps)(Play);
