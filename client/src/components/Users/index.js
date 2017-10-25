import React, {Component} from 'react';
import LoadingIcon from '../LoadingIcon';

class Users extends Component {
  state = {};

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({ users: res }))
      });
  }

  render () {
    if (!this.state.users) return (<LoadingIcon/>);

    return (
      <div className="users">
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>_updated_at</th>
              <th>_created_at</th>
              <th>totalCorrect</th>
              <th>totalAnswered</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.username}</td>
                <td>{new Date(user._updated_at).toLocaleDateString()}</td>
                <td>{new Date(user._created_at).toLocaleDateString()}</td>
                <td>{user.totalCorrect}</td>
                <td>{user.totalCorrect + user.totalIncorrect}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Users;
