import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import App from './App';


import {setQuestionsBank, generateAndSetNewQuestion} from './actions';

// get questions and init the app...
// eventually, we will want the user to have a list of types of questions they want
// then we can fetch questions based on what the user opts in to.
fetch('/api/questions')
  .then(res => res.json())
  .then(questions => {

    // TESTING
    const filteredQuestions = questions.filter(question => question.helpers);

    store.dispatch(setQuestionsBank(filteredQuestions));
    // end testing

    // uncomment after testing
    // store.dispatch(setQuestionsBank(questions));
    store.dispatch(generateAndSetNewQuestion());
  });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
