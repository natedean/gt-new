export const createUser = (username) => (dispatch) => {
  dispatch({ type: 'CREATING_USER' });

  console.log('creating!', username);

  // make RESTful call
  return fetch(`/api/user/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username })
  })
  .then(res => res.json())
  .then(user => {
    dispatch({ type: 'CREATE_USER_SUCCESS', user });
  }).catch(err => {
    dispatch({ type: 'CREATE_USER_FAILURE', err });
  });
  // send
};
