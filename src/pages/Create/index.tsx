import { useState } from "react";

import { Header } from "../../components/Header";
import { Checkbox } from "../../components/Checkbox";
import { useFormik } from "formik";

import { WrapperTypePerson } from "./styles";
import { FormCoporate } from "./Steps/Corporate";
import { FormIndividual } from "./Steps/Individual";
import { CustomerServiceSkeleton } from "../../services/Customer/services/implementations/CustomerServiceSkeleton";

const notificationMethods = [
  { id: "pj", name: "type-person", title: "Pessoa Jurídica" },
  { id: "pf", name: "type-person", title: "Pessoa Física" },
];

interface ICreatePageProps {
  customerService: CustomerServiceSkeleton;
}

export const CreateCustomer = ({
  customerService: services,
}: ICreatePageProps) => {
  const [customerService] = useState<CustomerServiceSkeleton>(services);

  const [whatKindOfPerson, setWhatKindOfPerson] = useState("Pessoa Jurídica");

  const [isCheckboxCorporateActive, setIsCheckboxCorporateActive] =
    useState(false);
  const [hasRadioContribuition, setHasRadioContribuition] = useState("Sim");

  const formCorporate = useFormik({
    initialValues: {
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      ativo: false,
      contribuinte: "",
      inscricaoEstadual: "",
      inscricaoMunicipal: "",
      email: "",
      nomeResponsavel: "",
      cpf: "",
      dataNascimento: "",
      telefone: "",
      celular: "",
      emailResponsavel: "",
      cep: "",
      cidade: "",
      uf: "",
      endereço: "",
      numero: "",
      complemento: "",
      bairro: "",
      observacao: "",
    },
    // validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const {
    values: valuesFormCorporate,
    handleChange: handleChangeFormCorporate,
    touched: touchedFormCorporate,
    errors: errorsFormCorporate,
  } = formCorporate;

  const formIndividual = useFormik({
    initialValues: {
      nome: "",
      apelido: "",
      cpf: "",
      dataNascimento: "",
      estadoCivil: "",
      rg: "",
      orgaoEmissor: "",
      ufRg: "",
      cnh: "",
      seguranca: "",
      cei: "",
      email: "",
      telefone: "",
      celular: "",
      cep: "",
      cidade: "",
      uf: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      observacao: "",
    },
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        await customerService.createIndividualCustomer({
          type: "PF",
          ...values,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const {
    values: valuesFormIndividual,
    handleChange: handleFormIndividual,
    touched: touchedFormIndividual,
    errors: errorsFormIndividual,
  } = formIndividual;

  return (
    <div className="flex flex-col items-start">
      <Header title="Cadastro / Clientes / Cadastrar Clientes" />

      <h1>Adicionar Novo Cliente</h1>

      <WrapperTypePerson>
        <div>
          {notificationMethods.map(({ id, name, title }) => (
            <Checkbox
              key={id}
              id={id}
              name={name}
              type="radio"
              label={title}
              checked={whatKindOfPerson === title}
              onChange={() => setWhatKindOfPerson(title)}
            />
          ))}
        </div>
      </WrapperTypePerson>

      <div>
        {whatKindOfPerson === "Pessoa Jurídica" ? (
          <>
            <form onSubmit={formCorporate.handleSubmit}>
              <FormCoporate
                values={valuesFormCorporate}
                handleChange={handleChangeFormCorporate}
                touched={touchedFormCorporate}
                errors={errorsFormCorporate}
                isCheckboxCorporateActive={isCheckboxCorporateActive}
                setIsCheckboxCorporateActive={setIsCheckboxCorporateActive}
                hasRadioContribuition={hasRadioContribuition}
                setHasRadioContribuition={setHasRadioContribuition}
              />
              <button type="submit">Enviar</button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={formIndividual.handleSubmit}>
              <FormIndividual
                values={valuesFormIndividual}
                handleChange={handleFormIndividual}
                touched={touchedFormIndividual}
                errors={errorsFormIndividual}
              />
              <button type="submit">Enviar</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
