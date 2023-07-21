import React from 'react';
import style from './Footer.module.scss';
import Button from './button/Button';

const Footer = (props) => {
  const reset = () => {
    props.setIndex(0);

    if (props.finish) {
      props.setStep(0);
    }
  }

  const prev = () => props.setIndex(props.index - 1);

  const next = () => {
    props.setIndex(() => {
      let index = props.index + 1;

      if (index !== 0 && index === props.count) {
        props.setStep(props.step + props.count);
        index = 0;
      }

      return index;
    });
  }

  return (
    <div className={style.footer}>
      <Button text="Reset" onClick={reset} disabled={!props.finish && (props.disabled || !props.index)} />
      <div className={style.actions}>
        <Button text="Previous" onClick={prev} disabled={props.disabled || !props.index} />
        <Button text="Next" onClick={next} disabled={props.disabled || props.finish} />
      </div>
    </div>
  );
};

export default Footer;
