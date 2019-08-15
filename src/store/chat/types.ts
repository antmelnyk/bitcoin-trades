import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../configureStore';
import { User } from '../users/types';

// Actions types
export const FETCH_CHAT = 'FETCH_CHAT'
export const UPDATE_CHAT = 'UPDATE_CHAT'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

export interface FetchChatAction {
  type: typeof FETCH_CHAT;
  chatId: number;
}

export interface UpdateChatAction {
  type: typeof UPDATE_CHAT;
  messages: Message[];
}

export interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  message: string;
  authorId: number;
}

export interface ReceiveMessageAction {
  type: typeof RECEIVE_MESSAGE;
}

export type ChatActionTypes = 
  FetchChatAction |
  UpdateChatAction |
  SendMessageAction |
  ReceiveMessageAction;

export type FetchChatActionCreator = ThunkAction<Promise<UpdateChatAction>, ApplicationState, null, UpdateChatAction>
export type SendMessageActionCreator = ThunkAction<Promise<SendMessageAction>, ApplicationState, null, SendMessageAction>

// State types
export interface ChatState {
  isFetching: boolean;
  isSending: boolean;
  messages: Message[];
  input: string;
}

export interface Message {
  id: number;
  date: Date;
  text: string;
  authorId: number;
}
