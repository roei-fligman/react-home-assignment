import React, { useEffect, useRef, useState } from 'react';
import style from './Header.module.scss';

const Header = (props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (props.count !== undefined && props.number !== undefined) {
      setProgressWidth(progressLineRef.current.offsetWidth / props.count * props.number);
    }
  }, [props.number, props.count]);

  return (
    <div>
      <div className={style.header}>
        <span className={style.text}>Let’s set up your site
          <samp className={style.innerText}>{`${props.number || 0} of ${props.count || 0} complete`}</samp>
        </span>
      </div>
      <div ref={progressLineRef} className={style.progressLine}>
        <div className={style.progress} style={{ width: progressWidth }} />
      </div>
    </div>
  );
};

export default Header;
