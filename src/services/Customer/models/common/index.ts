type StatesBrazil =
  "AC" | 
  "AL" | 
  "AP" | 
  "AM" | 
  "BA" | 
  "CE" | 
  "DF" | 
  "ES" | 
  "GO" | 
  "MA" | 
  "MT" | 
  "MS" | 
  "MG" | 
  "PA" | 
  "PB" | 
  "PR" | 
  "PE" | 
  "PI" | 
  "RJ" | 
  "RN" | 
  "RS" | 
  "RO" | 
  "RR" | 
  "SC" | 
  "SP" | 
  "SE" | 
  "TO" | 
  string;

interface IAddressCustomer {
  cep: string;
  cidade: string;
  uf: StatesBrazil;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
}

export { type IAddressCustomer, type StatesBrazil };
