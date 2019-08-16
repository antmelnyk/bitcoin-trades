import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '../configureStore';

// Actions types
export const READ_CHAT = 'READ_CHAT'
export const UPDATE_UNREAD_CHATS = 'UPDATE_UNREAD_CHATS'

export interface ReadChatAction {
  type: typeof READ_CHAT;
  chatId: number;
}

export interface UpdateUnreadChatsAction {
  type: typeof UPDATE_UNREAD_CHATS;
  chatId: number;
}

export type UserActionTypes = ReadChatAction | UpdateUnreadChatsAction;

export type ReadChatActionCreator = ThunkAction<Promise<ReadChatAction>, ApplicationState, null, ReadChatAction>
export type UpdateUnreadChatsActionCreator = ThunkAction<Promise<UpdateUnreadChatsAction>, ApplicationState, null, UpdateUnreadChatsAction>

// State types
export type UserState = User & ActiveUser | null;

export interface User {
  id: number;
  login: string;
  positiveReputation: number;
  negativeReputation: number;
  tradesCounter: number;
  avatar: string;
}

export interface ActiveUser {
  undreadTradeChats: number[]; // Trade chats ids where chatNotification is true
}
