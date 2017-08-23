import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createUser} from '../../actions/user';
import LoadingIcon from '../../components/LoadingIcon';
import './index.css';

class UserPrompt extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.createRandomUser = this.createRandomUser.bind(this);
  }

  onInputChange(e) {
    const inputVal = e.target.value;
    this.setState(() => ({ inputVal }));
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.inputVal) return;

    this.props.createUser(this.state.inputVal);
  }

  createRandomUser() {
    this.props.createUser('Anonymous Dude');
  }

  render() {
    const {user, isLoading, children} = this.props;

    return (
      <div>
        {user && children}
        {isLoading && <LoadingIcon/>}
        {!user && !isLoading && <div className="userPrompt body-content-with-top-margin">
          <h3>Let's play some games!</h3>
          <div className="userPrompt__formContainer">
            <form onSubmit={this.onSubmit}>
              <label htmlFor="displayName">First thing, what is your name?</label>
              <input
                name="displayName"
                type="text"
                required
                placeholder="smarty pants"
                value={this.state.inputVal}
                onChange={this.onInputChange}/>
              <button className="userPrompt__submitBtn" type="submit">Go!</button>
            </form>
            <h5>OR</h5>
            <button onClick={this.createRandomUser}>Make me "Anonymous Dude"</button>
          </div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.root.user.data,
  isLoading: state.root.user.isLoading
});

export default connect(mapStateToProps, {createUser})(UserPrompt);
