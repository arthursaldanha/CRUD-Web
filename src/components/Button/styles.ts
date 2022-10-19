import styled, { css } from "styled-components";
import { ButtonProps } from ".";

interface svgProps {
  size?: "large" | "medium" | "small";
}

export const ButtonComponent = styled.button<ButtonProps>`
  ${({ theme: { colors, typography }, variant, color, size, fullWidth, disabled }) => css`
    background-color: ${variant === "outlined"
      ? colors.white
      : color === "success"
      ? colors.success
      : color === "error"
      ? colors.error
      : disabled
      ? colors.grey6
      : colors.green2};

    color: ${(props) =>
      disabled
        ? colors.grey3
        : variant === "contained"
        ? colors.white
        : color === "success"
        ? colors.success
        : color === "error"
        ? colors.error
        : colors.green2};
        
    border: ${(props) =>
      variant === "contained"
        ? "none"
        : color === "success"
        ? `1px solid ${colors.success}`
        : color === "error"
        ? `1px solid ${colors.error}`
        : disabled
        ? `1px solid ${colors.grey6}`
        : `1px solid ${colors.green2}`};

    padding: ${
      size === "small"
        ? "6px 12px"
        : size === "medium"
        ? "8px 16px"
        : "12px 24px"};

    font-size: ${
      size === "small"
        ? typography.heading.h10
        : size === "medium"
        ? typography.heading.h9
        : typography.heading.h7};
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;

    height: ${
      size === "small"
        ? "22px"
        : size === "medium"
        ? "31px"
        : "40px"};

    width: ${fullWidth && "100%"};

    border-radius: 8px;

    cursor: ${(disabled ? "not-allowed" : "pointer")};

    &:hover:not(:disabled) {
      background-color: ${
        (color === "primary" || !color) &&
        variant === "contained" &&
        colors.green3};

      color: ${
        (color === "primary" || !color) &&
        variant === "contained"
          ? colors.white
          : (color === "primary" || !color) &&
            variant === "outlined" &&
            colors.green3};

      border: ${
        (color === "primary" || !color) &&
        variant === "outlined" &&
        `1px solid ${colors.green3}`};
    }

    :active:not(:disabled) {
      background-color: ${
        (color === "primary" || !color) &&
        variant === "contained" &&
        colors.green1};

      color: ${
        (color === "primary" || !color) &&
        variant === "contained"
          ? colors.white
          : (color === "primary" || !color) &&
            variant === "outlined" &&
            colors.green1};

      border: ${
        (color === "primary" || !color) &&
        variant === "outlined" &&
        `1px solid ${colors.green1}`};
    }
  `}
`;

export const SvgStart = styled.div<svgProps>`
  ${({theme: {typography}, size}) => css`
    display: flex;
    margin-right: 4px;
    align-content: center;
    font-size: ${
      size === "small"
        ? typography.heading.h10
        : size === "medium"
        ? typography.heading.h9
        : typography.heading.h7};
  `}
`;

export const SvgEnd = styled.div<svgProps>`
  ${({theme: {typography}, size}) => css`
    display: flex;
    align-content: center;
    margin-left: 4px;
    font-size: ${(props) =>
      size === "small"
        ? typography.heading.h10
        : size === "medium"
        ? typography.heading.h9
        : typography.heading.h7};
  `}
`;
