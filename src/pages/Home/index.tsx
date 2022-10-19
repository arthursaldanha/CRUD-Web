import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { BsPlusCircle } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { WrapperFunctions, WrapperHome, WrapperTableCustomers } from "./styles";
import { CustomerServiceSkeleton } from "../../services/Customer/services/implementations/CustomerServiceSkeleton";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../services/Customer/models";

interface IHomePageProps {
  customerService: CustomerServiceSkeleton;
}

export const Home = ({ customerService: services }: IHomePageProps) => {
  const [customerService] = useState<CustomerServiceSkeleton>(services);

  const [hasSearchItemsInTable, setHasSearchItemsInTable] = useState("");

  const { isFetching, isLoading, data, remove } = useQuery<
    (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[]
  >(
    ["customers"],
    async () => {
      const response = await customerService.readAllCustomers();
      return response;
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    }
  );

  if (isLoading) {
    return <div />
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
            <tr>
              <th align="left">ID</th>
              <th align="left">Nome/Razão Social</th>
              <th align="left">CPF/CNPJ</th>
              <th align="left">Email</th>
              <th align="left">Tel</th>
              <th align="left">Cel</th>
              <th align="left"></th>
            </tr>
            {data?.map(
              ({ id, razaoSocial, nome, cpf, cnpj, email, telefone, celular }) => (
                <tr>
                  <td>{id}</td>
                  <td>{razaoSocial || nome}</td>
                  <td>{cnpj || cpf}</td>
                  <td>{email}</td>
                  <td>{telefone}</td>
                  <td>{celular}</td>
                  <td></td>
                </tr>
              )
            )}
          </table>
        </WrapperTableCustomers>
      </div>
    </WrapperHome>
  );
};
