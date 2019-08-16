import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../configureStore';

// Actions types
export const FETCH_CHAT = 'FETCH_CHAT'
export const UPDATE_CHAT = 'UPDATE_CHAT'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const CLEAR_CHAT = 'CLEAR_CHAT'
export const READ_CHAT = 'READ_CHAT'

export interface FetchChatAction {
  type: typeof FETCH_CHAT;
  chatId: number;
}

export interface UpdateChatAction {
  type: typeof UPDATE_CHAT;
  id: number;
  messages: Message[];
  activeUser: {
    id: number;
    avatar: string;
  }
  tradingWith: {
    id: number;
    avatar: string;
  }
}

export interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  message: string;
  authorId: number;
}

export interface ClearChatAction {
  type: typeof CLEAR_CHAT;
}

export interface ReceiveMessageAction {
  type: typeof RECEIVE_MESSAGE;
}

export type ChatActionTypes = 
  FetchChatAction |
  UpdateChatAction |
  ClearChatAction |
  SendMessageAction |
  ReceiveMessageAction;

export type FetchChatActionCreator = ThunkAction<Promise<UpdateChatAction>, ApplicationState, null, UpdateChatAction>
export type SendMessageActionCreator = ThunkAction<Promise<SendMessageAction>, ApplicationState, null, SendMessageAction>
export type ClearChatActionCreator = ThunkAction<Promise<ClearChatAction>, ApplicationState, null, ClearChatAction>


// State types
export interface ChatState {
  id: number | null
  isFetching: boolean;
  isSending: boolean;
  messages: Message[];
  input: string;
  activeUser: {
    id: number | null;
    avatar: string | null;
  }
  tradingWith: {
    id: number | null;
    avatar: string | null;
  }
}

export interface Message {
  id: number;
  date: Date;
  text: string;
  authorId: number;
}
