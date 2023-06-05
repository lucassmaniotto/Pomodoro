import React, { useEffect, useState } from 'react';
import { Pomodoro } from '../../components/Pomodoro';

export default function Home() {
  const [pomodoroTime, setPomodoroTime] = useState(1500);
  const [shortRestTime, setShortRestTime] = useState(300);
  const [longRestTime, setLongRestTime] = useState(900);
  const [cycles, setCycles] = useState(4);

  useEffect(() => {
    const storedPomodoroTime = localStorage.getItem('pomodoroTime');
    const storedShortRestTime = localStorage.getItem('shortRestTime');
    const storedLongRestTime = localStorage.getItem('longRestTime');
    const storedCycles = localStorage.getItem('cycles');

    if (storedPomodoroTime) setPomodoroTime(parseInt(storedPomodoroTime));
    if (storedShortRestTime) setShortRestTime(parseInt(storedShortRestTime));
    if (storedLongRestTime) setLongRestTime(parseInt(storedLongRestTime));
    if (storedCycles) setCycles(parseInt(storedCycles));
  }, []);

  return (
    <div className="container">
      <Pomodoro
        pomodoroTime={pomodoroTime}
        shortRestTime={shortRestTime}
        longRestTime={longRestTime}
        cycles={cycles}
      />
    </div>
  );
}
