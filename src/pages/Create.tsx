import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CreateCustomerPresentation } from "../presentation/Create";

import {
  IIndividualCustomerGeneral,
  ICorporateCustomerGeneral,
} from "../domain/Customer/models";
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
      toast.success("Cliente criado com sucesso!", {
        position: "top-right",
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error(
        "Não foi possível criar o cliente. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  async function onCreateCorporateCustomer(values: ICorporateCustomerGeneral) {
    try {
      await customerService.createCorporateCustomer({
        type: "PJ",
        ...values,
      });
      navigate("/");
      toast.success("Cliente criado com sucesso!", {
        position: "top-right",
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error(
        "Não foi possível criar o cliente. Tente novamente mais tarde!",
        {
          position: "top-right",
          progress: undefined,
          theme: "light",
        }
      );
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
