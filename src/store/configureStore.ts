import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import { tradesReducer } from './trades/reducer';
import { chatReducer } from './chat/reduser';
import { activeUserReducer } from './users/reducer';

const rootReducer = combineReducers({
  trades: tradesReducer,
  chat: chatReducer,
  activeUser: activeUserReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
