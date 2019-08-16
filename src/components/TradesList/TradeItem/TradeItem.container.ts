import { connect } from 'react-redux';
import { ApplicationState } from '../../../store/configureStore';
import { IStateProps, IOwnProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './TradeItem.scss';

import TradeItem from './TradeItem';

export const mapState = (state: ApplicationState): IStateProps => {

  const activeUser = state.activeUser;
  if (activeUser) {
    return {
      unreadTradeChats: activeUser.undreadTradeChats
    }
  }

  return {
    unreadTradeChats: []
  }
}

export default connect<
  IStateProps,
  null,
  IOwnProps,
  ApplicationState
>(mapState, null)(CSSModules(TradeItem, styles))
