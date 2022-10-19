import styled, { css } from "styled-components";
import { InputProps } from ".";

interface IconProp extends InputProps {
  isFocused: boolean;
}

interface LabelProps extends InputProps {
  isFocused: boolean;
}

export const SvgStart = styled.div<IconProp>`
  ${({
    theme: { colors },
    readOnly,
    isFocused,
    sucessMessage,
    alertMessage,
    errorMessage,
  }) => css`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    color: ${readOnly
      ? colors.grey3
      : sucessMessage
      ? colors.success
      : errorMessage
      ? colors.error
      : alertMessage
      ? colors.alert
      : isFocused
      ? colors.green2
      : colors.grey3};
  `}
`;

export const SvgEnd = styled.div<IconProp>`
  ${({
    theme: { colors },
    readOnly,
    isFocused,
    sucessMessage,
    alertMessage,
    errorMessage,
  }) => css`
    position: absolute;
    left: calc(100% - 37px);
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    color: ${readOnly
      ? colors.grey3
      : sucessMessage
      ? colors.success
      : errorMessage
      ? colors.error
      : alertMessage
      ? colors.alert
      : isFocused
      ? colors.green2
      : colors.grey3};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const ContainerInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40px;
`;

export const Label = styled.label<LabelProps>`
  ${({
    theme: { colors, typography },
    value,
    startIcon,
    isFocused,
    readOnly,
    sucessMessage,
    errorMessage,
    alertMessage,
  }) => css`
    position: absolute;
    pointer-events: none;
    left: ${value || !startIcon || (isFocused && !readOnly) ? "12px" : "44px"};
    top: ${value || (isFocused && !readOnly) ? "0%" : "50%"};

    padding: ${value || (isFocused && !readOnly) ? "0 5px" : "0"};
    transform: translateY(-50%);

    font-size: ${value || (isFocused && !readOnly)
      ? typography.heading.h9
      : typography.heading.h7};
    transition: 300ms;
    font-weight: ${typography.weight.medium};

    background: ${value || isFocused
      ? `linear-gradient(0deg, ${
          readOnly ? colors.grey7 : colors.white
        } 53%, transparent 47%)`
      : "transparent"};

    color: ${readOnly
      ? colors.grey3
      : sucessMessage
      ? colors.success
      : errorMessage
      ? colors.error
      : alertMessage
      ? colors.alert
      : isFocused
      ? colors.green2
      : colors.grey3};
  `}
`;

export const InputField = styled.input<InputProps>`
  ${({
    theme: { colors, typography },
    startIcon,
    endIcon,
    readOnly,
    sucessMessage,
    alertMessage,
    errorMessage,
  }) => css`
    outline: none;
    padding: 16px 10px;
    height: 40px;
    padding-left: ${startIcon && "44px"};
    padding-right: ${endIcon && "44px"};
    width: 100%;
    background: ${readOnly ? colors.grey7 : colors.white};
    font-weight: ${typography.weight.medium};
    font-size: ${typography.heading.h7};
    color: ${colors.grey1};
    border-radius: 8px;
    border: ${(props) =>
      readOnly
        ? `1px solid ${colors.grey5}`
        : sucessMessage
        ? `1px solid ${colors.success}`
        : errorMessage
        ? `1px solid ${colors.error}`
        : alertMessage
        ? `1px solid ${colors.alert}`
        : `1px solid ${colors.grey5}`};

    &:focus {
      border: ${readOnly
        ? `1px solid ${colors.grey5}`
        : sucessMessage
        ? `1px solid ${colors.success}`
        : errorMessage
        ? `1px solid ${colors.error}`
        : alertMessage
        ? `1px solid ${colors.alert}`
        : `1px solid ${colors.green2}`};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}
`;

export const ContainerText = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 16px;
`;
