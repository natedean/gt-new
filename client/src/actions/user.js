export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setIsFetchingUser = (isFetching = false) => {
  const actionType = isFetching ? 'FETCHING_USER' : 'FETCHING_SUCCESS';

  return ({
    type: actionType
  })
};
