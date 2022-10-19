import { useState } from "react";

import { Header } from "../../components/Header";
import { Checkbox } from "../../components/Checkbox";
import { Text } from "../../components/Text";

import { WrapperTypePerson } from "./styles";

const notificationMethods = [
  { id: "pj", name: "type-person", title: "Pessoa Jurídica" },
  { id: "pf", name: "type-person", title: "Pessoa Física" },
];

export const CreateCustomer = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <Header title="Cadastro / Clientes / Cadastrar Clientes" />

      <h1>Adicionar Novo Cliente</h1>

      <WrapperTypePerson>
        <div>
          {notificationMethods.map(({ id, name, title }) => (
            <div>
              <Checkbox
                id={id}
                name={name}
                checked={!checked}
                onChange={() => setChecked(!checked)}
                type="radio"
              />
              <Text variant="h7" weight="medium">
                {name}
              </Text>
            </div>
          ))}
        </div>
      </WrapperTypePerson>

      <div></div>
    </div>
  );
};
