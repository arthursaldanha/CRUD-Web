import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "styled-components";

import { BsPlusCircle, BsFillPencilFill } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { HightlightText } from "../../components/HighlightText";

import {
  DataTable,
  HeadTable,
  NavLink,
  Trash,
  WrapperFunctions,
  WrapperHome,
  WrapperTableCustomers,
} from "./styles";

import { CustomerServiceSkeleton } from "../../domain/Customer/services/implementations/CustomerServiceSkeleton";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../domain/Customer/models";

import { convertToLower } from "../../utils/string";

interface IHomePresentationProps {
  customerService: CustomerServiceSkeleton;
}

export const HomePresentation = ({
  customerService: services,
}: IHomePresentationProps) => {
  const { colors } = useTheme();

  const [customerService] = useState<CustomerServiceSkeleton>(services);

  const [hasSearchItemsInTable, setHasSearchItemsInTable] =
    useState<string>("");

  const { isLoading, data, refetch } = useQuery<
    (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[]
  >(
    ["customers"],
    async () => {
      const response = await customerService.readAllCustomers();
      return response;
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      refetchInterval: false,
      refetchOnMount: false,
    }
  );

  async function handleDeleteCustomer(customerId: number) {
    await customerService.deleteCustomer(customerId);
    refetch();
  }

  if (isLoading) {
    return <div />;
  }

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
            {data
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
                        <HightlightText
                          text={razaoSocial || nome}
                          toHighlight={hasSearchItemsInTable}
                          variant="h7"
                          weight="medium"
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
