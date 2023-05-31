import React from 'react';
import useInterval from '../../hooks/use-interval';
import { secondsToTime } from '../../util/seconds-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{secondsToTime(mainTime)}</h2>
    </div>
  );
}
