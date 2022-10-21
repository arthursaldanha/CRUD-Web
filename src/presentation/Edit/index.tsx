import { useQuery } from "@tanstack/react-query";
import { Form, Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../domain/Customer/models";
import { CustomerServiceSkeleton } from "../../domain/Customer/services/implementations/CustomerServiceSkeleton";
import { TypeMaritalStatus, TypeUFOption } from "../Create";
import { FormCoporate } from "../Create/Steps/Corporate";
import { FormIndividual } from "../Create/Steps/Individual";

interface IEditPresentationProps {
  customerService: CustomerServiceSkeleton;
  onEditIndividualCustomer: (
    customerId: number,
    values: IIndividualCustomerGeneral
  ) => any;
  onEditCorporateCustomer: (
    customerId: number,
    values: ICorporateCustomerGeneral
  ) => any;
}

type Teste = IIndividualCustomerGeneral & ICorporateCustomerGeneral & any;

export const EditCustomerPresentation = ({
  customerService,
  onEditIndividualCustomer,
  onEditCorporateCustomer,
}: IEditPresentationProps) => {
  const { id } = useParams();

  const { isLoading, data } = useQuery<any>(
    ["customer"],
    async () => {
      const response = await customerService.readUniqueCustomer(
        Number(id) as number
      );
      return response;
    },
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    }
  );

  // corporate states
  const [isCheckboxCorporateActive, setIsCheckboxCorporateActive] =
    useState(false);
  const [hasRadioContribuition, setHasRadioContribuition] = useState("");
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

  useEffect(() => {
    setIsCheckboxCorporateActive(data?.ativo as boolean);
    setHasRadioContribuition(data?.contribuinte as string);
    setStateCustomerCorporateLiving({
      label: data?.uf,
      value: data?.uf,
    });

    setHasMaritalStatus({
      label: data?.estadoCivil,
      value: data?.estadoCivil,
    });
    setStateDocumentIdentification({
      label: data?.ufRg,
      value: data?.ufRg,
    });
    setStateCustomerInidividualLiving({
      label: data?.uf,
      value: data?.uf,
    });
  }, [data]);

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      <div>
        <Header title="Cadastro / Clientes / Editar Clientes" />

        <div>
          {data?.type === "PJ" ? (
            <Formik
              initialValues={{
                razaoSocial: data?.razaoSocial,
                nomeFantasia: data?.nomeFantasia,
                cnpj: data?.cnpj,
                ativo: data?.ativo,
                contribuinte: data?.contribuinte,
                inscricaoEstadual: data?.inscricaoEstadual,
                inscricaoMunicipal: data?.inscricaoMunicipal,
                email: data?.email,
                nomeResponsavel: data?.nomeResponsavel,
                cpf: data?.cpf,
                dataNascimento: data?.dataNascimento,
                telefone: data?.telefone,
                celular: data?.celular,
                emailResponsavel: data?.emailResponsavel,
                cep: data?.cep,
                cidade: data?.cidade,
                uf: data?.uf,
                endereco: data?.endereco,
                numero: data?.numero,
                complemento: data?.complemento,
                bairro: data?.bairro,
                observacao: data?.observacao,
              }}
              onSubmit={async (values) => {
                console.log(values);

                await onEditCorporateCustomer(data?.id, {
                  ...values,
                  ativo: isCheckboxCorporateActive,
                  contribuinte: hasRadioContribuition,
                  uf: stateCustomerCorporateLiving.value
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
                  />
                  <button type="submit">Enviar</button>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                nome: data?.nome,
                apelido: data?.apelido,
                cpf: data?.cpf,
                dataNascimento: data?.dataNascimento,
                estadoCivil: data?.estadoCivil,
                rg: data?.rg,
                orgaoEmissor: data?.orgaoEmissor,
                ufRg: data?.ufRg,
                cnh: data?.cnh,
                seguranca: data?.seguranca,
                cei: data?.cei,
                email: data?.email,
                telefone: data?.telefone,
                celular: data?.celular,
                cep: data?.cep,
                cidade: data?.cidade,
                uf: data?.uf,
                endereco: data?.endereco,
                numero: data?.numero,
                complemento: data?.complemento,
                bairro: data?.bairro,
                observacao: data?.observacao,
              }}
              onSubmit={async (values) => {
                console.log(values);

                await onEditIndividualCustomer(data?.id, {
                  ...values,
                  estadoCivil: hasMaritalStatus.value,
                  ufRg: stateDocumentIdentification.value,
                  uf: stateCustomerIndividualLiving.value,
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
                  />
                  <button type="submit">Enviar</button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};
