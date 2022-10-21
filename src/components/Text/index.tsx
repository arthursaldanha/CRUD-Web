import React from "react";
import { TextComponent } from "./styles";

export type VariantsText =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h7"
  | "h8"
  | "h9"
  | "h10";

export type WeightsText =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export interface TextProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: VariantsText;
  weight?: WeightsText;
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
