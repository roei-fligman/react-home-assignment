import React, { createContext, useEffect, useMemo, useState } from 'react';
import style from './App.module.scss';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "https://run.mocky.io/v3/59fe4372-8bb0-4de5-97d4-2fae5dd6c9e5";
const STAGES = 5;
export const Context = createContext();

const App = () => {
  const [stages, setStages] = useState([]);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);

  const stagesToShow = useMemo(() => stages.slice(step, step + STAGES), [stages, step]);
  const finish = useMemo(() => step && step === stages.length, [stages, step]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setStages(res.data);
    }).catch((err) => {
      toast.error(err.message, { theme: "colored" });
    });
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
