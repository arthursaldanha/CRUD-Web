/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Label, Container, SvgStart } from "./styles";
import SelectComponent, { StylesConfig } from "react-select";
import { useTheme } from "styled-components";

interface InputSelectItem {
  value: string | number;
  label: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: InputSelectItem[];
  onChange?: (values: any) => void;
  value?: any;
  placeholder?: string;
  startIcon?: React.ReactNode;
  name?: string;
  required?: boolean;
}

export const ComboBoxSingleSelect: React.FC<DropdownProps> = ({
  items,
  onChange,
  value,
  placeholder,
  startIcon,
  name,
  required,
  ...props
}) => {
  const { colors, typography } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (selectedOptions: any) => {
    onChange && onChange(selectedOptions);
  };

  const customStyles: StylesConfig = {
    control: (styles: any) => ({
      ...styles,
      boxShadow: "none",
      borderRadius: "8px",
      border: isFocused
        ? `1px solid ${colors.green2}`
        : `1px solid ${colors.grey5}`,
      "&:hover": {
        border: isFocused
          ? `1px solid ${colors.green2}`
          : `1px solid ${colors.grey5}`,
      },
      paddingLeft: startIcon ? "34px" : "2px",
      minHeight: "40px",
    }),
    option: (styles: any, { isSelected }) => {
      return {
        ...styles,
        fontSize: typography.heading.h7,
        color: isSelected ? `${colors.white}` : `${colors.grey1}`,
        cursor: "pointer",
        fontWeight: isSelected ? "500" : "normal",
        backgroundColor: isSelected ? `${colors.green1}` : undefined,
        ":hover": {
          backgroundColor: `${colors.green3}`,
          color: `${colors.grey1}`,
        },
      };
    },
    input: (styles: any) => {
      return {
        ...styles,
        fontSize: typography.heading.h7,
        cursor: "pointer",
      };
    },
    singleValue: (styles: any) => {
      return {
        ...styles,
        fontSize: typography.heading.h7,
        fontWeight: "500",
      };
    },
  };

  return (
    <Container {...props}>
      <SelectComponent
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        value={value}
        options={items}
        styles={customStyles}
        isSearchable
        onChange={handleChange}
        placeholder=""
        components={{
          IndicatorSeparator: () => null,
        }}
        noOptionsMessage={() => "Nenhuma opção restante"}
        name={name}
        id={name}
      />
      <Label
        isFocused={isFocused}
        value={value?.value ? true : false}
        startIcon={startIcon ? true : false}
        htmlFor={name}
      >
        {`${placeholder} ${required ? "*" : ""}`}
      </Label>
      {startIcon && <SvgStart isFocused={isFocused}>{startIcon}</SvgStart>}
    </Container>
  );
};
