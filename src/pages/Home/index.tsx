import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsPlusCircle } from "react-icons/bs";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { WrapperFunctions, WrapperHome, WrapperTableCustomers } from "./styles";

export const Home = () => {
  const [hasSearchItemsInTable, setHasSearchItemsInTable] = useState("");

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
            {[1, 2, 3, 4].map((element) => (
              <tr>
                <td>14</td>
                <td>Cerri & Santos Equipamentos Ind...</td>
                <td>23.123.456/0001-01</td>
                <td>assistech19@gmail.com</td>
                <td>19 3456-7890</td>
                <td>19 98765-4321</td>
                <td></td>
              </tr>
            ))}
          </table>
        </WrapperTableCustomers>
      </div>
    </WrapperHome>
  );
};
