import styled from "styled-components";

export const WrapperHeader = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({theme: {colors}}) => colors.grey8};
`