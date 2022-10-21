import { useState } from "react";
import { useTheme } from "styled-components";

import { BsPlusCircle, BsFillPencilFill } from "react-icons/bs";

import { Button, Header, Input, HighlightText, Text } from "../../components";

import {
  DataTable,
  HeadTable,
  NavLink,
  Trash,
  WrapperFunctions,
  WrapperHome,
  WrapperTableCustomers,
} from "./styles";

import { convertToLower } from "../../utils/string";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../domain/Customer/models";

interface IHomePresentationProps {
  allCustomers: (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[];
  isLoadingFetchingCustomers: boolean;
  handleDeleteCustomer: (customerId: number) => void;
}

export const HomePresentation = ({
  allCustomers,
  handleDeleteCustomer,
}: IHomePresentationProps) => {
  const { colors } = useTheme();

  const [hasSearchItemsInTable, setHasSearchItemsInTable] =
    useState<string>("");

  return (
    <WrapperHome>
      <Header title="Cadastro / Clientes" />

      <div>
        <WrapperFunctions>
          <NavLink to="/create">
            <Button startIcon={<BsPlusCircle size={16} />}>Cliente</Button>
          </NavLink>

          <div>
            <Input
              id="search-items"
              name="search-items"
              type="text"
              placeholder="Pesquise por items na tabela"
              value={hasSearchItemsInTable}
              onChange={(e) => setHasSearchItemsInTable(e.target.value)}
            />
          </div>
        </WrapperFunctions>

        <WrapperTableCustomers>
          <table>
            <HeadTable>
              <th align="left">ID</th>
              <th align="left">Nome/Razão Social</th>
              <th align="left">CPF/CNPJ</th>
              <th align="left">Email</th>
              <th align="left">Tel</th>
              <th align="left">Cel</th>
              <th align="left">Ações</th>
            </HeadTable>
            {allCustomers
              ?.filter(
                (element) =>
                  convertToLower(element?.razaoSocial ?? "").includes(
                    convertToLower(hasSearchItemsInTable)
                  ) ||
                  convertToLower(element?.nome ?? "").includes(
                    convertToLower(hasSearchItemsInTable)
                  )
              )
              .map(
                ({
                  id,
                  razaoSocial,
                  nome,
                  cpf,
                  cnpj,
                  email,
                  telefone,
                  celular,
                }) => (
                  <DataTable>
                    <td>{id}</td>
                    <td>
                      <Text variant="h7" weight="medium" color={colors.grey1}>
                        <HighlightText
                          text={razaoSocial || nome}
                          toHighlight={hasSearchItemsInTable}
                          variant="h7"
                          weight="semibold"
                          color={colors.black}
                        />
                      </Text>
                    </td>
                    <td>{cnpj || cpf}</td>
                    <td>{email ? email : "-"}</td>
                    <td>{telefone ? telefone : "-"}</td>
                    <td>{celular ? celular : "-"}</td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <NavLink to={`/edit/${id}`}>
                          <BsFillPencilFill size={20} color={colors.black} />
                        </NavLink>
                        <div onClick={() => handleDeleteCustomer(id as number)}>
                          <Trash size={20} color={colors.black} />
                        </div>
                      </div>
                    </td>
                  </DataTable>
                )
              )}
          </table>
        </WrapperTableCustomers>
      </div>
    </WrapperHome>
  );
};
