import React, { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import axios from 'axios';

const STAGES = 11;

const App = () => {
  const [stages, setStages] = useState([]);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);

  const stagesToShow = stages.slice(step, step + STAGES);
  const finish = step && step === stages.length;

  useEffect(() => {
    axios.get(`https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5`).then((res) => {
      setStages(res.data);
    });
  }, []);

  return (
    <div className={style.appContainer}>
      <div className={style.app}>
        <Header number={index} count={stagesToShow.length} stagesLength={stages.length} finish={finish} />
        <Body stages={stagesToShow} index={index} finish={finish} />
        <Footer disabled={!stages.length} index={index} setIndex={setIndex} step={step} setStep={setStep} finish={finish} count={stagesToShow.length} />
      </div>
    </div>
  );
};

export default App;
