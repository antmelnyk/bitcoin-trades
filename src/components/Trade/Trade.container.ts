import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Trade from './Trade';

import { ApplicationState } from '../../store/configureStore';
import { IDispatchProps, IStateProps, IRouterProps } from './types';
import { fetchTrade } from '../../store/trades/actions';

import CSSModules from 'react-css-modules';
import styles from './Trade.scss';

export const mapState = (state: ApplicationState): IStateProps => {
  return {
    trade: state.trades.activeTrade
  }
}

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  actions: bindActionCreators({ fetchTrade }, dispatch)
});

const ConnectedComponent: React.ComponentType<IRouterProps> = connect<
  IStateProps,
  IDispatchProps,
  IRouterProps,
  ApplicationState
>(mapState, mapDispatch)(CSSModules(Trade, styles))

export default ConnectedComponent
