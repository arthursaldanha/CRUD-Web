import styled, { css, keyframes } from "styled-components";
import { CheckboxProps } from ".";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const popIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5) ;
  }
  
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) ;
  }
`;

export const Label = styled.label<CheckboxProps>`
  position: relative;
  display: flex;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.5rem;
  font-size: 16px;
  width: fit-content;
`;

export const Indicator = styled.div<CheckboxProps>`
  ${({ theme: { colors }, checked, disabled }) => css`
    border-width: 2px;
    border-style: solid;
    border-color: ${checked && disabled
      ? colors.grey5
      : colors.green3 && disabled
      ? colors.grey5
      : colors.green3 && checked
      ? colors.green1
      : colors.grey5};
    border-radius: 4px;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: -0.4em;

    :hover {
      border: 2px solid
        ${checked && disabled
          ? colors.grey5
          : colors.green3 && disabled
          ? colors.grey5
          : colors.green3};
    }

    &::after {
      content: "";
      position: absolute;
      display: none;
    }

    ${Input}:checked + &::after {
      border: ${colors.green1};
      display: block;
      border-radius: 2px;
      background-color: ${colors.green1};
      width: 8px;
      height: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-name: ${popIn};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
    }

    ${Input}:disabled + &::after {
      border: ${colors.grey3};
      display: block;
      border-radius: 2px;
      background-color: ${colors.grey3};
      width: ${checked && disabled ? "8px" : ""};
      height: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-name: ${popIn};
      animation-duration: 0.3s;
      animation-fill-mode: forwards;

      pointer-events: none;
    }
  `}
`;

export const IndicatorRadio = styled(Indicator)`
  border-radius: 1em;
  ${Input}:checked + &::after {
    border-radius: 1em;
  }
  ${Input}:disabled + &::after {
    border-radius: 1em;
  }
`;

export const WrapperLabel = styled.div`
  margin-left: 16px;
`
