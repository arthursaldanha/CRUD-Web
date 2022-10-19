import styled, { css } from "styled-components";

import { TextProps } from ".";

export const TextComponent = styled.span<TextProps>`
  ${({ theme: { colors, typography }, variant, weight, color }) => css`
    font-size: ${variant
      ? typography.heading[variant]
      : typography.heading.h5};
    font-weight: ${weight
      ? typography.weight[weight]
      : typography.weight.regular};
    font-family: ${typography.fontFamily.sansSerif};
    color: ${color ? color : colors.grey1};
  `}
`;
