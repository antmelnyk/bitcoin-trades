import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  FETCH_CHAT,
  UPDATE_CHAT
} from './types';

const initialState: ChatState = {
  isFetching: false,
  isSending: false,
  messages: [],
  input: ''
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {

    case FETCH_CHAT: {
      return state;
    }

    case UPDATE_CHAT: {
      return {
        ...state,
        messages: action.messages
      }
    }

    case SEND_MESSAGE: {
      return {
        ...state
      }
    }

    case RECEIVE_MESSAGE: {
      return {
        ...state
      }
    }

    default:
      return state
  }
}
