import CHANGE_USERNAME from '../actions/userAction.jsx';

const INITAILSTATE={
  user:{username:''}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type){
    case CHANGE_USERNAME:
      return {...state,user:{userName:action.payload}};

    default:
      return state;
  }
}