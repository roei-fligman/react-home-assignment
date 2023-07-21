import React, { useContext } from 'react';
import style from './Footer.module.scss';
import Button from './button/Button';
import { Context } from '../app/App';

const Footer = (props) => {
  const { index, finish, stagesToShow, stagesLength } = useContext(Context);

  const stageCount = stagesToShow.length;
  const disabled = !stagesLength;

  const reset = () => {
    props.setIndex(0);
    finish && props.setStep(0);
  }

  const prev = () => props.setIndex(index - 1);

  const next = () => {
    props.setIndex(() => {
      let newIndex = index + 1;

      if (newIndex !== 0 && newIndex === stageCount) {
        props.setStep(props.step + stageCount);
        newIndex = 0;
      }

      return newIndex;
    });
  }

  return (
    <div className={style.footer}>
      <Button text="Reset" onClick={reset} disabled={!finish && (disabled || !index)} />
      <div className={style.actions}>
        <Button text="Previous" onClick={prev} disabled={disabled || !index} />
        <Button text="Next" onClick={next} disabled={disabled || finish} />
      </div>
    </div>
  );
};

export default Footer;
