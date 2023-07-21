import React, { createContext, useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import axios from 'axios';

const API_URL = "https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5";
const STAGES = 11;
export const Context = createContext();

const App = () => {
  const [stages, setStages] = useState([]);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);

  const stagesToShow = stages.slice(step, step + STAGES);
  const finish = step && step === stages.length;

  useEffect(() => {
    axios.get(API_URL).then((res) => setStages(res.data));
  }, []);

  return (
    <Context.Provider value={{ index, finish, stagesToShow, stagesLength: stages.length }}>
      <div className={style.app}>
        <Header />
        <Body />
        <Footer setIndex={setIndex} step={step} setStep={setStep} />
      </div>
    </Context.Provider>
  );
};

export default App;
