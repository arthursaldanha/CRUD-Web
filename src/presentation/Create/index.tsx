import { useState } from "react";

import { Header } from "../../components/Header";
import { Checkbox } from "../../components/Checkbox";
import { useFormik } from "formik";

import { WrapperTypePerson } from "./styles";
import { FormCoporate } from "./Steps/Corporate";
import { FormIndividual } from "./Steps/Individual";
import { CustomerServiceSkeleton } from "../../domain/Customer/services/implementations/CustomerServiceSkeleton";
import {
  IIndividualCustomerGeneral,
  ICorporateCustomerGeneral,
} from "../../domain/Customer/models";
import {
  maritalStatusOptions,
  ufOptions,
} from "../../domain/Customer/models/common";
import { createOrUpdateCorporateCustomer, createOrUpdateIndividualCustomer } from "../../domain/Customer/validations";

const notificationMethods = [
  { id: "pj", name: "type-person", title: "Pessoa Jurídica" },
  { id: "pf", name: "type-person", title: "Pessoa Física" },
];

export type TypeUFOption = typeof ufOptions[0];
export type TypeMaritalStatus = typeof maritalStatusOptions[0];

interface ICreatePresentationProps {
  customerService: CustomerServiceSkeleton;
  onCreateIndividualCustomer: (values: IIndividualCustomerGeneral) => any;
  onCreateCorporateCustomer: (values: ICorporateCustomerGeneral) => any;
}

export const CreateCustomerPresentation = ({
  customerService: services,
  onCreateIndividualCustomer,
  onCreateCorporateCustomer,
}: ICreatePresentationProps) => {
  const [whatKindOfPerson, setWhatKindOfPerson] = useState("Pessoa Jurídica");

  // corporate states
  const [isCheckboxCorporateActive, setIsCheckboxCorporateActive] =
    useState(false);
  const [hasRadioContribuition, setHasRadioContribuition] = useState("Sim");
  const [stateCustomerCorporateLiving, setStateCustomerCorporateLiving] =
    useState<TypeUFOption>({} as TypeUFOption);

  // individual states
  const [hasMaritalStatus, setHasMaritalStatus] = useState<TypeMaritalStatus>(
    {} as TypeMaritalStatus
  );
  const [stateDocumentIdentification, setStateDocumentIdentification] =
    useState<TypeUFOption>({} as TypeUFOption);
  const [stateCustomerIndividualLiving, setStateCustomerInidividualLiving] =
    useState<TypeUFOption>({} as TypeUFOption);

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
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      observacao: "",
    },
    validationSchema: createOrUpdateCorporateCustomer,
    onSubmit: async (values) => {
      console.log(values);

      await onCreateCorporateCustomer({
        ...values,
        ativo: isCheckboxCorporateActive,
        contribuinte: hasRadioContribuition,
        uf: stateCustomerCorporateLiving.value
      } as ICorporateCustomerGeneral);
    },
  });

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
    validationSchema: createOrUpdateIndividualCustomer,
    onSubmit: async (values) => {
      console.log(values);

      await onCreateIndividualCustomer({
        ...values,
        estadoCivil: hasMaritalStatus.value,
        ufRg: stateDocumentIdentification.value,
        uf: stateCustomerIndividualLiving.value,
      } as IIndividualCustomerGeneral);
    },
  });

  function handleChangeTypeCustomer(title: string) {
    setWhatKindOfPerson(title)

    formCorporate.resetForm();
    formCorporate.setErrors({})

    formIndividual.resetForm();
    formIndividual.setErrors({})
  }

  return (
    <div>
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
              onChange={() => handleChangeTypeCustomer(title)}
            />
          ))}
        </div>
      </WrapperTypePerson>

      <div>
        {whatKindOfPerson === "Pessoa Jurídica" ? (
          <form onSubmit={formCorporate.handleSubmit}>
            <FormCoporate
              values={formCorporate.values}
              handleChange={formCorporate.handleChange}
              touched={formCorporate.touched}
              errors={formCorporate.errors}
              isCheckboxCorporateActive={isCheckboxCorporateActive}
              setIsCheckboxCorporateActive={setIsCheckboxCorporateActive}
              hasRadioContribuition={hasRadioContribuition}
              setHasRadioContribuition={setHasRadioContribuition}
              stateCustomerCorporateLiving={stateCustomerCorporateLiving}
              setStateCustomerCorporateLiving={setStateCustomerCorporateLiving}
            />
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <form onSubmit={formIndividual.handleSubmit}>
            <FormIndividual
              values={formIndividual.values}
              handleChange={formIndividual.handleChange}
              touched={formIndividual.touched}
              errors={formIndividual.errors}
              hasMaritalStatus={hasMaritalStatus}
              setHasMaritalStatus={setHasMaritalStatus}
              stateDocumentIdentification={stateDocumentIdentification}
              setStateDocumentIdentification={setStateDocumentIdentification}
              stateCustomerLiving={stateCustomerIndividualLiving}
              setStateCustomerLiving={setStateCustomerInidividualLiving}
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};
