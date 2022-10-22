import styled, { css } from "styled-components";

interface LabelProps {
  isFocused: boolean;
  value?: boolean;
  startIcon?: boolean;
}

export const WrapperGeneral = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  ${({ theme: { colors, typography }, value, isFocused, startIcon }) => css`
    position: absolute;
    pointer-events: none;
    left: ${value || !startIcon || isFocused ? "12px" : "44px"};
    font-weight: 500;
    top: ${value || isFocused ? "-8px" : "12px"};
    padding: ${value || isFocused ? "0 5px" : "0"};
    font-size: ${value || isFocused
      ? typography.heading.h9
      : typography.heading.h7};
    transition: 300ms;
    font-weight: ${typography.weight.medium};
    background: ${value || isFocused
      ? `linear-gradient(0deg, ${colors.white} 53%, transparent 47%)`
      : "transparent"};
    color: ${isFocused ? colors.green2 : colors.grey3};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 40px;
`;

export const SvgStart = styled.div<LabelProps>`
  ${({ theme: { colors }, isFocused }) => css`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${isFocused ? colors.green2 : colors.grey3};
  `}
`;
