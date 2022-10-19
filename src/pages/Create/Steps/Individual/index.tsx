import React from "react";
import { Input } from "../../../../components/Input";

interface IFormIndividual {
  values: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  touched: any;
  errors: any;
}

export const FormIndividual = ({
  values,
  handleChange,
  touched,
  errors,
}: IFormIndividual) => {
  return (
    <div>
      <Input
        type="text"
        name="nome"
        placeholder="Nome Completo"
        value={values?.nome}
        onChange={handleChange}
        errorMessage={touched?.nome ? errors?.nome : ""}
      />
      <Input
        type="text"
        name="apelido"
        placeholder="Apelido"
        value={values?.apelido}
        onChange={handleChange}
        errorMessage={touched?.apelido ? errors?.apelido : ""}
      />

      <Input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={values?.cpf}
        onChange={handleChange}
        errorMessage={touched?.cpf ? errors?.cpf : ""}
        mask="cpf"
      />
      <Input
        type="text"
        name="dataNascimento"
        placeholder="Data de Nascimento"
        value={values?.dataNascimento}
        onChange={handleChange}
        errorMessage={touched?.dataNascimento ? errors?.dataNascimento : ""}
        mask="data"
      />
      <Input
        type="text"
        name="estadoCivil"
        placeholder="Estado Civil"
        value={values?.estadoCivil}
        onChange={handleChange}
        errorMessage={touched?.estadoCivil ? errors?.estadoCivil : ""}
      />

      <Input
        type="text"
        name="rg"
        placeholder="RG"
        value={values?.rg}
        onChange={handleChange}
        errorMessage={touched?.rg ? errors?.rg : ""}
        // mask="rg"
      />
      <Input
        type="text"
        name="orgaoEmissor"
        placeholder="Orgão Emissão"
        value={values?.orgaoEmissor}
        onChange={handleChange}
        errorMessage={touched?.orgaoEmissor ? errors?.orgaoEmissor : ""}
      />
      <Input
        type="text"
        name="ufRg"
        placeholder="UF"
        value={values?.ufRg}
        onChange={handleChange}
        errorMessage={touched?.ufRg ? errors?.ufRg : ""}
      />

      <Input
        type="text"
        name="cnh"
        placeholder="CNH"
        value={values?.cnh}
        onChange={handleChange}
        errorMessage={touched?.cnh ? errors?.cnh : ""}
      />
      <Input
        type="text"
        name="seguranca"
        placeholder="Segurança"
        value={values?.seguranca}
        onChange={handleChange}
        errorMessage={touched?.seguranca ? errors?.seguranca : ""}
      />
      <Input
        type="text"
        name="cei"
        placeholder="CEI"
        value={values?.cei}
        onChange={handleChange}
        errorMessage={touched?.cei ? errors?.cei : ""}
      />

      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={values?.email}
        onChange={handleChange}
        errorMessage={touched?.email ? errors?.email : ""}
      />

      <Input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={values?.telefone}
        onChange={handleChange}
        errorMessage={touched?.telefone ? errors?.telefone : ""}
        mask="phone"
      />
      <Input
        type="text"
        name="celular"
        placeholder="Celular"
        value={values?.celular}
        onChange={handleChange}
        errorMessage={touched?.celular ? errors?.celular : ""}
      />

      <Input
        type="text"
        name="cep"
        placeholder="CEP"
        value={values?.cep}
        onChange={handleChange}
        errorMessage={touched?.cep ? errors?.cep : ""}
        mask="cep"
      />
      <Input
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={values?.cidade}
        onChange={handleChange}
        errorMessage={touched?.cidade ? errors?.cidade : ""}
      />
      <Input
        type="text"
        name="uf"
        placeholder="UF"
        value={values?.uf}
        onChange={handleChange}
        errorMessage={touched?.uf ? errors?.uf : ""}
      />

      <Input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={values?.endereco}
        onChange={handleChange}
        errorMessage={touched?.endereco ? errors?.endereco : ""}
      />
      <Input
        type="text"
        name="numero"
        placeholder="Número"
        value={values?.numero}
        onChange={handleChange}
        errorMessage={touched?.numero ? errors?.numero : ""}
      />

      <Input
        type="text"
        name="complemento"
        placeholder="Complemento"
        value={values?.complemento}
        onChange={handleChange}
        errorMessage={touched?.complemento ? errors?.complemento : ""}
      />
      <Input
        type="text"
        name="bairro"
        placeholder="Bairro"
        value={values?.bairro}
        onChange={handleChange}
        errorMessage={touched?.bairro ? errors?.bairro : ""}
      />
    </div>
  );
};
