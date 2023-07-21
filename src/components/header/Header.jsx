import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import { Context } from '../app/App';

const Header = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const progressLineRef = useRef(null);
  const { index, finish, stagesToShow, stagesLength } = useContext(Context);

  const stageCount = stagesToShow.length;

  useEffect(() => {
    if (stageCount !== undefined && index !== undefined) {
      setProgressWidth(progressLineRef.current.offsetWidth / stageCount * index || 0);
    }
  }, [index, stageCount]);

  return (
    <div>
      <div className={style.header}>
        <span className={style.text}>Let’s set up your site
          <samp className={style.innerText}>{`${finish ? stagesLength : index || 0} of ${finish ? stagesLength : stageCount || 0} complete`}</samp>
        </span>
      </div>
      <div ref={progressLineRef} className={style.progressLine}>
        <div className={classNames(style.progress, { [style.finish]: finish })} style={{ width: progressWidth }} />
      </div>
    </div>
  );
};

export default Header;
