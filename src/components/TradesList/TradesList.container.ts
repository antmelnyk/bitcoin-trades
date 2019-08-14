import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/configureStore';
import { IDispatchProps, IStateProps } from './types';
import { fetchTrades } from '../../store/trades/actions';

import CSSModules from 'react-css-modules';
import styles from './TradesList.scss';

import TradesList from './TradesList';

export const mapState = (state: ApplicationState): IStateProps => {
  return {
    list: state.trades.list,
    isFetching: state.trades.isFetching
  }
}

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  actions: bindActionCreators({ fetchTrades }, dispatch)
});

export default connect<
  IStateProps,
  IDispatchProps,
  null,
  ApplicationState
>(mapState, mapDispatch)(CSSModules(TradesList, styles))
