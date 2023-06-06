import React, { useState } from 'react';
import searchLocalStorage from '../../util/search-localStorage';

import { Button } from '../../components/Button';
import ConfigurationField from '../../components/ConfigurationField';

import './styles.css';

export default function Configurations(): JSX.Element {
  const [pomodoroTime, setPomodoroTime] = useState<number>(
    searchLocalStorage('pomodoroTime', 1500),
  );
  const [shortRestTime, setShortRestTime] = useState<number>(
    searchLocalStorage('shortRestTime', 300),
  );
  const [longRestTime, setLongRestTime] = useState<number>(
    searchLocalStorage('longRestTime', 900),
  );

  const handleSaveConfigurations = (): void => {
    localStorage.setItem('pomodoroTime', String(pomodoroTime));
    localStorage.setItem('shortRestTime', String(shortRestTime));
    localStorage.setItem('longRestTime', String(longRestTime));
  };

  return (
    <div className="container">
      <div className="container__title">
        <h1>🍅</h1>
        <h2>Configure o tempo de cada ciclo do jeito que você preferir.</h2>
        <h3>O tempo é dado em segundos.</h3>
      </div>
      <form className="container__form">
        <ConfigurationField
          label="Tempo do Pomodoro"
          value={pomodoroTime}
          onChange={setPomodoroTime}
        />
        <ConfigurationField
          label="Tempo de Descanso Curto"
          value={shortRestTime}
          onChange={setShortRestTime}
        />
        <ConfigurationField
          label="Tempo de Descanso Longo"
          value={longRestTime}
          onChange={setLongRestTime}
        />
        <Button
          text="Salvar"
          onClick={handleSaveConfigurations}
          className="button__config"
        ></Button>
      </form>
    </div>
  );
}
