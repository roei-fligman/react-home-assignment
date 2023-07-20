import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import axios from 'axios';

const STAGES = 4;

const App = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    axios.get(`https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5`).then((res) => {
      setStages(res.data);
    });
  }, []);

  return (
    <div className={style.appContainer}>
      <div className={style.app}>
        <Header number={2} count={STAGES} />
        <Body stages={stages.slice(0, STAGES)} />
        <Footer disabled={!stages.length} />
      </div>
    </div>
  );
};

export default App;
