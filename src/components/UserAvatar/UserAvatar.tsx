import React from 'react';
import { IProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './UserAvatar.scss';

const UserAvatar: React.FC<IProps> = (props: IProps) => {

  const image = {
    backgroundImage: `url(/images/${props.avatar})`
  }

  return(
    <div styleName='avatar' style={image}>
    </div>
  )

}

export default CSSModules(UserAvatar, styles)
