import React from 'react';
import { secondsToMinutes } from '../../util/seconds-to-minutes';
import { secondsToTime } from '../../util/seconds-to-time';
import { returnFromLocalStorage } from '../../util/search-localStorage';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  const updateTimer = (): string => {
    const localStorage = returnFromLocalStorage('pomodoroTime');
    if (localStorage) {
      if (localStorage >= 3600) {
        return secondsToTime(props.mainTime);
      }
      return secondsToMinutes(props.mainTime);
    }
    return secondsToMinutes(props.mainTime);
  };
  return <div className="timer">{updateTimer()}</div>;
}
