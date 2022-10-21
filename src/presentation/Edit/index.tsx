import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../domain/Customer/models";
import { ButtonsForm, TypeMaritalStatus, TypeUFOption } from "../Create";
import { FormCoporate } from "../Create/Steps/Corporate";
import { FormIndividual } from "../Create/Steps/Individual";
import { valuesInputEditCorporate, valuesInputEditIndividual } from "./initialValuesInputs";

interface IEditPresentationProps {
  customerToEdit: any;
  isLoadingCustomerToEdit: boolean;
  onEditIndividualCustomer: (
    customerId: number,
    values: IIndividualCustomerGeneral
  ) => any;
  onEditCorporateCustomer: (
    customerId: number,
    values: ICorporateCustomerGeneral
  ) => any;
}

export const EditCustomerPresentation = ({
  customerToEdit,
  isLoadingCustomerToEdit,
  onEditIndividualCustomer,
  onEditCorporateCustomer,
}: IEditPresentationProps) => {
  // corporate states
  const [isCheckboxCorporateActive, setIsCheckboxCorporateActive] =
    useState(false);
  const [hasRadioContribuition, setHasRadioContribuition] = useState("");
  const [stateCustomerCorporateLiving, setStateCustomerCorporateLiving] =
    useState<TypeUFOption>({} as TypeUFOption);
  const [observationFormComporate, setObservationFormComporate] =
    useState<string>("");

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

  useEffect(() => {
    setIsCheckboxCorporateActive(customerToEdit?.ativo as boolean);
    setHasRadioContribuition(customerToEdit?.contribuinte as string);
    setStateCustomerCorporateLiving({
      label: customerToEdit?.uf,
      value: customerToEdit?.uf,
    });
    setObservationFormComporate(customerToEdit?.observacao);

    setHasMaritalStatus({
      label: customerToEdit?.estadoCivil,
      value: customerToEdit?.estadoCivil,
    });
    setStateDocumentIdentification({
      label: customerToEdit?.ufRg,
      value: customerToEdit?.ufRg,
    });
    setStateCustomerInidividualLiving({
      label: customerToEdit?.uf,
      value: customerToEdit?.uf,
    });
    setObservationFormIndividual(customerToEdit?.observacao);
  }, [customerToEdit]);

  if (isLoadingCustomerToEdit) {
    return <div />;
  }

  return (
    <>
      <div>
        <Header title="Cadastro / Clientes / Editar Clientes" />

        <div>
          {customerToEdit?.type === "PJ" ? (
            <Formik
              initialValues={valuesInputEditCorporate(customerToEdit)}
              onSubmit={async (values) => {
                await onEditCorporateCustomer(customerToEdit?.id ?? 0, {
                  ...values,
                  type: "PJ",
                  ativo: isCheckboxCorporateActive,
                  contribuinte: hasRadioContribuition,
                  uf: stateCustomerCorporateLiving.value,
                  observacao: observationFormComporate,
                } as ICorporateCustomerGeneral);
              }}
            >
              {({ values, handleChange, errors, touched }) => (
                <Form>
                  <FormCoporate
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
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
                  />
                  <ButtonsForm type="edit" />
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={valuesInputEditIndividual(customerToEdit)}
              onSubmit={async (values) => {
                await onEditIndividualCustomer(customerToEdit?.id, {
                  ...values,
                  type: "PF",
                  estadoCivil: hasMaritalStatus.value,
                  ufRg: stateDocumentIdentification.value,
                  uf: stateCustomerIndividualLiving.value,
                  observacao: observationFormIndividual
                } as IIndividualCustomerGeneral);
              }}
            >
              {({ values, handleChange, touched, errors }) => (
                <Form>
                  <FormIndividual
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    hasMaritalStatus={hasMaritalStatus}
                    setHasMaritalStatus={setHasMaritalStatus}
                    stateDocumentIdentification={stateDocumentIdentification}
                    setStateDocumentIdentification={
                      setStateDocumentIdentification
                    }
                    stateCustomerLiving={stateCustomerIndividualLiving}
                    setStateCustomerLiving={setStateCustomerInidividualLiving}
                    observationFormIndividual={observationFormIndividual}
                    setObservationFormIndividual={setObservationFormIndividual}
                  />
                  <ButtonsForm type="edit" />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};
