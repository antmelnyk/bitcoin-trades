import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  FETCH_CHAT,
  UPDATE_CHAT,
  CLEAR_CHAT,
  READ_CHAT
} from './types';

const initialState: ChatState = {
  isFetching: false,
  isSending: false,
  messages: [],
  activeUser: {
    id: null,
    avatar: null
  },
  tradingWith: {
    id: null,
    avatar: null
  },
  input: ''
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {

    case FETCH_CHAT: {
      return {
        ...state,
        isFetching: true
      };
    }

    case UPDATE_CHAT: {
      return {
        ...state,
        messages: action.messages,
        activeUser: action.activeUser,
        tradingWith: action.tradingWith,
        isFetching: false
      }
    }

    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages.length,
          text: action.message,
          date: new Date(),
          authorId: action.authorId
        }]
      }
    }
    
    case CLEAR_CHAT: {
      return initialState;
    }


    default:
      return state
  }
}
