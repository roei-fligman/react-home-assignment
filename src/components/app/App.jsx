import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import axios from 'axios';

const STAGES = 5;

const App = () => {
  const [stages, setStages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(`https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5`).then((res) => {
      setStages(res.data);
    });
  }, []);

  return (
    <div className={style.appContainer}>
      <div className={style.app}>
        <Header number={index} count={STAGES} />
        <Body stages={stages.slice(0, STAGES)} index={index} />
        <Footer disabled={!stages.length} index={index} setIndex={(index) => setIndex(index)} count={STAGES} />
      </div>
    </div>
  );
};

export default App;
