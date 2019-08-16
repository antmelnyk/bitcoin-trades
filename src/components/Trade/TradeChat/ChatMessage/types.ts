import { Message } from '../../../../store/chat/types';

export interface IOwnProps {
  messageId: number;
}

export interface IStateProps {
  message: Message | null;
  position: string | null;
  avatar: string | null;
}

export type IProps = IStateProps & IOwnProps
