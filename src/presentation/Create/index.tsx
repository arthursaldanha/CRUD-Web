import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

import { Button, Checkbox, Header } from "../../components";

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
import {
  createOrUpdateCorporateCustomer,
  createOrUpdateIndividualCustomer,
} from "../../domain/Customer/validations";

import {
  initialValuesFormCorporate,
  initialValuesFormIndividual,
} from "./initialValues";

import { WrapperButtons, WrapperForm, WrapperTypePerson } from "./styles";

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

interface IButtonsFormProps {
  type: "create" | "edit";
}

export function ButtonsForm({ type }: IButtonsFormProps) {
  return (
    <WrapperButtons>
      <NavLink to="/">
        <Button type="button" variant="outlined" color="error">
          Cancelar
        </Button>
      </NavLink>
      <Button type="submit" variant="contained">
        {type === "create" ? "Cadastrar" : "Editar"}
      </Button>
    </WrapperButtons>
  );
}

export const CreateCustomerPresentation = ({
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
  const [observationFormComporate, setObservationFormComporate] =
    useState<string>("");
  const [hasErrorInComboBoxUFCorpotate, setHasErrorInComboBoxUFCorpotate] =
    useState("");

  // individual states
  const [hasMaritalStatus, setHasMaritalStatus] = useState<TypeMaritalStatus>(
    {} as TypeMaritalStatus
  );
  const [stateDocumentIdentification, setStateDocumentIdentification] =
    useState<TypeUFOption>({} as TypeUFOption);
  const [stateCustomerIndividualLiving, setStateCustomerInidividualLiving] =
    useState<TypeUFOption>({} as TypeUFOption);
  const [observationFormIndividual, setObservationFormIndividual] =
    useState<string>("");
  const [hasErrorInComboBoxUFIndividual, setHasErrorInComboBoxUFIndividual] =
    useState("");

  const formCorporate = useFormik({
    initialValues: initialValuesFormCorporate,
    validationSchema: createOrUpdateCorporateCustomer,
    onSubmit: async (values) => {
      if (!stateCustomerCorporateLiving?.value) {
        setHasErrorInComboBoxUFCorpotate("Campo obrigatório!");
        return;
      }

      await onCreateCorporateCustomer({
        ...values,
        ativo: isCheckboxCorporateActive,
        contribuinte: hasRadioContribuition,
        uf: stateCustomerCorporateLiving.value,
        observacao: observationFormComporate,
      } as ICorporateCustomerGeneral);
    },
  });

  useEffect(() => {
    if (stateCustomerCorporateLiving) setHasErrorInComboBoxUFCorpotate("");
  }, [stateCustomerCorporateLiving]);

  const formIndividual = useFormik({
    initialValues: initialValuesFormIndividual,
    validationSchema: createOrUpdateIndividualCustomer,
    onSubmit: async (values) => {
      if (!stateCustomerIndividualLiving?.value) {
        setHasErrorInComboBoxUFIndividual("Campo obrigatório!");
        return;
      }

      await onCreateIndividualCustomer({
        ...values,
        estadoCivil: hasMaritalStatus.value,
        ufRg: stateDocumentIdentification.value,
        uf: stateCustomerIndividualLiving.value,
        observacao: observationFormIndividual,
      } as IIndividualCustomerGeneral);
    },
  });

  useEffect(() => {
    if (stateCustomerIndividualLiving) setHasErrorInComboBoxUFCorpotate("");
  }, [stateCustomerIndividualLiving]);

  function handleChangeTypeCustomer(title: string) {
    setWhatKindOfPerson(title);
    formCorporate.resetForm();
    formCorporate.setErrors({});
    formIndividual.resetForm();
    formIndividual.setErrors({});
  }

  return (
    <div>
      <Header title="Cadastro / Clientes / Cadastrar Clientes" />

      <WrapperForm>
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
                setStateCustomerCorporateLiving={
                  setStateCustomerCorporateLiving
                }
                observationFormComporate={observationFormComporate}
                setObservationFormComporate={setObservationFormComporate}
                hasErrorInComboBoxUFCorpotate={hasErrorInComboBoxUFCorpotate}
              />
              <ButtonsForm type="create" />
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
                observationFormIndividual={observationFormIndividual}
                setObservationFormIndividual={setObservationFormIndividual}
                hasErrorInComboBoxUFIndividual={hasErrorInComboBoxUFIndividual}
              />
              <ButtonsForm type="create" />
            </form>
          )}
        </div>
      </WrapperForm>
    </div>
  );
};
