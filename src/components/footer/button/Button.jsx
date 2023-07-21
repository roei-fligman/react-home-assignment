import React from 'react';
import style from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <div className={classNames(style.button, { [style.disabled]: props.disabled })} onClick={() => !props.disabled && props.onClick()}>
      <span className={style.text}>{props.text}</span>
    </div>
  );
};

export default Button;
