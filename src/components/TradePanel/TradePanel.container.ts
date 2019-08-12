import { connect } from 'react-redux';
import { ApplicationState } from '../../store/configureStore';

import TradePanel from './TradePanel';

import { IDispatchProps, IStateProps } from './types';
import { selectTradeById } from '../../store/trades/selectors';
import { releaseBitcoin } from '../../store/trades/actions';

import CSSModules from 'react-css-modules';
import styles from './TradePanel.scss';

export const mapState = (state: ApplicationState): IStateProps => {

  if (state.trades.activeTradeId) {
    const trade = selectTradeById(state, state.trades.activeTradeId);
    if (trade) return { trade };
  }

  return {
    trade: null
  }

}

const mapDispatch = (): IDispatchProps => {
  return {
    releaseBitcoin: () => releaseBitcoin()
  }
}

export default connect<
  IStateProps,
  IDispatchProps,
  null
  >(mapState, mapDispatch)(CSSModules(TradePanel, styles))
