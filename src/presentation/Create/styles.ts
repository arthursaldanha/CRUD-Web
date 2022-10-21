import styled, { css } from 'styled-components';
 
export const WrapperForm = styled.div`
  padding: 16px;
`

export const WrapperTypePerson = styled.div`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    gap: 8px;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  > a {
    text-decoration: none;
  }
`