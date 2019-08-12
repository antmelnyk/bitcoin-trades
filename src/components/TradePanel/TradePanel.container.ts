import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/configureStore';

import TradePanel from './TradePanel';

import { StateProps } from './types';
import { selectTradeById } from '../../store/trades/selectors';
import { releaseBitcoin } from '../../store/trades/actions';

export const mapState = (state: ApplicationState): StateProps => {

  if (state.trades.activeTradeId) {
    const trade = selectTradeById(state, state.trades.activeTradeId);
    if (trade) return { trade };
  }

  return {
    trade: null
  }

}

export const mapDispatch = {
  releaseBitcoin
}

export default connect(
  mapState,
  mapDispatch
)(TradePanel);
