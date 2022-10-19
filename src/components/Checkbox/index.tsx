import React from "react";
import { Text } from "../Text";

import { Input, Label, Indicator, IndicatorRadio, WrapperLabel } from "./styles";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  id?: any;
  name?: string;
  type?: "checkbox" | "radio";
  label?: string;
  checked?: false | boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: false | boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  type,
  label,
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
      {type === "radio" ? (
        <IndicatorRadio checked={checked} id={id} disabled={disabled} />
      ) : (
        <Indicator checked={checked} id={id} disabled={disabled} />
      )}
      <WrapperLabel>{label}</WrapperLabel>
    </Label>
  );
};
