import React from 'react';
import style from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button className={classNames(style.button, { [style.disabled]: props.disabled })} onClick={() => !props.disabled && props.onClick()}>
      {props.text}
    </button>
  );
};

export default Button;
