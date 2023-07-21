import React from 'react';
import style from './Footer.module.scss';
import Button from './button/Button';

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <Button text="Reset" onClick={() => props.setIndex(0)} disabled={props.disabled || !props.index} />
      <div className={style.actions}>
        <Button text="Previous" onClick={() => props.setIndex(props.index - 1)} disabled={props.disabled || !props.index} />
        <Button text="Next" onClick={() => props.setIndex(props.index + 1)} disabled={props.disabled || props.index === props.count} />
      </div>
    </div>
  );
};

export default Footer;
