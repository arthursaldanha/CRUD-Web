import { useNavigate, useParams } from "react-router-dom";

import { EditCustomerPresentation } from "../presentation/Edit";

import {
  IIndividualCustomerGeneral,
  ICorporateCustomerGeneral,
} from "../domain/Customer/models";
import { CustomerServiceSkeleton } from "../domain/Customer/services/implementations/CustomerServiceSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface IEditPageProps {
  customerService: CustomerServiceSkeleton;
}

export const EditCustomerPage = ({ customerService }: IEditPageProps) => {
  const navigate = useNavigate();

  async function onEditIndividualCustomer(
    customerId: number,
    values: IIndividualCustomerGeneral
  ) {
    try {
      await customerService.updateIndividualCustomer(customerId, values);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function onEditCorporateCustomer(
    customerId: number,
    values: ICorporateCustomerGeneral
  ) {
    try {
      await customerService.updateCorporateCustomer(customerId, values);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <EditCustomerPresentation
      customerService={customerService}
      onEditIndividualCustomer={onEditIndividualCustomer}
      onEditCorporateCustomer={onEditCorporateCustomer}
    />
  );
};
