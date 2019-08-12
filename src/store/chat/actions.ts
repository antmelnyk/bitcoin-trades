import {
  ChatActionTypes,
  CONNECT_WEBSOCKET,
  SEND_MESSAGE,
  RECEIVE_MESSAGE
} from './types';

export function connectWebSocket(): ChatActionTypes {
  return {
    type: CONNECT_WEBSOCKET
  }
}

export function sendMessage(): ChatActionTypes {
  return {
    type: SEND_MESSAGE
  }
}

export function receiveMessage(): ChatActionTypes {
  return {
    type: RECEIVE_MESSAGE
  }
}
