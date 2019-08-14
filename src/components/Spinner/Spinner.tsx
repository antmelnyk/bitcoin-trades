import React from 'react';
import { IProps } from './types';

import CSSModules from 'react-css-modules';
import styles from './Spinner.scss';

const Spinner: React.FC<IProps> = (props: IProps) => {

  if (props.isSpinning) {
    return (
      <div styleName='spinner'>
      </div>
    )
  }
  
  return null;

}

export default CSSModules(Spinner, styles)
