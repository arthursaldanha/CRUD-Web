import styled from "styled-components";

export const WrapperFormCoporate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .grid {
    display: grid;
  }

  .grid-common {
    gap: 18px 12px
  }

  .first-case {
    grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) 1fr;
  }

  .second-case {
    grid-template-columns: repeat(2, 1fr);
  }

  .radio-options {
    display: flex;
  }
`