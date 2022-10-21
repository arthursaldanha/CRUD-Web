import { createSchema } from "../../../utils/validations";
import {
  name,
  cpf,
  cnpj,
  phone,
  postalCode,
  date,
  email,
  identityCard,
  issuingAgencyIdentityCard,
  phoneOptional,
  street,
  number,
  neighborhood,
  city,
  corporateName,
  fantasyName,
  stateRegistration,
  municipalRegistration,
} from "../../../utils/validations/schemas";

const createOrUpdateIndividualCustomer = createSchema({
  nome: name,
  cpf,
  rg: identityCard,
  orgaoEmissor: issuingAgencyIdentityCard,
  email: email,
  dataNascimento: date,
  telefone: phoneOptional,
  celular: phoneOptional,
  cep: postalCode,
  endereco: street,
  numero: number,
  bairro: neighborhood,
  cidade: city,
});

const createOrUpdateCorporateCustomer = createSchema({
  razaoSocial: corporateName,
  nomeFantasia: fantasyName,
  inscricaoMunicipal: municipalRegistration,
  inscricaoEstadual: stateRegistration,
  cnpj,
  cep: postalCode,
  endereco: street,
  numero: number,
  bairro: neighborhood,
  cidade: city,
});

export { createOrUpdateIndividualCustomer, createOrUpdateCorporateCustomer };
