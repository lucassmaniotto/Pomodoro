import React from 'react';

import './styles.css';

interface ConfigurationFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function ConfigurationField({
  label,
  value,
  onChange,
}: ConfigurationFieldProps) {
  return (
    <label>
      {label}:
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </label>
  );
}

export default ConfigurationField;
