import { 
  TradesState,
  TradesActionTypes,
  FETCH_TRADES,
  FETCH_TRADE,
  UPDATE_TRADES,
  UPDATE_ACTIVE_TRADE,
  RELEASE_BITCOIN,
  DELETE_TRADE
} from './types';

const initialState: TradesState = {
  isFetching: false,
  list: [],
  activeTrade: null
} 

export function tradesReducer(
  state = initialState,
  action: TradesActionTypes
): TradesState {
  switch (action.type) {

    case FETCH_TRADES: {
      return {
        ...state,
        isFetching: true
      }
    }

    case FETCH_TRADE: {
      return {
        ...state,
        activeTrade: null
      }
    }

    case UPDATE_ACTIVE_TRADE: {
      return {
        ...state,
        activeTrade: action.activeTrade
      }
    }
    

    case UPDATE_TRADES: {
      return {
        ...state,
        list: action.trades,
        isFetching: false
      }
    }

    case DELETE_TRADE: {
      return {
        ...state,
        list: state.list.filter(trade => trade.hash != action.hash)
      }
    }

    case RELEASE_BITCOIN: {
      // Something happens
      return state
    }

    default:
      return state
  }
}
