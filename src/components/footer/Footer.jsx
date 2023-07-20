import React from 'react';
import style from './Footer.module.scss';
import Button from './button/Button';

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <Button text="Reset" onClick={() => { }} disabled={props.disabled} />
      <div className={style.actions}>
        <Button text="Previous" onClick={() => { }} disabled={props.disabled} />
        <Button text="Next" onClick={() => { }} disabled={props.disabled} />
      </div>
    </div>
  );
};

export default Footer;
