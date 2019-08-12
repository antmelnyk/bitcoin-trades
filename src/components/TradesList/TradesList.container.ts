import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '../../store/configureStore';
import { IDispatchProps, IStateProps } from './types';
import { FetchTradesAction } from '../../store/trades/types';
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

const mapDispatch = (dispatch: ThunkDispatch<ApplicationState, null, FetchTradesAction>): IDispatchProps => {
  return {
    fetchTrades: () => dispatch(fetchTrades())
  }
}

export default connect<
  IStateProps,
  IDispatchProps,
  null
>(mapState, mapDispatch)(CSSModules(TradesList, styles))
