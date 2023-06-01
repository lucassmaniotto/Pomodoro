import React from 'react';
import useInterval from '../../hooks/use-interval';
import { Button } from '../Button';
import { Timer } from '../Timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function Pomodoro(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <div className="pomodoro">
        <h2>Status:</h2>
        <h3>Atividade</h3>
        <Timer mainTime={mainTime} />
        <div className="controls">
          <Button text="Iniciar" onClick={() => console.log('Iniciou!')} />
          <Button text="Iniciar" onClick={() => console.log('Iniciou!')} />
          <Button text="Iniciar" onClick={() => console.log('Iniciou!')} />
        </div>
      </div>
      <div className="details">
        <p>Ciclos concluídos: 0</p>
        <p>Horas trabalhadas: 00:00:00</p>
        <p>Horas descansadas: 00:00:00</p>
        <p>Próximo ciclo: Trabalho</p>
      </div>
    </>
  );
}
