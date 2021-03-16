import { useState, useEffect } from 'react';

let interval: any = null;

type UseTimerProps = {
  data: DataTimerProps;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
};

type DataTimerProps = {
  timer: number;
  second: number;
  minute: number;
  hour: number;
  secondText: string | number;
  minuteText: string | number;
  hourText: string | number;
  isRun: boolean;
};

const useTimer = (defaultValue: number): UseTimerProps => {
  const [timer, setTimer] = useState(defaultValue);
  const [isRun, setIsRun] = useState(false);
  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    if (!isRun) {
      setIsRun(true);
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  };
  const handlePause = () => {
    if (isRun) {
      clearInterval(interval);
      setIsRun(false);
    }
  };
  const handleReset = () => {
    clearInterval(interval);
    setIsRun(false);
    setTimer(0);
  };
  const second = timer % 60;
  const minute = Math.floor(timer / 60);
  const hour = Math.floor(timer / 3600);
  const secondText = second < 10 ? `0${second}` : second;
  const minuteText = minute < 10 ? `0${minute}` : minute;
  const hourText = hour < 10 ? `0${hour}` : hour;
  const data = {
    timer,
    second,
    minute,
    hour,
    secondText,
    minuteText,
    hourText,
    isRun,
  };
  return {
    data,
    handleStart,
    handlePause,
    handleReset,
  };
};

export default useTimer;
