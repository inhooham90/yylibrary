import { RECEIVE_CURRENT_USER, LOG_OUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUserId: null
};

const sessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUserId: action.user.id})
    case LOG_OUT_CURRENT_USER:
      return defaultState;
    default: {
      return state;
    }
  }
};

export default sessionReducer;
