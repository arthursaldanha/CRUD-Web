import React, { useState } from "react";
import { useTheme } from "styled-components";
import { CloseCircle, TickCircle, InfoCircle } from "iconsax-react";

import { Text } from "../Text";
import { IInput } from "../Input";

import { Container, Label, TextAreaComponent, ContainerText } from "./styles";

export type ModalContainerProps = React.HTMLAttributes<HTMLDivElement>;
export interface TextAreaProps
  extends IInput,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  readOnly,
  placeholder,
  sucessMessage,
  errorMessage,
  alertMessage,
  infoMessage,
  style,
  name,
  required,
  ...props
}) => {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [valueDefault, setValueDefault] = useState("");

  return (
    <Container style={style}>
      <TextAreaComponent
        errorMessage={errorMessage}
        sucessMessage={sucessMessage}
        alertMessage={alertMessage}
        value={value || valueDefault}
        onChange={(e) => setValueDefault(e.target.value)}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        readOnly={readOnly}
        rows={8}
        data-testid="text-area"
        name={name}
        id={name}
        {...props}
      />
      <Label
        readOnly={readOnly}
        value={value || valueDefault}
        isFocused={isFocused}
        errorMessage={errorMessage}
        sucessMessage={sucessMessage}
        alertMessage={alertMessage}
        htmlFor={name}
      >
        {`${placeholder} ${required ? "*" : ""}`}
      </Label>

      {(sucessMessage || errorMessage || alertMessage || infoMessage) && (
        <ContainerText>
          {sucessMessage ? (
            <TickCircle
              color={colors.success}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px" }}
              data-testid="icon-message-success"
            />
          ) : errorMessage ? (
            <CloseCircle
              color={colors.error}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px" }}
              data-testid="icon-message-error"
            />
          ) : alertMessage ? (
            <InfoCircle
              color={colors.alert}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px" }}
              data-testid="icon-message-alert"
            />
          ) : (
            <InfoCircle
              color={colors.grey4}
              variant="Bold"
              size={12}
              style={{ marginRight: "5px" }}
              data-testid="icon-message-info"
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
            data-testid="text-massage-textarea"
          >
            {sucessMessage || errorMessage || alertMessage || infoMessage}
          </Text>
        </ContainerText>
      )}
    </Container>
  );
};
