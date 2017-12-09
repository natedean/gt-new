import * as services from '../services';

export const getScore = (gameID) => (dispatch, getState) => {
  const user = getState().root.user.data;

  if (!user) {
    dispatch({
      type: 'SET_USER_SCORE',
      score: 0,
      gameID
    });
    return;
  }

  services.getScore(user.id, gameID)
    .then(res => {
      dispatch({
        type: 'SET_USER_SCORE',
        score: res.score,
        gameID
      })
    })
    .catch(() => {
      alert('There has been a problem retrieving your score for this game');
    })
};

export const saveAnswer = (gameID, questionID, isCorrect) => (dispatch, getState) => {
  const user = getState().root.user.data;

  dispatch({
    type: 'OPTIMISTIC_SAVE_ANSWER',
    gameID,
    questionID,
    isCorrect
  });

  services.saveAnswer(user.id, gameID, questionID, isCorrect)
    .then(res => {
      dispatch({
        type: 'SAVE_ANSWER_SUCCESS', // not sure if we need to do anything on success...
      })
    })
    .catch(() => {
      alert('There has been a problem saving your answer');
    })

};
