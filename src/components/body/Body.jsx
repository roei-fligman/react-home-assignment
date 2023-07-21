import React, { useContext } from 'react';
import style from './Body.module.scss';
import Loader from '../loader/Loader';
import classNames from 'classnames';
import CircleCheck from './circleCheck/CircleCheck';
import { Context } from '../app/App';

const Body = () => {
  const { index, finish, stagesToShow } = useContext(Context);

  const loader = !stagesToShow.length;

  return (
    <div className={classNames(style.body, { [style.loader]: loader })}>
      {finish ? <span className={style.finish}>finished!!!</span> : loader ? <Loader /> :
        stagesToShow.map((stage, mapIndex) =>
          <div className={style.row} key={mapIndex}>
            <div className={style.label}>
              <CircleCheck choose={mapIndex < index} />
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
