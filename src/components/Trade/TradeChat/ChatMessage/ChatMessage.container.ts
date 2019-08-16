import { connect } from 'react-redux';

import ChatMessage from './ChatMessage';

import { ApplicationState } from '../../../../store/configureStore';
import { IStateProps, IOwnProps } from './types';
import { Message } from '../../../../store/chat/types';

import CSSModules from 'react-css-modules';
import styles from './ChatMessage.scss';

export const mapState = (state: ApplicationState, ownProps: IOwnProps): IStateProps => {

  const message = state.chat.messages.find((message: Message) => message.id == ownProps.messageId);
      
  if (message && state.activeUser) {
    return {
      message,
      position: message.authorId == state.activeUser.id ? 'left' : 'right',
      avatar: message.authorId == state.activeUser.id ? state.chat.activeUser.avatar : state.chat.tradingWith.avatar
    }
  }

  return {
    message: null,
    position: null,
    avatar: null
  }
}

const ConnectedComponent: React.ComponentType<IOwnProps> = connect<
  IStateProps,
  null,
  IOwnProps,
  ApplicationState
>(mapState, null)(CSSModules(ChatMessage, styles))

export default ConnectedComponent
