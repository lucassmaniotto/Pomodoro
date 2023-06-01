import React from 'react';
import { secondsToTime } from '../../util/seconds-to-time';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
