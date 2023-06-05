/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useCallback } from 'react';
import useInterval from '../../hooks/use-interval';
import { secondsToMinutes } from '../../util/seconds-to-minutes';
import { secondsToTime } from '../../util/seconds-to-time';
const bellStart = require('../../sounds/bell-start.mp3');
const bellFinish = require('../../sounds/bell-finish.mp3');

import { Button } from '../Button';
import { Timer } from '../Timer';

import './styles.css';

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function Pomodoro(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cycles, setCycles] = useState(new Array(props.cycles - 1).fill(true));
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) {
        document.title = `Trabalhando | ${secondsToMinutes(mainTime)}`;
        setFullWorkingTime(fullWorkingTime + 1);
      } else if (resting) {
        document.title = `Descansando | ${secondsToMinutes(mainTime)}`;
      }
    },
    timeCounting ? 1000 : null,
  );

  const configWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTime,
  ]);

  const configRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }

      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
    if (mainTime > 0) return;
    if (working && cycles.length > 0) {
      configRest(false);
      cycles.pop();
    } else if (working && cycles.length <= 0) {
      configRest(true);
      setCycles(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configWork();
  }, [
    working,
    resting,
    mainTime,
    configRest,
    setCycles,
    configWork,
    cycles,
    numberOfPomodoros,
    props.cycles,
    completedCycles,
    fullWorkingTime,
    props.pomodoroTime,
  ]);

  const handleNextCycleInfo = () => {
    if (working) {
      if (numberOfPomodoros > 0 && (numberOfPomodoros + 1) % 4 === 0) {
        return 'Descanso longo';
      }
      return 'Descanso curto';
    }
    return 'Trabalho';
  };
  return (
    <>
      <div className="pomodoro">
        <div className="pomodoroFill"></div>
        <div className="pomodoroTop"></div>
        <h2>Status:</h2>
        <h3>{working ? 'Trabalho' : 'Descanso'}</h3>
        <Timer mainTime={mainTime} />
        <div className="controls">
          <Button text="Trabalhar" onClick={() => configWork()} />
          <Button text="Descansar" onClick={() => configRest(false)} />
          <Button
            className={!working && !resting ? 'hidden' : ''}
            text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => setTimeCounting(!timeCounting)}
          />
        </div>
      </div>
      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p id="numberOfPomodoros">Pomodoros concluídos: {numberOfPomodoros}</p>
        <p>Próximo ciclo: {handleNextCycleInfo()}</p>
      </div>
    </>
  );
}
