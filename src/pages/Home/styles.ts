import styled from "styled-components";

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 100%;
    padding: 20px;
  }
`

export const WrapperFunctions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > a {
    text-decoration: none;
  }

  > div {
    width: 320px;
    margin-left: auto;
  }
`

export const WrapperTableCustomers = styled.div`
  margin-top: 28px;

  > table {
    width: 100%;
  }
`