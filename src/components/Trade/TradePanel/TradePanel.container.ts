import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TradePanel from './TradePanel';

import { ApplicationState } from '../../../store/configureStore';
import { releaseBitcoin } from '../../../store/trades/actions';
import { IDispatchProps, IOwnProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './TradePanel.scss';

const mapDispatch = (dispatch: Dispatch): IDispatchProps => ({
  actions: bindActionCreators({ releaseBitcoin }, dispatch)
});

export default connect<
  null,
  IDispatchProps,
  IOwnProps,
  ApplicationState
>(null, mapDispatch)(CSSModules(TradePanel, styles))
