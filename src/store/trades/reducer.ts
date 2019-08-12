import { 
  TradesState,
  TradesActionTypes,
  FETCH_TRADES,
  UPDATE_TRADES
} from './types';

const initialState: TradesState = {
  isFetching: false,
  activeTradeId: null,
  list: [],
  input: ''
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

    case UPDATE_TRADES: {
      return {
        ...state,
        list: action.trades
      }
    }

    default:
      return state
  }
}
