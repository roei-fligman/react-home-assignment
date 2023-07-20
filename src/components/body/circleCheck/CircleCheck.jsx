import React from 'react';
import style from './CircleCheck.module.scss';
import classNames from 'classnames';

const CircleCheck = (props) => {
  return (
    <div className={classNames(style.circleCheck, { [style.choose]: props.choose })} onClick={props.onClick}>
      {props.choose && <img src={require("../../../assets/Check.svg").default} alt="V" />}
    </div>
  );
};

export default CircleCheck;
