import React from 'react';
import style from './ProgressBar.module.scss';

const ProgressBar = (props) => {
  return (
    <div className={style.progressBar}>
      <div className={style.progress} style={{ width: props.progressWidth }} />
    </div>
  );
};

export default ProgressBar;
