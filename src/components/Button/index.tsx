import React, { Suspense } from "react";
import {
  ButtonComponent,
  SvgStart,
  SvgEnd,
} from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained";
  color?: "primary" | "success" | "error";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "large" | "medium" | "small";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  startIcon,
  endIcon,
  color,
  children,
  size,
  ...props
}) => {
  return (
    <ButtonComponent variant={variant} color={color} size={size} {...props}>
      {startIcon && <SvgStart data-testid="svg-start">{startIcon}</SvgStart>}
      {children}
      {endIcon && <SvgEnd data-testid="svg-end">{endIcon}</SvgEnd>}
    </ButtonComponent>
  );
};
