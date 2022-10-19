import React from 'react';

import { Input, Label, Indicator, IndicatorRadio } from './styles';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: false | boolean;
  disabled?: false | boolean;
  type?: 'checkbox' | 'radio';
  id?: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  type,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Input
        id={id}
        name={name}
        type={type}
        role={type}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {type === 'radio' ? (
        <IndicatorRadio checked={checked} id={id} disabled={disabled} />
      ) : (
        <Indicator checked={checked} id={id} disabled={disabled} />
      )}
    </Label>
  );
};
