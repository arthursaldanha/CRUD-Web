import * as yup from "yup";

import { fullNameRegex, unmask } from "../../regex";
import {
  isCheckingNumberResidence,
  isCheckingPostalCode,
} from "../tests/address";
import { checkCnpjIsValid, checkCpfIsValid } from "../tests/cpf_cnpj";
import { isCheckingDate } from "../tests/date";
import { isCheckingPhone } from "../tests/phone";

const email = yup
  .string()
  .email("E-mail inválido")
  .required("E-mail obrigatório");

const name = yup
  .string()
  .required("Nome obrigatório")
  .test("testName", "Informe nome e sobrenome", (value) =>
    fullNameRegex.test((value ?? "").trim())
  );

const corporateName = yup.string().required("Razão Social obrigatório");

const fantasyName = yup.string().required("Nome Fantasia obrigatório");

const cpf = yup
  .string()
  .required("CPF obrigatório")
  .test("testCpf", "Informe um CPF válido", (value) => {
    const result = checkCpfIsValid(value ?? "");
    return result;
  });

const cnpj = yup
  .string()
  .required("CNPJ obrigatório")
  .test("testCpf", "Informe um CNPJ válido", (value) => {
    const result = checkCnpjIsValid(value ?? "");
    return result;
  });

const cpf_cnpj = yup
  .string()
  .required("CPF/CNPJ obrigatório")
  .test("testCpfCnpj", "Informe um CPF/CNPJ válido", (value) => {
    if (unmask(value ?? "").length <= 11) {
      const result = checkCpfIsValid(value ?? "");
      return result;
    }

    const result = checkCnpjIsValid(value ?? "");
    return result;
  });

const municipalRegistration = yup
  .string()
  .required("Inscrição municipal obrigatório")
  .min(6, "A inscrição municipal não possui o mínimo de dígitos!")
  .max(14, "A inscrição municipal não possui o máximo de dígitos!");

const stateRegistration = yup
  .string()
  .min(8, "A inscrição estadual não possui o mínimo de dígitos!")
  .max(14, "A inscrição estadual não possui o máximo de dígitos!");

const identityCard = yup
  .string()
  .min(7, "O RG não possui o mínimo de dígitos!")
  .max(11, "O RG não possui o máximo de dígitos!");

const issuingAgencyIdentityCard = yup.string();

const phone = yup
  .string()
  .required("Telefone obrigatório")
  .test("testPhone", "Telefone inválido", (value) => {
    const result = isCheckingPhone(value ?? "");
    return result;
  });

const phoneOptional = yup.string();

const date = yup
  .string()
  .test("testDate", "Informe uma data válida", (value) =>
    isCheckingDate(value ?? "")
  );

const requiredDate = yup
  .string()
  .required("Data obrigatória")
  .test("testDate", "Informe uma data válida", (value) =>
    isCheckingDate(value ?? "")
  );

const postalCode = yup
  .string()
  .required("CEP obrigatório")
  .test("testCep", "Informe um CEP válido", (value) => {
    const result = isCheckingPostalCode(value ?? "");
    return result;
  });

const street = yup.string().required("Rua obrigatória");

const number = yup
  .string()
  .required("Número obrigatório")
  .test("testCep", "Número inválido", (value) => {
    const result = isCheckingNumberResidence(value ?? "");
    return result;
  })
  .min(1, "Deve possuir no mínimo 1 dígito!")
  .max(5, "Deve possuir no máximo 5 dígitos!");

const neighborhood = yup.string().required("Bairro obrigatório");

const city = yup.string().required("Cidade obrigatório");

export {
  email,
  name,
  corporateName,
  fantasyName,
  cpf,
  cnpj,
  cpf_cnpj,
  municipalRegistration,
  stateRegistration,
  identityCard,
  issuingAgencyIdentityCard,
  phone,
  phoneOptional,
  date,
  requiredDate,
  postalCode,
  street,
  number,
  neighborhood,
  city,
};
