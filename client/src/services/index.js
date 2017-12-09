export const getScore = (userID, gameID) => {
  return fetch(`/api/score?userID=${userID}&gameID=${gameID}`)
    .then(res => res.json());
};

export const saveAnswer = (userID, gameID, questionID, isCorrect) => {
  return fetch(`/api/save-answer`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID,
      gameID,
      questionID,
      isCorrect,
    })
  })
    .then(res => res.json())
};
