const test = (state = 'whatever', action) => {
  switch (action.type) {
    case 'super-test':
      return 'SUPER TEST SUCCESSFUL!';
    default:
      return state;
  }
};

export default test;
