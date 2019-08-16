import React from 'react';
import moment from 'moment';
import { IProps } from './types';
import UserAvatar from '../../../UserAvatar';

const ChatMessage: React.FC<IProps> = (props: IProps) => {
  
  if(props.message && props.avatar) {
    return (
      <div styleName='chat-message'>
        <div styleName={`message-body-${props.position}`}>
          <div styleName={`message-text-${props.position}`}>
            {props.message.text}
          </div>
          <div styleName='message-avatar'>
            <UserAvatar avatar={props.avatar} />
          </div>
        </div>
        <div styleName={`message-date-${props.position}`}>
          {moment(props.message.date, 'MMMM Do, h:mm a').fromNow()}
        </div>
      </div>
    )
  }

  return (
    <div>
    </div>
  )

}

export default ChatMessage
