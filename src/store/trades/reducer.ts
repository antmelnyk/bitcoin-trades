import { 
  TradesState,
  TradesActionTypes,
  FETCH_TRADES
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
        ...state
      }
    }

    default:
      return state
  }
}
