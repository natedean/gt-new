import initialAppState from './initialAppState';

const reconciliationState = (state = initialAppState.reconciliationState, action) => {
  switch (action.type) {
    case 'UNSET_RECONCILIATION_STATE':
      return null;
    case 'OPTIMISTIC_SAVE_ANSWER':
      return action.isCorrect;
    default:
      return state;
  }
};

export default reconciliationState;
