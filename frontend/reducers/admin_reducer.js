import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  valid: false
};

const adminReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {valid: action.user.username === "Admin"})
    default: {
      return state;
    }
  }
};

export default adminReducer;
