import { ApplicationState } from '../configureStore';
import { Trade } from './types';

export function selectTradeById(state: ApplicationState, id: number): Trade | null {
  const trade = state.trades.list.find(trade => trade.id == id);
  return trade ? trade : null;
}
