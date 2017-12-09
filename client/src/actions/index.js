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

};
