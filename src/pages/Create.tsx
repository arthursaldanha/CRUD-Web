import React from "react";

import { useNavigate } from "react-router-dom";

import { CreateCustomerPresentation } from "../presentation/Create";

import { IIndividualCustomerGeneral, ICorporateCustomerGeneral } from "../domain/Customer/models";
import { CustomerServiceSkeleton } from "../domain/Customer/services/implementations/CustomerServiceSkeleton";

interface ICreatePageProps {
  customerService: CustomerServiceSkeleton;
}

export const CreateCustomerPage = ({ customerService }: ICreatePageProps) => {
  const navigate = useNavigate();

  async function onCreateIndividualCustomer(
    values: IIndividualCustomerGeneral
  ) {
    try {
      await customerService.createIndividualCustomer({
        type: "PF",
        ...values,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function onCreateCorporateCustomer(values: ICorporateCustomerGeneral) {
    try {
      await customerService.createCorporateCustomer({
        type: "PJ",
        ...values,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CreateCustomerPresentation
      customerService={customerService}
      onCreateIndividualCustomer={onCreateIndividualCustomer}
      onCreateCorporateCustomer={onCreateCorporateCustomer}
    />
  );
};
