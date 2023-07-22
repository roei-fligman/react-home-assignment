import React, { createContext, useEffect, useMemo, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import { getData } from '../../utils/apiFetcher';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const STAGES = 5;
export const Context = createContext();

const App = () => {
  const [stages, setStages] = useState([]);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);

  const stagesToShow = useMemo(() => stages.slice(step, step + STAGES), [stages, step]);
  const finish = useMemo(() => step && step === stages.length, [stages, step]);

  useEffect(() => {
    getData(setStages);
  }, []);

  return (
    <Context.Provider value={{ index, finish, stagesToShow, stagesLength: stages.length }}>
      <div className={style.app}>
        <Header />
        <Body />
        <Footer setIndex={setIndex} step={step} setStep={setStep} />
      </div>
      <ToastContainer />
    </Context.Provider>
  );
};

export default App;
