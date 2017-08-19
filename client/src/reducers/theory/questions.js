const questions = (state = null, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS_BANK':
      return action.questions.reduce((acc, question) => {
        console.log(question)
        acc[question.id] = question;
        return acc;
      }, {});
    default:
      return state;
  }
};

export default questions;
