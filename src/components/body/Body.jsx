import React from 'react';
import style from './Body.module.scss';
import Loader from '../loader/Loader';
import classNames from 'classnames';
import CircleCheck from './circleCheck/CircleCheck';

const Body = (props) => {
  const loader = !props.stages.length;

  return (
    <div className={classNames(style.body, { [style.loader]: loader })}>
      {props.finish ? <span className={style.finish}>finished!!!</span> : loader ? <Loader /> :
        props.stages.map((stage, index) =>
          <div className={style.row} key={index}>
            <div className={style.label}>
              <CircleCheck choose={index < props.index} />
              {stage.label}
            </div>
            <div className={style.link} onClick={() => stage.link?.url && window.open(stage.link?.url)}>
              {stage.link?.text}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Body;
