import React from 'react';
import useInterval from '../../hooks/use-interval';
import { Button } from '../Button';
import { Timer } from '../Timer';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Status: Trabalhando</h2>
      <Timer mainTime={mainTime} />
      <Button text="Iniciar" onClick={() => console.log('Iniciou!')} />
    </div>
  );
}
