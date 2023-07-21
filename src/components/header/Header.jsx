import React, { useEffect, useRef, useState } from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';

const Header = (props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (props.count !== undefined && props.number !== undefined) {
      setProgressWidth(progressLineRef.current.offsetWidth / props.count * props.number || 0);
    }
  }, [props.number, props.count]);

  return (
    <div>
      <div className={style.header}>
        <span className={style.text}>Let’s set up your site
          <samp className={style.innerText}>{`${props.finish ? props.stagesLength : props.number || 0} of ${props.finish ? props.stagesLength : props.count || 0} complete`}</samp>
        </span>
      </div>
      <div ref={progressLineRef} className={style.progressLine}>
        <div className={classNames(style.progress, { [style.finish]: props.finish })} style={{ width: progressWidth }} />
      </div>
    </div>
  );
};

export default Header;
