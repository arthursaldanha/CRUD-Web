import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { EditCustomerPresentation } from "../presentation/Edit";

import { CustomerServiceSkeleton } from "../domain/Customer/services/implementations/CustomerServiceSkeleton";
import {
  IIndividualCustomerGeneral,
  ICorporateCustomerGeneral,
} from "../domain/Customer/models";

interface IEditPageProps {
  customerService: CustomerServiceSkeleton;
}

export const EditCustomerPage = ({ customerService }: IEditPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [customerToEdit, setCustomerToEdit] = useState<
    IIndividualCustomerGeneral | ICorporateCustomerGeneral
  >();
  const [isLoadingCustomerToEdit, setIsLoadingCustomerToEdit] =
    useState<boolean>(true);

  async function onReadUniqueCustomer(customerId: number) {
    try {
      setIsLoadingCustomerToEdit(true);
      const customers = await customerService.readUniqueCustomer(customerId);
      setCustomerToEdit(customers);
    } catch (error) {
      toast.error(
        "Houve algum erro ao tentar carregar os dados do cliente. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setIsLoadingCustomerToEdit(false);
    }
  }

  async function onEditIndividualCustomer(
    customerId: number,
    values: IIndividualCustomerGeneral
  ) {
    try {
      await customerService.updateIndividualCustomer(customerId, values);
      navigate("/");
      toast.success("Cliente editado com sucesso!", {
        position: "top-right",
        progress: undefined,
        theme: "light",
      });
    } catch {
      toast.error(
        "Houve algum erro ao tentar editar. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  async function onEditCorporateCustomer(
    customerId: number,
    values: ICorporateCustomerGeneral
  ) {
    try {
      await customerService.updateCorporateCustomer(customerId, values);
      navigate("/");
      toast.success("Cliente editado com sucesso!", {
        position: "top-right",
        progress: undefined,
        theme: "light",
      });
    } catch {
      toast.error(
        "Houve algum erro ao tentar editar. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  useEffect(() => {
    onReadUniqueCustomer(Number(id));
  }, []);

  return (
    <EditCustomerPresentation
      customerToEdit={customerToEdit}
      isLoadingCustomerToEdit={isLoadingCustomerToEdit}
      onEditIndividualCustomer={onEditIndividualCustomer}
      onEditCorporateCustomer={onEditCorporateCustomer}
    />
  );
};
