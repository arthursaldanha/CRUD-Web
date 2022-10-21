import styled from "styled-components";

import { NavLink as Nav } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 100%;
    padding: 20px;
  }
`;

export const WrapperFunctions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > a {
    align-self: flex-start;
    text-decoration: none;
  }

  > div {
    width: 320px;
    margin-left: auto;
  }
`;

export const WrapperTableCustomers = styled.div`
  margin-top: 28px;

  > table {
    width: 100%;
  }
`;

export const HeadTable = styled.tr`
  > th {
    padding: 5px 5px 5px 0px;
  }
`;

export const DataTable = styled.tr`
  > td {
    padding: 5px 5px 5px 0px;
  }
`;

export const NavLink = styled(Nav)`
  margin-right: 15px;
  cursor: pointer;
`

export const Trash = styled(BsFillTrashFill)`
  cursor: pointer;
`
