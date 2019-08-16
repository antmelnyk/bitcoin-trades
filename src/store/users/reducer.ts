import {
  UserState,
  UserActionTypes,
  READ_CHAT
} from './types';

// Let's assume user is logged in for the sake of test task
const initialState: UserState = {
  id: 2451,
  login: 'MrSeller',
  positiveReputation: 34,
  negativeReputation: 0,
  tradesCounter: 4,
  avatar: '',
  undreadTradeChats: [0]
}

export function activeUserReducer(
  state = initialState,
  action: UserActionTypes
): UserState {

  if(state == null) {
    return state
  } else {
    switch (action.type) {

      case READ_CHAT: {
        return {
          ...state,
          undreadTradeChats: state.undreadTradeChats.filter(chatId => chatId !== action.chatId)
        }
      }

      default:
        return state
    }
  }

}
