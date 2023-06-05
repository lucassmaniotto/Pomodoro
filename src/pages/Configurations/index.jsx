import React, { useState } from 'react';
import searchLocalStorage from '../../util/search-localStorage';

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
      <h1>Configurations</h1>
      <form>
        <label>
          Pomodoro Time (seconds):
          <input
            type="number"
            value={pomodoroTime}
            onChange={(e) => setPomodoroTime(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Short Rest Time (seconds):
          <input
            type="number"
            value={shortRestTime}
            onChange={(e) => setShortRestTime(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Long Rest Time (seconds):
          <input
            type="number"
            value={longRestTime}
            onChange={(e) => setLongRestTime(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button onClick={handleSaveConfigurations}>Save Configurations</button>
      </form>
    </div>
  );
}
