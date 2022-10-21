import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      toast.error(
        "Não foi possível recuperar os dados dos clientes. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setIsLoadingFetchingCustomers(false);
    }
  }

  async function handleDeleteCustomer(customerId: number) {
    try {
      await customerService.deleteCustomer(customerId);
      await onReadAllCustomers();
      toast.success("Cliente apagado com sucesso!", {
        position: "top-right",
        progress: undefined,
        theme: "light",
      });
    } catch {
      toast.error(
        "Não foi possível apagar o cliente. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    }
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
