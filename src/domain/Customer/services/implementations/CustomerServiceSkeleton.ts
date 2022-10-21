import {
  ICorporateCustomerGeneral,
  IIndividualCustomerGeneral,
} from "../../models";

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
  readUniqueCustomer: (
    customerId: number
  ) => Promise<IIndividualCustomerGeneral | ICorporateCustomerGeneral>;

  updateIndividualCustomer: (
    customerId: number,
    itemsIndividualCustomer: IIndividualCustomerGeneral
  ) => Promise<void>;
  updateCorporateCustomer: (
    customerId: number,
    itemsCorporateCustomer: ICorporateCustomerGeneral
  ) => Promise<void>;

  deleteCustomer: (idCustomer: number) => Promise<void>;
}
