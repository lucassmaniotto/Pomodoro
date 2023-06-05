import React from 'react';
import { Pomodoro } from '../../components/Pomodoro';

export default function Home() {
  return (
    <div className="container">
      <Pomodoro
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
}
