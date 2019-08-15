// Actions types
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER'

interface SetActiveUserAction {
  type: typeof SET_ACTIVE_USER,
  activeUser: User
}

export type UserActionTypes = SetActiveUserAction;

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
  undreadTradeChats: number[];
}