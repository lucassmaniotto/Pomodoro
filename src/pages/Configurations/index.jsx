import React, { useState } from 'react';
import searchLocalStorage from '../../util/search-localStorage';
import { Button } from '../../components/Button';

import './styles.css';
import ConfigurationField from '../../components/ConfigurationField';

export default function Configurations() {
  const [pomodoroTime, setPomodoroTime] = useState(
    searchLocalStorage('pomodoroTime', 1500),
  );
  const [shortRestTime, setShortRestTime] = useState(
    searchLocalStorage('shortRestTime', 300),
  );
  const [longRestTime, setLongRestTime] = useState(
    searchLocalStorage('longRestTime', 900),
  );

  const handleSaveConfigurations = () => {
    localStorage.setItem('pomodoroTime', pomodoroTime);
    localStorage.setItem('shortRestTime', shortRestTime);
    localStorage.setItem('longRestTime', longRestTime);
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
