import { useEffect, useState } from "react";

import { HomePresentation } from "../presentation/Home";

import { CustomerServiceSkeleton } from "../domain/Customer/services/implementations/CustomerServiceSkeleton";
import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../domain/Customer/models";

interface IHomePageProps {
  customerService: CustomerServiceSkeleton;
}

export const HomePage = ({ customerService: services }: IHomePageProps) => {
  const [customerService] = useState<CustomerServiceSkeleton>(services);

  const [allCustomers, setAllCustomers] = useState<
    (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[]
  >([]);
  const [isLoadingFetchingCustomers, setIsLoadingFetchingCustomers] =
    useState<boolean>(true);

  async function onReadAllCustomers() {
    try {
      setIsLoadingFetchingCustomers(true);
      const customers = await customerService.readAllCustomers();
      setAllCustomers(customers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingFetchingCustomers(false);
    }
  }

  async function handleDeleteCustomer(customerId: number) {
    await customerService.deleteCustomer(customerId);
    await onReadAllCustomers();
  }

  useEffect(() => {
    onReadAllCustomers();
  }, []);

  return (
    <HomePresentation
      allCustomers={allCustomers}
      isLoadingFetchingCustomers={isLoadingFetchingCustomers}
      handleDeleteCustomer={handleDeleteCustomer}
    />
  );
};
