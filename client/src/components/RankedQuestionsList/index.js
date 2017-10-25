import React, {Component} from 'react';
import LoadingIcon from '../LoadingIcon';

class RankedQuestionsList extends Component {
  state = {};

  componentDidMount() {
    fetch('/api/questions/ranked-list')
      .then(res => res.json())
      .then(res => {
        this.setState(prevState => ({ questions: res }))
      });
  }

  render () {
    if (!this.state.questions) return (<LoadingIcon/>);

    return (
      <div className="rankedQuestionsList">
        <h1>RankedQuestionsList</h1>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>percentageCorrect</th>
              <th>totalAnswers</th>
            </tr>
          </thead>
          <tbody>
          {this.state.questions.map((question, i) => {
            return (
              <tr key={i}>
                <td>{question.text}</td>
                <td>{`${Math.round(question.percentageCorrect * 100)}%`}</td>
                <td>{question.totalAnswers}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default RankedQuestionsList;
