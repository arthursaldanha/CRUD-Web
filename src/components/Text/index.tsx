import React from 'react';
import { TextComponent } from './styles';

export interface TextProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'h10';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  children,
  weight,
  variant,
  ...props
}) => {
  return (
    <TextComponent weight={weight} variant={variant} {...props}>
      {children}
    </TextComponent>
  );
};
