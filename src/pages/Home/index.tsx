import React, { useEffect, useState } from 'react';
import { Pomodoro } from '../../components/Pomodoro';
import { searchLocalStorageOrReturnDefaultValue } from '../../util/search-localStorage';

export default function Home() {
  const [pomodoroTime, setPomodoroTime] = useState<number>(
    searchLocalStorageOrReturnDefaultValue('pomodoroTime', 1500),
  );
  const [shortRestTime, setShortRestTime] = useState<number>(
    searchLocalStorageOrReturnDefaultValue('shortRestTime', 300),
  );
  const [longRestTime, setLongRestTime] = useState<number>(
    searchLocalStorageOrReturnDefaultValue('longRestTime', 900),
  );

  useEffect(() => {
    const storedPomodoroTime = localStorage.getItem('pomodoroTime');
    const storedShortRestTime = localStorage.getItem('shortRestTime');
    const storedLongRestTime = localStorage.getItem('longRestTime');

    if (storedPomodoroTime) setPomodoroTime(parseInt(storedPomodoroTime));
    if (storedShortRestTime) setShortRestTime(parseInt(storedShortRestTime));
    if (storedLongRestTime) setLongRestTime(parseInt(storedLongRestTime));
  }, []);

  return (
    <div className="container">
      <Pomodoro
        pomodoroTime={pomodoroTime}
        shortRestTime={shortRestTime}
        longRestTime={longRestTime}
        cycles={4}
      />
    </div>
  );
}
