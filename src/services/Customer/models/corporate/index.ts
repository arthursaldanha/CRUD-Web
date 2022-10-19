interface ICorporateCustomer {
  id?: number;
  type?: 'PJ';
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  ativo: boolean;
  contribuinte: string;
  inscricaoEstadual: string;
  inscricaoMunicipal: string;
  email: string;
  nomeResponsavel: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  celular: string;
  emailResponsavel: string;
  observacao: string;
}

export { type ICorporateCustomer };
