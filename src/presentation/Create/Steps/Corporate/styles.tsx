import styled, { css } from "styled-components";

export const WrapperFormCoporate = styled.div`
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
      grid-template-columns: 2fr 2fr 1fr;
    }

    .second-case {
      grid-template-columns: 1fr 3fr;
    }

    .third-case {
      grid-template-columns: repeat(3, 1fr);
    }

    .fourth-case {
      grid-template-columns: repeat(2, 1fr);
    }

    .fifth-case {
      grid-template-columns: 3fr 1fr 1fr;
    }

    .sixth-case {
      grid-template-columns: repeat(5, 1fr);
    }

    .seventh-case {
      grid-template-columns: minmax(200px, 500px) 200px;
    }

    .eighth-case {
      grid-template-columns: 300px minmax(200px, 500px);
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
