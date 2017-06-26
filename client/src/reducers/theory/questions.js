const questions = (state = null, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS_BANK':
      return action.questions.reduce((acc, question) => {
        acc[question._id] = Object.assign({}, question, { id: question._id });
        return acc;
      }, {});
    default:
      return state;
  }
};

export default questions;
