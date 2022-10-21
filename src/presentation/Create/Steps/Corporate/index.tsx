import React from "react";

import { Checkbox } from "../../../../components/Checkbox";
import { Input } from "../../../../components/Input";

import { TypeUFOption } from "../..";
import { ComboBoxSingleSelect } from "../../../../components/ComboBox";
import { ufOptions } from "../../../../domain/Customer/models/common";

import { WrapperFormCoporate } from "./styles";

const contribuitions = [
  { id: "hascontribuiton", name: "type-contribuiton", title: "Sim" },
  { id: "hasntcontribuiton", name: "type-contribuiton", title: "Não" },
];

interface IFormCoporate {
  values: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  touched: any;
  errors: any;

  isCheckboxCorporateActive: boolean;
  setIsCheckboxCorporateActive: (state: boolean) => void;

  hasRadioContribuition: string;
  setHasRadioContribuition: (state: string) => void;

  stateCustomerCorporateLiving: TypeUFOption;
  setStateCustomerCorporateLiving: (state: TypeUFOption) => void;
}

export const FormCoporate = ({
  values,
  handleChange,
  touched,
  errors,
  isCheckboxCorporateActive,
  setIsCheckboxCorporateActive,
  hasRadioContribuition,
  setHasRadioContribuition,
  stateCustomerCorporateLiving,
  setStateCustomerCorporateLiving,
}: IFormCoporate) => {
  return (
    <WrapperFormCoporate>
      <div className="grid grid-common first-case">
        <Input
          type="text"
          name="razaoSocial"
          placeholder="Razão Social"
          value={values?.razaoSocial}
          onChange={handleChange}
          errorMessage={touched?.razaoSocial ? errors?.razaoSocial : ""}
        />
        <Input
          type="text"
          name="nomeFantasia"
          placeholder="Nome Fantasia"
          value={values?.nomeFantasia}
          onChange={handleChange}
          errorMessage={touched?.nomeFantasia ? errors?.nomeFantasia : ""}
        />
        <Checkbox
          type="checkbox"
          label="Ativo"
          checked={isCheckboxCorporateActive}
          onChange={() =>
            setIsCheckboxCorporateActive(!isCheckboxCorporateActive)
          }
        />
      </div>

      <div className="grid grid-common second-case">
        <Input
          type="text"
          name="cnpj"
          placeholder="CNPJ"
          value={values?.cnpj}
          onChange={handleChange}
          errorMessage={touched?.cnpj ? errors?.cnpj : ""}
          mask="cnpj"
        />
        <div>
          <p>Contribuinte</p>
          <div className="radio-options">
            {contribuitions.map(({ id, name, title }) => (
              <Checkbox
                key={id}
                id={id}
                name={name}
                type="radio"
                label={title}
                checked={hasRadioContribuition === title}
                onChange={() => setHasRadioContribuition(title)}
              />
            ))}
          </div>
        </div>
      </div>

      <Input
        type="text"
        name="inscricaoEstadual"
        placeholder="Inscrição Estadual"
        value={values?.inscricaoEstadual}
        onChange={handleChange}
        errorMessage={
          touched?.inscricaoEstadual ? errors?.inscricaoEstadual : ""
        }
        mask="onlyNumbers"
      />
      <Input
        type="text"
        name="inscricaoMunicipal"
        placeholder="Inscrição Municipal"
        value={values?.inscricaoMunicipal}
        onChange={handleChange}
        errorMessage={
          touched?.inscricaoMunicipal ? errors?.inscricaoMunicipal : ""
        }
        mask="onlyNumbers"
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
        name="nomeResponsavel"
        placeholder="Nome do Responsavel"
        value={values?.nomeResponsavel}
        onChange={handleChange}
        errorMessage={touched?.nomeResponsavel ? errors?.nomeResponsavel : ""}
        mask="onlyLetters"
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
        placeholder="Data Nasc. Responsavel"
        value={values?.dataNascimento}
        onChange={handleChange}
        errorMessage={touched?.dataNascimento ? errors?.dataNascimento : ""}
        mask="data"
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
        mask="phone"
      />
      <Input
        type="text"
        name="emailResponsavel"
        placeholder="Email Responsavel"
        value={values?.emailResponsavel}
        onChange={handleChange}
        errorMessage={touched?.emailResponsavel ? errors?.emailResponsavel : ""}
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
        mask="onlyLetters"
      />
      <ComboBoxSingleSelect
        items={ufOptions}
        name="uf"
        placeholder="UF"
        value={stateCustomerCorporateLiving}
        onChange={setStateCustomerCorporateLiving}
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
        mask="onlyNumbers"
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
    </WrapperFormCoporate>
  );
};
