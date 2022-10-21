import styled, { css } from "styled-components";

export const WrapperFormIndividual = styled.div`
  ${({ theme: { breakpoints } }) => css`
    width: ${breakpoints.xl};
    max-width: 100%;
    margin: 20px auto 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .grid {
      display: grid;
    }
    .grid-common {
      gap: 18px 12px;
    }

    .first-case {
      grid-template-columns: 2fr 1fr;
    }

    .second-case {
      grid-template-columns: repeat(3, 1fr);
    }

    .third-case {
      grid-template-columns: 2fr 1fr 1fr;
    }

    .fourth-case {
      grid-template-columns: 1fr 2fr 1fr;
    }

    .fifth-case {
      grid-template-columns: repeat(2, 1fr);
    }

    .has-margin-top {
      margin-top: 25px;
    }

    .radio-options {
      display: flex;
    }

    .sm {
      @media (max-width: ${breakpoints.md}) {
        display: flex;
        flex-direction: column;
      }
    }
  `}
`;
