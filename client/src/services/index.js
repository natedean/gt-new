export const getScore = (userID, gameID) => {
  return fetch(`/api/score?userID=${userID}&gameID=${gameID}`)
    .then(res => res.json());
};
