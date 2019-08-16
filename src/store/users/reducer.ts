import {
  UserState,
  UserActionTypes,
  READ_CHAT,
  UPDATE_UNREAD_CHATS
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

      case UPDATE_UNREAD_CHATS: {
        if(state.undreadTradeChats.includes(action.chatId)) {
          return state
        }
        return {
          ...state,
          undreadTradeChats: [...state.undreadTradeChats, action.chatId]
        }
        
      }

      default:
        return state
    }
  }

}
