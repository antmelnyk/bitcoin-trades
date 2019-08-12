import { Trade } from '../../store/trades/types';
import { RouteComponentProps } from 'react-router-dom';

export interface IProps extends RouteComponentProps<RouterProps> {
  trade: Trade | null;
  releaseBitcoin: () => void
}

export type RouterProps = {
  tradeId: string
}

export type StateProps = Pick<IProps, 'trade'>;
export type DispatchProps = Pick<IProps, 'releaseBitcoin'>;
