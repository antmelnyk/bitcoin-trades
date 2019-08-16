import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TradeChat from './TradeChat';

import { ApplicationState } from '../../../store/configureStore';
import { IDispatchProps, IStateProps, IOwnProps } from './types';
import { deleteTrade } from '../../../store/trades/actions';
import { fetchChat } from '../../../store/chat/actions';

import CSSModules from 'react-css-modules';
import styles from './TradeChat.scss';

export const mapState = (state: ApplicationState): IStateProps => {
  return {
    messages: state.chat.messages,
    isFetching: state.chat.isFetching
  }
}

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  actions: bindActionCreators({ deleteTrade, fetchChat }, dispatch)
});

const ConnectedComponent: React.ComponentType<IOwnProps> = connect<
  IStateProps,
  IDispatchProps,
  IOwnProps,
  ApplicationState
>(mapState, mapDispatch)(CSSModules(TradeChat, styles))

export default ConnectedComponent
