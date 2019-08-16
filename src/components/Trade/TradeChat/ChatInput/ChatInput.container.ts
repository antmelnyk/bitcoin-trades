import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ChatInput from './ChatInput';

import { ApplicationState } from '../../../../store/configureStore';
import { IStateProps, IDispatchProps } from './types';
import { sendMessage } from '../../../../store/chat/actions';

import CSSModules from 'react-css-modules';
import styles from './ChatInput.scss';

export const mapState = (state: ApplicationState): IStateProps => {

  const sender = state.chat.activeUser.id;
  const receiver = state.chat.tradingWith.id;
      
  if (sender && receiver) {
    return {
      activeUserId: sender,
      tradingWithId: receiver
    }
  }

  return {
    activeUserId: null,
    tradingWithId: null
  }
}

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  actions: bindActionCreators({ sendMessage }, dispatch)
});

const ConnectedComponent: React.ComponentType<{}> = connect<
  IStateProps,
  IDispatchProps,
  {},
  ApplicationState
  >(mapState, mapDispatch)(CSSModules(ChatInput, styles))

export default ConnectedComponent
