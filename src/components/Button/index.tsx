import React from 'react';

import './styles.css';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}
