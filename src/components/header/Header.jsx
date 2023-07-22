import React, { useContext } from 'react';
import style from './Header.module.scss';
import { Context } from '../app/App';
import ProgressBar from './progressBar/ProgressBar';

const Header = () => {
  const { index, finish, stagesToShow, stagesLength } = useContext(Context);

  const stageCount = stagesToShow.length;

  return (
    <div className={style.header}>
      <span className={style.text}>Let’s set up your site
        <samp className={style.innerText}>{`${finish ? stagesLength : index || 0} of ${finish ? stagesLength : stageCount || 0} complete`}</samp>
      </span>
      <ProgressBar progressWidth={`${finish ? 100 : index / stageCount * 100}%` || 0} />
    </div>
  );
};

export default Header;
