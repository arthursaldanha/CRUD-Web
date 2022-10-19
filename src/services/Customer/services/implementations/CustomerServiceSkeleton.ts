import { ICorporateCustomerGeneral, IIndividualCustomerGeneral } from "../../models";

export interface CustomerServiceSkeleton {
  createIndividualCustomer: (
    createIndividual: IIndividualCustomerGeneral
  ) => Promise<void>;
  createCorporateCustomer: (
    createCorporate: ICorporateCustomerGeneral
  ) => Promise<void>;

  readAllCustomers: () => Promise<
    (IIndividualCustomerGeneral & ICorporateCustomerGeneral)[]
  >;
  readUniqueCustomers: (idCustomer: number) => Promise<
    IIndividualCustomerGeneral | ICorporateCustomerGeneral
  >;

  deleteCustomer: (idCustomer: number) => Promise<void>;
}
