import styled, { css } from "styled-components";
import { TextAreaProps } from ".";

interface LabelProps extends TextAreaProps {
  isFocused: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  ${({
    theme: { colors, typography },
    value,
    isFocused,
    readOnly,
    sucessMessage,
    errorMessage,
    alertMessage,
  }) => css`
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: ${value || (isFocused && !readOnly) ? "-8px" : "12px"};
    font-size: ${value || (isFocused && !readOnly)
      ? typography.heading.h9
      : typography.heading.h7};
    transition: 300ms;
    font-weight: ${typography.weight.medium};

    padding: ${value || (isFocused && !readOnly) ? "0 5px" : "0"};

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

export const TextAreaComponent = styled.textarea<TextAreaProps>`
  ${({
    theme: { colors, typography },
    readOnly,
    sucessMessage,
    errorMessage,
    alertMessage,
  }) => css`
    outline: none;
    padding: 11px 10px;
    width: 100%;
    background: ${readOnly ? colors.grey7 : colors.white};
    font-weight: ${typography.weight.medium};
    font-size: ${typography.heading.h7};
    color: ${colors.grey1};
    border-radius: 8px;
    resize: none;
    border: ${readOnly
      ? `1px solid ${colors.grey5}`
      : sucessMessage
      ? `1px solid ${colors.success}`
      : errorMessage
      ? `1px solid ${colors.error}`
      : alertMessage
      ? `1px solid ${colors.alert}`
      : `1px solid ${colors.grey5}`};

    &:focus {
      border: ${!sucessMessage && !errorMessage && !alertMessage
        ? readOnly
          ? `1px solid ${colors.grey5}`
          : `1px solid ${colors.green2}`
        : null};
    }

    overflow-y: auto;
    cursor: auto;
    ::-webkit-scrollbar {
      width: 14px;
      height: 18px;
    }
    ::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      background-color: ${colors.grey5};
      border-radius: 7px;
      box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
        inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
    ::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
    }
  `}
`;

export const ContainerText = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 16px;
`;
