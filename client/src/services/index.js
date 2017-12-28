export const getUserInfo = (userID) => {
  return fetch(`/api/user/info?id=${userID}`)
    .then(res => res.json());
};

export const saveAnswer = (userID, questionID, isCorrect) => {
  return fetch(`/api/save-answer`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID,
      questionID,
      isCorrect,
    })
  });
};
