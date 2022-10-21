import { StatesBrazil } from "../common";

type MaritalStatus = "Solteiro (a)" | "Casado (a)" | "Divorciado (a)" | "Viúvo (a)"| "Separado judicialmente" | string;

interface IIndividualCustomer {
  id?: number;
  type?: 'PF';
  nome: string;
  apelido: string;
  cpf: string;
  dataNascimento: string;
  estadoCivil: MaritalStatus;
  rg: string;
  orgaoEmissor: string;
  ufRg: StatesBrazil;
  cnh: string;
  seguranca: string;
  cei: string;
  email: string;
  telefone: string;
  celular: string;
  observacao: string;
}

export { type IIndividualCustomer };
