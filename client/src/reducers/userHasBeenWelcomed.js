import initialAppState from "./initialAppState";

const userHasBeenWelcomed = (state = initialAppState.userHasBeenWelcomed, action) => {
  switch (action.type) {
    case 'USER_WELCOME_COMPLETE':
      return true;
    default:
      return state;
  }
};

export default userHasBeenWelcomed;
