import {
  UserState,
  UserActionTypes,
  SET_ACTIVE_USER
} from './types';

const initialState: UserState = null

export function activeUserReducer(
  state = initialState,
  action: UserActionTypes
): UserState {

  if(state == null) {
    return state
  } else {
    switch (action.type) {

      case SET_ACTIVE_USER: {
        return action.activeUser
      }

      default:
        return state
    }
  }

}
