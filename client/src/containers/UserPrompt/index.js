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

    this.props.createUser(this.state.inputVal);
  }

  createRandomUser() {
    this.props.createUser('Random Dude');
  }

  render() {
    const {user, isLoading, children} = this.props;

    return (
      <div>
        {user && children}
        {isLoading && <LoadingIcon/>}
        {!user && !isLoading && <div className="userPrompt">
          <h4>Let's play some games!</h4>
          <h5>First thing, what is your name?</h5>
          <form onSubmit={this.onSubmit}>
            {/*<label htmlFor="displayName">Display Name</label>*/}
            <input
              name="displayName"
              type="text"
              placeholder="smarty pants"
              value={this.state.inputVal}
              onChange={this.onInputChange}/>
            <button type="submit">Go!</button>
          </form>
          <h5>OR</h5>
          <button onClick={this.createRandomUser}>Make me "Anonymous Dude"</button>
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
