import {
  UserState,
  UserActionTypes,
  SET_ACTIVE_USER
} from './types';

// Let's assume user is logged in for the sake of test task
const initialState: UserState = {
  id: 2451,
  login: 'MrSeller',
  positiveReputation: 34,
  negativeReputation: 0,
  tradesCounter: 4,
  avatar: '',
  undreadTradeChats: []
}

export function activeUserReducer(
  state = initialState,
  action: UserActionTypes
): UserState {

  if(state == null) {
    return state
  } else {
    switch (action.type) {

      default:
        return state
    }
  }

}
