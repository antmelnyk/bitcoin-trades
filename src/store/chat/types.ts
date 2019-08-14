import { User } from '../users/types';

// Actions types
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

interface ConnectWebSocketAction {
  type: typeof CONNECT_WEBSOCKET
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE
}

interface ReceiveMessageAction {
  type: typeof RECEIVE_MESSAGE
}

export type ChatActionTypes = 
  ConnectWebSocketAction |
  SendMessageAction |
  ReceiveMessageAction;

// State types
export interface ChatState {
  isFetching: boolean;
  isSending: boolean;
  messages: Message[];
  input: string;
}

export interface Message {
  id: number;
  text: string;
  author: User;
}
