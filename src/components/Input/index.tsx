import React, { useEffect, useState } from "react";

import { useTheme } from "styled-components";
import { Text } from "../Text";

import {
  Container,
  ContainerInput,
  Label,
  InputField,
  SvgStart,
  SvgEnd,
  ContainerText,
} from "./styles";

import { CloseCircle, TickCircle, InfoCircle } from "iconsax-react";

import {
  card,
  cvv,
  cep,
  cnpj,
  cpf,
  cpf_cnpj,
  currency,
  phone,
  data,
  onlyNumbers,
  onlyLetters
} from "./masks";

interface Input {
  errorMessage?: string;
  sucessMessage?: string;
  alertMessage?: string;
  infoMessage?: string;
  style?: React.CSSProperties;
}
export interface InputProps
  extends Input,
    React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  inputButton?: boolean;
  mask?:
    | "cep"
    | "currency"
    | "cpf"
    | "cnpj"
    | "cpf_cnpj"
    | "card"
    | "cvv"
    | "phone"
    | "data"
    | "onlyNumbers"
    | "onlyLetters";
}

export const Input: React.FC<InputProps> = ({
  value,
  readOnly,
  placeholder,
  startIcon,
  endIcon,
  sucessMessage,
  errorMessage,
  alertMessage,
  infoMessage,
  inputButton,
  mask,
  maxLength,
  type,
  required,
  autoFocus,
  style,
  name,
  ...props
}) => {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

  const masks = {
    cpf: cpf,
    cnpj: cnpj,
    cpf_cnpj: cpf_cnpj,
    currency: currency,
    card: card,
    cvv: cvv,
    cep: cep,
    phone: phone,
    data: data,
    onlyNumbers: onlyNumbers,
    onlyLetters: onlyLetters
  };

  useEffect(() => {
    if (value === "") {
      return setDefaultValue("");
    }
    if (!value) return;
    if (mask) {
      setDefaultValue(masks[mask](value as string));
    } else {
      setDefaultValue(value as string);
    }
  }, [mask, masks, value]);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (mask) {
      e.currentTarget.value = masks[mask](e.currentTarget.value);
      setDefaultValue(masks[mask](e.currentTarget.value));
    } else {
      setDefaultValue(e.currentTarget.value);
    }
  };

  return (
    <Container data-testid="container" style={style}>
      <ContainerInput data-testid="c-input">
        <InputField
          errorMessage={errorMessage}
          sucessMessage={sucessMessage}
          alertMessage={alertMessage}
          value={defaultValue}
          startIcon={startIcon}
          endIcon={endIcon}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          autoFocus={autoFocus}
          readOnly={readOnly}
          inputButton={inputButton}
          onChangeCapture={handleOnChange}
          maxLength={maxLength ? maxLength : undefined}
          data-testid="input"
          type={type}
          name={name}
          id={name}
          {...props}
        />
        <Label
          startIcon={startIcon}
          htmlFor={name}
          endIcon={endIcon}
          readOnly={readOnly}
          value={defaultValue}
          isFocused={isFocused}
          errorMessage={errorMessage}
          sucessMessage={sucessMessage}
          alertMessage={alertMessage}
          data-testid="label"
        >
          {`${placeholder} ${required ? "*" : ""}`}
        </Label>
        {startIcon && (
          <SvgStart
            readOnly={readOnly}
            errorMessage={errorMessage}
            value={defaultValue}
            sucessMessage={sucessMessage}
            alertMessage={alertMessage}
            isFocused={isFocused}
            data-testid="c-svgStart"
          >
            {startIcon}
          </SvgStart>
        )}
        {endIcon && (
          <SvgEnd
            readOnly={readOnly}
            errorMessage={errorMessage}
            value={defaultValue}
            sucessMessage={sucessMessage}
            alertMessage={alertMessage}
            isFocused={isFocused}
            data-testid="c-svgEnd"
          >
            {endIcon}
          </SvgEnd>
        )}
      </ContainerInput>
      {(sucessMessage || errorMessage || alertMessage || infoMessage) && (
        <ContainerText data-testid="c-info">
          {sucessMessage ? (
            <TickCircle
              color={colors.success}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px", marginTop: "1px" }}
              data-testid="svgInfoSuccess"
            />
          ) : errorMessage ? (
            <CloseCircle
              color={colors.error}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px", marginTop: "1px" }}
              data-testid="svgInfoError"
            />
          ) : alertMessage ? (
            <InfoCircle
              color={colors.alert}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px", marginTop: "1px" }}
              data-testid="svgInfoAlert"
            />
          ) : (
            <InfoCircle
              color={colors.grey4}
              variant="Outline"
              size={12}
              style={{ marginRight: "5px", marginTop: "1px" }}
              data-testid="svgInfo"
            />
          )}
          <Text
            variant="h9"
            weight="medium"
            color={
              sucessMessage
                ? colors.success
                : errorMessage
                ? colors.error
                : colors.grey1
            }
          >
            {sucessMessage || errorMessage || alertMessage || infoMessage || ""}
          </Text>
        </ContainerText>
      )}
    </Container>
  );
};
