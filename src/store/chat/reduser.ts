import {
  ChatState,
  ChatActionTypes,
  CONNECT_WEBSOCKET,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from './types';

const initialState: ChatState = {
  tradeId: null,
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

    case CONNECT_WEBSOCKET: {
      return {
        ...state
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
